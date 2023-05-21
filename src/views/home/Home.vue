<template>
    <div class="register-login">
      <h1>登录界面</h1>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="用户名" prop="username" >
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="full_name">
          <el-input v-model="form.full_name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <!-- <el-form-item label="性别" prop="gender">
          <select id="gender" v-model="gender">
          <option value="male">男</option>
          <option value="female">女</option>
          </select>
            <el-input v-model="from.gender" placeholder="请选择你的性别"></el-input>
        </el-form-item> -->
        <el-form-item label="性别" prop="gender">
        <el-select v-model="form.gender" placeholder="请选择">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
        </el-select>
      </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入电话"></el-input>
        </el-form-item>
        <el-form-item v-if="isDoctor" label="推荐人ID" prop="referrer">
          <el-input v-model="form.referrer" placeholder="请输入推荐人ID"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">提交</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
          <el-button type="text" @click="toggleRole">切换为{{ isDoctor ? '患者' : '医生' }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  import { Form, FormItem, Input, Button } from 'element-ui'
  
  export default {
    components: {
      [Form.name]: Form,
      [FormItem.name]: FormItem,
      [Input.name]: Input,
      [Button.name]: Button
    },
    data() {
      return {
        isDoctor: false,
        form: {
          username: '',
          password: '',
          full_name: '',
          gender:'',
          email: '',
          phone: '',
          referrer: ''
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            const apiPath = this.isDoctor ? '/doctor/register' : '/patient/register'
            // 调用后端API
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      toggleRole() {
        this.isDoctor = !this.isDoctor
      },
      submitForm() {
      // 提交表单
      // ...
      // 使用 $router.push 方法跳转到患者详情页面，并传递查询参数
      this.$router.push({
        path: '/Patient',
        query: {
          name: this.form.username,
          gender: this.from.gender,
          phone: this.form.phone,
          email: this.form.email
        }
      })
    }
    }
  }
  </script>
  
  <style scoped>
  .register-login {
    max-width: 1000px;
    margin: 50px auto;
  }
  /* .sex{
    width: 1000px;
  } */
  </style>
  <!-- <template>
    <div class="registration-login">
      <el-form :model="formData" ref="form" label-width="120px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formData.password" />
        </el-form-item>
        <el-form-item label="姓名" prop="full_name">
          <el-input v-model="formData.full_name" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formData.email" />
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="formData.phone" />
        </el-form-item>
        <el-form-item v-if="isDoctor" label="推荐人ID" prop="referrer">
          <el-input v-model="formData.referrer" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
          <el-input
            type="checkbox"
            v-model="isDoctor"
            label="我是医生"
            @change="switchRole"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDoctor: false,
        formData: {
          username: '',
          password: '',
          full_name: '',
          email: '',
          phone: '',
          referrer: ''
        }
      }
    },
    methods: {
      switchRole() {
        this.isDoctor = !this.isDoctor
      },
      submitForm() {
        // 提交表单，根据 isDoctor 调用患者或医生的 API
        if (this.isDoctor) {
          // 调用医生注册登录 API
          console.log('医生注册登录', this.formData)
        } else {
          // 调用患者注册登录 API
          console.log('患者注册登录', this.formData)
        }
      },
      resetForm() {
        this.$refs.form.resetFields()
      }
    }
  }
  </script>
  
  <style scoped>
  .registration-login {
    width: 400px;
    margin: 0 auto;
  }
  </style> -->
