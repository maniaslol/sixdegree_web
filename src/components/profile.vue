<template>
    <div>

        <loading :active.sync="isLoading"></loading>

        <!-- 個人頁資訊sidebaar-------------------------------------------------------- -->

        <div class="container">
            <div class="row">
                <div class="col-lg-2 pd-0">
                    <div class="user-sidebar">
                        <div class="user-information row">
                            <div class="user-information-photo">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg"
                                    alt="">
                            </div>
                            <div class="user-name">
                                <p>momomo<i class="fas fa-circle"></i></p>
                            </div>
                            <a class="user-edit" href="#">
                                <div class="user-edit_img">
                                </div>
                                <p>編輯</p>
                            </a>
                            <div class="user-say mt-2 pd-1">
                                <p>一句話簡介一段簡介一段簡介一段簡介</p>
                            </div>
                        </div>
                        <div class="user-sildbar-item mt-3">
                            <h2>關注<span>281</span></h2>
                        </div>
                        <div class="user-sildbar-item">
                            <h2>粉絲<span>616</span></h2>
                        </div>
                        <div class="user-sildbar-item">
                            <h2>六度點數<span style="padding-left:10%">9527</span></h2>
                        </div>
                        <div class="user-sildbar-item">
                            <a href="#">我的設置<i class="fas fa-caret-right"></i></a>
                        </div>
                        <div class="user-sildbar-item">
                            <a href="#">登出</a>
                        </div>
                    </div>

                </div>

                <!-- 個人頁內容-------------------------------------------------------------- -->

                <!-- 切換紐部分-------------------------------------------------------------- -->

                <div class="col-lg-10 mt-12 user-main pd-0">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#information" role="tab"
                                aria-selected="true"><img src="../assets/Images/6degreesWeb/icon/myBell.svg" alt="">
                                消息通知
                                <div class="nav-item_number">8</div>
                            </a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#Collection" role="tab"
                                aria-selected="false"><img src="../assets/Images/6degreesWeb/icon/myCollect.svg"> 我的收藏
                                <div class="nav-item_number">12
                                </div>
                            </a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#thumbs" role="tab"
                                aria-selected="false">
                                <img src="../assets/Images/6degreesWeb/icon/myThumbs.svg">我的點讚
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#history" role="tab"
                                aria-selected="false"><img src="../assets/Images/6degreesWeb/icon/myHistory.svg">我的歷史</a>
                        </li>
                    </ul>

                    <!-- 消息通知-------------------------------------------------------------- -->

                    <div class="tab-content user-main-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="information" role="tabpanel">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">時間</th>
                                        <th scope="col">消息來源</th>
                                        <th scope="col">狀態</th>
                                        <th scope="col" width='300'>內容</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr @click='clicked=true' :class="{cover:clicked}">
                                        <th scope="row" class="text-center"><i class="fas fa-circle" v-if='!clicked'></i></th>
                                        <td>10:56</td>
                                        <td>Alex</td>
                                        <td><i class="fas fa-thumbs-up"></i>點讚</td>
                                        <td>內容訊息內容訊息內容訊息內容訊息</td>
                                    </tr>
                                    <tr class='cover'>
                                        <th scope="row" class="text-center"></th>
                                        <td>09:16</td>
                                        <td>Alex</td>
                                        <td><i class="fas fa-thumbs-up"></i>點讚</td>
                                        <td>內容訊息內容訊息內容訊息內容訊息</td>
                                    </tr>
                                    <tr class='cover'>
                                        <th scope="row" class="text-center"></th>
                                        <td>08:56</td>
                                        <td>the Bird</td>
                                        <td><i class="fas fa-dollar-sign"></i>打賞</td>
                                        <td>內容訊息內容訊息內容訊息內容訊息</td>
                                    </tr>
                                    <tr class='cover'>
                                        <th scope="row" class="text-center"></th>
                                        <td>7:58</td>
                                        <td>Larry</td>
                                        <td><i class="far fa-comment-alt"></i>留言</td>
                                        <td>內容訊息內容訊息內容訊息內容訊息</td>
                                    </tr>
                                    <tr class='cover'>
                                        <th scope="row" class="text-center"></th>
                                        <td>6:56</td>
                                        <td>Alex</td>
                                        <td><i class="fas fa-thumbs-up"></i>點讚</td>
                                        <td>內容訊息內容訊息內容訊息內容訊息</td>
                                    </tr>
                                    <tr class='cover'>
                                        <th scope="row" class="text-center"></th>
                                        <td>01:56</td>
                                        <td>the Bird</td>
                                        <td><i class="fas fa-dollar-sign"></i>打賞</td>
                                        <td>內容訊息內容訊息內容訊息內容訊息</td>
                                    </tr>
                                    <tr class='cover'>
                                        <th scope="row" class="text-center"></th>
                                        <td>00:58</td>
                                        <td>Larry</td>
                                        <td><i class="far fa-comment-alt"></i>留言</td>
                                        <td>內容訊息內容訊息內容訊息內容訊息</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- 收藏部分-------------------------------------------------------------- -->

                        <div class="tab-pane fade" id="Collection" role="tabpanel">
                            <div class="collection-nav d-flex">
                                <div class="dropdown show">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown">
                                        最新收藏
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">政經</a>
                                        <a class="dropdown-item" href="#">兩岸</a>
                                    </div>
                                </div>
                                <div class="dropdown show collection-nav_tag">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown">
                                        依標籤
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">政經</a>
                                        <a class="dropdown-item" href="#">兩岸</a>
                                    </div>
                                </div>
                                <div class="select-all">
                                    <a href="#" @click='selectAll'>
                                        <i class="far fa-dot-circle"></i>全選
                                    </a>
                                </div>
                                <div class="select-all">
                                    <a href="#">
                                        <i class="far fa-trash-alt"></i></i>
                                    </a>
                                </div>
                            </div>
                            <div class="news container" v-for='item in data'>
                                <div class="row">
                                    <div class="col-1">
                                        <a href="#" @click.prevent="item.media=!item.media">
                                            <i class="far fa-circle" v-if='!item.media'></i>
                                            <i class="far fa-dot-circle" v-if='item.media'></i>
                                        </a>
                                    </div>
                                    <div class="col-3">
                                        <a href="#" class="news-img" style="background-image: url(https://newweb.dev.sixdegreeworld.com/sixdegree.svg)">
                                        </a>
                                    </div>
                                    <div class="col-8">
                                        <h3>{{item.title}}</h3>
                                        <div class="news-tag">
                                            <span>{{item.datasource_name}}</span>
                                            <span><img src="../assets/Images/6degreesWeb/news/time.svg" alt="">08:35</span>
                                            <span><img src="../assets/Images/6degreesWeb/news/views.svg" alt="">1125</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 點讚部分-------------------------------------------------------------- -->

                        <div class="tab-pane fade" id="thumbs" role="tabpanel">
                            <div class="collection-nav d-flex">
                                <div class="dropdown show">
                                    <h3>
                                        歷史點讚
                                    </h3>
                                </div>
                                <div class="select-all history">
                                    <a href="#" @click='selectAll'>
                                        <i class="far fa-dot-circle"></i>全選
                                    </a>
                                </div>
                                <div class="select-all">
                                    <a href="#">
                                        <i class="far fa-trash-alt"></i></i>
                                    </a>
                                </div>
                            </div>
                            <div class="news container" v-for='item in data'>
                                <div class="row">
                                    <div class="col-1">
                                        <a href="#" @click.prevent="item.media=!item.media">
                                            <i class="far fa-circle" v-if='!item.media'></i>
                                            <i class="far fa-dot-circle" v-if='item.media'></i>
                                        </a>
                                    </div>
                                    <div class="col-3">
                                        <a href="#" class="news-img" style="background-image: url(https://newweb.dev.sixdegreeworld.com/sixdegree.svg)">
                                        </a>
                                    </div>
                                    <div class="col-8">
                                        <h3>{{item.title}}</h3>
                                        <div class="news-tag">
                                            <span>蘋果日報</span>
                                            <span><img src="../assets/Images/6degreesWeb/news/time.svg" alt="">08:35</span>
                                            <span><img src="../assets/Images/6degreesWeb/news/views.svg" alt="">1125</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 歷史部分-------------------------------------------------------------- -->

                        <div class="tab-pane fade" id="history" role="tabpanel">
                            <div class="collection-nav d-flex">
                                <div class="dropdown show">
                                    <h3>
                                        歷史評論
                                    </h3>
                                </div>
                                <div class="select-all history">
                                    <a href="#" @click='selectAll'>
                                        <i class="far fa-dot-circle"></i>全選
                                    </a>
                                </div>
                                <div class="select-all">
                                    <a href="#">
                                        <i class="far fa-trash-alt"></i></i>
                                    </a>
                                </div>
                            </div>
                            <div class="news container" v-for='item in data'>
                                <div class="row">
                                    <div class="col-1">
                                        <a href="#" @click.prevent="item.media=!item.media">
                                            <i class="far fa-circle" v-if='!item.media'></i>
                                            <i class="far fa-dot-circle" v-if='item.media'></i>
                                        </a>
                                    </div>
                                    <div class="col-3">
                                        <a href="#" class="news-img" style="background-image: url(https://newweb.dev.sixdegreeworld.com/sixdegree.svg)">
                                        </a>
                                    </div>
                                    <div class="col-8">
                                        <h3>{{item.title}}</h3>
                                        <div class="news-tag">
                                            <span>蘋果日報</span>
                                            <span><img src="../assets/Images/6degreesWeb/news/time.svg" alt="">08:35</span>
                                            <span><img src="../assets/Images/6degreesWeb/news/views.svg" alt="">1125</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import $ from "jquery";
    export default {
        name: 'profile',
        props: {
            msg: String
        },
        data() {
            return {
                data: [],
                domain: 'http://api.dev.sixdegreeworld.com',
                Token: '',
                Token_type: '',
                newData: {},
                scrollTop: '',
                offsetHeight: '',
                LimitScrollTop: 1200,
                dataLimit: 10,
                isLoading: false,
                clicked: false
            }
        },
        methods: {
            onScroll() {
                // 滾動判断条件
                this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
                // this.offsetHeight = document.documentElement.offsetHeight || document.body.offsetHeight;
            },
            init() {
                const vm = this;
                vm.isLoading = true;
                $.ajax({

                    //get token

                    type: "post",
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
                            vm.getTest();
                            vm.getData();
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                })
            },
            getToken() {
                const vm = this;
                vm.isLoading = true;
                $.ajax({

                    //get token

                    type: "post",
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
                            vm.tokenType = data.data.token_type;
                            //有資料的動作
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                })
            },
            getData(page = 1, limit = 10) {
                const vm = this;
                vm.isLoading = true;
                $.ajax({
                    type: "get",
                    url: this.domain + `/article?page=${page}&limit=${limit}`,
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
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                })
            },
            getTest() {
                const vm = this;
                vm.isLoading = true;
                $.ajax({
                    type: "get",
                    url: this.domain + '/article/test',
                    // headers: {
                    //     "Authorization": vm.Token_type + " " + vm.Token
                    // },
                    success: function (data) {
                        vm.isLoading = false;
                        if (data == "") {
                            //沒資料的動作
                        } else {
                            //有資料的動作
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                })
            },


            //功能與特效

            selectAll() {
                const vm = this;
                let newData = this.data.map(function (el) {
                    el.media = true;
                    return el;
                })
                this.data = newData;
            }
        },
        created() {
            this.init();
        },
    }
</script>

<style lang="scss">
    @import '../assets/scss/_profilePage.scss';
</style>