<template>
  <div class="weekend">
    <div class="weekend-title">
      周末去哪儿
    </div>
    <div
      class="weekend-list"
      v-for="item in weekendList"
      :key="item.id"
    >
      <div class="weekend-img">
        <img
          :src="item.imgUrl"
          alt=""
        >
      </div>
      <div class="weekend-content">
        <h2 class="item-title">{{item.title}}</h2>
        <p class="item-text">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus">
@import '~styles/mixins.styl'
.weekend
  .weekend-title
    text-align:left
    padding: 0.2rem;
    background: #efefef;
  .weekend-list
      .weekend-img
        overflow: hidden;
        width: 100%;
        height: 0px;
        padding-bottom: 33.7%;
        img
          width:100%
      .weekend-content
        flex:1
        text-align:left
        margin:0.1rem
        .item-title
          font-size:0.36rem
          font-weight:bold
          margin-bottom: 0.2rem;
          padding-top:.1rem
          ellipsis()
        .item-text
          color:#999
          ellipsis()

</style>
