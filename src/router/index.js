import Vue from 'vue'
import Router from 'vue-router'
import VueResize from 'vue-resize'
import Menu from '@/components/Menu'
import Homepage from '@/components/Homepage'

Vue.use(Router)
Vue.use(VueResize)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
  }
],
components: {
    'homepage': Homepage
}
})
