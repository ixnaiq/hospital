<template>
    <div>
      <el-form :model="doctor" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="doctor.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="doctor.age" :min="0" :max="120"></el-input-number>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="doctor.gender" placeholder="请选择">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="科室">
          <el-select v-model="doctor.department" placeholder="请选择">
            <el-option label="内科" value="internal"></el-option>
            <el-option label="外科" value="surgical"></el-option>
            <el-option label="妇科" value="gynecology"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="擅长">
          <el-input v-model="doctor.expertise"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="doctor.position"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('doctor')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        doctor: {
          name: '',
          age: '',
          gender: '',
          department: '',
          expertise: '',
          position: ''
        }
      }
    },
    methods: {
      submitForm(doctor) {
        console.log(doctor)
      }
    }
  }
  </script>