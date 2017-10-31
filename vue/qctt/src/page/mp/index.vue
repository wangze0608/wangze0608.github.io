<template>
  <div>
    <header-top></header-top>
    <header-nav></header-nav>
    <section>
      <ul class="pic-list">
        <li v-for="(item,index) in msgList"
            v-bind:class="{video_video2:item.style==8,video_video:item.style == 9,video_list3:item.style == 3,video_list:item.style == 6}">
          <a v-if="item.is_news == 6" v-bind:href="'https://m.qctt.cn'+item.jump_address" class="A ui-link"
             target="_self">
            <span class="pic"><img v-bind:src="item.image_url"></span>
            <p class="title">
              {{item.title}}
            </p>
            <p class="txt">
              <span class="date">{{item.origin}}</span>
              <span class="date pubtime" v-if="item.CommuntCount">评论({{item.CommuntCount}})</span>
            </p>
          </a>
          <a v-else-if="item.style == 1" v-bind:href="'https://m.qctt.cn'+item.jump_address" class="A ui-link"
             target="_self">
            <span class="pic 11"><img v-bind:src="item.image_url"></span>
            <p class="title">
              <span v-if="item.articleType == 2" class="yuanChuang">原创</span>
              <span v-else-if="item.articleType == 5" class="tuiJian">推荐</span>
              <span v-else-if="item.articleType == 12" class="yuanChuang">争锋</span>
              <span v-else-if="item.articleType == 1" class="tuiJian">热门</span>
              {{item.title}}
            </p>
            <p class="txt">
              <span class="date">{{item.origin}}</span>
              <span class="date pubtime">{{item.publishTime}}</span>
            </p>
          </a>
          <a v-else-if="item.style == 5" v-bind:href="'https://m.qctt.cn'+item.jump_address" class="A ui-link"
             target="_self">
            <span class="pic"><img v-bind:src="item.image_url"></span>
            <p class="title"><span class="tuiGuang">推广</span>{{item.title}}</p>
            <p class="txt">
              <span class="date">{{item.origin}}</span>
              <span class="date pubtime">{{item.publishTime}}</span>
            </p>
          </a>

          <a v-else-if="item.style == 4" v-bind:href="'https://m.qctt.cn'+item.jump_address" target="_self"
             class="ui-link">
            <p class="word"><span class="tuiGuang">推广</span>{{item.title}} </p>
            <div class="video_list_img">
              <img v-bind:src="item.link_image">
              <span class="video_button"></span>
              <span class="video_time"></span>
            </div>
            <p class="txt">
              <span class="date">{{item.origin}}</span>
              <span class="date pubtime">{{item.publishTime}}</span>
            </p>
          </a>

          <a v-else-if="item.style == 3" v-bind:href="'https://m.qctt.cn'+item.jump_address" target="_self"
             class="ui-link">
            <p class="word">
              <span class="zhiDing" v-if="item.is_top == 1">置顶</span>
              <span class="yuanChuang" v-else-if="item.articleType == 2">原创</span>
              <span class="tuiJian" v-else-if="item.articleType == 5">推荐</span>
              <span class="yuanChuang" v-else-if="item.articleType == 12">争锋</span>
              <span class="tuiJian" v-else-if="item.articleType == 1">热门</span>
              {{item.title}}
            </p>
            <div class="clearfix">
              <img v-for="item2 in item.picUrlList" v-bind:src="item2">
            </div>
            <p class="txt">
              <span class="date">{{item.origin}}</span>
              <span class="date pubtime">{{item.publishTime}}</span>
            </p>
          </a>

          <a v-else-if="item.style == 13" v-bind:href="'https://m.qctt.cn'+item.jump_address" target="_self">
            <p class="word">
              <span class="zhiBo">直播</span>
              {{item.title}}
            </p>
            <div class="applive_img">
              <img v-bind:src="item.image_url">
            </div>
          </a>

          <a v-else-if="item.style == 6" v-bind:href="'https://m.qctt.cn'+item.jump_address" target="_self"
             class="ui-link">
            <p class="word">
              <span class="zhuanTi">专题</span>
              {{item.title}}
            </p>
            <div class="video_list_img">
              <img v-bind:src="item.image_url">
              <span class="video_button"></span>
              <span class="video_time"></span>
            </div>
            <p class="txt">
              <span class="date pubtime">更新至第{{item.specialArticleNum}}篇</span>
            </p>
          </a>

          <a v-else-if="item.style == 9" v-bind:href="'https://m.qctt.cn'+item.jump_address" target="_self">
            <p class="word">
              <span class="tuiGuang" v-if="item.is_news == 5">推广</span>
              <span class="zhiDing" v-else-if="item.is_top == 1">置顶</span>
              <span class="yuanChuang" v-if="item.articleType == 2">原创</span>
              <span class="tuiJian" v-else-if="item.articleType == 5">推荐</span>
              {{item.title}}
            </p>
            <div class="video_img">
              <img v-if="item.is_news == 5" v-bind:src="item.link_image">
              <img v-else v-bind:src="item.image_url">
              <span class="video_play_button"></span>
              <span class="video_time">{{item.lasting}}</span>
            </div>
            <p class="txt">
              <span class="date">{{item.origin}}</span>
              <span class="date pubtime" v-if="item.is_news == 5">{{item.read_count}}次播放</span>
              <span class="date pubtime" v-else>{{item.read_number}}次播放</span>
            </p>
          </a>

          <a v-else-if="item.style == 8" v-bind:href="'https://m.qctt.cn'+item.jump_address" class="A ui-link"
             target="_self">
            <span class="pic">
            	<img v-bind:src="item.link_image">
            	<i class="video_time">{{item.lasting}}</i>
            </span>
            <p class="title">
              {{item.title}}
              <span class="tuiGuang" v-if="item.is_news == 5">推广</span>
            </p>
            <p class="txt">
              <span class="date">{{item.origin}}</span>
              <span class="date pubtime">{{item.publishTime}}</span>
            </p>
          </a>
        </li>
      </ul>
    </section>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop.vue';
  import FooterBottom from '../../components/Footer.vue';
  import HeaderNav from '../../components/HeaderNav.vue';
  import '../../plugins/swiper.min.js';
  import '../../style/swiper.min.css'

  export default {
    data() {
      return {
        msgList: [],
      }
    },

    mounted() {
      this.$nextTick(function () {
        /*轮播图*/
        new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          loop: false
        });

        /*请求数据*/
        this.getMsg();

      })

    },

    methods: {
      getMsg: function () {
        var _this = this;
        this.$ajax.get('http://test.qctt.cn/wangze/testData/data2.json')
//        this.$ajax.get('/static/data2.json')
          .then(function (response) {
            _this.msgList = response.data.data;
          })
          .catch(function (responseText) {
            console.log(response);
          })
      },
      test: function () {
        let _this = this;
        setTimeout(function () {
          console.log(_this.msgList);
        }, 1000)
      }
    },

    components: {
      HeaderTop,
      HeaderNav,
      FooterBottom,
    }
  }
</script>

<style scoped>
</style>
