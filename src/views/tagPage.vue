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
                        <li v-for="(item, index) in navbarData " :key="index" v-if="index>1 & index < 7">
                            <a :href='"/#/tagPage/"+item.id' class="nav-item" @click="reload">{{item.name}}</a>
                        </li>
                        <li class="dropdown show">
                            <a class="dropdown-toggle nav-item" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown">
                                更多 <i class="fas fa-sort-down"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" :href='"/#/tagPage/"+item.id' v-for="(item, index) in navbarData"
                                    :key="index" v-if="index>6" @click="reload">{{item.name}}</a>
                            </div>
                        </li>
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
                        <div class="dropdown show">
                            <a class="dropdown-toggle user-language" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown">
                                繁體中文
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">繁體中文</a>
                                <a class="dropdown-item" href="#">簡體中文</a>
                            </div>
                        </div>
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
                    <div class="dropdown show">
                        <a class="dropdown-toggle user-language" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown">
                            繁體中文
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">繁體中文</a>
                            <a class="dropdown-item" href="#">簡體中文</a>
                        </div>
                    </div>
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
                    <li v-for="(item, index) in navbarData " :key="index" v-if="index>1 & index < 7">
                        <a :href='"/#/tagPage/"+item.id' class="nav-item" @click="reload">{{item.name}}</a>
                    </li>
                    <li class="dropdown show">
                        <a class="dropdown-toggle nav-item" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown">
                            更多
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <router-link class="dropdown-item" :to='"/tagPage/"+item.id' v-for="(item, index) in navbarData"
                                :key="index" v-if="index>6">{{item.name}}</router-link>
                        </div>
                    </li>
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
                    <div class="dropdown show">
                        <a class="dropdown-toggle user-language" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown">
                            繁體中文
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">繁體中文</a>
                            <a class="dropdown-item" href="#">簡體中文</a>
                        </div>
                    </div>
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
            <div class="row">
                <div class="col-3">
                    <div class="dropdown show burger-bottom">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown">
                            <i class="fas fa-bars"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a :href='"/#/tagPage/"+item.id' class="nav-item dropdown-item" @click="reload" v-for="(item, index) in navbarData "
                                :key="index" v-if="index>0">{{item.name}}</a>
                        </div>
                    </div>
                    <!-- <a href="#">
                        <i class="fas fa-bars"></i>
                    </a> -->
                </div>
                <div class="col-6">
                    <h2><a href="#" @click.prevent='getRecommendData'>首頁推薦</a></h2>
                </div>
            </div>
        </nav>

        <!-- hotgat---------------------------------------------------------------------------- -->

        <div class="hottag container-fluid d-flex">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <a href="#" v-for='(item,key) in filterPopularData' v-if="key<8">{{item}}</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">

                    <!-- 桌機板main-news----------------------------------------------------------- -->

                    <div class="main-news d-none d-md-flex">
                        <div id="carouselExampleIndicators" class="carousel slide main-news-group" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" @click='mainNews=0'></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" @click='mainNews=1'></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2" @click='mainNews=2'></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3" @click='mainNews=3'></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4" @click='mainNews=4'></li>
                            </ol>
                            <div class="carousel-inner main-news-content">
                                <div class="carousel-inner">
                                    <div class="carousel-item" v-for='(item,key) in filterData' v-if="key<'5'" :class="{active:key==0}">
                                        <router-link :to="'/inspect/'+item.id" class="main-news-img d-block w-100"
                                            :style="{ backgroundImage: 'url(' + item.media.small + ')' }">
                                        </router-link>
                                        <div class="carousel-caption d-none d-md-block">
                                            <div class="main-inspect-news">
                                                <transition name="fade" mode="out-in" appear>
                                                    <h1>{{item.title}}</h1>
                                                </transition>
                                                <p>文章內容</p>
                                                <div class="main-news-tag">
                                                    <transition name="fade" mode="out-in" appear>
                                                        <span class="d-block d-md-inline"><a href="#">{{item.datasource_name}}</a></span>
                                                    </transition>
                                                    <transition name="fade" mode="out-in" appear>
                                                        <span><img src="../assets/Images/6degreesWeb/news/time.svg" alt="">
                                                            {{ item.report_time | moment("h:mm") }}
                                                        </span>
                                                    </transition>
                                                    <span><img src="../assets/Images/6degreesWeb/news/views.svg" alt="">{{item.pageview}}
                                                    </span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="carousel-item d-flex" v-for='(item,key) in filterData' v-if="key<'5'"
                                    :class="{active:key==0}">
                                    <a :href="item.news_url" class="main-news-img d-block w-100" :style="{ backgroundImage: 'url(' + item.media.small + ')' }">
                                    </a>
                                    <div class="main-inspect-news" v-for='(item,key) in filterData' v-if='key==mainNews'>
                                        <transition name="fade" mode="out-in" appear>
                                            <h1>{{item.title}}</h1>
                                        </transition>
                                        <p>文章內容</p>
                                        <div class="main-news-tag">
                                            <transition name="fade" mode="out-in" appear>
                                                <span class="d-block d-md-inline"><a href="#">{{item.datasource_name}}</a></span>
                                            </transition>
                                            <transition name="fade" mode="out-in" appear>
                                                <span><img src="../assets/Images/6degreesWeb/news/time.svg" alt="">
                                                    {{ item.report_time | moment("h:mm") }}
                                                </span>
                                            </transition>
                                            <span><img src="../assets/Images/6degreesWeb/news/views.svg" alt="">{{item.pageview}}
                                            </span>

                                        </div>
                                        <div class="news-tag_gray">
                                            <span>
                                                <img src="../assets/Images/6degreesWeb/news/tag-icon.svg" alt="">
                                                <span>
                                                    {{ }}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div> -->
                            </div>

                        </div>
                    </div>

                    <!-- 平板main-news--------------------------------------------------------------- -->

                    <div id="carouselExampleIndicators-sm" class="main-news-sm carousel slide d-block d-md-none"
                        data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators-sm" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators-sm" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators-sm" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators-sm" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators-sm" data-slide-to="4"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item" v-for='(item,key) in filterData' v-if=" key<'5'" :class="{active:key==0}">
                                <div class="main-news_mobile">
                                    <div class="main-news-hero_mobile">
                                        <a :href="item.news_url" class="main-news-img d-block w-100" :style="{ backgroundImage: 'url(' + item.media.small + ')' }">
                                        </a>
                                    </div>
                                    <div class="main-inspect-news_mobile">
                                        <h1>{{item.title}}</h1>
                                        <p>文章內容</p>
                                        <div class="main-news-tag_mobile">
                                            <span class="d-block d-md-inline"><a href="#">{{item.datasource_name}}</a></span>
                                            <span><img src="../assets/Images/6degreesWeb/news/time.svg" alt=""> 08:39
                                            </span>
                                            <span><img src="../assets/Images/6degreesWeb/news/views.svg" alt="">{{item.pageview}}
                                            </span>
                                        </div>
                                        <div class="main-news-tag_gray_mobile">
                                            <span>
                                                <img src="../assets/Images/6degreesWeb/news/tag-icon.svg" alt="">
                                                <span>

                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- 一般新聞區--------------------------------------------------- -->


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
                                    <span><img src="../assets/Images/6degreesWeb/news/views.svg" alt="">{{item.pageview}}</span>
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

                    <!-- 載入條------------------------------------- -->

                    <div id='loadingBar' class="refresh-bar">
                        <a href="#" @click.prevent='getTagData(1,dataLimit)'>
                            <img class="d-none d-md-block" src="../assets/Images/6degreesWeb/other/loading-md.svg" alt=""
                                style="width:100%;height: 48px;">
                            <img class="d-block d-md-none" src="../assets/Images/6degreesWeb/other/loading-sm.svg" alt=""
                                style="width:100%;height: 48px;">
                            <span>加載更多</span>
                        </a>

                    </div>

                </div>

                <!-- 測欄---------------------------------------------------- -->

                <sidebar></sidebar>

            </div>
        </div>
        <div style="margin-bottom: 500px;"></div>
    </div>
