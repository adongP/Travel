<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <div class="banner-img">
        <img :src="bannerImg" alt="">
      </div>
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6dd;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <detail-fade>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleBannerClose"></common-gallary>
    </detail-fade>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import DetailFade from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: []
    }
  },
  props: {
    bannerImg: String,
    gallaryImgs: Array,
    sightName: String
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleBannerClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    DetailFade
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    .banner-img
      overflow hidden
      height:0
      padding-bottom:55%
      img
        width 100%
    .banner-info
      position absolute
      width: 100%;
      bottom: 0rem;
      padding-bottom:0.4rem
      display: flex;
      align-items: center;
      font-size: 0.32rem;
      color:#fff
      .banner-title
        flex:1
        padding-left:0.4rem
        background linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-number
        padding:0 .4rem
        background:rgba(0,0,0,.8)
        border-radius:.2rem
        height: 0.32rem;
        line-height: 0.32rem;
        font-size: 0.24rem;
        .banner-icon
          font-size:0.24rem
</style>
