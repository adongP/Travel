<template>
  <div class="recommend">
    <div class="recommend-title">
      热销推荐
    </div>
    <router-link tag="div"
      class="recommend-list border-bottom"
      v-for="item in itemList"
      :key="item.id"
      :to="'/detail/' + item.id"
    >
      <div class="recommend-img">
        <img
          :src="item.imgUrl"
          alt=""
        >
      </div>
      <div class="recommend-content">
        <h2 class="item-title">{{item.title}}</h2>
        <p class="item-text">{{item.desc}}</p>
        <button class="item-info">查看详情</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    itemList: Array
  }
}
</script>

<style lang="stylus">
@import '~styles/mixins.styl';
.recommend
  .recommend-title
    text-align:left
    padding: 0.2rem;
    background: #efefef;
  .recommend-list
      display:flex
      align-items: center;
      .recommend-img
        overflow: hidden;
        width: 25%;
        height: 0px;
        padding-bottom: 25%;
        margin:0.1rem
        img
          width:100%
      .recommend-content
        flex:1
        text-align:left
        margin:0.1rem 0.1rem 0.1rem 0rem
        ellipsis()
        .item-title
          font-size:0.36rem
          font-weight:bold
          margin-bottom: 0.2rem;
          padding-top:.1rem
          ellipsis()
        .item-text
          color:#999
          margin-bottom: 0.2rem;
          ellipsis()
        .item-info
          background-color:#ffa500
          color:#fff
          padding 0.1rem 0.2rem
          border-radius:0.1rem
          display: inline-block;

</style>
