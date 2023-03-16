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
        <h1 class="Develop-h1">企业资质</h1>

        <div class="Develop-card">
          <div class="Develop-card-top">
            <el-row
              type="flex"
              justify="space-around"
              style="text-align: center; margin: 0 auto; flex-flow: wrap"
            >
              <el-col
                :span="10"
                :xs="20"
                class="Develop-card-left"
                style="margin: 0 20px"
              >
                <div>
                  <h4>| 多个跨行业系统集成项目证书 |</h4>
                  <el-row
                    type="flex"
                    style="flex-flow: wrap"
                    justify="space-around"
                    class="Develop-card-left-row"
                  >
                    <el-col
                      :span="7"
                      v-for="(item, index) in List"
                      :key="index"
                    >
                      <img
                        :src="require(`../static/Develop/${item.img}.png`)"
                      />
                      <p>{{ item.title }}</p>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <!-- <el-col
                :span="7"
                :xs="20"
                class="Develop-card-left"
                style="margin: 0 20px"
              >
                <div>
                  <h4>| 覆盖全国的专业服务团队 |</h4>

                </div>
              </el-col> -->
            </el-row>
          </div>
          <el-row class="Develop-card-bottom" justify="space-around">
            <el-col :span="7" :xs="20" style="margin: 0 20px; height: 340px">
              <h4>| 合作院校以及获得证书 |</h4>
              <el-row
                type="flex"
                justify="space-around"
                style="flex-flow: wrap"
                class="Develop-card-bottom-left"
              >
                <el-col
                  :span="10"
                  v-for="(item, index) in bottomLeftList"
                  :key="index"
                  class="Develop-card-bottom-left-col"
                >
                  <div style="height: 20%">
                    <img :src="require(`../static/Develop/${item.img}.png`)" />
                    <p>{{ item.title }}</p>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="7" :xs="20" style="margin: 0 20px; height: 340px">
              <h4>| 人工智能自有知识产权证书 |</h4>
              <el-row justify="space-around" class="Develop-card-bottom-center">
                <el-col :span="24">
                  <img src="../static/Develop/Develop-bottom-center.png" />
                  <p style="margin-bottom: 20px">软著证书</p>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="7" :xs="20" style="margin: 0 20px; height: 340px">
              <h4>| 云平台无缝整合第三方产品 |</h4>
              <el-row
                type="flex"
                style="flex-flow: wrap"
                justify="space-around"
                class="Develop-card-bottom-right"
              >
                <el-col
                  :span="7"
                  v-for="(item, index) in bottomRightList"
                  :key="index"
                >
                  <img :src="require(`../static/Develop/${item.img}.jpg`)" />
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
          img: "Develop1",
        },
        {
          img: "Develop2",
        },
        {
          img: "Develop3",
        },
        {
          img: "Develop4",
        },
        {
          img: "Develop5",
        },
        {
          img: "Develop6",
        },
        {
          img: "Develop7",
        },
        {
          img: "Develop8",
        },
        {
          img: "Develop9",
        },
      ],
      bottomLeftList: [
        {
          img: "Develop10",
          title: "合作院校",
        },
        {
          img: "Develop11",
          title: "荣誉证书",
        },
        {
          img: "Develop12",
          title: "荣誉证书",
        },
      ],
      bottomRightList: [
        {
          img: "Develop-footer-cooperative-partner",
        },
        {
          img: "Develop-footer-cooperative-partner2",
        },
        {
          img: "Develop-footer-cooperative-partner3",
        },
        {
          img: "Develop-footer-cooperative-partner4",
        },
        {
          img: "Develop-footer-cooperative-partner5",
        },
        {
          img: "Develop-footer-cooperative-partner6",
        },
        {
          img: "Develop-footer-cooperative-partner7",
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
  h4 {
    color: white;
    margin: 20px 0;
  }
  background-color: black;
  &-h1 {
    background: url("../static/Banner/Develop-bg.jpg") 50% no-repeat;
    height: 200px;
    line-height: 200px;
    font-size: 38px;
    font-weight: 300;
    text-align: center;
    color: #ccc;
  }
  &-card {
    width: 100%;
    height: 100%;
    text-align: center;
    &-top {
      margin: 0 auto;
    }
    &-left {
      &-row {
        background-color: white;
        color: black;
        margin: 0 auto;
      }
      p {
        margin: 5px auto 8px;
      }
      img {
        width: 90%;
        margin: 10px auto 0;
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
