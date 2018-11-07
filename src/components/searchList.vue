<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <nav class="container searchNavbar">
            <div class="row">
                <div class="col-2 col-lg-1">
                    <router-link to='/' class="logo">
                        <img src="../assets/Images/6degreesWeb/navBar/logo-light-blue.svg" alt="icon">
                    </router-link>
                </div>
                <div class="col-10 col-lg-6">
                    <vue-bootstrap-typeahead :placeholder="searchWorld" v-model="searchWorld" :data="filterPopularData"
                        class="searchpage-input" @keyup.enter.native="searchSubmit" />
                    <a :href="'/#/search/'+ searchWorld" class='search-bottom' @click='init'>
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

        <div class="container searchList">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>熱門搜尋</h2>
                            <div class="searchList-bottom d-flex">
                                <a :href="'/#/search/'+ item.name" v-for="(item,key) in popularData" v-if="key<6"
                                    @click='init'>{{item.name}}</a>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-12">
                            <div class="news container" v-for="item in filterData" :key="item.id">
                                <div class="row">
                                    <div class="col-md-4 ">
                                        <router-link :to="'/inspect/'+item.id" class="news-img" :style="{ backgroundImage: 'url(' + item.media.small + ')' }"></router-link>
                                        <!-- <a :href="item.news_url" class="news-img" :style="{ backgroundImage: 'url(' + item.media.small + ')' }">
                                                    </a> -->
                                    </div>
                                    <div class="col-md-8">
                                        <h3>{{item.title}}</h3>
                                        <p class="d-block d-sm-none">{{item.description}}</p>
                                        <div class="news-tag">
                                            <span>{{item.datasource_name}}</span>
                                            <span><img src="../assets/Images/6degreesWeb/news/time.svg" alt="">{{
                                                item.report_time | moment("h:mm") }}
                                            </span>
                                            <span><img src="../assets/Images/6degreesWeb/news/views.svg" alt="">1125</span>
                                        </div>
                                        <div class="news-tag_gray" v-if='item.tag'>
                                            <span>
                                                <img src="../assets/Images/6degreesWeb/news/tag-icon.svg" alt="">
                                                <span v-for="tag in item.tag" :key="tag.id">
                                                    {{ tag.name }}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 測欄---------------------------------------------------- -->

                <div class="col-lg-4">
                    <div class="container">

                        <footer class="row footer mt-3">
                            <h3 class="col-12">更多關於六度</h3>
                            <div class="col-6 mt-3"><a href="#"><img src="../assets/Images/6degreesWeb/phone/andro.svg"
                                        alt=""></a></div>
                            <div class="col-6 mt-3"><a href="#"><img src="../assets/Images/6degreesWeb/phone/ios.svg"
                                        alt=""></a></div>
                            <div class="col-4 mt-4"><a href="#">關於我們</a> </div>
                            <div class="col-4 mt-4"><a href="#">連繫我們</a></div>
                            <div class="col-4 mt-4"><a href="#">加入我們</a></div>
                            <div class="col-4 mt-4"><a href="#">服務條款</a></div>
                            <div class="col-4 mt-4"><a href="#">版權聲明</a></div>
                            <div class="col-4 mt-4"><a href="#">友情連結</a></div>
                            <div class="col-4 mt-4"><a href="#">RSS訂閱</a></div>
                            <div class="col-4 mt-4"><a href="#">隱私策略</a></div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import $ from 'jquery';
    import sidebar from "./sidebar.vue"
    export default {
        name: 'searchList',
        components: {
            sidebar
        },
        props: {
            msg: String
        },
        data() {
            return {
                domain: 'http://api.dev.sixdegreeworld.com',
                Token: '',
                Token_type: '',
                data: [{
                    media: []
                }],
                popularData: [],
                searchWorld: "",
                isLoading: false,
            }
        },
        computed: {
            filterData: function () {
                let nowData = this.data.map(function (el) {
                    if (el.media == [] || el.media == null) {
                        el.media = {
                            small: "https://newweb.dev.sixdegreeworld.com/sixdegree.svg"
                        }
                        return el;
                    } else {
                        return el;
                    }
                })
                return nowData;
            },
            filterPopularData: function () {
                let nowData = this.popularData.map(function (el) {
                    return el.name
                })
                return nowData;
            }
        },
        methods: {
            init() {
                const vm = this;
                vm.isLoading = true;
                $.ajax({

                    //get token

                    type: "Post",
                    url: this.domain + '/oauth/token/',
                    data: {
                        grant_type: "client_credentials",
                        client_id: "1",
                        client_secret: "zSVE2Bd64icnRyo7VSo997rriPLDPMbY9LmmIurv"
                    },
                    success: function (data) {
                        vm.isLoading = false;
                        if (data == "") {
                            //沒資料的動作
                        } else {
                            vm.Token = data.data.access_token;
                            vm.Token_type = data.data.token_type;
                            //有資料的動作
                            vm.getSearchData();
                            vm.getPopular();
                            //取得文章資料
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                })
            },
            getSearchData() {
                const id = this.$route.params.id
                console.log(id);
                this.searchWorld = id;
                const vm = this;
                vm.isLoading = true;
                $.ajax({
                    type: "Get",
                    url: vm.domain + `/search/?name=${this.searchWorld}`,
                    headers: {
                        "Authorization": vm.Token_type + " " + vm.Token,
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    success: function (data) {
                        vm.isLoading = false;
                        if (data == "") {
                            //沒資料的動作
                        } else {
                            //有資料的動作
                            vm.data = data.data;
                            vm.isLoading = false;
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                })
            },
            getPopular() {
                const vm = this;
                vm.isLoading = true;
                $.ajax({
                    type: "Get",
                    url: vm.domain + `/search/popular`,
                    headers: {
                        "Authorization": vm.Token_type + " " + vm.Token,
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    success: function (data) {
                        vm.isLoading = false;
                        if (data == "") {
                            //沒資料的動作
                        } else {
                            //有資料的動作
                            vm.popularData = data.data;
                            vm.isLoading = false;
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                })
            },
            searchSubmit() {
                this.$router.push(`/search/${this.searchWorld}`)
                this.init();
            }
        },
        created() {
            this.init();
            this.searchWorld = this.$route.params.id;
        },
        mounted() {

        },
    }
</script>

<style lang="scss">

</style>