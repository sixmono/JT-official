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

        <el-row type="flex" justify="space-around" class="Case-card">
          <el-col
            v-for="(item, index) in list"
            :key="index"
            class="Case-card-col"
            :sm="24"
            :md="7"
          >
            <!-- <div class="Case-card-col-aa">asdadasdsa</div> -->

            <div class="Case-card-col-positive">
              <img :src="require(`../static/Case/${item.img}.png`)" alt="" />
              <div class="Case-card-col-positive-text">
                <h6>{{ item.title }}</h6>
                <p>{{ item.body }}</p>
              </div>
            </div>
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
          title: "消毒",
          body: "某世界500强医药公司仓库消杀",
        },
        {
          img: "CaseCard2",
          title: "AR眼镜",
          body: "某石油公司AR智能辅助系统",
        },
        {
          img: "CaseCard3",
          title: "AR远程协助",
          body: "某地区院前AR协助救助车",
        },
        {
          img: "CaseCard4",
          title: "机房维护",
          body: "某世界500强银行机房维护",
        },
        {
          img: "CaseCard5",
          title: "轮胎检测",
          body: "某世界500强远程检修轮胎",
        },
        {
          img: "CaseCard6",
          title: "医疗",
          body: "某医疗公司广告内容审核",
        },
        {
          img: "CaseCard7",
          title: "互联网",
          body: "多家世界知名医药公司互联网信息服务证书办理",
        },
      ],
    };
  },
  // 案例展示
  components: {
    HeaderView,
    BannerView,
    FooterView,
  },
};
</script>

<style lang="scss" scoped>
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
  text-align: center;

  &-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    // &-col:hover {
    //   position: relative;
    //   background-color: red;
    // }
    &-col {
      &-aa {
        color: white;
        position: absolute;
        width: 100%;
        z-index: 10;
      }
      img {
        width: 100%;
        border-radius: 5px;
      }

      // &-positive:hover {
      //   transform: rotateY(180deg);
      //   opacity: 0.6;
      //   z-index: 1;
      // }
      &-positive {
        position: relative;
        z-index: 11;
        transition: all 1s;
        transform-style: preserve-3d;
        &-text {
          text-align: left;
          text-overflow: ellipsis;
          p {
            margin: 10px 0;
            color: #575757;
            font-size: 14px;
          }
          h6 {
            margin: 10px 0;
            color: #b2b2b2;
            font-size: 18px;
            font-weight: 300;
          }
        }
      }
    }
  }
}
</style>
