<template>
    <div>
      <!-- 查询条件 -->
      <el-form inline>
        <el-form-item label="挂号状态">
          <el-select v-model="status" placeholder="请选择">
            <el-option label="未预约" value="unreserved"></el-option>
            <el-option label="已完成" value="completed"></el-option>
            <el-option label="已付款" value="paid"></el-option>
          </el-select>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="search()">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 挂号表格 -->
      <el-table :data="registrations" style="width: 100%">
        <el-table-column prop="id" label="挂号 ID" width="180"></el-table-column>
        <el-table-column prop="patientName" label="患者姓名" width="180"></el-table-column>
        <el-table-column prop="doctorName" label="医生姓名" width="180"></el-table-column>
        <el-table-column prop="status" label="挂号状态" width="180">
          <template v-slot:default="scope">
            <span>{{ statusText(scope.row.status) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template v-slot:default="scope">
            <el-button @click="editRegistration(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="deleteRegistration(scope.$index, scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        status: '',
        registrations: []
      };
    },
    methods: {
      search() {
        // 调用后端 API 获取挂号数据
      },
      statusText(status) {
        const statusMap = {
          unreserved: '未预约',
          completed: '已完成',
          paid: '已付款'
        };
        return statusMap[status] || '';
      },
      editRegistration(index, row) {
        // 调用后端 API 更新挂号数据
      },
      deleteRegistration(index, row) {
        // 调用后端 API 删除挂号数据
      }
    }
  };
  </script>