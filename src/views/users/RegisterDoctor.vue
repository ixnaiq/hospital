<template>
  <div class="container">
    <div class="register-box">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="full_name">
          <el-input v-model.number="ruleForm.full_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  import ARJaxios from '@/network/axios';
  
    <script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        full_name: "",
        pass: "",
      },
    };
  },
  methods: {
    async submitForm(formName) {
      //   console.log(this.ruleForm)
      // const res = await ARJaxios({method: 'POST', url:'/save', data: this.ruleForm})
      // console.log('res:', res)
    },

    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    register() {
      this.$router.push("/api/patient");
      axios
        .post("/api/patient/save", {
          username: this.ruleForm.username,
          password: this.ruleForm.pass,
          full_name: this.ruleForm.full_name,
        })
        .then(function (res) {
          console.log(res);
          if (res.type === "doctor") {
            this.$router.push("/doctor");
          } else {
            this.$router.push("/patient");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
  <style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
}
.register-box {
  width: 300px;
  background: #fff;
  padding: 60px;
  border-radius: 20px;
}
</style>