<template>
  <div class="gallary" @click="handleGallayClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index"><img :src="item"></swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true, // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observeParents: true
      }
    }
  },
  methods: {
    handleGallayClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallary
    display flex
    flex-direction column
    justify-content center
    position fixed
    left:0
    right:0
    top:0
    bottom 0
    z-index 99
    background #000
    .wrapper
      width:100%
      height 0
      padding-bottom 100%
      img
        width 100%
    .swiper-pagination
      color:#fff
</style>
