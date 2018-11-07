<template>
    <div class="col-lg-4">
        <!-- 熱門新聞---------------------------------------------------------------------------->

        <div class="hot-news">
            <div class="hot-news-card">
                <h2>熱門新聞</h2>
                <div class="hot-news-button-groups mt-3">
                    <a href="#" style="background-color: #2C4D8A;" @click="popularActive=1,getPopularData(page = 1, limit = 10 ,timetype = '24h')" :class="{'active':popularActive==1}">24小時</a>
                    <a href="#" style="background-color: #3565BB;" @click="popularActive=2,getPopularData(page = 1, limit = 10 ,timetype = '3d')" :class="{'active':popularActive==2}">三日</a>
                    <a href="#" style="background-color: #3565BB;" @click="popularActive=3,getPopularData(page = 1, limit = 10 ,timetype = '1w')" :class="{'active':popularActive==3}">一周</a>
                </div>
                <div class="hot-news-scroll container">
                    <div class="row">
                        <div v-for='(item,index) in data' class="col-12 col-sm-5 col-lg-12 mx-auto mx-lg-0">
                            <div class="hot-news-item ">
                                <span class="hot-news-item_index">
                                    {{index+1}}
                                </span>
                                <h3>{{item.title}}</h3>
                                <div class="news-tag mt-2">
                                    <span>{{item.datasource_name}}</span>
                                    <span><img src="../assets/Images/6degreesWeb/news/time.svg" alt="">
                                        {{ item.report_time | moment("h:mm") }}
                                    </span>
                                    <span>
                                        <img src="../assets/Images/6degreesWeb/news/views.svg" alt="">1125
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- 熱門評論------------------------------------------------------------------------------------- -->

        <div class="hot-news mt-5">
            <div class="hot-news-card">
                <h2>熱門評論</h2>
                <div class="hot-news-scroll container">
                    <div class="row">
                        <div v-for='(item,index) in data' class="col-12 col-sm-5 col-lg-12 mx-auto mx-lg-0">
                            <a class="user-photo" href="#">
                                <div><img style="width:36px; border-radius:50%;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg"
                                        alt="">
                                </div>
                            </a>
                            <div class="hot-news-item ">
                                <h4>{{item.title}}</h4>
                                <div class="news-tag mt-2">
                                    <span>{{item.datasource_name}}</span>
                                    <span><i class="fas fa-thumbs-up"></i>
                                        31
                                    </span>
                                    <span>
                                        <img src="../assets/Images/6degreesWeb/news/views.svg" alt="">1125
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- footer---------------------------------------------------------------------------- -->

        <div class="container">
            <footer class="row footer">
                <div class="col-6 mt-3"><a href="#"><img src="../assets/Images/6degreesWeb/phone/andro.svg" alt=""></a></div>
                <div class="col-6 mt-3"><a href="#"><img src="../assets/Images/6degreesWeb/phone/ios.svg" alt=""></a></div>
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
</template>

<script>
    import $ from "jquery";
    export default {
        name: 'newsList',
        components: {

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
                popularActive:'1',
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
            }
        },
        watch: {
                // if (this.scrollTop > this.LimitScrollTop) {
                //     this.LimitScrollTop += 1200;
                //     this.dataLimit += 10;
                //     vm.getData(1, this.dataLimit)
                // } else {
                //     return
                // }
            //}
        },
        methods: {
            onScroll() {
                // 滾動判断条件
                this.scrollTop = (document.documentElement.scrollTop || document.body.scrollTop ||
                    window.pageYOffset) + $(window).height();

                this.windowsWidth = $(window).width()

                // this.offsetHeight = document.body.scrollHeight;
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
                            vm.getPopularData()
                            //取得文章資料
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                })
            },
            getPopularData(page = 1, limit = 10 ,timetype = '24h') {
                const vm = this;
                vm.isLoading = true;
                console.log(timetype)
                $.ajax({
                    type: "Get",
                    url: this.domain + `/article/popular?page=${page}&limit=${limit}&timetype=${timetype}`,
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
                            console.log('成功得到資料')
                        }
                    },
                    failure: function (errMsg) {
                        console.log(errMsg);
                        //發生錯誤的動作
                    }
                })
            }
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

<style lang="scss">

</style>