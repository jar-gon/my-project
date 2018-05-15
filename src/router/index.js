import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import detail from '@/pages/detail'
import count from '@/pages/detail/count'
import forecast from '@/pages/detail/forecast'
import analysis from '@/pages/detail/analysis'
import publish from '@/pages/detail/publish'
import orderList from '@/pages/orderList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      redirect: '/detail/count',
      children: [
        {
          path: 'count',
          name: 'count',
          component: count
        },
        {
          path: 'forecast',
          name: 'forecast',
          component: forecast
        },
        {
          path: 'analysis',
          name: 'analysis',
          component: analysis
        },
        {
          path: 'publish',
          name: 'publish',
          component: publish
        }
      ]
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList
    }
  ]
})
