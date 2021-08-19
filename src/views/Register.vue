<template>
  <div id="register">
    <!--页面主体-->
    <div class="register">
      <h2>新用户注册</h2>
      <ul>
        <li>
          <span>邮箱：</span>
          <input
            type="text"
            id="uname"
            placeholder="请输入邮箱名"
            v-model="uname"
            @blur="checkUname"
          />
          <em
            class="icon_error"
            style="display: inline"
            v-show="status_uname == 1 || status_uname == 2 || status_uname == 3"
          ></em>
          <em
            class="icon_ok"
            style="display: inline"
            v-show="status_uname == 4"
          ></em>
          <i style="display: block" v-show="status_uname == 1">
            请输入您的注册邮箱
          </i>
          <i style="display: block" v-show="status_uname == 2">
            请输入正确的邮箱格式
          </i>
          <i style="display: block" v-show="status_uname == 3">
            此邮箱已被其他用户注册
          </i>
        </li>
        <li>
          <span>密码：</span>
          <input
            type="password"
            id="upwd"
            placeholder="请输入密码"
            v-model="upwd1"
            @blur="checkPwd1"
          />
          <em
            class="icon_error"
            style="display: inline"
            v-show="status_pwd1 == 1 || status_pwd1 == 2"
          ></em>
          <em
            class="icon_ok"
            style="display: inline"
            v-show="status_pwd1 == 3"
          ></em>
          <i style="display: block" v-show="status_pwd1 == 1">请输入您的密码</i>
          <i style="display: block" v-show="status_pwd1 == 2"
            >密码长度应为6~12个字符之间</i
          >
        </li>
        <li>
          <span>重复密码：</span>
          <input
            type="password"
            id="upwd2"
            placeholder="请重复输入密码"
            v-model="upwd2"
            @blur="checkPwd2"
          />
          <em
            class="icon_error"
            style="display: inline"
            v-show="status_pwd2 == 1"
          ></em>
          <em
            class="icon_ok"
            style="display: inline"
            v-show="status_pwd2 == 2"
          ></em>
          <i></i>
        </li>
        <li>
          <span>手机号：</span>
          <input
            type="text"
            id="phone"
            placeholder="请输入手机号"
            v-model="phone"
            @blur="checkPhone"
          />
          <em
            class="icon_error"
            style="display: inline"
            v-show="status_phone == 1 || status_phone == 2 || status_phone == 3"
          ></em>
          <em
            class="icon_ok"
            style="display: inline"
            v-show="status_phone == 4"
          ></em>
          <i style="display: block" v-show="status_phone == 1">
            请输入您的手机号
          </i>
          <i style="display: block" v-show="status_phone == 2">
            请输入正确的手机号
          </i>
          <i style="display: block" v-show="status_phone == 3">
            此手机号已被其他用户注册
          </i>
        </li>
        <li>
          <span>验证码：</span>
          <input
            type="text"
            class="inp_yzm"
            placeholder="请输入验证码"
            v-model="code"
          />
          <img src="../assets/images/yzm.png" alt="" />
          <strong class="icon_refresh"></strong>
        </li>
        <li class="li_checkbox">
          <label>
            <input type="checkbox" v-model="agree" />
            <span>我已阅读并同意用户注册协议</span>
          </label>
        </li>
        <li class="li_btn">
          <button type="button" @click="doReg" v-show="agree">提交注册</button>
          <button type="button" class="disabled" disabled="" v-show="!agree">
            提交注册
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      uname: "",
      phone: "",
      upwd1: "",
      upwd2: "",
      code: "",
      agree: true,
      // 用户名的状态
      status_uname: 0, //初始0 空1 格式错误2 已注册3 正确4
      // 手机号的状态
      status_phone: 0, //初始0 空1 格式错误2 已注册3 正确4
      // 密码
      status_pwd1: 0, //初始0 空1 格式错误2 正确3
      // 重复密码
      status_pwd2: 0, //相同2 不同1
    };
  },
  methods: {
    // 检测用户名
    checkUname() {
      const uname = this.uname;
      // 初始0 空1 格式错误2 已注册3 正确4
      // return: 让代码中止执行, 只要检测到一种状态即可
      if (uname.length == 0) return (this.status_uname = 1);

      // 邮箱格式: 正则
      const email_reg = /^\w{2,}@(\w+\.)+\w{2,6}$/;
      if (!email_reg.test(uname)) return (this.status_uname = 2);

      const url = "user_check_uname.php?uname=" + uname;
      this.axios.get(url).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.status_uname = 3; //已存在
        } else {
          this.status_uname = 4; //正确
        }
      });
    },

    // 密码
    checkPwd1() {
      const pwd1 = this.upwd1;
      if (pwd1.length == 0) return (this.status_pwd1 = 1);

      // 密码长度应为6~12个字符之间
      if (pwd1.length < 6 || pwd1.length > 12) return (this.status_pwd1 = 2);

      this.status_pwd1 = 3;
    },

    //重复密码
    checkPwd2() {
      const pwd2 = this.upwd2;
      const pwd1 = this.upwd1;

      // 如果 pwd1 是错误状态, 则pwd2不显示
      if (this.status_pwd1 == 1 || this.status_pwd1 == 2)
        return (this.status_pwd2 = 0);

      this.status_pwd2 = pwd1 == pwd2 ? 2 : 1;
    },

    // 检测手机号
    checkPhone() {
      const phone = this.phone;
      if (phone.length == 0) return (this.status_phone = 1);

      // 正则验证手机号
      const phone_reg = /^1[3-9]\d{9}$/;
      if (!phone_reg.test(phone)) return (this.status_phone = 2);

      const url = "user_check_phone.php?phone=" + phone;
      this.axios.get(url).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.status_phone = 3;
        } else {
          this.status_phone = 4;
        }
      });
    },

    // 提交注册
    doReg() {
      if (
        this.status_uname != 4 ||
        this.status_phone != 4 ||
        this.status_pwd1 != 3 ||
        this.status_pwd2 != 2
      ) {
        alert("请确保输入框内容都正确, 才能注册!");
        return;
      }

      console.log(this.uname, this.upwd1, this.upwd2, this.phone, this.code);

      const url = "user_register.php";
      const body = `uname=${this.uname}&upwd=${this.upwd1}&phone=${this.phone}`;

      this.axios.post(url, body).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          alert("恭喜, 注册成功! 即将为您跳转到首页!");
          this.$store.commit("updateUser", res.data);
          this.$router.push("/");
        } else {
          alert("注册失败！");
        }
      });
    },
  },
};
</script>

<style>
</style>