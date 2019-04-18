<template>
  <div class="myIcons">
    <swiper :options="swiperOption">
         <swiper-slide v-for="(page, index) of pages" :key="index">
            <div class="myIcon" v-for="item of page" :key='item.id'>
            <div class="icon-img">
                <img :src="item.imgUrl" alt="">
            </div>
            <p class="icon-text">{{item.title}}</p>
            </div>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeIcons',
  props: {
    iconsList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus">
@import '~styles/mixins.styl';
.myIcons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;

  .myIcon {
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    position: relative;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      padding: 0.1rem;
      box-sizing: border-box;

      img {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-text {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.1rem;
      box-sizing: border-box;
      height: 0.44rem;
      ellipsis()
    }
  }
}
</style>
