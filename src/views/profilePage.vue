<template>
  <div>
    <profile></profile>
  </div>
</template>

<script>
  import profile from "../components/profile.vue";
  import $ from "jquery";

  export default {
    components: {
      profile
    },
    name: "index",
    props: {
      msg: String
    },
    data() {
      return {

      };
    },
    methods: {
      
    },
    created() {
    },
    mounted() {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>