<template>
  <div class="AboutUs">
    <div class="AboutUs-swap">
      <el-carousel indicator-position="outside" style="text-align: center">
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <img :src="require(`../static/logo/${item.img}.png`)" alt="" />
        </el-carousel-item>
      </el-carousel>
      <el-row>
        <el-col
          v-for="(o, index) in 4"
          :key="o"
          :span="5"
          :offset="index > 0 ? 2 : 0"
          style="text-align: center"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
              style="width: 100%"
            />
            <div style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">{{ currentDate.value }}</time>
                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="AboutUs-card">
        <div class="AboutUs-card-left">
          <span>A B O U T U S</span>
          <h1>公司简介</h1>
          <div>
            高新技术企业，致力于人工智能场景落地服务，
            凭借多年的系统集成研发和覆盖全国的现场服务经验，
            为用户提供无侵入式的智能化方案，最终为企业实现降本增效的经营目标。
          </div>
        </div>
        <div class="AboutUs-card-right">
          <img src="../static/1-211011162153933.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="AboutUs-hover-card">
      <el-row justify="space-around">
        <el-col :span="5">
          <el-card class="AboutUs-hover-card-col">
            <div class="AboutUs-hover-card-col-div">
              <h2>200+</h2>
              <span>城市覆盖</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card class="AboutUs-hover-card-col">
            <h2>15个</h2>
            <span>自研产品</span>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card class="AboutUs-hover-card-col">
            <h2>30家</h2>
            <span>合作企业</span>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card class="AboutUs-hover-card-col">
            <h2>200+</h2>
            <span>成功案例</span>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="AboutUs-ourServices">
      <div class="AboutUs-ourServices-header">
        <span>O U R S E R V I C E S</span>
        <h1>我们的服务</h1>
      </div>
      <div class="AboutUs-ourServices-row">
        <el-row justify="space-around">
          <el-col :span="5" v-for="(item, index) in ourServicesList">
            <el-card class="AboutUs-ourServices-row-col">
              <h1>{{ item.title }}</h1>
              <span>{{ item.span }}</span>
            </el-card></el-col
          >
        </el-row>
      </div>
    </div>
    <div class="AboutUs-case">
      <div class="AboutUs-case-header">
        <span>P R E S E N T A T I O N</span>
        <h1>项目案例展示</h1>
      </div>
      <div class="AboutUs-case-main">
        <el-row class="AboutUs-case-main-left" justify="space-around">
          <el-col :span="5">
            <el-link
              class="AboutUs-case-main-left-link"
              href=""
              :underline="false"
              v-for="(item, index) in list"
              :key="index"
            >
              {{ item.name }}
            </el-link>
          </el-col>
          <el-col :span="13">
            <el-row justify="space-between" class="AboutUs-case-main-right">
              <el-col :span="12" v-for="(item, index) in CardList" :key="index">
                <div class="AboutUs-case-main-right-div">
                  <img
                    :src="require(`../static/logo/${item.img}.png`)"
                    style="width: 50%"
                  />
                </div>
                 <div class="AboutUs-case-main-right-card">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.main }}</p>
                  </div>
              </el-col>
            </el-row>
            <el-row justify="space-between" class="AboutUs-case-main-right">
              <el-col :span="12" v-for="(item, index) in CardList2" :key="index">
                <div class="AboutUs-case-main-right-div">
                  <img
                    :src="require(`../static/logo/${item.img}.png`)"
                    style="width: 50%"
                  />
                </div>
                <div class="AboutUs-case-main-right-card">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.main }}</p>
                  </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="AboutUs-news">
      <div class="AboutUs-news-header">
        <h1>新闻资讯</h1>
        <p class="AboutUs-news-header-p">不同层面的物联网行业解决方案</p>
        <el-row justify="space-around">
          <el-col :span="5" v-for="(item, index) in NewList" :key="index">
            <el-card class="AboutUs-news-main-card">
              <div class="AboutUs-news-main-card-main">
                <img :src="require(`../static/logo/${item.img}.png`)" alt="" />
                <h3>{{ item.title }}</h3>
                <span>{{ item.date }}</span>
                <p>
                  {{ item.main }}
                </p>
                <div class="AboutUs-news-main-card-footer">
                  <button>新闻资讯</button>
                  <span>→</span>
                </div>
              </div>
            </el-card></el-col
          >
        </el-row>
      </div>
    </div>
    <div class="AboutUs-footer-main">
      <h1>视觉探索 追求更好的未来</h1>
      <p>
        <span>邮箱：sales@jungt.com </span>
      </p>
      <a href="">我们在一直前行</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentDate = ref(new Date());

