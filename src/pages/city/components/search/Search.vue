<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class=" search-item border-bottom" v-for="item of keywordList" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item" v-show="!keywordList.length">
          没有匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      keywordList: [],
      timer: null
    }
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.keywordList = []
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.name.indexOf(this.keyword) > -1 || value.spell.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.keywordList = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus">
  @import '~styles/varibles.styl'
  .search
    box-sizing:border-box
    height 0.8rem
    background:$bgColor
    padding:.1rem .2rem
    .search-input
      box-sizing:border-box
      height 0.62rem
      line-height:0.62rem
      width:100%;
      border-radius:0.06rem
      padding:0px 0.1rem
      text-align:center
      font-size: 0.24rem;
      font-weight: bold;
  .search-content
    overflow hidden
    position absolute
    top:1.7rem
    left 0px
    right:0px;
    bottom:0px
    background:#efefef
    z-index: 1;
    .search-item
      padding:0.2rem
      color:#666
      background:#fff
</style>
