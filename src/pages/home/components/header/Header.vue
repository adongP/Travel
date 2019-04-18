<template>
    <div class="header">
        <div class="header-left"><span class="iconfont">&#xe624;</span></div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>内容</div>
        <router-link to="/city" >
          <div class="header-right" >{{this.city}}<span class="iconfont">&#xe64a;</span></div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
//@import '../../../../assets/styles/varibles.styl'
// @import '~@/assets/styles/varibles.styl'
@import '~styles/varibles.styl'
.header
    height .84rem
    line-height .84rem
    background-color:$bgColor
    display flex
    align-items:center
    color:#fff
    text-align:center
    .header-left
        width:.64rem;
        font-size: .4rem;
    .header-input
        flex:1
        text-align:left;
        background:#fff;
        color:#ccc
        border-radius:.1rem
        margin:0.12rem 0.2rem
        height 0.6rem
        line-height 0.6rem
        padding:0px 0.2rem
    .header-right
        min-width:1.2rem;
        color:#fff
</style>
