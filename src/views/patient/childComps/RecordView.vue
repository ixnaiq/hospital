<!-- <template>
    <div>
      <h1>挂号记录</h1>
      <el-table :data="registrations" style="width: 100%">
        <el-table-column prop="id" label="订单编号"></el-table-column>
        <el-table-column prop="date" label="挂号日期"></el-table-column>
        <el-table-column label="订单状态">
          <template #default="{ row }">
            <el-tag :type="getStatusColor(row.status)">
              {{ getStatusText(row.status) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button type="text" size="small" @click="viewRegistration(row)">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        registrations: [
          {
            id: '10001',
           date: '2023-05-10',
            status: 'unreserved'
          },
          {
            id: '10002',
            date: '2023-05-15',
            status: 'completed'
          },
          {
            id: '10003',
            date: '2023-05-18',
            status: 'paid'
          }
        ]
      };
    },
    methods: {
      viewRegistration(registration) {
        // TODO: 实现查看详情的逻辑
        console.log('查看订单详情', registration);
      },
      getStatusColor(status) {
        // 根据订单状态返回不同的颜色
        if (status === 'unreserved') {
          return 'warning';
        } else if (status === 'completed') {
          return 'success';
        } else if (status === 'paid') {
          return 'primary';
        } else {
          return 'danger';
        }
      },
      getStatusText(status) {
        // 根据订单状态返回不同的文本
        if (status === 'unreserved') {
          return '未预约';
        } else if (status === 'completed') {
          return '已完成';
        } else if (status === 'paid') {
          return '已付款';
        } else {
          return '未知状态';
        }
      }
    }
  };
  </script> -->
  <template>
    <div>
      <!-- 筛选条件 -->
      <el-form :inline="true">
        <el-form-item label="订单状态">
          <el-select v-model="query.status" placeholder="请选择">
            <el-option label="未预约" value="unreserved"></el-option>
            <el-option label="已完成" value="finished"></el-option>
            <el-option label="已付款" value="paid"></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="挂号日期">
          <el-date-picker v-model="query.date" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item > -->
      </el-form>
  
      <!-- 挂号记录表格 -->
      <el-table :data="records" style="width: 100%">
        <el-table-column prop="orderId" label="订单号"></el-table-column>
        <el-table-column prop="registerTime" label="挂号时间"></el-table-column>
        <el-table-column prop="department" label="科室"></el-table-column>
        <el-table-column prop="doctor" label="医生"></el-table-column>
        <el-table-column prop="status" label="订单状态">
          <template v-slot:default="scope">
            <el-tag :type="getStatusType(scope.row.status)">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot:default="scope">
            <el-button size="small" @click="viewRecord(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        records: [], // 挂号记录列表
        query: { // 筛选条件
          status: '', // 订单状态
          date: '' // 挂号日期
        }
      };
    },
    mounted() {
      // 页面加载时，获取患者的挂号记录列表
      this.getRecords();
    },
    methods: {
      // 获取患者的挂号记录列表
      getRecords() {
        const params = {
          status: this.query.status,
          date: this.query.date
        };
        axios.get('/api/records', { params })
          .then(response => {
            this.records = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      // 查看挂号记录详情
      viewRecord(record) {
        // 根据订单号跳转到详情页面
        this.$router.push(`/record/${record.orderId}`);
      },
      // 根据订单状态返回对应的标签类型
      getStatusType(status) {
        switch (status) {
          case '未预约':
            return 'warning';
          case '已完成':
            return 'success';
          case '已付款':
            return 'primary';
          default:
            return 'info';
        }
      }
    },
    watch: {
      // 监听筛选条件的变化，重新获取挂号记录列表
      query: {
        handler() {
          this.getRecords();
        },
        deep: true
      }
    }
  };
  </script>