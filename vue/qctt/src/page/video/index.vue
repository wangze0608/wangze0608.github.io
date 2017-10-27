<template>
<div>
  <header-top></header-top>
  <header-nav></header-nav>
  <div>
    <ul class="pic-list">
      <li v-for="(item,index) in videoList" class="video_video">
        <a :href="item.video_url" target="_self">
          <div class="video_img seted_wh">
            <p class="word">
              <span >{{item.title}}</span>
            </p>
            <img class="img video_smile_img" :src="item.video_img" style="min-height: 210.938px; height: auto;">
            <span class="video_play_button"></span>
            <span class="video_time">{{item.duration}}</span>
          </div>
          <p class="txt">
            <span class="date pubtime">{{item.read_number}}</span>
            <span class="date">{{item.source}}</span>
          </p>
        </a>

      </li>
    </ul>
  </div>
  <footer-bottom></footer-bottom>
</div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop.vue';
  import FooterBottom from '../../components/Footer.vue';
  import HeaderNav from '../../components/HeaderNav.vue';

  export default {
    data () {
      return {
        videoList:[]
      }
    },

    mounted(){
      this.$nextTick(function () {
        this.getVideoList();
      })
    },

    methods:{
      getVideoList:function () {
        var _this = this;
        this.$ajax.get('../../static/video.json')
          .then(function (response) {
            _this.videoList = response.data.data;
          })
          .catch(function (response) {
            console.log(response);
          })

      }
    },
    components:{
      HeaderTop,
      FooterBottom,
      HeaderNav,
    }

  }
</script>

<style scoped>
  .video_video .word {
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    background: url(http://cools.qctt.cn/front/images/shipin-bj.png) repeat-x;
    padding: 0.2rem 0;
    font-size: .32rem;
    background-size: 100% 100%;
    width: 100%;
  }
  .video_video a{
    padding:0;
  }
  .video_video .word span {
    width: calc(100% - 20px);
    margin: 0 auto;
    display: block;
  }
</style>
