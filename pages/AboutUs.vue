<template>
  <div class="AboutUs">
    <el-container>
      <el-header>
        <HeaderView />
      </el-header>
    </el-container>
    <el-main>
      <BannerView>
        <img src="../static/Banner/AboutUs.jpg" alt="" />
      </BannerView>
      <h1 class="BannerView-h1">关于我们</h1>
      <el-row class="AboutUs-card" justify="space-between">
        <el-col :span="12" class="AboutUs-card-left" :xs="24">
          <img src="../static/AboutUs/AboutUs.jpg" alt="" style="width: 90%" />
        </el-col>
        <el-col :span="12" :xs="24" class="AboutUs-card-right">
          <div class="AboutUs-card-right-div">
            <h4>V I R T U A L &nbsp;&nbsp;&nbsp;&nbsp;R E A L I T Y</h4>
            <h2>公司简介</h2>
            <p>
              高新技术企业，致力于人工智能场景落地服务，凭借多年的系统集成研发和覆盖全国的现场服务经验，为用户提供无侵入式的智能化方案，最终为企业实现降本增效的经营目标。
            </p>
          </div>
        </el-col>
      </el-row>

      <div
        v-for="(item, index) in dataList"
        :key="index"
        class="AboutUs-List-card"
      >
        <h5>{{ item.title }}</h5>
        <p class="AboutUs-List-card-main">{{ item.main }}</p>
        <p class="AboutUs-List-card-footer">{{ item.footer }}</p>
      </div>
      <div class="AboutUs-Banner">
        <h1 class="AboutUs-Banner-h1">探索未来</h1>
      </div>
      <div class="AboutUs-video">
        <video class="AboutUs-video-move" autoplay loop>
          <source
            src="https://vd3.bdstatic.com/mda-pc41usfy9q8pzf0s/sc/cae_h264/1677979619701766903/mda-pc41usfy9q8pzf0s.mp4?v_from_s=hkapp-haokan-suzhou&auth_key=1678183253-0-0-5f5bcbd883bc4237a406de7c4689c058&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=1853545363&vid=6644777784981925461&abtest=107353_1&klogid=1853545363"
            type="video/webm"
          />
        </video>
      </div>
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
  name: "AboutUs",
  data() {
    return {
      dataList: [
        {
          title: "我们的愿景",
          main: "OUR VISION",
          footer: "愿景：成为合规、安全、舒适、智慧场景的行业标杆",
        },
        {
          title: "我们的经营理念",
          main: "OUR VISION",
          footer: `环境：创造舒适建筑空间；绿色安全，节能环保
          员工：尊重员工、培养员工并提供发展空间 `,
        },
        {
          title: "我们的愿景2",
          main: "OUR VISION",
          footer: "愿景：成为合规、安全、舒适、智慧场景的行业标杆",
        },
      ],
    };
  },
  // 关于我们
  components: {
    HeaderView,
    BannerView,
    FooterView,
  },
};
</script>

<style lang="scss" scoped>
.AboutUs {
  width: 100%;
  background-color: #121212;
  &-card {
    &-left {
      text-align: center;
      // 垂直居中好用
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    &-right {
      text-align: left;
      margin: 0 auto;
      &-div {
        color: #969696;
        line-height: 30px;
        padding: 10px;
        h4 {
          margin-top: 30px;
        }
        p {
          margin-top: 50px;
          color: #969696;
          line-height: 30px;
        }
      }
    }
  }

  &-List-card {
    width: 70%;
    height: 100%;
    background-color: #121212;
    border-bottom: 1px solid #282828;
    margin: 40px auto 0;
    h5 {
      color: #ffffff;
      font-size: 18px;
      font-weight: 300;
      margin: 0;
    }
    &-main {
      font-size: 16px;
      color: #ffffff;
      margin: 0;
    }
    &-footer {
      color: #969696;
      font-size: 13px;
      padding-bottom: 0;
      margin: 20px 0;
    }
  }
  &-Banner {
    h1 {
      color: white;
    }
    width: 100%;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
  &-video {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    &-move {
      width: 100%;
      height: 100%;
    }
  }
}
// 总体样式
.el-row {
  background-color: #121212;
}
.BannerView-h1 {
  background: url("../static/Banner/AboutUs-bg.jpg") 50% no-repeat;
  height: 200px;
  line-height: 200px;
  font-size: 38px;
  font-weight: 300;
  color: white;
  text-align: center;
}
</style>
