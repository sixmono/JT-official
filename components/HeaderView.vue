<template>
  <div class="swap">
    <div class="swap-both">
      <div class="swap-logo"><b>疆通科技</b></div>
      <div class="swap-Navigation">
        <nav class="swap-Navigation-list">
          <router-link class="swap-Navigation-list-link" to="/"
            >首页</router-link
          >
          <router-link class="swap-Navigation-list-link" to="/AboutUs"
            >我们</router-link
          >
          <router-link class="swap-Navigation-list-link" to="/Service"
            >业务</router-link
          >
          <router-link class="swap-Navigation-list-link" to="/Develop"
            >优势</router-link
          >
          <router-link class="swap-Navigation-list-link" to="/CaSe"
            >案例</router-link
          >
        </nav>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
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
.swap-both {
  display: flex;
  justify-content: space-between;
}
.swap-logo {
  font-size: 30px;
  margin-left: 100px;
  line-height: 80px;
}
.swap-Navigation {
  margin-right: 100px;
}
.swap-Navigation-list-link {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  display: inline-flex;
  list-style-type: none;
  text-decoration: none;
  color: black;
}
.swap-Navigation-list-link :hover {
  border-bottom: 1px solid red;
}
</style>
