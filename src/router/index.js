import Vue from 'vue'
import Router from 'vue-router'
import SelectAddress from '@/components/selectAddress'
import location from '@/components/location'

Vue.use(Router)

export default new Router({
  model:'history',
  routes: [
    {
      path: '/',
      name: 'location',
      component: location
    },
    {
      path: '/a',
      name: 'SelectAddress',
      component: SelectAddress
    }
  ]
})
