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

        <el-row justify="space-around" class="Case-card">
          <el-col
            v-for="item in list"
            :key="item"
            class="Case-card-col"
            :sm="24"
            :md="7"
          >
            <div class="Case-card-col-positive">
              <img :src="require(`../static/Case/${item.img}.jpg`)" alt="" />
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
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
        },
        {
          img: "CaseCard1",
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
        },
        {
          img: "CaseCard1",
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
        },
        {
          img: "CaseCard1",
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
        },
        {
          img: "CaseCard1",
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
        },
        {
          img: "CaseCard1",
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
        },
        {
          img: "CaseCard1",
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
        },
        {
          img: "CaseCard1",
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
        },
        {
          img: "CaseCard1",
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
        },
        {
          img: "CaseCard1",
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
        },
        {
          img: "CaseCard1",
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
        },
        {
          img: "CaseCard1",
          title: "测试",
          body: "啊哈哈哈哈哈哈哈哈哈",
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

  &-card {
    text-align: center;
    width: 90%;
    margin: 0 auto;
    // &-p {
    //   transform: rotateY(180deg);
    //   transform-style: preserve-3d; // 反面
    // }

    &-col {
      img {
        width: 100%;
        border-radius: 5px;
      }

      &-positive:hover {
        transform: rotateY(180deg);
      }
      &-positive {
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
