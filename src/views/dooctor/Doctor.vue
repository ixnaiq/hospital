 <!-- <template>
   <el-container>
    <el-aside>

    </el-aside>
    <el-main>
        <basic-info></basic-info>
        <cate-gory></cate-gory>
        <patient-info></patient-info>
        <schedule-info></schedule-info>
    </el-main>

   </el-container>
 </template>
 
 <script>
import BasicInfo from './childComps/BasicInfo.vue';
import CateGory from './childComps/CateGory.vue';
import PatientInfo from './childComps/PatientInfo.vue';
import ScheduleInfo from './childComps/ScheduleInfo.vue';
 export default {
    components:{
        BasicInfo,
        CateGory,
        PatientInfo,
        ScheduleInfo


    }
 }
 </script>
 
 <style>
 
 </style> -->
 <template>
   <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template v-slot:title><i class="el-icon-message"></i>个人信息</template>
        <el-menu-item-group>
          <!-- <template v-slot:title>分组一</template> -->
          <el-menu-item index="1-1"> 
            <a href="/Users/coisini/Desktop/hospital/project1/hospital/src/views/dooctor/childComps/BasicInfo.vue">选项一</a>
          </el-menu-item>
          <!-- <basic-info index="1-1"></basic-info> -->
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template v-slot:title>选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-submenu index="2">
        <template v-slot:title><i class="el-icon-menu"></i>挂号类别管理</template>
        <el-menu-item-group>
          <!-- <template v-slot:title>分组一</template> -->
          <el-menu-item index="2-1">
            <a href="/Users/coisini/Desktop/hospital/project1/hospital/src/views/dooctor/childComps/CateGory.vue">选项二</a>
          </el-menu-item>
          <!-- <cate-gory index="2-1"></cate-gory> -->
          <!-- <el-menu-item index="2-2">选项2</el-menu-item> -->
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template v-slot:title>选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-submenu index="3">
        <template v-slot:title><i class="el-icon-setting"></i>排班信息管理</template>
        <el-menu-item-group>
          <!-- <template v-slot:title>分组一</template> -->
          <el-menu-item index="3-1">排班模板管理界面</el-menu-item>
          <!-- <registration-management index="3-1">排班模板管理界面</registration-management> -->
          <!-- <schedule-management index="3-2">排班信息管理界面</schedule-management> -->
          <el-menu-item index="3-2">排班信息管理界面</el-menu-item>
            <!-- <template-management></template-management> -->
          <el-menu-item index="3-3">挂号管理界面</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template v-slot:title>选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-submenu index="4">
        <template v-slot:title><i class="el-icon-setting"></i>患者信息</template>
        <el-menu-item-group>
          <!-- <template v-slot:title>分组一</template> -->
          <el-menu-item index="4-1">选项1</el-menu-item>
          <!-- <el-menu-item index="4-2">选项2</el-menu-item> -->
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="4-4">
          <template v-slot:title>选项4</template>
          <el-menu-item index="4-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template v-slot:dropdown>
            <el-dropdown-menu >
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
        </template>
        
      </el-dropdown>
      <span></span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
      <basic-info></basic-info>
        <cate-gory></cate-gory>
        <patient-info></patient-info>
        <schedule-info></schedule-info>
    </el-main>
  </el-container>
</el-container>
 </template>
 
 <script>
 export default {
//     components:{
//         BasicInfo,
//         CateGory,
//         PatientInfo,
    //     RegistrationManagement,
    //     ScheduleManagement,
    //     TemplateManagement

    // },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
 }
 </script>
 
 <style>
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    }
  
  .el-aside {
    color: #333;
  }
 </style>