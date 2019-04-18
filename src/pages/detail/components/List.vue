<template>
  <div class="lists">
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus">
  .item
    line-height:.8rem
    padding-left:.2rem
    .item-title
      padding-left:0.5rem
      .item-title-icon
        display: inline-block;
        position: absolute;
        width: .36rem;
        height: .36rem;
        top: .26rem;
        left: 0rem;
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem
</style>
