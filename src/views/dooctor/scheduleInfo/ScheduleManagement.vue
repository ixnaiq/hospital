<template>
    <div>
      <!-- 日期选择器 -->
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="选择日期"
        @change="changeDate"
      ></el-date-picker>
      <!-- 排班表格 -->
      <el-table :data="schedules" style="width: 100%">
        <el-table-column prop="id" label="排班 ID" width="180"></el-table-column>
        <el-table-column prop="startTime" label="开始时间" width="180"></el-table-column>
        <el-table-column prop="endTime" label="结束时间" width="180"></el-table-column>
        <el-table-column prop="count" label="挂号数量" width="180"></el-table-column>
        <el-table-column label="操作" width="180">
          <template v-slot:default="scope">
            <el-button @click="editSchedule(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="deleteSchedule(scope.$index, scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        date: '',
        schedules: []
      };
    },
    methods: {
      changeDate() {
        // 调用后端 API 获取排班数据
      },
      editSchedule(index, row) {
        // 调用后端 API 更新排班数据
      },
      deleteSchedule(index, row) {
        // 调用后端 API 删除排班数据
      }
    }
  };
  </script>