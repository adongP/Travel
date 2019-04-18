<template>
  <div class="hader">
    城市选择
    <router-link to='/'>
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus">
  @import '~styles/varibles.styl'
  .hader
    height 0.86rem
    line-height 0.86rem
    text-align:center
    color:#fff
    background:$bgColor
    .header-back
      position: absolute;
      left: 0px
      top: 0px
      width: .86rem
      color: #fff

</style>
