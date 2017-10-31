<template>
<div>
  <div class="swiper-nav" >
    <div class="swiper-wrapper">
      <div v-for="(item,index) in navList" class="swiper-slide"  @click="setNavOffset()">
        <!--<a :href="'/wangze/vuebuild'+item.addr" v-text="item.name" @click="setNavChecked(item.nav_index)" :class="{'active':item.nav_index == navChecked }"></a>-->
        <!--<router-link :to="'/wangze/vuebuild'+item.addr" v-text="item.name" @click.native="setNavChecked(item.nav_index)" :class="{'active':item.nav_index == navChecked }"></router-link>-->
        <router-link :to="item.addr" v-text="item.name" @click.native="setNavChecked(item.nav_index)" :class="{'active':item.nav_index == navChecked }"></router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import {getNavIndex,getNavOffset} from '../service/getData'
  import '../plugins/swiper.min'
  import '../style/swiper.min.css'
  export default {
    data () {
      return {
        navList:[],
        navChecked:1,
        navIndex:1,
        navOffset:0
      }
    },
    mounted(){
      this.$nextTick(function () {
        var _this = this;
        this.getNavList();
        /*导航初始化*/
        var swiper2 = new Swiper('.swiper-nav', {
          slidesPerView : 'auto',
          paginationClickable: true,
          freeMode: true,
          observer:true,
          observeParents:true,
          onTouchEnd:function (swiper2) {
            _this.navOffset = swiper2.getWrapperTranslate();
          },
        });
        /*设置选中项*/
        this.getNavChecked();
        /*设置导航偏移量*/
        this.setNavOffset();
        swiper2.setWrapperTranslate(this.navOffset);

      })
    },
    watch:{
      'navOffset':function () {
        this.setNavOffset();
      },
    },
    methods:{
      ...mapMutations([
        'NAV_INDEX',
        'NAV_OFFSET'
      ]),
      change:function (item) {
          this.navList.map(function (ele) {
            ele.checked = false;
          });
          item.checked = true;
          console.log(item);
      },
      /*导航列表*/
      getNavList:function () {
        let _this = this;
        this.$ajax.get('/wangze/vuebuild/static/nav.json')
//        this.$ajax.get('/static/nav.json')
          .then(function (response) {
            _this.navList = response.data.data;
          })
          .catch(function (response) {
            console.log(response);
          })
      },
      /*获取导航选中项索引及设置初始x位置 */
      getNavChecked:function () {
          let nav_index = getNavIndex('nav_index') == undefined ? this.$store.state.navIndex : getNavIndex('nav_index');
          this.navChecked = nav_index;
          let nav_offset = getNavOffset('nav_offset')  == undefined ? this.$store.state.navOffset : getNavOffset('nav_offset');
          this.navOffset = nav_offset;
      },
      /*设置导航选中索引及偏移量*/
      setNavChecked:function (index) {
        this.$store.commit('NAV_INDEX',index);
        this.$store.commit('NAV_OFFSET',this.navOffset);
        this.navList.map(function (ele) {
          ele.checked = false;
        })
        this.navList[index].checked = true;
      },
      /*设置导航偏移量*/
      setNavOffset:function () {
        this.$store.commit('NAV_OFFSET',this.navOffset);
      },

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
    width:100%;
    overflow: hidden;
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
