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
          <img src="../static/AboutUs/AboutUS.jpg" alt="" style="width: 90%" />
        </el-col>
        <el-col :span="12" :xs="24" class="AboutUs-card-right">
          <div v-for="(item, index) in dataList" :key="index" class="AboutUs-List-card">
            <h5>{{ item.title }}</h5>
            <p class="AboutUs-List-card-main">{{ item.main }}</p>
            <p class="AboutUs-List-card-footer">{{ item.footer }}</p>
          </div>
        </el-col>
      </el-row>

      <div class="AboutUs-Banner">
        <h1 class="AboutUs-Banner-h1">探索未来</h1>
      </div>
      <!--<div class="AboutUs-video">
         <video
          src="https://jungt.com/_nuxt/videos/AboutUs-Video.2d7a9a2.mp4"
          width="80%"
          height="100%"
          autoplay
          muted
          loop
          style="position: relative; z-index: 1; margin: 80px auto"
        ></video> 
      </div>-->
      <div class="carousel">
        <el-carousel :interval="3000" arrow="always" class="videos">
          <el-carousel-item class="item" v-for="(item, index) in FutureList" :key="index">
            <!-- <el-image
              fit="cover"
              :zoom-rate="1.2"
              :initial-index="4"
              :src="require(`../static/AboutUs/${item.img}.png`)"
              :preview-src-list="FutureList1"
            /> -->
            <el-image :src="require(`../static/AboutUs/${item.img}.png`)" />
          </el-carousel-item>
        </el-carousel>
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
          main: "OUR Management Idea",
          footer: `环境：创造舒适建筑空间；绿色安全，节能环保
          员工：尊重员工、培养员工并提供发展空间 `,
        },
        // {
        //   title: "我们的愿景2",
        //   main: "OUR VISION",
        //   footer: "愿景：成为合规、安全、舒适、智慧场景的行业标杆",
        // },
      ],
      FutureList: [
        {
          img: "AboutUs-future1",
        },
        {
          img: "AboutUs-future2",
        },
        {
          img: "AboutUs-future3",
        },
        {
          img: "AboutUs-future4",
        },
        {
          img: "AboutUs-future5",
        },
        {
          img: "AboutUs-future15",
        },
        {
          img: "AboutUs-future16",
        },
        {
          img: "AboutUs-future17",
        },
        {
          img: "AboutUs-future6",
        },
        {
          img: "AboutUs-future7",
        },
        {
          img: "AboutUs-future8",
        },
        {
          img: "AboutUs-future9",
        },
        {
          img: "AboutUs-future10",
        },
        {
          img: "AboutUs-future11",
        },
        {
          img: "AboutUs-future12",
        },
        {
          img: "AboutUs-future13",
        },
        {
          img: "AboutUs-future14",
        },
      ],
      // FutureList1: [
      //   "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1681578000&t=e55e58b0cdf72d97a36548dbd1c9297a",
      //   "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1681578000&t=e55e58b0cdf72d97a36548dbd1c9297a",
      //   "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1681578000&t=e55e58b0cdf72d97a36548dbd1c9297a",
      //   "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1681578000&t=e55e58b0cdf72d97a36548dbd1c9297a",
      //   "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1681578000&t=e55e58b0cdf72d97a36548dbd1c9297a",
      //   "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1681578000&t=e55e58b0cdf72d97a36548dbd1c9297a",
      //   "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1681578000&t=e55e58b0cdf72d97a36548dbd1c9297a",
      //   "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1681578000&t=e55e58b0cdf72d97a36548dbd1c9297a",
      //   "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1681578000&t=e55e58b0cdf72d97a36548dbd1c9297a",
      // ],
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
.carousel {
  background-color: #0d0d0d;
  margin-bottom: 140px;
}
:deep(.el-carousel__container) {
  height: 480px;
}
.videos {
  text-align: center;
  .el-image {
    height: 90%;
  }
}
// 客服聊天
:global(.xim-msg-input) {
  color: black !important;
}

:global(.xim_float_btn) {
  position: fixed !important;
  top: 100 !important;
}
:global(.xim_modal) {
  // bottom: -36%;
  height: 50% !important ;
}
:global(.xim_left_float) {
  display: none;
}
:global(.xim-help) {
  display: none;
}

@media only screen and (max-width: 500px) {
  :deep(.el-image__inner) {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
  }
  .videos {
    text-align: center;
    .el-image {
      width: 100%;
      vertical-align: middle;
      margin-top: 100px;
    }
  }
}
@media screen and (max-width: 760px) {
  .Banner {
    margin-top: 80px;
  }
}
@media screen and (max-width: 374px) {
  .Banner {
    margin-top: 160px;
  }
}
// .el-carousel__button {
//   position: absolute;

// }
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
