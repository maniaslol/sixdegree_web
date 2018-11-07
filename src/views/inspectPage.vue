<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <!-- 網頁板herder----------------------------------------------------- -->

        <nav class="container-fluid d-none d-lg-flex">
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-lg-1">
                        <router-link to='/' class="logo">
                            <img src="../assets/Images/6degreesWeb/navBar/logo-light-blue.svg" alt="icon">
                        </router-link>
                    </div>

                    <ul class="nav-list d-sm-block col-lg-5 col-md-8">
                        <li class="home">
                            <router-link to='/recommend'>首頁推薦</router-link>
                        </li>
                        <li v-for="(item, index) in navbarData " :key="index" v-if="index>0 & index < 7">
                            <router-link :to='"/tagPage/"+item.id' class="nav-item">{{item.name}}</router-link>
                        </li>
                        <!-- <li class="dropdown show">
                            <a class="dropdown-toggle nav-item" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown">
                                更多 <i class="fas fa-sort-down"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <router-link class="dropdown-item" :to='"/tagPage/"+item.id' v-for="(item, index) in navbarData"
                                    :key="index" v-if="index>6">{{item.name}}</router-link>
                            </div>
                        </li> -->
                    </ul>
                    <div class="user-bar col-lg-6 col-md-6 d-flex">
                        <div class="search-input">
                            <router-link :to="'/search/'+searchWorld">
                                <img src="../assets/Images/6degreesWeb/navBar/search.svg" alt="">
                            </router-link>
                            <!-- <vue-bootstrap-typeahead v-model="query" :data="['Canada', 'USA', 'Mexico']" class="new-input" /> -->
                            <input name="" id="tags" class="" type="input" value="" placeholder="請輸入關鍵字" v-model="searchWorld"
                                @keyup.enter="searchSubmit">
                        </div>

                        <div class="user-donate"><a href="#">點數 <img src="../assets/Images/6degreesWeb/icon/grayMoney.svg"
                                    alt="">
                            </a></div>
                        <!-- <div class="dropdown show">
                            <a class="dropdown-toggle user-language" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown">
                                繁體中文<i class="fas fa-sort-down"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">繁體中文</a>
                                <a class="dropdown-item" href="#">簡體中文</a>
                            </div>
                        </div> -->
                        <router-link class="user-photo" to="/profile">
                            <div class="user-img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg"
                                    alt="">
                            </div>
                            <i class="fas fa-angle-down"></i>
                        </router-link>
                    </div>
                </div>
            </div>

        </nav>


        <!-- 平板header------------------------------------------------------------------ -->

        <nav class="container-fluid pad-header d-lg-none d-sm-block d-none">
            <div class="row">
                <div class="col-1">
                    <router-link to='/' class="logo">
                        <img src="../assets/Images/6degreesWeb/navBar/logo-light-blue.svg" alt="icon">
                    </router-link>
                </div>
                <div class="col-11 d-flex">
                    <div class="pad-search-input">
                        <input name="" id="" class="" type="input" value="" placeholder="請輸入關鍵字" v-model="searchWorld"
                            @keyup.enter="searchSubmit">
                        <router-link :to="'/search/'+searchWorld">
                            <img src="../assets/Images/6degreesWeb/navBar/search.svg" alt="">
                        </router-link>
                    </div>
                    <div class="user-donate"><a href="#">點數
                            <img src="../assets/Images/6degreesWeb/icon/grayMoney.svg" alt=""> </a>
                    </div>
                    <!-- <div class="dropdown show">
                        <a class="dropdown-toggle user-language" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown">
                            繁體中文<i class="fas fa-sort-down"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">繁體中文</a>
                            <a class="dropdown-item" href="#">簡體中文</a>
                        </div>
                    </div> -->
                    <router-link class="user-photo" to="/profile">
                        <div class="user-img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg"
                                alt="">
                        </div>
                        <i class="fas fa-angle-down"></i>
                    </router-link>
                </div>
            </div>
            <div class="row" style="margin-top:-26px;">
                <ul class="nav-list d-sm-block col-11 col-md-8">
                    <li class="home active">
                        <router-link to='/recommend'>首頁推薦</router-link>
                    </li>
                    <li v-for="(item, index) in navbarData " :key="index" v-if="index>0 & index < 7">
                        <router-link :to='"/tagPage/"+item.id' class="nav-item">{{item.name}}</router-link>
                    </li>
                    <!-- <li class="dropdown show">
                        <a class="dropdown-toggle nav-item" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown">
                            更多 <i class="fas fa-sort-down"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <router-link class="dropdown-item" :to='"/tagPage/"+item.id' v-for="(item, index) in navbarData"
                                :key="index" v-if="index>6">{{item.name}}</router-link>
                        </div>
                    </li> -->
                </ul>
            </div>
        </nav>

        <!-- 手機板header------------------------------------------------------------------ -->

        <nav class="container-fluid pad-header d-block d-sm-none">
            <div class="row">
                <div class="col-1">
                    <router-link to='/' class="logo">
                        <img src="../assets/Images/6degreesWeb/navBar/logo-light-blue.svg" alt="icon">
                    </router-link>
                </div>
                <div class="col-11 d-flex">
                    <div class="pad-search-input">
                        <input name="" id="" class="" type="input" value="" placeholder="請輸入關鍵字">
                        <a href="#">
                            <img src="../assets/Images/6degreesWeb/navBar/search.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top:-16px;">
                <div class="col-3">
                    <div class="user-donate"><a href="#">點數
                            <img src="../assets/Images/6degreesWeb/icon/grayMoney.svg" alt=""> </a>
                    </div>
                </div>
                <div class="col-6">
                    <!-- <div class="dropdown show">
                        <a class="dropdown-toggle user-language" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown">
                            繁體中文<i class="fas fa-sort-down"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">繁體中文</a>
                            <a class="dropdown-item" href="#">簡體中文</a>
                        </div>
                    </div> -->
                </div>
                <div class="col-3 ml-auto">
                    <router-link class="user-photo" to="/profile">
                        <div class="user-img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg"
                                alt="">
                        </div>
                        <i class="fas fa-angle-down"></i>
                    </router-link>
                </div>
            </div>
            <div class="row" style="border-bottom:3px solid #4A90E2">
                <div class="col-3">
                    <div class="dropdown show burger-bottom">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown">
                            <i class="fas fa-bars"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <router-link :to='"/tagPage/"+item.id' class="nav-item dropdown-item" v-for="(item, index) in navbarData"
                                :key="index" v-if="index>0">{{item.name}}</router-link>
                        </div>
                    </div>

                </div>
                <div class="col-6">
                    <h2>
                        <router-link to='/recommend'>首頁推薦</router-link>
                    </h2>
                </div>
            </div>
        </nav>

        <!-- hotgat---------------------------------------------------------------------------- -->

        <div class="hottag container-fluid d-flex">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <a href="#" v-for='(item,key) in filterPopularData' :key="key" v-if="key<8">{{item}}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="z-index:10;">
            <div class="row">
                <div class="col-lg-8">
                    <div class="inspect">
                        <h1>{{filterData.title}}</h1>
                        <div class="news-source">
                            <span>{{filterData.datasource_name}}</span>
                            <span><img src="../assets/Images/6degreesWeb/news/time.svg" alt="">08:12</span>
                            <span><img src="../assets/Images/6degreesWeb/news/views.svg" alt="">586</span>
                        </div>
                        <div class="news-tag">
                            <span><a href="#" v-for='(item,key) in filterData.tag' :key='key'>{{item.name}}</a></span>
                        </div>
                        <div class="inspect-img">
                            <div class="img" :style="{ backgroundImage: 'url(' + filterData.media[0].large + ')' }">
                            </div>
                        </div>
                        <p class="inspect-img-source">{{filterData.datasource_name}} <span></span></p>
                        <p>{{filterData.content}}</p>
                    </div>
                    <div class="inspect-user-message">
                        <h2>留言<i class="far fa-comment"></i><span>20</span> </h2>
                        <div class="inspect-message-card d-flex mt-5">
                            <div class="inspect-messager-photo" style="background-image:url('https://gen.caca01.com/img/us_visa.jpg') "></div>
                            <textarea name="" id="" cols="30" rows="10" placeholder="說說你的想法"></textarea>
                        </div>
                    </div>
                    <div class="inspect-comment-message">
                        <div class="inspect-message-card d-flex mt-5">
                            <div class="inspect-messager-photo" style="background-image:url('https://gen.caca01.com/img/us_visa.jpg') "></div>
                            <div class="inspect-comment-message-name">
                                <h3>用戶姓名</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus aliquam
                                    perspiciatis itaque numquam quae vitae tenetur animi cumque ad aperiam, ipsum
                                    inventore eaque labore alias reprehenderit quaerat, perferendis ipsa illo, veniam
                                    eveniet a neque! Perferendis placeat vero illum. Qui eaque ea nihil sed placeat.
                                    Aperiam, incidunt? Sequi, consequatur quae.</p>
                                <div class="inspect-comment-message-button">
                                    <a href="#"><i class="fas fa-reply"></i>reply</a>
                                    <a href="#">Repliec(513)</a>
                                    <a href="#"><i class="far fa-thumbs-up">1312</i></a>
                                    <a href="#"><i class="far fa-thumbs-down">199</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='loadingBar' class="refresh-bar">
                        <a href="#">
                            <img class="d-none d-md-block" src="../assets/Images/6degreesWeb/other/loading-md.svg" alt=""
                                style="width:100%;height: 48px;">
                            <img class="d-block d-md-none" src="../assets/Images/6degreesWeb/other/loading-sm.svg" alt=""
                                style="width:100%;height: 48px;">
                            <span>加載更多</span>
                        </a>
                    </div>

                    <div class="recommendNews">
                        <h2>相關新聞推薦</h2>
                        <div class="news container" v-for="item in filterRecommendData" :key="item.id">
                            <div class="row">
                                <div class="col-4">
                                    <router-link :to="'/inspect/'+item.id" class="news-img" :style="{ backgroundImage: 'url(' + item.media.small + ')' }"></router-link>
                                    <!-- <a :href="item.news_url" class="news-img" :style="{ backgroundImage: 'url(' + item.media.small + ')' }">
                                    </a> -->
                                </div>
                                <div class="col-8">
                                    <h3>{{item.title}}</h3>
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
                <sidebar></sidebar>
            </div>
        </div>
    </div>
