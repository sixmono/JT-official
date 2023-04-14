<template>
  <div class="Service">
    <el-container>
      <el-header>
        <HeaderView />
      </el-header>
    </el-container>
    <el-main>
      <BannerView>
        <img src="../static/Banner/Service.jpg" alt="" />
      </BannerView>
      <h1>业务展示</h1>
      <div style="text-align: center; margin-bottom: 30px">
        <el-button type="" @click="handleClickAr">AR眼镜</el-button>
        <el-button type="" @click="handleClickEhs">EHS智慧管控</el-button>
      </div>
      <el-row style="height: 600px">
        <el-col :span="24" :xs="24">
          <div
            class="Service-dataList"
            v-for="(item, index) in dataList"
            :key="index"
            v-if="item.isShow == isShow ? true : false"
          >
            <!-- <NuxtLink to="/components/news" class="Service-dataList-Link"> -->
            <h4>{{ item.title }}</h4>
            <p>{{ item.enTile }}</p>
            <span style="white-space: break-spaces">{{ item.main }}</span>
            <!-- </NuxtLink> -->
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <FooterView />
    </el-footer>
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import BannerView from "@/components/BannerView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  name: "Service",
  // 我们的业务/服务
  data() {
    return {
      isShow: true,
      dataList: [
        {
          title: "环境管控",
          enTile: "Environment Manage",
          main: `1.消毒防疫:24小时空气机器消毒除味、覆盖全国的人工消杀服务;
2.节能管控:通过智能化方案协助客户通过LEED、Well、绿标等认证实现碳中和;
3.智能家居:不同品牌家电，不同智能系统，无缝链接，一个APP管所有，用户挑选家居产品不受限制;`,
          isShow: false,
        },
        {
          title: "AR多媒体",
          enTile: "Environment Manage",
          main: `1.智能AR眼镜:工业级AR眼镜、远程协同监控、智能AI识别巡检、模拟场景教学考评;
2.互动多媒体数字展厅:数字化展馆建设和道具定制;
3.多媒体教学系统:AR场景学习，AI自动判断错误，学员可通过远程教育方式学习;
4.远程医疗:采用AR等多媒体技术，进行手术教学和会诊;`,
          isShow: true,
        },
        {
          title: "系统集成",
          enTile: "System Integration",
          main: `1.数据中心建设:数据中心装修、输配电、精密空调、网络、环控等多个子系统的全生命周期的建设和维护;
2.AI场景落地:从硬件设计施工到软件交付使用，提供AI场景的落地交钥匙工程;
 3.多源异构:采用多源异构和数字孪生技术为用户实现一网统管;
 4.智能化系统维护:对智能化系统从顶层设计，兼容新旧系统，总体规划分步实施，对全国各地智能化系统维护管控;`,
          isShow: true,
        },
        {
          title: "智能产品研发",
          enTile: "Product Research",
          main: `1.人脸识别管控系统:在测温管控基础上，可同时实现千人千面的个性化推送和多系统一脸通达服务;
2.跌倒检测报警系统:远距离跌倒检测报警，亦可根据生活规律调整预警值;
3.定位系统:UWB AOA定位系统，免调试安装，在低成本情况下可大幅缩短施工周期;`,
          isShow: true,
        },
      ],
    };
  },
  components: {
    HeaderView,
    BannerView,
    FooterView,
  },
  methods: {
    handleClickEhs() {
      console.log("EHS");
      this.isShow = false;
    },
    handleClickAr() {
      console.log("AR");
      this.isShow = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 760px) {
  .Banner {
    margin-top: 80px;
  }
}
@media screen and (max-width: 380px) {
  .Banner {
    margin-top: 160px;
  }
}
h1 {
  background: url("../static/Banner/Service-bg.jpg") 50% no-repeat;
  height: 200px;
  line-height: 200px;
  font-size: 38px;
  font-weight: 300;
  color: #ccc;
  text-align: center;
}

.Service {
  background-color: #0d0d0d;
  &-dataList:hover {
    box-shadow: 0 0 5px white;
  }
  &-dataList {
    padding: 20px 20px 10px 20px;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 80%;
    &-Link {
      text-decoration: none;
      list-style: none;
    }
    h4 {
      font-size: 24px;
      color: #ffffff;
      font-weight: 300;
      margin: 0;
    }
    p {
      font-size: 14px;
      color: #ffffff;
      height: 30px;
      line-height: 30px;
      margin: 0;
    }
    span {
      color: #969696;
      font-size: 14px;
      line-height: 30px;
      display: block;
    }
  }
}
</style>
