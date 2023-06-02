<template>
  <el-container>
    <el-header>医生基本信息</el-header>
    <el-main>
      <el-form
        :model="doctor"
        label-position="left"
        ref="doctorForm"
        :rules="rules"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="doctor.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input-number
            v-model="doctor.age"
            placeholder="请输入年龄"
            :min="1"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="doctor.gender">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="国籍" prop="nation">
          <el-input v-model="doctor.nation" placeholder="请输入国籍"></el-input>
        </el-form-item>
        <el-form-item label="民族" prop="nationality">
          <el-input
            v-model="doctor.nationality"
            placeholder="请输入民族"
          ></el-input>
        </el-form-item>
        <el-form-item label="科室" prop="department">
          <el-select v-model="doctor.department" placeholder="请选择科室">
            <el-option label="内科" value="内科"></el-option>
            <el-option label="外科" value="外科"></el-option>
            <el-option label="儿科" value="儿科"></el-option>
            <el-option label="妇产科" value="妇产科"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="擅长方向" prop="specialty">
          <el-input
            v-model="doctor.specialty"
            placeholder="请输入擅长方向"
          ></el-input>
        </el-form-item>
        <el-form-item label="职位" prop="title">
          <el-input v-model="doctor.title" placeholder="请输入职位"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('doctorForm')"
            >保存</el-button
          >
          <el-button @click="resetForm('doctorForm')">重置</el-button>
        </el-form-item>
        <el-from-item>
          <router-link to="/register?id=123&name=doctor">
            <el-button type="primary">注册</el-button>
          </router-link>
        </el-from-item>
      </el-form>
    </el-main>
  </el-container>
</template>


<script>
import ARJaxios from "@/network/axios" 

export default {
  data() {
    return {
      doctor: {
        name: "",
        age: "",
        gender: "男",
        department: "",
        specialty: "",
        title: "",
        remark: "",
        phone: "",
        nation: "",
        nationality: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2-20 个字符", trigger: "blur" },
        ],
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          { type: "number", message: "年龄必须为数字值", trigger: "blur" },
          { min: 1, max: 150, message: "年龄范围为1-150岁", trigger: "blur" },
        ],
        gender: [{ required: true, message: "请选择性别", trigger: "change" }],
        nation: [{ required: true, message: "请选择国籍", trigger: "change" }],
        nationality: [
          { required: false, message: "请选择民族", trigger: "change" },
        ],
        department: [
          { required: true, message: "请选择科室", trigger: "change" },
        ],
        specialty: [
          { required: false, message: "请输入擅长方向", trigger: "blur" },
          { min: 2, max: 100, message: "长度在 2-100 个字符", trigger: "blur" },
        ],
        position: [
          { required: true, message: "请输入职位", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2-20 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    async submitForm(formName) {
      const res = await ARJaxios({
        method: "PUT",
        url: "/api/doctor/update/${doctor.id}",
        data: this.ruleForm,
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>