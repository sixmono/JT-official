<template>
  <div class="Develop">
    <el-container>
      <el-header>
        <HeaderView />
      </el-header>
      <el-main>
        <BannerView>
          <img src="../static/Banner/Develop.jpg" />
        </BannerView>
        <h1 class="Develop-h1">核心优势</h1>

        <div class="Develop-card">
          <div class="Develop-card-top">
            <el-row justify="space-around">
              <el-col :span="7" class="Develop-card-top-left">
                <h4>| 多个跨行业系统集成项目案例 |</h4>
                <el-row justify="space-around" class="Develop-card-top-left-row">
                  <el-col :span="7" v-for="item in List" :key="item">
                    <img :src="require(`../static/logo/${item.img}.png`)" />
                    <p>{{ item.title }}</p>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="7">
                <div>
                  <h4>| 覆盖全国的专业服务团队 |</h4>
                </div>
              </el-col>
            </el-row>
          </div>

          <el-row class="Develop-card-bottom" justify="space-around">
            <el-col :span="7">
              <h4>| 物联网设备自主定制研发 |</h4>
              <el-row justify="space-around" class="Develop-card-bottom-left">
                <el-col
                  :span="10"
                  v-for="item in bottomLeftList"
                  :key="item"
                  class="Develop-card-bottom-left-col"
                >
                  <div style="height: 20%">
                    <img :src="require(`../static/logo/${item.img}.png`)" />
                    <p>{{ item.title }}</p>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="7">
              <h4>| 人工智能自有知识产权算法 |</h4>
              <el-row justify="space-around" class="Develop-card-bottom-center">
                <el-col :span="24">
                  <img src="../static/Develop/Develop-bottom-center.png" />
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="7">
              <h4>| 云平台无缝整合第三方产品 |</h4>
              <el-row
                :gutter="20"
                justify="space-between"
                class="Develop-card-bottom-right"
              >
                <el-col :span="7" v-for="item in bottomRightList" :key="item">
                  <img :src="require(`../static/logo/${item.img}.png`)" />
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
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
  name: "Develop",
  // 核心优势/有利条件
  data() {
    return {
      List: [
        {
          img: "logo2",
          title: "金融",
        },
        {
          img: "logo2",
          title: "金融",
        },
        {
          img: "logo2",
          title: "金融",
        },
        {
          img: "logo3",
          title: "金融",
        },
        {
          img: "logo3",
          title: "金融",
        },
        {
          img: "logo3",
          title: "金融",
        },
        {
          img: "logo4",
          title: "金融",
        },
        {
          img: "logo4",
          title: "金融",
        },
        {
          img: "logo4",
          title: "金融",
        },
      ],
      bottomLeftList: [
        {
          img: "logo",
          title: "只能人脸机",
        },
        {
          img: "logo3",
          title: "AR软件",
        },
        {
          img: "logo3",
          title: "软件平台",
        },
      ],
      bottomRightList: [
        {
          img: "logo3",
        },
        {
          img: "logo3",
        },
        {
          img: "logo3",
        },
        {
          img: "logo3",
        },
        {
          img: "logo3",
        },
        {
          img: "logo3",
        },
        {
          img: "logo3",
        },
        {
          img: "logo3",
        },
        {
          img: "logo3",
        },
      ],
    };
  },
  components: {
    HeaderView,
    BannerView,
    FooterView,
  },
};
</script>
<style lang="scss" scoped>
.Develop {
  background-color: black;
  color: white;
  &-h1 {
    background: url("../static/Banner/Develop-bg.jpg") 50% no-repeat;
    height: 200px;
    line-height: 200px;
    font-size: 38px;
    font-weight: 300;
    color: #ccc;
    text-align: center;
  }
  &-card {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    &-top {
      &-left {
        &-row {
          background-color: white;
          color: black;
        }
        p {
          margin: 5px auto 8px;
        }
        img {
          width: 90%;
          margin: 10px auto 0;
        }
      }
    }
    &-bottom {
      &-left,
      &-center,
      &-right {
        background-color: white;
        color: black;
      }
      &-left {
        width: 100%;
        height: 100%;
        overflow: hidden;
        &-col {
          height: 50%;
        }
        img {
          width: 100%;
          margin: 10px auto 0;
        }
      }
      &-center {
        img {
          width: 80%;
          margin: 10px auto 0;
        }
      }

      &-right {
        img {
          width: 100%;
          margin: 10px auto 5px;
        }
      }
    }
  }
}
</style>