</template>

<script>
    import navbar from "../components/navbar.vue";
    import sidebar from "../components/sidebar.vue";
    import $ from "jquery";
    export default {
        components: {
            navbar,
            sidebar
        },
        name: "inspectPage",
        props: {
            msg: String
        },
        data() {
            return {
                domain: "http://api.dev.sixdegreeworld.com",
                Token: "",
                Token_type: "",
                data: [
                    {
                        media: []
                    }
                ],
                recommendData: [
                    {
                        media: []
                    }
                ],
                searchWorld: "",
                navbarData: [],
                popularData: [],
                isLoading: false
            };
        },
        computed: {
            filterData: function () {
                if (this.data.media == null || this.data.media == []) {
                    this.data.media = [
                        {
                            large: "https://newweb.dev.sixdegreeworld.com/sixdegree.svg"
                        }
                    ];
                } else {
                    return this.data;
                }
                return this.data;
            },
            filterRecommendData: function () {
                let nowData = this.recommendData.map(function (el) {
                    if (el.media == [] || el.media == null) {
                        el.media = {
                            small: "https://newweb.dev.sixdegreeworld.com/sixdegree.svg"
                        };
                        return el;
                    } else {
                        return el;
                    }
                });
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
                    url: this.domain + "/oauth/token/",
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
                            vm.getOneNews();
                            vm.getNavbar();
                            vm.getPopular();
                            //取得文章資料
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                });
            },
            getOneNews() {
                const id = this.$route.params.id;
                console.log(id);
                const api = this.domain + `/article/${id}`;
                const vm = this;
                vm.isLoading = true;
                $.ajax({
                    type: "Get",
                    url: vm.domain + `/article/${id}`,
                    headers: {
                        Authorization: vm.Token_type + " " + vm.Token,
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
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
                });
            },
            getRecommend() {
                const vm = this;
                $.ajax({
                    type: "Get",
                    url: vm.domain + `/article/recommend?page=1&limit=10`,
                    headers: {
                        Authorization: vm.Token_type + " " + vm.Token,
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    success: function (data) {
                        vm.isLoading = false;
                        if (data == "") {
                            //沒資料的動作
                        } else {
                            //有資料的動作
                            vm.recommendData = data.data;
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                });
            },
            getNavbar() {
                const vm = this;
                vm.isLoading = true;
                $.ajax({
                    type: "Get",
                    url: this.domain + `/navbar/`,
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
                            vm.navbarData = data.data;
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
            toTop() {
                $("html, body").animate(
                    {
                        scrollTop: 0
                    },
                    800
                );
            }
        },
        mounted() {
            this.toTop();
            this.init();
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style leng="scss">
</style>