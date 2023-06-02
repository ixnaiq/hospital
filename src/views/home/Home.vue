<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="full_name">
        <el-input v-model="form.full_name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="form.gender">
          <el-radio label="male">男</el-radio>
          <el-radio label="female">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="isDoctor" label="推荐人ID" prop="referrer">
        <el-input v-model="form.referrer"></el-input>
      </el-form-item>
      <el-form-item v-if="!isDoctor" label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item v-if="!isDoctor" label="电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button-group>
          <el-button :type="isPatient ? 'primary' : ''" @click="switchToPatient"
            >患者</el-button
          >
          <el-button :type="isDoctor ? 'primary' : ''" @click="switchToDoctor"
            >医生</el-button
          >
          <el-button @click="jumpToOtherPage">jump</el-button>
        </el-button-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">{{
          isRegister ? "注册" : "登录"
        }}</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="isRegister = !isRegister">{{
          isRegister ? "已有账号？去登录" : "没有账号？去注册"
        }}</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      v-model:visible="registerSuccessDialogVisible"
      title="注册成功"
      center
    >
      <p>恭喜您注册成功！</p>
      <template v-slot:footer>
        <span class="dialog-footer">
          <el-button
            type="primary"
            @click="registerSuccessDialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
    <el-dialog
      v-model:visible="loginSuccessDialogVisible"
      title="登录成功"
      center
    >
      <p>欢迎回来！</p>
      <template v-slot:footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="loginSuccessDialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
      <!-- <span v-slot:footer class="dialog-footer"> -->

      <!-- </span> -->
    </el-dialog>
    <el-dialog v-model:visible="notRegisteredDialogVisible" title="提示" center>
      <p>您还未注册，请先注册！</p>
      <template v-slot:footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="notRegisteredDialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
      <!-- <span v-slot:footer class="dialog-footer"> -->

      <!-- </span> -->
    </el-dialog>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      isRegister: true, // 默认是注册界面
      isPatient: true, // 默认是患者注册登录
      isDoctor: false,
      form: {
        username: "",
        password: "",
        full_name: "",
        gender: "",
        email: "",
        phone: "",
        referrer: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        full_name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
        email: [
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        phone: [
          {
            pattern: /^\d{11}$/,
            message: "请输入正确的11位手机号码",
            trigger: ["blur", "change"],
          },
        ],
        referrer: [
          { required: true, message: "请输入推荐人ID", trigger: "blur" },
        ],
      },
      registerSuccessDialogVisible: false,
      loginSuccessDialogVisible: false,
      notRegisteredDialogVisible: false,
    };
  },
  methods: {
    switchToPatient() {
      this.isPatient = true;
      this.isDoctor = false;
      this.form.email = "";
      this.form.phone = "";
      this.$refs.form.clearValidate(["email", "phone"]);
      this.$router.push("/basicinfo");
    },
    switchToDoctor() {
      this.isPatient = false;
      this.isDoctor = true;
      this.form.email = "";
      this.form.phone = "";
      this.$refs.form.clearValidate(["email", "phone"]);
    },
    jumpToOtherPage() {
      this.$router.push('/basicinfo');
    },

    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.isRegister) {
            // 注册
            const user = {
              username: this.form.username,
              password: this.form.password,
              full_name: this.form.full_name,
              gender: this.form.gender,
            };
            if (this.isPatient) {
              user.email = this.form.email;
              user.phone = this.form.phone;
              this.registerPatient(user);
            } else {
              user.referrer = this.form.referrer;
              this.registerDoctor(user);
            }
          } else {
            // 登录
            const user = {
              username: this.form.username,
              password: this.form.password,
            };
            if (this.isPatient) {
              this.loginPatient(user);
            } else {
              this.loginDoctor(user);
            }
          }
        }
      });
    },
    registerPatient(user) {
      // 向后端 API 发送注册患者请求
      // 成功时弹出注册成功的提示框
      this.registerSuccessDialogVisible = true;
    },
    registerDoctor(user) {
      // 向后端 API 发送注册医生请求
      // 成功时弹出注册成功的提示框
      this.registerSuccessDialogVisible = true;
    },
    loginPatient(user) {
      // 向后端 API 发送患者登录请求
      // 如果未注册，则弹出未注册的提示框
      // 成功时弹出登录成功的提示框
      this.loginSuccessDialogVisible = true;
    },
    loginDoctor(user) {
      // 向后端 API 发送医生登录请求
      // 如果未注册，则弹出未注册的提示框
      // 成功时弹出登录成功的提示框
      this.loginSuccessDialogVisible = true;
    },
    login() {
      axios
        .post("/api/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          // 处理登录成功的情况
        })
        .catch((error) => {
          // 处理登录失败的情况
        });
    },
  },
};
</script>
  
  <style scoped>
.register-login {
  max-width: 800px;
  margin: 50px auto;
}
/* .sex{
    width: 1000px;
  } */
</style>
