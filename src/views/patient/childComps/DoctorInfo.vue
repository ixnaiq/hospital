<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-top: 20px"
      height="500"
    >
      <el-table-column fixed prop="department" label="科室"></el-table-column>
      <el-table-column fixed prop="name" label="姓名"></el-table-column>
      <el-table-column fixed prop="title" label="职位"></el-table-column>
      <el-table-column fixed prop="gender" label="性别"></el-table-column>
      <el-table-column fixed prop="specialty" label="擅长"></el-table-column>
      <el-table-column label="操作">
        <template v-slot:default="scope">
          <el-button @click="showDoctorDetail(scope.row)">查看详细</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="医生详细介绍"
      :visible="showDoctorDetailDialog"
      class="showDoctorDetail"
      @close="handleCloseDoctorDetailDialog"
    >

      <el-card class="doctor-card">
        <!-- <div v-html="doctorDetail"></div> -->
        <div >
          <img src="../../../assets/imge/ed1f3883dbad286a5e70bfdb21a0a0bc.jpg" alt="" class="imge">
            <el-row>
              <el-col>姓名：{{ doctorDetail.name }}</el-col>
              <el-col>年龄：{{ doctorDetail.age }}</el-col>
              <el-col>性别：{{ doctorDetail.gender }}</el-col>
              <el-col>职位：{{ doctorDetail.title }}</el-col>
              <el-col>部门：{{ doctorDetail.department }}</el-col>
              <el-col>长评：{{ doctorDetail.remark }}</el-col>
            </el-row> 
        </div>
      </el-card>
    </el-dialog>
  </div>
</template> 
  <script>
import ARJaxios from "@/network/axios";
// import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        {
          //   department: '内科',
          //   name: '张三',
          //   position: '主任医师',
          //   gender: '男',
          //   specialty: '心血管疾病',
          // },
          // {
          //   department: '外科',
          //   name: '李四',
          //   position: '主任医师',
          //   gender: '男',
          //   specialty: '肝胆疾病',
        },
      ],
      selfDoctor: {},
      showDoctorDetailDialog: false, // 是否显示医生详细介绍弹窗
      doctorDetail: {}, // 当前医生的详细介绍
    };
  },
  mounted() {
    // 获取医生列表数据
    this.fetchDoctorList();
  },
  methods: {
    handleCloseDoctorDetailDialog() {
      this.showDoctorDetailDialog = false;
    },
    // 获取医生列表数据的方法，根据具体情况实现
    fetchDoctorList() {
      ARJaxios({ url: "/api/patient/findAll", method: "GET" }).then((res) => {
        this.tableData = res.data;
      });
      // const token = localStorage.getItem('token')
      //     axios.get("http://117.50.163.249:8086/api/doctors/findAll"), {
      //   headers: { Authorization: 'Bearer ${token}' }
      // }
      //       .then((response) => {
      //         // 获取成功，将数据赋值给tableData
      //         this.tableData = response.data;
      //       })
      //       .catch((error) => {
      //         // 获取失败，处理错误信息
      //         console.error(error);
      //       });
      //     this.tableData = doctorList;
    },
    // 获取当前登录医生的信息的方法，根据具体情况实现
    // fetchSelfDoctor() {
    //   ARJaxios.get("/api/doctor/update")
    //     .then((response) => {
    //       // 获取成功，将数据赋值给selfDoctor
    //       this.selfDoctor = response.data;
    //     })
    //     .catch((error) => {
    //       // 获取失败，处理错误信息
    //       console.error(error);
    //     });
    //   this.selfDoctor = selfDoctorInfo;
    // },
    showDoctorDetail(doctor) {
      ARJaxios({
        url: `/api/patient/getDoctorById`,
        method: "GET",
        params: {
          id: doctor.id,
        },
      }).then((response) => {
        this.doctorDetail = response.data;
        console.log(this.doctorDetail);
        this.showDoctorDetailDialog = true;
      });
    },
  },
};
</script>
<style>
/* .showDoctorDetail{
  
} */
.doctor-card {
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #fff;
}

.doctor-card h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.doctor-card p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.doctor-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}
.imge{ 
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>