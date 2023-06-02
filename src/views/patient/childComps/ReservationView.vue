<template>
  <div>
    <h1 class="title">我的挂号</h1>
    <el-container>
      <div class="block">
        <el-date-picker v-model="date" type="date" placeholder="选择日期" 
        
        >
        </el-date-picker>
      </div>
      <el-time-select
      
        placeholder="起始时间"
        v-model="startTime"
        :picker-options="{
          start: '08:30',
          step: '00:30',
          end: '16:30',
        }"
       
      >
      </el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="endTime"
        :picker-options="{
          start: '09:30',
          step: '00:30',
          end: '17:30',
          minTime: startTime,
        }"
        
      >
      </el-time-select>
      <el-select
        v-model="selectedDepartment"
        placeholder="选择科室"
        @change="fetchDoctors"
      >
        <el-option
          v-for="item in departments"
          :key="item?.value"
          :label="item?.label"
          :value="item?.value"
        >
        </el-option>
      </el-select>
      <el-select
        v-model="selectedDoctor"
        placeholder="选择医生"
        @change="fetchDoctorDetails"
      >
        <el-option
          v-for="item in doctors"
          :key="item.value"
          :label="item?.label"
          :value="item?.value"
        ></el-option>
      </el-select>

      <el-button @click="submitRegistration" type="primary">挂号</el-button>
    </el-container>

    <el-card v-if="showRegistrationDetails">
      <h2>挂号信息</h2>
      <p>科室: {{ selectedDepartmentName }}</p>
      <p>医生: {{ doctorDetails.name }}</p>
      <p>职位: {{ doctorDetails.title }}</p>
      <p>性别: {{ doctorDetails.gender }}</p>
      <p>擅长: {{ doctorDetails.specialty }}</p>
      <p>预约时间: {{ formatDate(date) }} {{ timeRange }}</p>
      <p>费用: {{ doctorDetails.fee }} 元</p>
    </el-card>
  </div>
</template>

<script>
// import axios from "axios";
import ARJaxios from "@/network/axios";

export default {
  data() {
    return { 
      date: "",
      startTime: "",
      endTime: "",
      departments: [],
      doctors: [],
      selectedDepartment: "",
      selectedDoctor: "",
      selectedTime: "",
      showRegistrationDetails: false,
      doctorDetails: {},
    };
  },
  computed: {
    selectedDepartmentName() {
      const department = this.departments.find(
        (dep) => dep.id === this.selectedDepartment
      );
      return department ? department.name : "";
    }, 
    timeRange() {
      return this.startTime + "~" + this.endTime;
    },
    formatDate(date) {
      if (date) {
        return this.date.toLocaleDateString();
      } else {
        return "";
      }
    },
  },
  // watch: {
  //   date: function () {},
  // },

  methods: {
  //   handleDateChange(value) {
  //     console.log(`selected value is ${value}`);
  //   // 日期变化的处理逻辑
  // },
  // handleStartTimeChange(val) {
  //   // 起始时间变化的处理逻辑
  // },
  // handleEndTimeChange(val) {
  //   // 结束时间变化的处理逻辑
  // },
    transformData(data) {
      return data.map((item) => {
        return {
          label: item.name,
          value: item.id,
        };
      });
    },
    // async submit() {
    //   const response = await ARJaxios.get(
    //     "/api/patient//api/patient/getAllRegisterType",
    //     {
    //       date: this.date,
    //       time: this.startTime+~+this.endTime,
    //     }
    //   );
    //   console.log(response.data);
    // },

    fetchDepartments() {
      ARJaxios({
        url: "/api/patient/getDepartmentByDateAndTimeScope",
        method: "GET",
        params: { date: this.formatDate, time: this.timeRange },
      }).then((res) => {
        const department = this.transformData(res.data);
        this.departments = department;
      });
    },
    fetchDoctors() {
      ARJaxios({
        url: "/api/patinet/getNameByDateAndTimeScopeAndDepartment",
        method: "GET",
        params: {
          date: this.formatDate,
          time: this.timeRange,
          department: this.selectedDepartment,
        },
      }).then((res) => {
        this.doctors = this.transformData(res.data);
      });
    },
    // fetchDoctorDetails() {
    //   ARJaxios({
    //     url: "/api/patient/getMessageByDateAndTimeScopeAndDepartmentAndName",
    //     method: "GET",
    //     params: {data:this.data ,time:this.time , department: this.selectedDepartment ,doctor:this.selectedDoctor},
    //   }).then((res) => {
    //     this.doctorDetails = res.data;
    //   });
    // },
    // fetchTimeSlots() {
    //   ARJaxios({
    //     url: "/api/patient/getDataByDepartmentAndName",
    //     method: "GET",
    //   }).then((res) => {
    //     this.tableData = res.data;
    //   });
    // },
    async submitRegistration() {
      await ARJaxios({
        url: "/api/patient/getMessageByDateAndTimeScopeAndDepartmentAndName",
        method: "PUT",
        data: {
          date: this.formatDate,
          time: this.timeRange,
          department: this.selectedDepartment,
          doctorName: this.selectedDoctor,
        },
      }).then(
        (res) => {
          console.log(res.data);
        },
        (rej) => {
          console.error(rej);
        }
      );
      this.showRegistrationDetails = true;
    },
  },
  created() {
    this.fetchDepartments();
  },
};
</script>
<style>
/* .title{
  display:inline-block;
} */
</style>