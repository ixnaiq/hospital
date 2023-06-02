<template>
  <div class="doctor-profile">
    <el-card class="doctor-card">
      <div class="doctor-avatar">
        <img src="../../../assets/imge/ed1f3883dbad286a5e70bfdb21a0a0bc.jpg" alt="">
      </div>
      <div class="doctor-info">
        <div class="doctor-name">{{ doctor.name }}</div>
        <div class="doctor-age">{{ doctor.age }}</div>
        <div class="doctor-gender">{{ genderText }}</div>
        <div class="doctor-nation">{{ doctor.nation }}</div>
        <div class="doctor-nationality">{{ doctor.nationality }}</div>
        <div class="doctor-education">{{ doctor.education }}</div>
        <div class="doctor-department">{{ doctor.department }}</div>
        <div class="doctor-position">{{ doctor.position}}</div>
        <div class="doctor-specialty">{{ doctor.specialty }}</div>
        <div class="doctor-introduction">{{ doctor.introduction }}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
import ARJaxios from 'axios';
import { computed } from 'vue';

export default {
  data() {
    return {
      genderText,
      doctor: {  
        name: '',
        gender: '',
        age:'',
        nation:'',
        nationality:'',
        department: '',
        position: '',
        specialty: '',
        introduction: ''
      }
    };
  },
  created() {
    this.fetchDoctorProfile();
  },
  methods: {
    fetchDoctorProfile() {
      ARJaxios.get('/api/doctor/getDoctor')
        .then(response => {
          this.doctor = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  computed:{
    genderText(){
      return this.doctor.gender === 0 ? '女' : '男';
    }
  }
};
</script>

<style scoped>
.doctor-profile {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100%;
}

.doctor-card {
  width: 600px;
  padding: 30px;
}

.doctor-avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
}
.doctor-avatar img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.doctor-info {
  display: flex;
  flex-direction: column;
}

.doctor-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.do

tor-gender,
.doctor-department,
.doctor-position,
.doctor-specialty,
.doctor-introduction {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>

   