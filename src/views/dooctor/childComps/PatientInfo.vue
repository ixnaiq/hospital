<template>
  <div>
    <el-table :data="patientList">
      <el-table-column prop="name" label="患者姓名"></el-table-column>
      <el-table-column prop="age" label="患者年龄"></el-table-column>
      <el-table-column prop="gender" label="患者性别"></el-table-column>
      <el-table-column prop="missedTimes" label="失约次数"></el-table-column>
      <el-table-column label="操作" >
        <template v-slot:default="scope">
          <el-button size="mini" @click="editPatient(scope.row)"
           class="editer">编辑</el-button> 
    <el-button type="primary" @click="showDialog">查看历史预约</el-button>
    <el-dialog v-model:visible="dialogVisible">
      <span>{{ dialogContent }}</span>
      <template v-slot:footer>
        <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
      </template>
    </el-dialog>
  
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑患者信息" v-model:visible="editDialogVisible">
      <el-form :model="editForm" label-width="80px">
        <el-form-item label="患者姓名">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="患者年龄">
          <el-input v-model="editForm.age" type="number"></el-input>
        </el-form-item>
        <el-form-item label="患者性别">
          <el-select v-model="editForm.gender">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template v-slot:footer>
        <div class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editPatientConfirm"
            >确 定</el-button
          >
        </div>
      </template>
    </el-dialog>
  </div>
</template>

 
  <script>
   import ARJaxios from "@/network/axios"
  
export default {
  data() {
    return {
      patientList: [
        { name: "张三", age: 29, gender: "男", missedTimes: 2 },
        { name: "李四", age: 35, gender: "女", missedTimes: 1 },
        { name: "王五", age: 42, gender: "男", missedTimes: 0 },
        { name: "赵六", age: 27, gender: "女", missedTimes: 3 },
      ], // 患者列表
      editDialogVisible: false, // 编辑对话框显示
      editForm: {
        name: "",
        age: 0,
        gender: 0,
      },
      dialogVisible: false,
      dialogContent: "",
    };
  },
  created() {
    this.getPatientList(); // 获取患者列表
  },
  methods: {
    getPatientList() {
      // 获取患者列表API
      // ...
      ARJaxios.get('/api/doctor/getPatientMessage')
        .then(response => {
          this.patientList = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    editPatient(row) {
      // 显示编辑患者对话框
      this.editForm = row;
      this.editDialogVisible = true;
    },
    editPatientConfirm() {
      const params = {
        name:this.name,
        age:this.age,
        gender:this.gender,
        missedTimes:this.missedTimes

    // ...
  };

  // 发送编辑患者请求
  ARJaxios.post("/api/editPatient", params)
    .then((response) => {
      // 编辑患者成功
      this.$message.success("编辑患者成功");
      this.editDialogVisible = false;
      this.getPatientList();
    })
    .catch((error) => {
      // 编辑患者失败
      this.$message.error("编辑患者失败");
      console.error(error);
    });
      // 确认编辑患者
      // 发送编辑患者请求
      // ...
      this.editDialogVisible = false;
      this.getPatientList();
    },
    showDialog() { 
      this.dialogVisible = true;
      // 发起请求获取弹窗内容
      ARJaxios.get("/api/doctor/getHistoryRegisterMessage").then((response) => {
        this.dialogContent = response.data;
      });
    },
  },
};
</script>
<style>
.editer{
  width: 50px;
}
</style>