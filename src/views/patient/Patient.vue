<template>
    <el-container>
      <el-aside class="left_top">
        <!-- <div>
          <h1>个人信息</h1>
          <div class="info">
          <div>
            <span>姓名：</span>
            <span>{{ name }}</span>
          </div>
          <div>
            <span>性别：</span>
            <span>{{ patientInfo.gender }}</span>
          </div>
          <div>
            <span>年龄：</span>
            <span>{{ patientInfo.age }}</span>
          </div>
          <div>
            <span>电话：</span>
            <span>{{ patientInfo.phone }}</span>
          </div>
          <div>
            <span>邮箱：</span>
            <span>{{ patientInfo.email }}</span>
          </div>
        </div>
        </div>  -->
        <div class="patient">
    <h1>患者信息</h1>
    <div class="patient-info">
      <div class="patient-name">姓名：{{ patient.name }}</div>
      <div class="patient-age">年龄：{{ patient.age }}</div>
      <div class="patient-gender">性别：{{ patient.gender }}</div>
      <div class="patient-email">邮箱：{{ patient.email }}</div>
      <div class="patient-phone">联系电话：{{ patient.phone }}</div>
    </div>
  </div>
      </el-aside>
      <el-main>
        <reservation-view class="right_top"></reservation-view>
        <record-view class="right_bottom"></record-view>
      </el-main>
    </el-container>
      <!-- <h1>预约挂号</h1> -->
      <!-- <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="科室" prop="department">
          <el-select v-model="form.department" placeholder="请选择科室">
            <el-option v-for="(item,index) in departments" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="医生" prop="doctor">
          <el-select v-model="form.doctor" placeholder="请选择医生">
            <el-option v-for="(item,index) in doctors" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预约时间" prop="appointmentTime">
          <el-date-picker v-model="form.appointmentTime" type="datetime" placeholder="请选择预约时间"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="submitForm">立即预约</el-button>
        </el-form-item>
      </el-form> -->
      <!-- <h1>预约记录</h1>
      <div class="record">
        <el-table :data="appointmentRecords" style="width: 100%">
          <el-table-column prop="department" label="科室"></el-table-column>
          <el-table-column prop="doctor" label="医生"></el-table-column>
          <el-table-column prop="appointmentTime" label="预约时间"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
        </el-table>
      </div> -->
    <!-- </div> -->
  </template>
  
  <script>
import RecordView from './childComps/RecordView.vue'
import ReservationView from './childComps/ReservationView.vue'
import axios from 'axios';
  export default {
    name: 'Patient',
    components:{
      ReservationView,
        RecordView
    },
    props: ['name', 'phone', 'email'],

    data() {
      return {
        patient: {},
        // patientInfo: {
        //   fullName: '张三',
        //   gender: '男',
        //   age: 30,
        //   phone: '13888888888',
        //   email: 'zhangsan@example.com'
        // },
        // departments: ['内科', '外科', '妇产科', '小儿科'],
        // doctors: ['王医生', '李医生', '张医生', '赵医生'],
        // form: {
        //   department: '',
        //   doctor: '',
        //   appointmentTime: ''
        // },
        // appointmentRecords: [
        //   {
        //     department: '内科',
        //     doctor: '李医生',
        //     appointmentTime: '2022-01-01 10:00:00',
        //     status: '已预约'
        //   },
        //   {
        //     department: '外科',
        //     doctor: '王医生',
        //     appointmentTime: '2022-01-02 14:00:00',
        //     status: '已完成'
        //   }
        // ]
      }
    },
    created() {
    // 从后端获取患者信息
    axios.get('/api/patient')
      .then(response => {
        this.patient = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
    // methods: {
    //   submitForm() {
    //     this.$refs.form.validate(valid => {
    //       if (valid) {
    //         // 处理预约挂号逻辑
    //         console.log(this.form)
    //       } else {
    //         return false
    //       }
    //     })
    //   }
    // },
    // beforeRouteEnter(to, from, next) {
    // const isAuthenticated = localStorage.getItem('isAuthenticated')
    // const userType = localStorage.getItem('userType')
    // if (isAuthenticated && userType === this.userType) {
    //   next()
    // } else {
    //   const loginRouteName = this.userType === 'patient' ? 'patient-login' : 'doctor-login'
    //   next({ name: loginRouteName })
    // }
    // }
  }
  </script>
  
  <!-- <style>
  .left_top{
    width: 100px;
    padding-top: 20px;
  }
  .patient {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
  }
  
  .info {
    margin-bottom: 20px;
  }
  
  .record {
    margin-top: 20px;
  }
  .right_top{

  }
  </style> -->
  <style>
.patient {
  margin: 20px;
}
.patient-info {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.patient-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.patient-age,
.patient-gender,
.patient-email,
.patient-phone {
  font-size: 18px;
  margin-bottom: 5px;
}
</style>