<template>
    <div>
        <searchList></searchList>
    </div>
</template>

<script>
    import searchNavbar from "../components/searchNavbar.vue";
    import searchList from "../components/searchList.vue";
    import $ from "jquery";

    export default {
        components: {
            searchNavbar,
            searchList
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
        created() {},
        mounted() {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>