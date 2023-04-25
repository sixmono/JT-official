<template>
  <div>
    <div>
      <el-container>
        <el-header>
          <HeaderView />
        </el-header>
        <el-main>
          <div class="carousel">
            <el-row :gutter="0">
              <el-col :span="24">
                <el-carousel
                  :interval="3000"
                  :height="height"
                  arrow="always"
                  class="video"
                >
                  <el-carousel-item v-for="(item, index) in items" :key="index">
                    <img
                      :src="require(`../static/Index/${item.img}`)"
                      style="width: 100%; height: 100%"
                    />
                    <h1 class="video-h1">{{ item.title }}</h1>
                    <h2 class="video-h2">{{ item.main }}</h2>
                    <NuxtLink :to="item.router">
                      <el-button
                        class="video-LearnMore"
                        type=""
                        @click="ClickLearnMore(item)"
                        >了解更多</el-button
                      >
                    </NuxtLink>

                    <!-- <el-button class="video-Random" type="" @click="ClickRandom">{{
                      item.random
                    }}</el-button> -->
                  </el-carousel-item>
                </el-carousel>
              </el-col>
            </el-row>
          </div>
          <MainView />
        </el-main>
        <el-footer>
          <FooterVIews />
          <FooterView />
        </el-footer>
      </el-container>
    </div>
    <!-- 光点线 -->
    <!-- <div class="login" id="particlesId"></div> -->
  </div>
</template>
<script>
import HeaderView from "../components/HeaderView";
import MainView from "../components/MainView";
import FooterView from "../components/FooterView";
// import FooterVIews from "../components/FooterVIews";

export default {
  name: "Index",
  data() {
    return {
      // 获取窗口高度
      // height: document.documentElement.clientHeight + "px",
      height: 436 + "px",
      items: [
        {
          img: "index-logo1.jpg",
          title: "上海疆通科技有限公司",
          main: "数字可视化项目",
          activePage: 7,
          router: "/Case#Digital-visualization",
        },
        {
          img: "index-logo2.jpg",
          title: "上海疆通科技有限公司",
          main: "医疗急救中心AR项目",
          activePage: 5,
          router: "/Case#intelligent-system",
        },
        {
          img: "index-logo3.jpg",
          title: "上海疆通科技有限公司",
          main: "AI识别服务",
          activePage: 3,
          router: "/Case#AI-recognition-service",
        },
      ],
    };
  },
  methods: {
    ClickLearnMore(item) {
      sessionStorage.setItem("下标", item.activePage);
    },
  },
  components: {
    HeaderView,
    MainView,
    FooterView,
    FooterVIews: () => import("../components/FooterVIews.vue"),
  },
  created() {
    var w = document.documentElement.clientWidth;
    if (w < 400) {
      this.height = "130px";
    } else if (w > 1400) {
      this.height = "520px";
    }
  },

  // created() {
  //   var w = document.documentElement.clientWidth;
  //   if (w < 300) {
  //     this.height = "200px";
  //   } else if (w < 400) {
  //     this.height = "220px";
  //   } else if (w < 500) {
  //     this.height = "320px";
  //   } else if (w < 600) {
  //     this.height = "400px";
  //   } else if (w < 700) {
  //     this.height = "480px";
  //   } else if (w < 800) {
  //     this.height = "560px";
  //   } else if (w < 900) {
  //     this.height = "640px";
  //   } else if (w < 1000) {
  //     this.height = "720px";
  //   } else if (w < 1100) {
  //     this.height = "800px";
  //   } else if (w < 1200) {
  //     this.height = "880px";
  //   } else if (w < 1300) {
  //     this.height = "900px";
  //   } else if (w < 1500) {
  //     this.height = "1000px";
  //   } else if (w < 1700) {
  //     this.height = "1100px";
  //   } else {
  //     this.height = "1200px";
  //   }
  //   const that = this;
  //   window.onresize = () => {
  //     return (() => {
  //       that.showWidth = document.body.clientWidth;
  //       if (this.showWidth < 300) {
  //         this.height = "200px";
  //       } else if (this.showWidth < 400) {
  //         this.height = "220px";
  //       } else if (this.showWidth < 500) {
  //         this.height = "320px";
  //       } else if (this.showWidth < 600) {
  //         this.height = "400px";
  //       } else if (this.showWidth < 700) {
  //         this.height = "480px";
  //       } else if (this.showWidth < 800) {
  //         this.height = "560px";
  //       } else if (this.showWidth < 900) {
  //         this.height = "640px";
  //       } else if (this.showWidth < 1000) {
  //         this.height = "720px";
  //       } else if (this.showWidth < 1100) {
  //         this.height = "800px";
  //       } else if (this.showWidth < 1200) {
  //         this.height = "880px";
  //       } else if (this.showWidth < 1300) {
  //         this.height = "900px";
  //       } else if (this.showWidth < 1500) {
  //         this.height = "1000px";
  //       } else if (this.showWidth < 1700) {
  //         this.height = "1100px";
  //       } else {
  //         this.height = "1200px";
  //       }
  //     })();
  //   };
  // },
};
</script>

<style lang="scss" scoped>
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
// .el-carousel__item h3 {
//   color: #475669;
//   opacity: 0.75;
//   line-height: 300px;
//   margin: 0;
//   text-align: center;
// }
// #particlesId {
//   position: absolute;
//   top: 0;
//   width: 100%;
//   height: 500px;
//   // background: linear-gradient(0deg, rgb(7, 33, 99), rgb(3, 17, 51));
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: 0 50%;
//   z-index: 99;
// }

* {
  margin: 0;
  padding: 0;
}
@media screen and (max-width: 750px) {
  .Banner {
    margin-top: 80px;
  }
}
.carousel {
  background-color: #0d0d0d;
  margin-bottom: 140px;
}
.el-carousel__container {
  width: 100%;
  height: 436px;
}
.video {
  position: relative;
  z-index: 200;
  height: 100%;
  text-align: center;
  margin: 0 auto;
  color: white;
  &-h1 {
    position: absolute;
    z-index: 201;
    top: 10%;
    left: 5%;
    font-size: 40px;
  }
  &-h2 {
    position: absolute;
    z-index: 201;
    top: 30%;
    left: 5%;
    font-size: 18px;
  }

  &-LearnMore {
    width: 200px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    top: 58%;
    left: 5%;
  }
  &-Random {
    border-radius: 25px;
    width: 200px;
    height: 50px;
    position: absolute;
    top: 58%;
    left: 24%;
  }
}
@media screen and (max-width: 768px) {
  .video-LearnMore,
  .video-Random,
  .video-h1,
  .video-h2 {
    display: none;
  }
}
.video:hover {
  position: relative;
  .video {
    pointer-events: none;
  }
}

@media screen and (max-width: 768px) {
  .carousel {
    margin-top: 80px;
  }
}

.el-main {
  background-color: #0d0d0d;
  overflow: hidden;
}

.el-header {
  position: relative;
  z-index: 100;
}
</style>
