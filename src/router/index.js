import Vue from 'vue'
import VueRouter from 'vue-router' 

const Home = () => import('../views/home/Home')
import Patient from '@/views/patient/Patient'
import Doctor from '@/views/dooctor/Doctor'
 
 
// 1.安装VueRouter
Vue.use(VueRouter)

// 配置路由信息
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/patient',
        name: 'patient',
        component: Patient,
        meta: { requiresAuth: true, userType: 'patient' } // 添加路由元信息，表示需要登录才能访问，并且是患者界面
    },
    {
        path: '/doctor',
        name: 'doctor',
        component: Doctor,
        meta: { requiresAuth: true, userType: 'doctor' } // 添加路由元信息，表示需要登录才能访问，并且是医生界面
    },
    {
        path: '*',
        redirect: '/patient-login'
    }  
      
]

// 创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes,
     
  })
  
  // 导出
  export default router