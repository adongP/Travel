<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <list :cities="cities" :hotCities="hotCities" :letter="letter"></list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import Axios from 'axios'
import CityHeader from './components/header/Header'
import CitySearch from './components/search/Search'
import List from './components/list/List'
import CityAlphabet from './components/alphabet/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    Axios.get('api/city.json').then(res => {
      console.log(res.data)
      res = res.data
      this.cities = res.data.cities
      this.hotCities = res.data.hotCities
    })
  },
  components: {
    CityHeader,
    CitySearch,
    List,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
