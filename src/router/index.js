import Vue from 'vue'
import Router from 'vue-router'
import QrCode from '@/components/QrCode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QrCode',
      component: QrCode
    }
  ]
})
