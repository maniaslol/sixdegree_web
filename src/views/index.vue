<template>
  <div>
    <newsList></newsList>
  </div>
</template>

<script>
  import navbar from "../components/navbar.vue";
  import newsList from "../components/newsList.vue";
  import $ from "jquery";

  export default {
    components: {
      navbar,
      newsList
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
    mounted() {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>