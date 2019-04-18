<template>
  <div class="detail">
    <detail-banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <detail-list :categoryList="list"></detail-list>
    <div style="height:50rem"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import Axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      bannerImg: '',
      gallaryImgs: [],
      sightName: '',
      showGallary: false,
      list: []
    }
  },
  methods: {
    getBannerData () {
      Axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        console.log(res)
        res = res.data
        if (res.ret) {
          this.bannerImg = res.data.bannerImg
          this.list = res.data.categoryList
          this.gallaryImgs = res.data.gallaryImgs
          this.sightName = res.data.sightName
        }
      })
    }
  },
  mounted () {
    this.getBannerData()
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>

</style>