</template>

<script>
    import sidebar from "../components/sidebar.vue"
    import $ from "jquery";
    export default {
        name: 'recommend',
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
                recommendData: [],
                navbarData: [],
                popularData: [],
                searchWorld: "",
                mainNews: 0,
                scrollTop: '',
                windowsWidth: '',
                offsetHeight: '',
                limitScrollTop: 1600,
                dataLimit: 10,
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
        watch: {
            scrollTop: function () {
                const vm = this;
                if ((vm.offsetHeight - vm.scrollTop) < 175) {
                    if (vm.windowsWidth < 996) {
                        return
                    }
                    vm.offsetHeight += 1480,
                        vm.getTagData(1, this.dataLimit)
                } else {
                    return
                }
            }
        },
        methods: {
            onScroll() {
                // 滾動判断条件
                this.scrollTop = (document.documentElement.scrollTop || document.body.scrollTop ||
                    window.pageYOffset) + $(window).height();

                this.windowsWidth = $(window).width()

                // this.offsetHeight = document.body.scrollHeight;
            },
            reload() {
                this.$router.go(0)
            },
            init() {
                const vm = this;
                vm.limitScrollTop = 1600;
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
                            vm.getTagData();
                            vm.getNavbar();
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
            getTagData(page = 1, limit = 10) {
                const vm = this;
                const id = this.$route.params.id;
                vm.isLoading = true;
                $.ajax({
                    type: "Get",
                    url: this.domain + `/tag/${id}/article?page=${page}&limit=${limit}`,
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
                            vm.dataLimit += 10;
                            vm.data = data.data;
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                })
            },
            getNavbar() {
                const vm = this;
                vm.isLoading = true;
                $.ajax({
                    type: "Get",
                    url: this.domain + `/tag/`,
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
        },

        mounted: function () {
            this.$nextTick(function () {
                window.addEventListener('scroll', this.onScroll)
            })

            this.offsetHeight = document.body.scrollHeight;
        },
        created() {
            this.init();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>