<template>
  <el-container>
    <el-header>
      <HeaderView />
    </el-header>
    <el-main>
      <MainView />
    </el-main>
    <el-footer>
      <FooterView />
    </el-footer>
  </el-container>
</template>

<script>
import HeaderView from "../components/HeaderView";
import MainView from "../components/MainView";
import FooterView from "../components/FooterView";

export default {
  components: {
    HeaderView,
    MainView,
    FooterView,
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