const items = [
  {
    img: "logo",
  },
  {
    img: "logo2",
  },
  {
    img: "logo3",
  },
  {
    img: "logo4",
  },
];
const list = ref([
  {
    name: "消毒防疫：某世界五百强企业全国网点",
  },
  {
    name: "节能管控：某工业园区全国管理平台",
  },
  {
    name: "智能家居：某别墅全宅智能",
  },
  {
    name: "互动多媒体数字展陈：某展览馆",
  },
  {
    name: "多媒体教学：大学实验室",
  },
  {
    name: "远程医疗：数字化医院",
  },
  {
    name: "数据中心建设：某银行数据中心",
  },
  {
    name: "AI场景落地：某区政府垃圾分类智能管理",
  },
  {
    name: "多源异构：数字化工厂生产优化",
  },
  {
    name: "....",
  },
]);

const ourServicesList = ref([
  {
    title: "环境管控",
    span: "消毒防疫、节能管控、智能家居",
  },
  {
    title: "AR多媒体",
    span: "智能AR眼镜、多媒体教学系统、远程医疗、互动多媒体数字展厅",
  },
  {
    title: "系统集成",
    span: "数据中心建设、多源异构、AI场景落地、智能化系统维护",
  },
  {
    title: "智能产品研发",
    span: "人脸识别管控系统、跌倒监测报警系统、定位系统",
  },
]);

const CardList = ref([
  {
    img: "logo",
    title: "环境管控",
    main: "消毒防疫、节能管控、智能家居",
  },
  {
    img: "logo",
    title: "AR多媒体",
    main: "AR眼镜远程协助巡检、互动多媒体数字展陈、多媒体教学、远程医疗",
  },
 
]);
const CardList2 = ref([
   {
    img: "logo",
    title: "系统集成",
    main: "数据中心建设、AI场景落地、多源异构、智能化系统维护",
  },
  {
    img: "logo",
    title: "智能产品研发",
    main: "人脸识别管控系统、智慧养老跌倒系统等、智慧养老定位系统等",
  },
])
const NewList = ref([
  {
    img: "logo2",
    title: "AR眼镜：用科技照亮未来",
    date: "2023-1-10",
    main: "2021年9月14日，小米发布小米智能眼镜探索版。概念新品采用MicroLED光波导技术，整机仅重51g，外观与普通眼镜几无区别，可实现基本的通知显示、通话、也可独立",
  },
  {
    img: "logo2",
    title: "AR眼镜：用科技照亮未来",
    date: "2023-1-10",
    main: "2021年9月14日，小米发布小米智能眼镜探索版。概念新品采用MicroLED光波导技术，整机仅重51g，外观与普通眼镜几无区别，可实现基本的通知显示、通话、也可独立",
  },
  {
    img: "logo2",
    title: "AR眼镜：用科技照亮未来",
    date: "2023-1-10",
    main: "2021年9月14日，小米发布小米智能眼镜探索版。概念新品采用MicroLED光波导技术，整机仅重51g，外观与普通眼镜几无区别，可实现基本的通知显示、通话、也可独立",
  },
  {
    img: "logo2",
    title: "AR眼镜：用科技照亮未来",
    date: "2023-1-10",
    main: "2021年9月14日，小米发布小米智能眼镜探索版。概念新品采用MicroLED光波导技术，整机仅重51g，外观与普通眼镜几无区别，可实现基本的通知显示、通话、也可独立",
  },
]);
</script>

<style lang="scss">
  * {
  padding: 0;
  margin: 0;
}
.el-header{
  height: 80px !important;
  padding: 0;
}
.el-card__body, .el-main{
  padding: 0;
}
</style>

