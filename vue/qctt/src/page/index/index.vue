<template>
<div>
  <header-top></header-top>
  <nav>
    <div class="swiper-container swiper-container-horizontal">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-active" style="width: 375px;">
          <a href="/video/60611" target="_self">
            <img src="http://cools.qctt.cn/1508393519463?imageView2/1/w/1000/h/500">
            <div class="blur_bg">
            </div>
            <p>视频60611</p>
          </a>
        </div>
        <div class="swiper-slide swiper-slide-active" style="width: 375px;">
          <a href="/video/60611" target="_self">
            <img src="http://cools.qctt.cn/1508393519463?imageView2/1/w/1000/h/500">
            <div class="blur_bg">
            </div>
            <p>视频60611</p>
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </nav>
  <section>
    <ul class="pic-list">
      <li>
        <a href="/news/188358" class="A ui-link" target="_self">
          <span class="pic seted_wh" style="width: 115px; height: 86.25px;"><img src="http://qcttapp.qctt.cn/b3965c2ef4446d0bc952ca68e891af83.jpg?imageView2/0/w/2000/h/20000" style="min-height: 86.25px; height: auto;"></span>
          <p class="title">
            <span class="yuanChuang">原创</span>
            一个人
          </p>
          <p class="txt">
            <span class="date">汽车头条</span>
            <span class="date pubtime">2017-10-20</span>
          </p>
        </a>
      </li>
    </ul>
  </section>
  <footer-bottom></footer-bottom>
</div>
</template>

<script>
import HeaderTop from  '../../components/HeaderTop.vue';
import FooterBottom from '../../components/Footer.vue';
import '../../plugins/swiper.min.js';
import '../../script/test';
import '../../style/swiper.min.css'
import axios from 'axios';
export  default {
  data () {
    return {
      dataList:[],
    }
  },

  mounted(){
    this.$nextTick(function () {
      /*轮播图*/
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: false
      });

      /*请求数据*/
      this.getMsg();

      /*测试*/
      this.test()

    })

  },

  methods:{
    getMsg:function () {
      var _this = this;
      this.$ajax.get('../../static/data.json')
        .then(function (response) {
          console.log(response);
          _this.dataList = response.data;
        })
        .catch(function(responseText){
          console.log(response);
        })
    },
    test:function () {
      console.log(this.dataList);
    }
  },

  components:{
    HeaderTop,
    FooterBottom
  }
}
</script>

<style scoped>
</style>
