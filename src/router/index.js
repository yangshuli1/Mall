import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Show from '@/components/Show'
import Log from '@/components/Log'
import Users from '@/components/Users'
import Shop from '@/components/Shop'
import Cate from '@/components/Cate'
import Address from '@/components/Address'
import Buyca from '@/components/Buyca'

Vue.use(Router)

export default new Router({
  "routes": [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Index',
      name: 'HelloWorld',
      component: Index
    },
    {
      path: '/Show',
      name: 'HelloWorld',
      component: Show
    },
    {
      path: '/Log',
      name: 'HelloWorld',
      component: Log
    },
    {
      path: '/Users',
      name: 'HelloWorld',
      component: Users
    },
    {
      path: '/Shop',
      name: 'HelloWorld',
      component: Shop
    },
    {
      path: '/Cate',
      name: 'HelloWorld',
      component: Cate
    },
    {
      path: '/Address',
      name: 'HelloWorld',
      component: Address
    },
    {
      "path": '/Buyca',
      name: 'HelloWorld',
      component: Buyca
    }
  ]
})
