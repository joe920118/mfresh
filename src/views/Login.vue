<template>
  <div>
    <!-- login.html -->
    <!--页面主体-->
    <div class="login_box">
      <div class="container">
        <div class="login">
          <h2>用户登录</h2>
          <dl class="clearfloat">
            <dt>
              <span
                class="tips"
                id="uname_prompt_text"
                style="display: block"
                v-show="status_login == 1"
                >用户名或密码不正确</span
              >
              <span
                class="tips"
                id="uname_prompt_text"
                style="display: block"
                v-show="status_uname == 1"
                >请输入用户名</span
              >
              用户名：
            </dt>
            <dd>
              <input
                type="text"
                id="uname"
                placeholder="邮箱/手机号"
                v-model="uname"
                @blur="checkUname"
              />
              <em class="icon_user"></em>
              <i
                class="icon_error"
                id="uname_prompt_icon"
                style="display: block"
                v-show="status_uname == 1"
              ></i>
            </dd>
          </dl>
          <dl>
            <dt>
              <span
                class="tips"
                id="pwd_prompt_text"
                style="display: block"
                v-show="status_upwd == 1"
                >请输入密码</span
              >密码：
            </dt>
            <dd>
              <input
                type="password"
                id="pwd"
                placeholder="密码"
                v-model="upwd"
                @blur="checkUpwd"
              />
              <em class="icon_pwd"></em>
              <i
                class="icon_error"
                id="pwd_prompt_icon"
                style="display: block"
                v-show="status_upwd == 1"
              ></i>
            </dd>
          </dl>
          <p>
            <label>
              <input type="checkbox" />
              <span>自动登录</span>
            </label>
          </p>
          <button type="button" id="login" @click="doLogin">立 即 登 录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      status_uname: 0, // 错误1
      status_upwd: 0, // 错误1
      status_login: 0, // 错误1
    };
  },
  methods: {
    // 用户名
    checkUname() {
      this.status_uname = 0;
      this.status_login = 0;
      if (this.uname.length == 0) this.status_uname = 1;
    },

    // 密码
    checkUpwd() {
      this.status_upwd = 0;
      this.status_login = 0;

      if (this.upwd.length == 0) this.status_upwd = 1;
    },

    // 立即登录
    doLogin() {
      console.log(this.uname, this.upwd);

      // POST请求: 路径 和 参数分开
      const url = "user_login.php";
      const body = `unameOrPhone=${this.uname}&upwd=${this.upwd}`;

      // 测试账号+密码: doudou 123456
      this.axios.post(url, body).then((res) => {
        console.log(res);
        if (res.data.code == 400) {
          alert("登录失败!");
          this.status_login = 1;
        } else {
          // 登录的用户信息存储到 Vuex
          this.$store.commit("updateUser", res.data);

          // 登录成功后, 跳转到首页
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style>
</style>