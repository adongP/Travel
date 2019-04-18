<template>
  <div class="header">
    <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
      <span class="iconfont">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
      经典详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log('scroll02')
      // console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop
      if (top > 40) {
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // activated () {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  deactivated () {
    console.log('scroll')
    window.removeEventListener('scroll', this.handleScroll)
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus">
@import '~styles/varibles.styl';
  .header-abs
    position absolute
    left 0.2rem
    top:0.2rem
    width:.8rem
    height .8rem
    text-align center
    line-height .8rem
    color:#fff;
    background:rgba(0,0,0,.8)
    border-radius .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    z-index 2
    height 0.86rem
    line-height .86rem
    text-align center
    color:#fff
    background:$bgColor
    .header-fixed-back
      position absolute
      left 0.2rem
      top:0rem
      width:.4rem
      height .4rem
      color:#fff;
</style>
