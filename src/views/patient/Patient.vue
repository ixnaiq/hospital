<template>
  <div class="home_content">
    <el-container>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
        <div class="logo">
          <img src="../../assets/imge/设计稿20230527-3.jpg" alt="" />
        </div>
        <el-submenu index="1">
          <template v-slot:title>
            <i class="el-icon-location"></i> <span>我的挂号</span>
          </template>
          <el-menu-item-group>
            <!-- <span>分组一</span> -->
            <router-link to="/patient/reservationview">
              <el-menu-item index="1-1">挂号</el-menu-item>
            </router-link>
            <router-link to="/patient/doctorinfo">
              <el-menu-item index="1-2">医生信息</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template v-slot:title>
            <i class="el-icon-location"></i> <span>挂号记录</span>
          </template>
          <el-menu-item-group>
            <router-link to="/patient/recordview">
              <el-menu-item index="2-1">我的记录</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-submenu index="3">
          <template v-slot:title>
            <i class="el-icon-location"></i> <span>退出登录</span>
          </template>
          <div>
            <el-button type="danger" @click="logout">退出登录</el-button>
            
          </div>
        </el-submenu> -->
        <div class="logout">
            <el-button type="danger" @click="logout" class="logoutButton">退出登录</el-button>
            
          </div>
      </el-menu>
      <el-main>
        <div class="main_content"><router-view></router-view></div>
        <!-- <div><el-dialog
              title="确认退出登录"
              v-model:visible="dialogVisible"
              :show-close="false"
              :close-on-click-modal="false"
              :close-on-press-escape="false"
            >
              <span>确定要退出登录吗？</span>
              <template v-slot:footer>
                <span class="dialog-footer">
                  <el-button @click="dialogVisible = false">取消</el-button>
                  <el-button type="primary" @click="logout">确定</el-button>
                </span>
              </template>
            </el-dialog></div> -->
      </el-main>
    </el-container>
  </div>
</template>  
<script>
export default {
  data() {
    return {
      isCollapse: true,
      query: "",
      // dialogVisible: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleLogout() {
      this.dialogVisible = true;
    },
    logout() {
      localStorage.removeItem('token')
      // router.replace('/login')
      // 跳转到登录页面
      this.$router.push("/login");
      // 提示用户已退出登录
      this.$message.success("已退出登录");
      // 关闭弹窗
      this.dialogVisible = false;
    },
  },
  created() {
    console.log(this.$route);
    this.query = JSON.stringify(this.$route.query);
  },
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  /* margin-top: 200px; */
  /* border: 10px; */
}
.logo img {
  width: 200px;
  height: 200px;
}
.logout{
  margin-top: 280px;
 
}
.logoutButton{
  width: 200px;
  height: 50px;
  border: 1px ;
  background-color: hsl(0, 0%, 100%);
  color: black;
  border-color: #fff;
}
/* .main_content{
width: 100%;
height: 80px;
background-color: rgb(34, 172, );
} */
/* .home_content{
  background-color:rgba(159, 201, 244, 0.5);
} */
</style>
 
