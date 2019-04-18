<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id" @click="handleCityClick(item.name)">
              <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(citiesItem, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">
          {{key}}
        </div>
        <div class="item-list" v-for="item in citiesItem" :key="item.id" @click="handleCityClick(item.name)">
            <div class="item">
              {{item.name}}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'List',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      console.log(city)
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      this.scroll.scrollToElement(this.$refs[this.letter][0])
    }
  }
}
</script>

<style lang="stylus">
.list
  overflow hidden
  position absolute;
  top:1.7rem
  left:0
  right:0
  bottom:0
  .title
    line-height: 0.64rem;
    background: #f8f8f8;
    color: #666;
    padding-left:0.2rem
  .button-list
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    overflow:hidden
    .button-wrapper
      float:left
      width:33.33%
      .button
        padding:0.1rem 0
        margin:0.1rem
        text-align:center
        border:0.02rem solid #ccc
        border-radius:0.06rem
  .item-list
    .item
      line-height 0.76rem
      padding:0px 0.2rem
</style>
