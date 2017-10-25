<template>
<div>
  <div class="swiper-nav">
    <div class="swiper-wrapper">
      <div v-for="(item,index) in navList" class="swiper-slide">
        <a :href="item.addr" v-text="item.name" @click="change(item)" :class="{'active':item.checked}"></a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import '../plugins/swiper.min'
  import '../style/swiper.min.css'
  export default {
    data () {
      return {
        navList:[]
      }
    },
    mounted(){
      this.$nextTick(function () {

        this.getNavList();
        var swiper2 = new Swiper('.swiper-nav', {
          slidesPerView : 'auto',
          paginationClickable: true,
          carousel: true
        });
      })
    },

    methods:{
      change:function (item) {
          this.navList.map(function (ele) {
            ele.checked = false;
          });
          item.checked = true;
      },
      getNavList:function () {
        let _this = this;
        this.$ajax.get('../../static/nav.json')
          .then(function (response) {
            _this.navList = response.data.data;
          })
          .catch(function (response) {
            console.log(response);
          })
      }
    }

  }

</script>

<style scoped>
  .swiper-nav .swiper-slide{
    width:auto;
    height: 40px;
    line-height:40px;
  }
  .swiper-nav{
    background: #fafafa;
    height:40px;
  }
  .swiper-nav .swiper-slide a{
    color: #666;
    font-size:16px;
    padding:0 10px;
    text-align: center;
    font-weight:normal;
    font-family: "Open Sans",Arial,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",STHeiti,SimSun,sans-serif;
  }
  .swiper-nav .swiper-slide a.active{
    color: #17abc1;
    font-size:19px;
  }
</style>
