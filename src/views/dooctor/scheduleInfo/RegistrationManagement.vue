<template>
  <div>
    <el-row>
      <el-button-group>
        <el-button type="primary" @click="showUnreserved">未预约</el-button>
        <el-button type="primary" @click="showCompleted">已完成</el-button>
        <el-button type="primary" @click="showPaid">已付款</el-button>
      </el-button-group>
    </el-row>
    <el-row>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="time" label="时间" width="180"></el-table-column>
        <el-table-column prop="patient" label="患者" width="180"></el-table-column>
        <el-table-column prop="status" label="状态" width="180"></el-table-column>
        <el-table-column prop="amount" label="金额" width="180"></el-table-column>
        <el-table-column label="操作">
          <template v-slot:scope>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { time: '2022-06-01 14:30', patient: '张三', status: '未预约', amount: '100元' },
        { time: '2022-06-02 09:00', patient: '李四', status: '已付款', amount: '80元' },
        { time: '2022-06-03 16:00', patient: '王五', status: '已完成', amount: '120元' },
        { time: '2022-06-04 10:30', patient: '赵六', status: '未预约', amount: '90元' },
        { time: '2022-06-05 15:00', patient: '钱七', status: '已付款', amount: '70元' },
      ]
    };
  },
  methods: {
    showUnreserved() {
      // 调用后端 API，获取未预约的挂号数量
      ARJaxios.get('/api/doctor/getFirstStatusRegisterType')
        .then(response => {
          this.tableData = response.data;
        })
        .catch(error => {
          console.error(error);
        });
      
    },
    showCompleted() {
      // 调用后端 API，获取已完成的挂号订单信息
      ARJaxios.get('/api/doctor/getThirdStatusRegisterType')
        .then(response => {
          this.tableData = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    showPaid() {
      // 调用后端 API，获取已付款的挂号订单信息
      ARJaxios.get('/api/paid-orders')
        .then(response => {
          this.tableData = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleEdit(index, row) {
      ARJaxios.put(`/api/orders/${row.id}`, row)
        .then(response => {
          console.log('编辑成功');
        })
        .catch(error => {
          console.error(error);
        });
      // 编辑挂号信息，与后端 API 交互
    },
    handleDelete(index, row) {
      ARJaxios.delete(`/api/doctor/deleteRegisterType${row.id}`)
        .then(response => {
          console.log('删除成功');
          this.tableData.splice(index, 1);
        })
        .catch(error => {
          console.error(error);
        });
      // 删除挂号信息，与后端 API 交互
    }
  }
};
</script>