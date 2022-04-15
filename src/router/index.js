import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentView from '../views/StudentView.vue'
import Termview from '../views/TermView.vue'
import LoginView from '../views/UserView.vue'
import MydocumentsView from '../views/MydocumentsView.vue'
import TranscriptView from '../views/TranscriptView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/student',
    name: 'student',
    meta: {layout: "AppLayout"},
    component: StudentView
  },
  {
    path: '/Mydocuments',
    name: 'Mydocuments',
    component: MydocumentsView,
  },
    {
      path: '/terms',
      name: 'terms',
      component:Termview,

    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: "RegisterLayout"},
      component:LoginView,

    },
{
    path: '/transcript',
    name: 'transcript',
    component:TranscriptView,

},

    {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserView.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
