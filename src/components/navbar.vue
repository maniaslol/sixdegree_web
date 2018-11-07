<template>
    <div>

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
                            <a href="#">首頁推薦</a>
                        </li>
                        <li v-for="(item, index) in data" :key="index" v-if="index>1 & index < 7"><a href="#" class="nav-item">{{item.name}}</a></li>
                        <!-- <li><a href="#" class="nav-item">國際</a></li>
                        <li><a href="#" class="nav-item">育樂</a></li>
                        <li><a href="#" class="nav-item">政治</a></li>
                        <li><a href="#" class="nav-item">財經</a></li>
                        <li><a href="#" class="nav-item">運動</a></li> -->
                        <li class="dropdown show">
                            <a class="dropdown-toggle nav-item" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown">
                                更多 <i class="fas fa-sort-down"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#" v-for="(item, index) in data" :key="index" v-if="index>6">{{item.name}}</a>
                            </div>
                        </li>
                        <!-- <li><a href="#" class="">更多 <i class="fas fa-sort-down"></i></a></li> -->
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
                                    alt=""> </a></div>
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
                    <a href="#" class="logo">
                        <img src="../assets/Images/6degreesWeb/navBar/logo-light-blue.svg" alt="icon">
                    </a>
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
                        <a href="#">首頁推薦</a>
                    </li>
                    <li v-for="(item, index) in data" :key="index" v-if="index>0 & index < 7"><a href="#" class="nav-item">{{item.name}}</a></li>
                    <!-- <li><a href="#" class="nav-item">國際</a></li>
                    <li><a href="#" class="nav-item">育樂</a></li>
                    <li><a href="#" class="nav-item">政治</a></li>
                    <li><a href="#" class="nav-item">財經</a></li>
                    <li><a href="#" class="nav-item">運動</a></li> -->
                    <li class="dropdown show">
                        <a class="dropdown-toggle nav-item" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown">
                            更多
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#" v-for="(item, index) in data" :key="index" v-if="index>6">{{item.name}}</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- 手機板header------------------------------------------------------------------ -->
        <nav class="container-fluid pad-header d-block d-sm-none">
            <div class="row">
                <div class="col-1">
                    <a href="#" class="logo">
                        <img src="../assets/Images/6degreesWeb/navBar/logo-light-blue.svg" alt="icon">
                    </a>
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
                            <a class="dropdown-item" href="#" v-for="(item, index) in data" :key="index" v-if="index>0">{{item.name}}</a>
                        </div>
                    </div>
                    <!-- <a href="#">
                        <i class="fas fa-bars"></i>
                    </a> -->
                </div>
                <div class="col-6">
                    <h2>首頁推薦</h2>
                </div>
            </div>
        </nav>
        <div class="hottag container-fluid d-flex">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <a href="#">兩岸</a>
                        <a href="#">南北韓</a>
                        <a href="#">美中貿易</a>
                        <a href="#">財金</a>
                        <a href="#">熱門話題</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
    export default {
        components: {
            VueBootstrapTypeahead
        },
        name: 'navbar',
        props: {
            msg: String
        },
        data() {
            return {
                query: "",
                searchWorld: "",
                domain: 'http://api.dev.sixdegreeworld.com',
                Token: '',
                Token_type: '',
                data: [{}],
            }
        },
        computed: {},
        watch: {

        },
        methods: {
            searchSubmit() {
                this.$router.push(`/search/${this.searchWorld}`)
            },
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
                            vm.getNavbar()
                            //取得文章資料
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
                            vm.data = data.data;
                            vm.dataLimit += 10;
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                })
            }
        },
        mounted() {

        },
        created() {
            this.init();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>