<template>
    <div>
      <!-- 表单区域 -->
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="挂号数量">
          <el-input v-model.number="form.count"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-time-picker v-model="form.startTime" format="HH:mm"></el-time-picker>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-time-picker v-model="form.endTime" format="HH:mm"></el-time-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  import ARJaxios from "@/network/axios"
  
  <script>
  export default {
    data() {
      return {
        form: {
          count: null,
          startTime: '',
          endTime: ''
        }
      };
    },
    methods: {
      submitForm() {
        // 调用后端 API 保存数据
      }
    }
  };
  </script>