<!-- <template>
    <div class="patient-registration">
      <h1>患者挂号页面</h1>
      <div class="department-select">
        <h2>选择科室</h2>
        <el-select v-model="selectedDepartment" placeholder="请选择科室" @change="onDepartmentChange">
          <el-option v-for="department in departments" :key="department.value" :label="department.label" :value="department.value"></el-option>
        </el-select>
      </div>
      <div class="doctor-select">
        <h2>选择医生</h2>
        <el-radio-group v-model="selectedDoctor" @change="onDoctorChange">
          <el-radio v-for="doctor in doctors" :key="doctor.value" :label="doctor.value">
            <div class="doctor-name">{{ doctor.name }}</div>
            <div class="doctor-position">{{ doctor.position }}</div>
            <div class="doctor-gender">{{ doctor.gender }}</div>
            <div class="doctor-expertise">{{ doctor.expertise }}</div>
          </el-radio>
        </el-radio-group>
      </div>
      <div class="time-select">
        <h2>选择预约时间</h2> <el-radio-group v-model="selectedTime" @change="onTimeChange">
          <el-radio v-for="time in times" :key="time.value" :label="time.value">{{ time.label }}</el-radio>
        </el-radio-group>
      </div>
      <div class="registration-info" v-if="registration">
        <h2>挂号信息</h2>
        <el-card>
          <div class="registration-name">{{ registration.name }}</div>
          <div class="registration-time">{{ registration.time }}</div>
          <div class="registration-fee">{{ registration.fee }}</div>
        </el-card>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        departments: [
          {
            label: '内科',
            value: 'internal'
          },
          {
            label: '外科',
            value: 'surgery'
          },
          {
            label: '儿科',
            value: 'pediatrics'
          },
        ],
        doctors: [
          {
            name: '张医生',
            position: '主治医师',
            gender: '男',
            expertise: '擅长内科疾病',
            department: 'internal',
            value: 'doctor1'
          },
          {
            name: '王医生',
            position: '副医师',
            gender: '女',
            expertise: '擅长外科手术',
            department: 'surgery',
            value: 'doctor2'
          },
          {
            name: '李医生',
            position: '主治医师',
            gender: '男',
            expertise: '擅长儿科疾病',
            department: 'pediatrics',
            value: 'doctor3'
          }
        ],
        times: [
          {
            label: '8:00-9:00',
            value: '1'
          },
          {
            label: '9:00-10:00',
            value: '2'
          },
          {
            label: '10:00-11:00',
            value: '3'
          },
          {
            label: '11:00-12:00',
            value: '4'
          },
          {
            label: '14:00-15:00',
            value: '5'
          },
          {
            label: '15:00-16:00',
            value: '6'
          },
          {
            label: '16:00-17:00',
            value: '7'
          }
        ],
        selectedDepartment: '',
        selectedDoctor: '',
        selectedTime: '',
        registration: null
      };
    },
    methods:{
      onDepartmentChange() {
        // 根据选择的科室过滤医生列表
        this.selectedDoctor = '';
        this.doctors = this.doctors.filter(doctor => doctor.department === this.selectedDepartment);
      },
      onDoctorChange() {
        // 根据选择的医生更新挂号信息
        this.registration = {
          name: this.selectedDoctor,
          time: this.selectedTime,
          fee: 100
        }
      }
    }
  }
       -->
<template>
  <div>
    <h1 class="title">我的挂号</h1>
    <el-container>
      
      <el-select v-model="selectedDepartment" placeholder="选择科室" @change="fetchDoctors">
        <el-option
          v-for="item in departments"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        ></el-option>
      </el-select>

      <el-select v-model="selectedDoctor" placeholder="选择医生" @change="fetchDoctorDetails">
        <el-option
          v-for="item in doctors"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        ></el-option>
      </el-select>

      <el-select v-model="selectedTime" placeholder="选择预约时间">
        <el-option
          v-for="item in timeSlots"
          :key="item.id"
          :label="item.time"
          :value="item.id"
        ></el-option>
      </el-select>

      <el-button @click="submitRegistration" type="primary">挂号</el-button>
    </el-container>

    <el-card v-if="showRegistrationDetails">
      <h2>挂号信息</h2>
      <p>科室: {{ selectedDepartmentName }}</p>
      <p>医生: {{ doctorDetails.name }}</p>
      <p>职位: {{ doctorDetails.title }}</p>
      <p>性别: {{ doctorDetails.gender }}</p>
      <p>擅长: {{ doctorDetails.specialty }}</p>
      <p>预约时间: {{ selectedTimeSlot.time }}</p>
      <p>费用: {{ doctorDetails.fee }} 元</p>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      departments: [],
      doctors: [],
      timeSlots: [],
      selectedDepartment: '',
      selectedDoctor: '',
      selectedTime: '',
      showRegistrationDetails: false,
      doctorDetails: {}
    };
  },
  computed: {
    selectedDepartmentName() {
      const department = this.departments.find((dep) => dep.id === this.selectedDepartment);
      return department ? department.name : '';
    },
    selectedTimeSlot() {
      const timeSlot = this.timeSlots.find((slot) => slot.id === this.selectedTime);
      return timeSlot || {};
    }
  },
  methods: {
    async fetchDepartments() {
      try {
        const response = await axios.get('/api/departments');
        this.departments = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchDoctors() {
      try {
        const response = await axios.get(`/api/doctors?department=${this.selectedDepartment}`);
        this.doctors = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchDoctorDetails() {
      try {
        const response = await axios.get(`/api/doctors/${this.selectedDoctor}`);
        this.doctorDetails = response.data;
        this.fetchTimeSlots();
      } catch (error) {
        console.error(error);
      }
    },
    async fetchTimeSlots() {
      try {
        const response = await axios.get(`/api/time-slots?doctor=${this.selectedDoctor}`);
        this.timeSlots = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    submitRegistration() {
      this.showRegistrationDetails = true;
    }
  },
  created() {
    this.fetchDepartments();
  }
};
</script>
<style>
/* .title{
  display:inline-block;
} */
</style>