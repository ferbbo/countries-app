import ApiClient from './ApiClient';

export default {

  getAllCountries() {
    return ApiClient.get('/all')
  },

  getCountriesByRegion(region) {
     return ApiClient.get(`/region/${region}`)
  },

  getCountryByName(query) {
    return ApiClient.get(`/name/${query}`)
  },
  getCountryByCode(code) {
    return ApiClient.get(`/alpha/${code}`)
  },
  getBordersCountryByCode(border) {
    return ApiClient.get(`/alpha/?codes=${border}`)
  }

}