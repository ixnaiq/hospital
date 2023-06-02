import Vue from 'vue'
import VueRouter from 'vue-router' 

const Login = () => import('../views/users/login')
const Patient = () =>import('../views/patient/Patient')
const Doctor = () => import('@/views/dooctor/Doctor')
const BasicInfo = () => import('../views/dooctor/childComps/BasicInfo')
const EditDoctor =() => import('../views/dooctor/childComps/EditDoctor')
const CateGory = () => import('../views/dooctor/childComps/CateGory') 
const PatientInfo = () => import('../views/dooctor/childComps/PatientInfo')
const RegistrationManagement = () => import('../views/dooctor/scheduleInfo/RegistrationManagement') 
const ScheduleManagement = () => import('../views/dooctor/scheduleInfo/ScheduleManagement') 
const TemplateManagement = () => import('../views/dooctor/scheduleInfo/TemplateManagement')  
const Register = () => import( '../views/users/register')
const RecordView = () => import('../views/patient/childComps/RecordView')
const ReservationView = () => import('../views/patient/childComps/ReservationView')
const DoctorInfo = () => import('../views/patient/childComps/DoctorInfo')

// 1.安装VueRouter
Vue.use(VueRouter)

// 配置路由信息
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path:'/login',
        component: Login

    },
    {
        path:'/register',
        component:Register
    },
    {
        path: '/patient',
        name: 'patient',
        component: Patient,
        children:[
            {
                path:'recordview',
                name:'recordview',
                component:RecordView
            },
            {
                path:'reservationview',
                name:'reservationview',
                component:ReservationView
            },
            {
                path:'doctorinfo',
                name:'doctor',
                component:DoctorInfo
            }

        ]
    },
    {
        path: '/doctor',
        name: 'doctor',
        component: Doctor,
        children: [
            {
                path:'basicinfo',
                name:'basicinfo',
                component:BasicInfo
            },
            {
                path:'category',
                name:'category',
                component:CateGory
            },
            {
                path:'editdoctor',
                name:'editdoctor',
                component:EditDoctor
            },
            {
                path:'patientinfo',
                name:'patientinfo',
                component:PatientInfo
            },
            {
                path:'registrationmanagement',
                name:'registrationmanagement',
                component:RegistrationManagement
            },
            {
                path:'schedulemanagement',
                name:'schedulemanagement',
                component:ScheduleManagement
            },
            {
                path:'templatemanagement',
                name:'templatemanagement',
                component:TemplateManagement
            },
        ]
    },
    { path: '*', redirect: '/404' }
]

// 创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes,
     
  })
  
  // 导出
  export default router