<template>
    <div>
      <el-table :data="patientList">
        <el-table-column prop="name" label="患者姓名"></el-table-column>
        <el-table-column prop="age" label="患者年龄"></el-table-column>
        <el-table-column prop="gender" label="患者性别"></el-table-column>
        <el-table-column prop="missedTimes" label="失约次数"></el-table-column>
        <el-table-column label="操作">
          <template v-slot:default="scope">
            <el-button size="mini" @click="editPatient(scope.row)">编辑</el-button>
            <el-button size="mini" @click="viewHistory(scope.row)">查看历史预约</el-button>
          </template>
        </el-table-column>
      </el-table>
  
      <el-dialog title="编辑患者信息" v-model:visible="editDialogVisible">
        <el-form :model="editForm" label-width="80px">
          <el-form-item label="患者姓名">
            <el-input v-model="editForm.name"></el-input>
          </el-form-item>
          <el-form-item label="患者年龄">
            <el-input v-model="editForm.age" type="number"></el-input>
          </el-form-item>
          <el-form-item label="患者性别">
            <el-select v-model="editForm.gender">
              <el-option label="男" value="0"></el-option>
              <el-option label="女" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <template v-slot:footer>
            <div class="dialog-footer">
                <el-button @click="editDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="editPatientConfirm">确 定</el-button>
            </div>
        </template>
        
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        patientList: [],  // 患者列表
        editDialogVisible: false, // 编辑对话框显示
        editForm: {
          name: '',
          age: 0,
          gender: 0
        }
      }
    },
    created() {
      this.getPatientList()  // 获取患者列表
    },
    methods: {
      getPatientList() {  // 获取患者列表API
        // ...
      },
      editPatient(row) {  // 显示编辑患者对话框
        this.editForm = row
        this.editDialogVisible = true
      }, 
      editPatientConfirm() {  // 确认编辑患者
        // 发送编辑患者请求
        // ...
        this.editDialogVisible = false
        this.getPatientList()
      },
      viewHistory(row) {  // 查看患者历史预约
        // ...
      }
    }
  }
  </script>