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

  export default {
    name: 'Author',
    data() {
      return {
        log: '',
        device_info: {
          device_id: null,
          device_name: null,
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
        that.$q.notify('请使用微信登录')
      }
    },
    methods: {
      login: function () {
        this.$api.user.getCode(this.$store.state.code, this.$store.state.device_info.device_id)
          .then(res => {
            this.$store.commit('getUserInfo', res.data.data.userInfo);
            this.$store.commit('getDormInfo', res.data.data.dorm);
            this.$router.push('/');
          })
          .catch(error => {
            console.log(error)
          });
      },
    }
  }
</script>
