<template>
  <div>
    <!-- 日期选择器 -->
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="选择日期"
      @change="changeDate"
    ></el-date-picker>
    <!-- 排班表格 -->
    <el-table :data="schedules" style="width: 100%">
      <el-table-column prop="id" label="排班 ID" width="180"></el-table-column>
      <el-table-column
        prop="startTime"
        label="开始时间"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="endTime"
        label="结束时间"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="count"
        label="挂号数量"
        width="180"
      ></el-table-column>
      <el-table-column label="操作" width="180">
        <template v-slot:default="scope">
          <el-button
            @click="editSchedule(scope.$index, scope.row)"
            type="text"
            size="small"
            >编辑</el-button
          >
          <el-button
            @click="deleteSchedule(scope.$index, scope.row)"
            type="text"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

import ARJaxios from "@/network/axios"
  
  <script>
export default {
  data() {
    return {
      date: "",
      schedules: [
        { id: 1, startTime: "09:00", endTime: "12:00", count: 10 },
        { id: 2, startTime: "14:00", endTime: "17:00", count: 10 },
      ],
    };
  },
  methods: {
    changeDate() {
      axios
        .get("/api/doctor/newTemplate")
        .then((response) => {
          this.schedules = response.data;
          console.log("排班数据获取成功", response.data);
        })
        .catch((error) => {
          console.log("排班数据获取失败", error);
        });
    },
    editSchedule(index, row) {
      axios.put("/api/updateSchedule");
    },
    deleteSchedule(index, row) {
      axios.put("/api//deleteTemplate");
    },
  },
};
</script>