<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconsList='iconsList'></home-icons>
    <home-recommend :itemList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header/Header.vue'
import HomeSwiper from './components/swiper/Swiper.vue'
import HomeIcons from './components/icons/Icons.vue'
import HomeRecommend from './components/recommend/Recommend.vue'
import HomeWeekend from './components/weekend/Weekend.vue'
import Axios from 'axios'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      swiperList: [],
      iconsList: [],
      weekendList: [],
      recommendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      Axios.get('api/index.json?city=' + this.city).then(res => {
        console.log(res.data)
        var data = res.data.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconList
        this.weekendList = data.weekendList
        this.recommendList = data.recommendList
        console.log(this.recommendList)
      })
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>
</style>
