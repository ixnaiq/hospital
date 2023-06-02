<template>
  <div>
    <h2>挂号记录</h2>
    <el-table :data="appointments" border>
      <el-table-column prop="orderId" label="编号"></el-table-column>
      <el-table-column prop="doctorName" label="医生姓名"></el-table-column>
      <el-table-column prop="department" label="科室"></el-table-column>
      <el-table-column prop="date" label="挂号日期"></el-table-column>
      <el-table-column prop="status" label="订单状态">
        <template v-slot="{ row }">
          <el-tag :type="row.status === '已预约' ? 'info' : (row.status === '已付款' ? 'success' : 'warning')">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="{ row }">
          <el-button type="text" v-if="row.status === '已完成' || row.status === '已付款'" @click="showDetailDialog(row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="挂号详情" :visible="detailDialogVisible">
      <p>{{ selectedAppointment.doctorName }} {{ selectedAppointment.date }}</p>
      <p>{{ selectedAppointment.diagnosis }}</p>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      appointments: [],
      detailDialogVisible: false,
      selectedAppointment: null
    }
  },
  mounted() {
    this.getAppointments()
  },
  methods: {
    getAppointments() {
      axios.get('/api/doctor/getHistoryRegisterMessage').then(response => {
        this.appointments = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    showDetailDialog(appointment) {
      this.detailDialogVisible = true
      this.selectedAppointment = appointment
    }
  }
}
</script>