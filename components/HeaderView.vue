<template>
  <div class="swap">
    <el-row :gutter="0">
      <el-col :span="12" :xs="24">
        <NuxtLink to="/" style="text-decoration: none; list-style: none">
          <div class="swap-logo">
            <img
              src="../static/Banner/header.png"
              style="height: 60px; margin-top: 10px"
              alt=""
            />
          </div>
        </NuxtLink>
      </el-col>
      <el-col :span="12" :xs="24">
        <div class="swap-Navigation">
          <el-menu
            router
            :default-active="this.$router.path"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/AboutUs">我们</el-menu-item>
            <el-menu-item index="/Service">业务</el-menu-item>
            <el-menu-item index="/Develop">客户</el-menu-item>
            <el-menu-item index="/CaSe">案例</el-menu-item>
          </el-menu>
          <router-view /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 750px) {
  .el-menu-demo {
    // margin: 0 auto;
    text-align: center;
    background-color: red;
  }
}
@media screen and (max-width: 800px) {
  .is-justify-space-around {
    margin-top: 80px;
  }
}
* {
  padding: 0;
  margin: 0;
  background-color: #545c64;
}
.el-menu-demo {
  line-height: 80px;
  position: relative;
  position: 999;
  overflow: hidden;
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item {
  height: 80px;
  line-height: 80px;
  width: 75px;
  font-size: 16px;
  text-align: center;
}

.el-header {
  padding: 0;
  z-index: 999;
}

.el-card__body,
.el-main {
  padding: 0;
}

.swap {
  width: 100%;
  height: 80px;
  background-color: #545c64;
}

.swap-logo {
  font-size: 30px;
  color: white;
  margin-left: 20% !important;
  background-color: #545c64;
}

.swap-Navigation-list-link {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  display: inline-flex;
  list-style-type: none;
  text-decoration: none;
  color: white;
}
.swap-Navigation-list-link :hover {
  border-bottom: 1px solid red;
}
</style>
