<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  // import newsList from './components/newsList.vue'
  // import inspectPage from './components/inspectPage.vue'
  // import navbar from './components/navbar.vue'


  export default {
    name: 'app',
    components: {
      // newsList,
      // inspectPage,
      // navbar
    },
    mounted() {

      // fb快速登入應用程式---------------------------------------

      window.fbAsyncInit = function () {
        FB.init({
          appId: '317699162346269',
          cookie: true,
          xfbml: true,
          version: 'v3.2'
        });
        FB.AppEvents.logPageView();
        FB.getLoginStatus(response => {
          console.log('res', response) // 這裡可以得到 fb 回傳的結果
        });

        FB.login(function (response) {
          console.log(response)
          // handle the response
          FB.api('/me', {
            fields: 'id,name,email'
          }, function (response) {
            console.log(response);
          });
        }, {
          scope: 'email,groups_access_member_info',
          return_scopes: true
        });
        // FB.api('/me', {
        //   fields: 'id,name,email'
        // }, function (response) {
        //   console.log(response);
        // });
      };


      //----------------------------------------------------------

    },
  }
</script>

<style lang="scss">
  @import './assets/scss/styles.scss';
</style>