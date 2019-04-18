let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
    console.log(defaultCity)
  }
} catch (e) {}

export default {
  city: defaultCity
}
