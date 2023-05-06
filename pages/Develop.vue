<template>
  <div class="Develop">
    <el-container>
      <el-header>
        <HeaderView />
      </el-header>
      <!-- <el-main>
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
                    <el-col :span="7" v-for="(item, index) in List" :key="index">
                      <img :src="require(`../static/Develop/${item.img}.png`)" />
                      <p>{{ item.title }}</p>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
             
            </el-row>
          </div>
          <el-row class="Develop-card-bottom" type="flex" justify="space-between">
            <el-col :span="7" :xs="20" style="margin: 0 auto; height: 100%">
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

            <el-col :span="7" :xs="20" style="margin: 0 auto; height: 100%">
              <h4>| 人工智能自有知识产权证书 |</h4>
              <el-row justify="space-around" class="Develop-card-bottom-center">
                <el-col :span="24">
                  <img src="../static/Develop/Develop-bottom-center.png" />
                  <p style="margin-bottom: 50px">软著证书</p>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="7" :xs="20" style="margin: 0 auto; height: 100%">
              <h4>| 云平台无缝整合第三方产品 |</h4>
              <el-row
                type="flex"
                style="flex-flow: wrap"
                justify="space-around"
                class="Develop-card-bottom-right"
              >
                <el-col :span="7" v-for="(item, index) in bottomRightList" :key="index">
                  <img :src="require(`../static/Develop/${item.img}.jpg`)" />
                  <p style="margin-bottom: 10px"></p>
                </el-col>
              </el-row>
            </el-col>
            
          </el-row>
        </div>
      </el-main> -->
      <el-main>
        <BannerView>
          <img src="../static/Banner/Develop.jpg" />
        </BannerView>
        <div class="headerView">
          <h1 class="Develop-h1">我们的客户</h1>
        </div>
        <el-row
          :gutter="0"
          style="margin: 0 auto; flex-flow: wrap; background-color: white"
          type="flex"
        >
          <el-col
            :span="6"
            :xs="24"
            v-for="(item, index) in items"
            :key="index"
            style="text-align: center; position: relative"
          >
            <img
              :src="require(`../static/Develop/${item.img}.png`)"
              style="padding: 20px 0; width: 60%; height: 100%; object-fit: contain"
            />
          </el-col>
        </el-row>
        <div>
          <h1 class="Develop-h1">合作伙伴</h1>
        </div>
        <el-row
          :gutter="0"
          style="margin: 0 auto; flex-flow: wrap; background-color: white"
          type="flex"
        >
          <el-col
            :span="6"
            :xs="24"
            v-for="(item, index) in List"
            :key="index"
            style="text-align: center"
          >
            <img
              :src="require(`../static/Develop/${item.img}.jpg`)"
              style="padding: 20px 0; width: 100%; height: 100%; object-fit: contain"
            />
          </el-col>
        </el-row>
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
      items: [
        {
          img: "Develop1",
        },
        {
          img: "Develop2",
        },
        {
          img: "Develop6",
        },
        {
          img: "Develop11",
        },
        {
          img: "Develop10",
        },
        {
          img: "Develop5",
        },
        {
          img: "Develop3",
        },
        {
          img: "Develop4",
        },
        {
          img: "Develop16",
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

        {
          img: "Develop13",
        },
        {
          img: "Develop14",
        },
        {
          img: "Develop15",
        },
      ],
      List: [
        {
          img: "Develop-friends",
        },
        {
          img: "Develop-friends1",
        },
        {
          img: "Develop-friends5",
        },
        {
          img: "Develop-friends6",
        },
        {
          img: "Develop-friends7",
        },
        {
          img: "Develop-friends4",
        },
        {
          img: "Develop-friends3",
        },

        {
          img: "Develop-friends11",
        },
        {
          img: "Develop-friends8",
        },
        {
          img: "Develop-friends9",
        },
        {
          img: "Develop-friends10",
        },
      ],
      // bottomLeftList: [
      //   {
      //     img: "Develop10",
      //     title: "合作院校",
      //   },
      //   {
      //     img: "Develop11",
      //     title: "荣誉证书",
      //   },
      //   {
      //     img: "Develop12",
      //     title: "荣誉证书",
      //   },
      // ],
      // bottomRightList: [
      //   {
      //     img: "Develop-footer-cooperative-partner",
      //   },
      //   {
      //     img: "Develop-footer-cooperative-partner2",
      //   },
      //   {
      //     img: "Develop-footer-cooperative-partner3",
      //   },
      //   {
      //     img: "Develop-footer-cooperative-partner4",
      //   },
      //   {
      //     img: "Develop-footer-cooperative-partner5",
      //   },
      //   {
      //     img: "Develop-footer-cooperative-partner6",
      //   },
      //   {
      //     img: "Develop-footer-cooperative-partner7",
      //   },
      // ],
    };
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
.el-main {
  overflow: hidden;
}
.el-footer {
  padding: 0;
}
.headerView {
  h1 {
    text-align: center;
    color: white;
    font-size: 38px;
    font-weight: 300;
    height: 200px;
    line-height: 200px;
  }
}
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
      flex-flow: wrap;
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
