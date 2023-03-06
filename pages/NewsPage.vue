<template>
  <div>
    <el-header>
      <HeaderView />
    </el-header>
    <el-main>
      <el-card> </el-card>
    </el-main>
  </div>
</template>

<script>
import HeaderView from "../components/HeaderView";

export default {
  name: "NewsPage",
  component: {
    HeaderView,
  },
};
</script>
