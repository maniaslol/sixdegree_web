<template>
    <div>
        
        <nav>
            <div class="container d-flex">
                <div class="logo">
                    <a href="#">
                        <img src="../assets/Images/inspect/6degrees - web/Page 1/6degrees - 新闻阅读页/Main Menu 3/logo light blue.svg"
                            alt="icon">
                    </a>
                </div>
                <div class="home active"><a href="#">首頁推薦</a></div>
                <ul class="nav-list">
                    <li><a href="#" class="nav-item">視頻</a></li>
                    <li><a href="#" class="nav-item">國際</a></li>
                    <li><a href="#" class="nav-item">育樂</a></li>
                    <li><a href="#" class="nav-item">政治</a></li>
                    <li><a href="#" class="nav-item">財經</a></li>
                    <li><a href="#" class="nav-item">運動</a></li>
                    <li><a href="#" class="nav-item">更多</a></li>
                </ul>
                <div class="uesr-bar">
                    <div class="input-group search-input">
                        <input name="" id="" class="" type="input" value="">
                        <a href="#">
                            <img src="../assets/Images/inspect/6degrees - web/Page 1/6degrees - 新闻阅读页/Main Menu 3/Search/Icon/20/Grey/Search/Shape.svg"
                                alt="">
                        </a>
                    </div>
                    <a href="#" class="user-donate">點數<img src="" alt=""></a>
                    <a href="#" class="user-language">繁體中文</a>

                </div>
            </div>
        </nav>
        <div class="hottag container-fluid">
            <div class="row">
                <a href="#">熱門話題tag</a>
                <a href="#">熱門話題tag</a>
                <a href="#">熱門話題tag</a>
                <a href="#">熱門話題tag</a>
                <a href="#">熱門話題tag</a>
            </div>

        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="main-news">
                        <div class="news-hero">
                            <p>Img here</p>
                        </div>
                        <div class="inspect-news">
                            <h1>這裡填寫新聞標題這裡填寫新聞標</h1>
                            <p>新聞內容新聞內容新聞內容新聞內容新聞內容新聞內容新聞內容新聞內容新聞內容新聞內容新聞內容</p>
                            <div class="source-bar">
                                <span><a href="#">新聞來源</a></span>
                                <span>08:35</span>
                                <span>1125</span>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-md-3">
                    <div class="hot-news">
                        <h2>熱門新聞</h2>
                    </div>
                    <div class="hot-news-button-groups">

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'inspectPage',
        props: {
            msg: String
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style leng="scss">
    
</style>