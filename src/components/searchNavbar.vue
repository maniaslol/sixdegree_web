<template>
    <div>
        <nav class="container searchNavbar">
            <div class="row">
                <div class="col-2 col-lg-1">
                    <router-link to='/' class="logo">
                        <img src="../assets/Images/6degreesWeb/navBar/logo-light-blue.svg" alt="icon">
                    </router-link>
                </div>
                <div class="col-10 col-lg-6">
                    <vue-bootstrap-typeahead v-model="query" :data="['Canada', 'USA', 'Mexico']" class="searchpage-input" />
                    <a class="search-bottom" href="#">
                        <img src="../assets/Images/6degreesWeb/navBar/search.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 searchNavbar-bottom">
                    <ul class="d-flex">
                        <li><a href="#" class="active">全部</a> </li>
                        <li><a href="#">文章</a> </li>
                        <li><a href="#">影片</a> </li>
                        <li><a href="#">圖片</a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'searchNavbar',
        props: {
            msg: String
        },
        data() {
            return {
                data: [],
                query: ''
            }
        }
    }
</script>

<style lang="scss">

</style>