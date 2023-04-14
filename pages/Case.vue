<template>
  <div class="Case">
    <el-container>
      <el-header>
        <HeaderView />
      </el-header>
      <el-main>
        <BannerView>
          <img src="../static/Banner/Case.jpg" alt="" />
        </BannerView>
        <h1 class="Case-h1">案例展示</h1>
        <el-row type="flex" justify="start" class="Case-card">
          <el-col
            v-for="(item, index) in list"
            :key="index"
            class="Case-card-col"
            :sm="24"
            :md="8"
          >
            <NuxtLink :to="item.route">
              <div class="Case-card-col-positive" @click="NuxtLink(item)">
                <img :src="require(`../static/Case/${item.img}.png`)" alt="" />
              </div>
              <div class="Case-card-col-positive-text">
                <h6>{{ item.title }}</h6>
                <p>{{ item.body }}</p>
                <h4>{{ item.title }}</h4>
                <h5>{{ item.body }}</h5>
              </div>
            </NuxtLink>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <FooterView />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import HeaderView from "@/components/HeaderView.vue";
import BannerView from "@/components/BannerView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  name: "Case",
  data() {
    return {
      list: [
        {
          img: "CaseCard1",
          title: "智能应急处理",
          body: "上海城投电气柜智能诊断及应急处置项目",
          route: "/components/news",
          activePage: 1,
          name: "1",
        },
        {
          img: "CaseCard2",
          title: "银行数据改造",
          body: "某世界知名外资银行数据中心机房系统改造",
          route: "/components/news",
          activePage: 2,
          name: "2",
        },
        {
          img: "CaseCard3",
          title: "数字双胞胎",
          body: "西门子在德国汉诺威工业博览会（全球最大工业展）数字双胞胎项目",
          route: "/components/news",
          activePage: 3,
          name: "3",
        },
        {
          img: "CaseCard4",
          title: "AI识别服务",
          body: "某世界前三医疗企业合规方案AI识别服务",
          route: "/components/news",
          activePage: 4,
          name: "4",
        },
        {
          img: "CaseCard5",
          title: "医疗急救中心",
          body: "上海市急救中心120救护车",
          route: "/components/news",
          activePage: 5,
          name: "5",
        },
        {
          img: "CaseCard6",
          title: "部队演练培训",
          body: "某部队遇袭演练培训项目",
          route: "/components/news",
          activePage: 6,
          name: "6",
        },
        {
          img: "CaseCard7",
          title: "数字可视化项目",
          body: "电力系统数字可视化智能项目",
          route: "/components/news",
          activePage: 7,
          name: "7",
        },
        {
          img: "CaseCard8",
          title: "智能化改造",
          body: "银行全国网点智能化改造和运维",
          route: "/components/news",
          activePage: 8,
          name: "8",
        },
      ],
    };
  },
  methods: {
    NuxtLink(item) {
      console.log(item.activePage);
      sessionStorage.setItem("下标", item.activePage);
    },
  },
  // 案例展示
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 750px) {
  .Banner {
    margin-top: 80px;
  }
  .Case-card-col-positive-text h4 {
    font-size: 20px !important;
  }
  .Case-card-col-positive-text h5 {
    font-size: 18px !important;
  }
}
.Case {
  background-color: #121212;

  &-h1 {
    background: url("../static/Banner/Case-bg.jpg") 50% no-repeat;
    height: 200px;
    line-height: 200px;
    font-size: 38px;
    font-weight: 300;
    color: #ccc;
    text-align: center;
  }
  // text-align: center;

  &-card {
    // display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    a {
      text-decoration: none;
    }
    // &-col:hover {
    //   position: relative;
    //   background-color: red;
    // }

    &-col {
      position: relative;
      padding: 0 20px 40px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }

      // 既定模型，算法模型，应急策略生成
      // 传感器有没有好的建议，气体或其他
      // AR眼镜对接
      // &-positive:hover {
      //   transform: rotateY(180deg);
      //   opacity: 0.6;
      //   z-index: 1;
      // }

      &-positive {
        z-index: 11;
        &-text {
          text-align: left;
          text-overflow: ellipsis;
          p {
            margin: 10px 0;
            color: #575757;
            font-size: 16px;
          }
          h6 {
            margin: 10px 0;
            color: #b2b2b2;
            font-size: 22px;
            font-weight: 300;
            transition: all linear 0.5s;
          }
          h4 {
            transition: all linear 0.5s;
            text-decoration: none;
            color: white;
            opacity: 0;
            display: table-column;
            font-size: 42px;
            margin-left: 20%;
          }
          h5 {
            transition: all linear 0.5s;
            text-decoration: none;
            color: silver;
            opacity: 0;
            display: table-column;
            font-size: 28px;
            width: 90%;
          }
        }
      }
    }
    &-col:hover {
      h4 {
        display: inline-block;
        opacity: 1;
        position: absolute;
        top: 100px;
        transform: translateY(-100px);
        margin-left: 20%;
      }
      h5 {
        display: inline-block;
        opacity: 1;
        transform: translateY(-100px);
        position: absolute;
        top: 200px;
      }
      img {
        opacity: 0.5;
        height: 100%;
      }
    }
  }
}
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
</style>
