<template>
  <div class="container">
    <div class="login-box">
      <el-form
        :model="ruleForm"
        status-icon
        :ref="ruleForm"
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
        <!-- <el-form-item >
          <el-select v-model="userType" placeholder="请选择" class="select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item> 
          <el-button type="primary" @click="login" class="login" @submit="submitForm('formName')">登录</el-button>
            <router-link to="/register">
                <el-button type="primary">注册</el-button>
            </router-link>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item> 
      </el-form>
    </div>
  </div>
</template>

<script>
// import ARJaxios from "@/network/axios";
import axios from "axios";

export default {
  data() {
    return {
      ruleForm: {
        username: "",
        pass: "",
        // full_name: "",
        // gender:"",
        // age:"",
        // phonenumber: "",
        // age: "",
      },
      // options: [
      //   {
      //     value: "doctor",
      //     label: "医生",
      //   },
      //   {
      //     value: "patient",
      //     label: "患者",
      //   },
      // ],
      userType: "",
    };
  },
  methods: {
    async submitForm(formName) {
      //   console.log(this.ruleForm)
      //   const res = await ARJaxios({
      //     method: "POST",
      //     url: "/api/login",
      //     data: this.ruleForm,
      //   });
      //   console.log("res:", res);、
      try {
        const response = await axios.post(
          "http://117.50.163.249:8086/api/common/login",
          {
            username: this.ruleForm.username,
            password: this.ruleForm.pass,
          }
        );
        // 将返回的 JWT Token 保存到 localStorage 中
        localStorage.setItem('token',response.data.data.token) 
        // 根据登录用户的角色跳转到不同的页面
        if (response.data.data.category === "医生") {
          this.$router.push("/doctor");
        } else {
          this.$router.push("/patient");
        }
      } catch (error) {
        console.log(error);
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      this.submitForm();
    },
    //   axios
    //     .post("http://117.50.163.249:8086/api/common/login", {
    //       username: this.ruleForm.username,
    //       password: this.ruleForm.pass, 
    //     })
    //     .then(function (res) {
    //       console.log(res);
    //       if (res.category === "doctor") {
    //         localStorage.setItem('token', response.data.token);
    //         this.$router.push("/doctor");
    //         console.log(this.$router, '12312')
    //       } else {
    //         localStorage.setItem('token', response.data.token);
    //         this.$router.push("/patient");
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
    // login() {
    //   //   this.$router.push("/patient");
    //   axios
    //     .post("http://117.50.163.249:8086/api/common/login", {
    //       username: this.ruleForm.username,
    //       password: this.ruleForm.pass,
    //     })
    //     .then( res => {
    //       localStorage.setItem('token', response.data.token);
    //       if (res.category === "doctor") { 
    //         this.$router.push("/doctor");
    //         console.log(this.$router, '12312')
    //       } else { 
    //         this.$router.push("/patient");
    //       }
    //       // 这里区分一下跳转患者还是医生
    //       // this.$router.push({path: '/patient', query: response.data.data})
    //       // console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }, 
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
  background: transparent url(../../assets/imge/设计稿20230527-4.jpg) 55% 80%
    scroll repeat-y;
  background-size: 100% 100%;
  opacity: 0.8;
  /* background-image: url(../../assets/imge/设计稿20230527-4.jpg); */
  /* background-image:url("../../assets/imge/"); */
}
.login-box {
  width: 300px;
  background: #fff;
  padding: 60px;
  border-radius: 20px;
  opacity: 0.95;
}
.login{
    width: 200px;
    height: 40px;
    margin-bottom: 20px;
}
.select{
    width: 200px;
}
/* .register{
    font-size: 20px;
} */
</style>