<style lang="scss" scoped>

.el-row {
  display: flex;
}
/* 走马灯效果 */
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #0d0d0d;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-row {
  justify-content: space-around;
}
/* 主体部分样式 */
.el-main {
  --el-main-padding: 20px 0 0 0;
}
/* 底部样式 */
.el-footer {
  --el-footer-padding: 0;
  padding: 0;
}
.AboutUs {
  background-color: #0d0d0d;
  /* 公司简介 */
  &-card {
    width: 100%;
    height: 300px;
    background-color: #0d0d0d;
    display: flex;
    justify-content: space-around;
    margin: 20px 0 0 0;
    &-left {
      width: 20%;
      margin-top: 20px;
      padding-left: 20%;
      line-height: 30px;
      color: #969696;
    }
    &-left h1,
    .case-header h1,
    .ourServices-header h1 {
      margin: 0;
      font-size: 36px;
      font-weight: 300;
    }
    &-left span,
    .case-header span,
    .ourServices-header span {
      font-size: 12px;
    }

    &-right {
      margin-left: 20px;
      margin-top: 20px;
      line-height: 300px;
      vertical-align: middle;
      text-align: center;
      padding-right: 20%;
    }
    &-right img {
      width: 60%;
    }
  }

  /* 我们的服务 */
  &-hover-card {
    margin: 20px auto 0;

    &-col {
      width: 260px;
      height: 200px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background-color: #1c1c1c;
      color: #fff;
      border: 1px;
      margin: 0 auto;
    }
    &-col:hover {
      transform: scale(1.1, 1.1);
      box-shadow: 0 0 10px white;
    }
  }

  /* 我们的服务 */
  &-ourServices {
    color: #fff;
    margin-top: 20px;
    text-align: center;
    &-row {
      margin: 30px 10px;
      &-col {
        width: 100%;
        height: 350px;
        transition: all 0.5;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background: url("../static/Our/Our.jpg");
        border: none;
        h1,
        span {
          color: white;
          margin-bottom: 20px;
        }
      }
      &-col:hover {
        transform: scale(1.1, 1.1);
        box-shadow: 0 0 10px white;
      }
    }
  }

  /* 案例展示 */
  &-case {
    color: #fff;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    &-main {
      &-left {
        line-height: 50px;
        text-align: left;
      }
      &-right {
        &-div {
          margin-top: 20px;
          text-align: center;
        }
        &-card,
        &-card2 {
          // background-color: greenyellow;
          color: white;
        }
        // &-card:hover,
        // &-card2:hover {
        //   position: absolute;
        //   top: 50%;
        //   height: 400px;
        // }
      }
    }
  }

  /* 新闻 */
  &-news-header {
    h1 {
      text-align: center;
      margin-top: 20px;
    }
    &-p {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  &-news-main-card {
    text-align: center;
    margin-bottom: 20px;
    &-main {
      padding: 10px 16px;
      text-align: left;
      padding: 10px;
      transition: all 1;
      img {
        text-align: center;
        width: 100%;
      }
      img:hover {
        transform: scale(1.1, 1.1);
      }
    }
    &-footer {
      margin-top: 20px;
      padding: 0 10px;
      button {
        float: left;
        margin-bottom: 20px;
      }
      span {
        float: right;
        margin-bottom: 20px;
        transform: scale(1.1, 1.1);
      }
    }
  }

  /* 底部 */
  &-footer-main {
    padding-top: 180px;
    background: url("http://www.jungt.com/uploads/allimg/20210814/1-210Q41513125H.jpg");
    width: 100%;
    height: 344px;
    color: white;
    text-align: center;
    text-decoration: none;
    h1 {
      font-size: 40px;
      font-weight: 400;
    }
    span {
      display: inline-block;
      font-size: 16px;
      margin-top: 20px;
    }
    a {
      width: 200px;
      margin: 40px auto 0;
      font-size: 24px;
      color: white;
      border: 2px solid white;
      border-radius: 5px;
      padding: 2px 50px;
      display: block;
      list-style: none;
      text-decoration: none;
    }
  }
}
</style>
