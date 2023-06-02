<template>
  <el-container>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
      <div class="logo">
        <img   src="../../assets/imge/设计稿20230527-3.jpg" alt="">
      </div>
      <el-submenu index="1">
        <template v-slot:title>
          <i class="el-icon-location"></i> <span>基本信息管理界面</span>
        </template>
        <el-menu-item-group>
          <!-- <span>分组一</span> -->
          <router-link to="/doctor/basicinfo">
            <el-menu-item index="1-1">基本信息</el-menu-item>
          </router-link>
          <router-link to="/doctor/category">
            <el-menu-item index="1-2">挂号类别</el-menu-item>
          </router-link> 
          <router-link to="/doctor/editdoctor">
            <el-menu-item index="1-3">医生信息</el-menu-item>
          </router-link> 
          <router-link to="/doctor/patientinfo">
            <el-menu-item index="1-4">患者信息</el-menu-item>
          </router-link> 
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template v-slot:title>
          <i class="el-icon-location"></i> <span>排班管理页面</span>
        </template>
        <el-menu-item-group>
          <router-link to="/doctor/registrationmanagement">
            <el-menu-item index="2-1">患者挂号管理页面</el-menu-item>
          </router-link>
          <router-link to="/doctor/schedulemanagement">
            <el-menu-item index="2-2">排班管理页面</el-menu-item>
          </router-link>
          <router-link to="/doctor/templatemanagement">
            <el-menu-item index="2-3">排班模块管理</el-menu-item>
          </router-link>
          
        </el-menu-item-group>
      </el-submenu> 
    </el-menu>
    <el-main >
      <div class="main_content"></div>
        <router-view></router-view>
      </el-main>
  </el-container>
</template>  <script>
export default {
  data() {
    return { isCollapse: true };
    console.log(this.$route);
    // this.query = JSON.stringify(this.$route.query)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 800px;
  /* margin-top: 200px; */
  /* border: 10px; */
}
.logo img{
  width: 200px;
  height: 200px;
  
}
/* .main_content{
width: 100%;
height: 80px;
background-color: rgb(34, 172, );
} */
</style>
 