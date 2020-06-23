<template>
  <q-page class="flex flex-center ">

    <div class="row flex-center" style="width: 100%">
      <q-spinner-dots
        size="xl"
        color="secondary"
        style="margin: auto auto "
      />
    </div>
<!--    <img alt="Snack Box" width="128px" style="margin-top: -470px" src="statics/logo.png">-->
  </q-page>
</template>

<script>

  import axios from 'axios'

  const Qs = require('qs');
  export default {
    name: 'PageName',
    data() {
      return {
        log: '',
        device_info: {
          device_id: null,
          device_name : null,
        }
      }
    },
    created() {
      let that = this;
      // 检测会员有没有登录
      if (!this.$store.state.user_info.access_token) {
        let ua = window.navigator.userAgent.toLowerCase();
        console.log(ua);
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
          // 跳转到微信授权页面
          that.login()
        }
      } else {
        that.$q.notify( '请使用微信登录')
      }
    }, methods: {
      login() {
        let that = this;
        // 通过cookie中保存的token 获取用户信息
        axios.post(this.$store.state.url_paths.getCode, Qs.stringify({
          code: that.$store.state.code,
          device_id: that.$store.state.device_info.device_id,
        }))
          .then(function (response) {
            if (response.data.code === 200) {
              that.$store.commit('getUserInfo', response.data.data.userInfo);
              that.$store.commit('getDormInfo', response.data.data.dorm);
              that.$router.push('/');
            }
          })
      },
    }
  }
</script>
