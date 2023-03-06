<template>
  <div class="header">
    <el-row>
      <el-col :span="12"
        ><div class="grid-content ep-bg-purple"></div>
        <div class="grid-content-item">疆通科技</div>
      </el-col>
      <el-col :span="12"
        ><div class="grid-content ep-bg-purple-light" />
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <router-link class="swap-Navigation-list-link" to="/"
              >首页</router-link
            ></el-menu-item
          >
          <el-menu-item index="2"
            ><router-link class="swap-Navigation-list-link" to="/AboutUs"
              >我们</router-link
            ></el-menu-item
          >
          <el-menu-item index="3"
            ><router-link class="swap-Navigation-list-link" to="/Service"
              >业务/服务</router-link
            ></el-menu-item
          >
          <el-menu-item index="4">
            <router-link class="swap-Navigation-list-link" to="/Develop"
              >优势</router-link
            ></el-menu-item
          >
          <el-menu-item index="5"
            ><router-link class="swap-Navigation-list-link" to="/CaSe"
              >案例</router-link
            ></el-menu-item
          >
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

let checked;
const activeIndex2 = ref(checked);
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
  checked.value = key;
};
</script>

<style scoped>
.header {
  width: 100%;
  position: fixed;
  z-index: 999;
}
.el-row {
  background-color: #545c64;
}
.el-menu-demo {
  height: 80px;
  margin-left: 160px;
  border: none;
}
.grid-content-item {
  font-size: 30px;
  line-height: 80px;
  margin-left: 30px;
}
.swap-Navigation-list-link {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  text-decoration: none;
}
.el-menu-item {
  width: 100px;
  height: 100%;
  padding: 0;
  line-height: 100%;
}
</style>
