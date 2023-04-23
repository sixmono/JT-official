<template>
  <div class="footer">
    <div class="footer-top">
      <h1 style="background-color: #0d0d0d">联系方式</h1>
      <p>CONTACT US</p>
    </div>

    <el-row :gutter="0">
      <el-col :span="12" :xs="24">
        <div class="footer-left-div">
          <p class="footer-left-p">上海疆通科技有限公司</p>
          <p class="footer-left-p1">邮箱：sales@jungt.com</p>
        </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <div class="label">
          <label for="">姓名： </label><input name="name" v-model="name" />
        </div>
        <div class="label">
          <label for="">电话： </label><input name="phone" v-model="phone" />
        </div>
        <div class="label">
          <label for="">邮箱： </label><input name="email" v-model="email" />
        </div>
        <div class="label">
          <label for="">内容： </label><textarea name="textarea" v-model="textarea" />
        </div>
        <el-button class="btn" @click="submitBtn">提交</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
          <span>请将值全部填完后提交</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">关 闭</el-button>
          </span>
        </el-dialog>
        <el-dialog title="提示" :visible.sync="dialogVisibleName" width="20%">
          <span>请填写完姓名</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisibleName = false">关 闭</el-button>
          </span>
        </el-dialog>
        <el-dialog title="提示" :visible.sync="dialogVisibleEmail" width="20%">
          <span>请填写完邮箱</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisibleEmail = false">关 闭</el-button>
          </span>
        </el-dialog>
        <el-dialog title="提示" :visible.sync="dialogVisiblePhone" width="20%">
          <span>请填写完电话</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisiblePhone = false">关 闭</el-button>
          </span>
        </el-dialog>
        <el-dialog title="提示" :visible.sync="dialogVisibleAll" width="20%">
          <span>您输入的信息已上传,我们将在1-3个工作日联系您</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisibleAll = false">关 闭</el-button>
          </span>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.footer {
  background-color: #0d0d0d;
  color: white;
  &-top {
    padding-top: 5%;
    margin-left: 10%;
    padding-bottom: 2%;
    background-color: #0d0d0d;
  }
  &-left-p {
    font-size: 30px;
    margin-left: 18%;
  }
  &-left-p1 {
    font-size: 20px;
    margin-left: 18%;
  }
}
.label,
.btn {
  font-size: 20px;
  border-bottom: 1px solid white;
  width: 300px;
  margin: 20px 0 20px 10%;
}
input,
textarea {
  background-color: #0d0d0d;
  color: white;
  list-style: none;
  text-decoration: none;
  border: none;
}

input:focus,
textarea:focus {
  list-style: none;
  outline: none;
}
</style>

<script>
export default {
  name: "FooterVIews",
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      textarea: "",
      dialogVisible: false,
      dialogVisibleName: false,
      dialogVisibleEmail: false,
      dialogVisiblePhone: false,
      dialogVisibleAll: false,
    };
  },
  methods: {
    submitBtn() {
      if (
        this.textarea == "" &&
        this.name == "" &&
        this.phone == "" &&
        this.email == ""
      ) {
        this.dialogVisible = true;
      } else if (this.name == "") {
        this.dialogVisibleName = true;
      } else if (this.phone == "") {
        this.dialogVisiblePhone = true;
      } else if (this.email == "") {
        this.dialogVisibleEmail = true;
      } else {
        this.dialogVisibleAll = true;
        localStorage.setItem("信息", [this.name, this.phone, this.email, this.textarea]);
      }
    },
  },
};
</script>
