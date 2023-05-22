<template>
    <div>
      <el-button @click="addCategory">添加类别</el-button>
      <el-table :data="categoryList">
        <el-table-column prop="name" label="挂号名称"></el-table-column>
        <el-table-column prop="fee" label="挂号费用"></el-table-column>
        <el-table-column prop="time" label="预计看诊时间"></el-table-column>
        <el-table-column label="操作">
          <template v-slot:default="scope">
            <el-button size="mini" @click="editCategory(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteCategory(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  
      <el-dialog title="添加挂号类别" v-model:visible="addDialogVisible">
        <el-form :model="addForm" label-width="80px">
          <el-form-item label="挂号名称">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>
          <el-form-item label="挂号费用">
            <el-input v-model="addForm.fee" type="number"></el-input>
          </el-form-item>
          <el-form-item label="预计看诊时间">
            <el-input v-model="addForm.time" type="number"></el-input>
          </el-form-item>
        </el-form>
        <template v-slot:footer>
            <div class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addCategoryConfirm">确 定</el-button>
        </div>
        </template>
        
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categoryList: [],  // 分类列表
        addDialogVisible: false, // 添加对话框显示
        addForm: {
          name: '',
          fee: 0,
          time: 0
        }
      }
    },
    created() {
      this.getCategoryList()  // 获取分类列表
    },
    methods: {
      getCategoryList() {  // 获取分类列表API
        // ...
      },
      addCategory() {  // 显示添加类别对话框
        this.addDialogVisible = true
      },
      addCategoryConfirm() {  // 确认添加类别
        // 发送添加类别请求
        // ...
        this.addDialogVisible = false
        this.getCategoryList()
      },
      editCategory(row) {  // 编辑类别
        // ...
      },
      deleteCategory(id) {  // 删除类别
        // 发送删除类别请求
        // ...
        this.getCategoryList()
      }
    }
  }
  </script>