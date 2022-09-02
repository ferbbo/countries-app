import ApiClient from './ApiClient';

export default {

  async getAllCountries() {
    return ApiClient.get('/all')
  },

  async getCountriesByRegion(region) {
     return ApiClient.get(`/region/${region}`)
  },

  async getCountryByName(query) {
    return ApiClient.get(`/name/${query}`)
  }, 
}