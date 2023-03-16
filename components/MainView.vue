<template>
  <div class="AboutUs">
      <!-- <el-carousel indicator-position="outside" style="text-align: center">
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <img :src="require(`../static/logo/${item.img}.png`)" alt="" />
        </el-carousel-item>
      </el-carousel> -->
      <!-- <img src="../static/AboutUs/AboutUs.jpg" style="width: 100%;" /> -->
      <!-- <el-row>
        <el-col
          v-for="(o, index) in 4"
          :key="index"
          :span="5"
          :offset="index > 0 ? 2 : 0"
          style="text-align: center ;margin: 10px 0;"
        >
          <el-card :body-style="{ padding: ' 0' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
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
      </el-row> -->
      <!-- <video width="" height="" controls>
        <source src="../static/Video/AboutUs-Video.mp4" type="">       
      </video> -->
      <!-- <video src="../static/Video/AboutUs-Video.mp4" controls /> -->
      
    <video
        src="../static/Video/AboutUs-Video.mp4"
        width="100%"
        height="100%"
        autoplay
        muted
        loop
        style="position:relative;z-index: 1;margin-top: 80px;"
      ></video>

        <el-row :gutter="0" class="AboutUs-card">
        <el-col :span="12" :xs="24"> 
        <div class="AboutUs-card-left">
          <span>A B O U T U S</span>
          <h1>公司简介</h1>
          <div>
            高新技术企业，致力于人工智能场景落地服务，
            凭借多年的系统集成研发和覆盖全国的现场服务经验，
            为用户提供无侵入式的智能化方案，最终为企业实现降本增效的经营目标。
          </div>
        </div>
        </el-col>
        <el-col :span="12" :xs="24">  
          <div class="AboutUs-card-right">
            <img src="../static/1-211011162153933.jpg" alt="" />
          </div>
        </el-col>
      </el-row>
    <div class="AboutUs-hover-card">
      <el-row type="flex" justify="space-around" style="flex-flow: wrap;">
        <el-col :span="5" :xs="24">
          <el-card class="AboutUs-hover-card-col">
            <div class="AboutUs-hover-card-col-div">
              <h2>200+</h2>
              <span>城市覆盖</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5" :xs="24">
          <el-card class="AboutUs-hover-card-col">
            <h2>15个</h2>
            <span>自研产品</span>
          </el-card>
        </el-col>
        <el-col :span="5" :xs="24">
          <el-card class="AboutUs-hover-card-col">
            <h2>30家</h2>
            <span>合作企业</span>
          </el-card>
        </el-col>
        <el-col :span="5" :xs="24">
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
        <el-row type="flex" justify="space-around" style="flex-flow: wrap;">
          <el-col :span="5" :xs="11" v-for="(item, index) in ourServicesList" >
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
        <el-row type="flex" style="flex-flow: wrap;" class="AboutUs-case-main-left" justify="space-around">
          <el-col :span="4" :xs="24">
            <el-link
              class="AboutUs-case-main-left-link"
              href=""
              :underline="false"
              v-for="(item, index) in list"
              :key="index"
            >
             <p> {{ item.name }}</p> </br>
            </el-link>
          </el-col>
          <el-col :span="17" :xs="24">
            <el-row type="flex" justify="space-around" style="flex-flow: wrap;"  class="AboutUs-case-main-right">
              <el-col :span="11" :xs="24" v-for="(item, index) in CardList" :key="index">
                <div class="AboutUs-case-main-right-div">
                    <img
                    :src="require(`../static/Index/${item.img}.jpg`)"
                    style="width: 100%;height: 100%;text-align: center;"
                  />
                
                </div>
                 <div class="AboutUs-case-main-right-card">
                    <h4 >{{ item.title }}</h4>
                    <p>{{ item.main }}</p>
                  </div>
              </el-col>
            </el-row>
            <!-- <el-row justify="space-between" class="AboutUs-case-main-right">
              <el-col :span="10" v-for="(item, index) in CardList2" :key="index">
                <div class="AboutUs-case-main-right-div">
                  <img
                    :src="require(`../static/Index/${item.img}.jpg`)"
                    style="width: 100%"
                  />
                </div>
                <div class="AboutUs-case-main-right-card">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.main }}</p>
                  </div>
              </el-col>
            </el-row> -->
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
        <el-row type="flex" justify="space-around" style="flex-flow: wrap;">
          <el-col :span="5" :xs="16" v-for="(item, index) in NewList" :key="index">
            <el-card class="AboutUs-news-main-card">
              <div class="AboutUs-news-main-card-main">
                <img :src="require(`../static/Index/${item.img}.jpg`)" style="40%"/>
                <h3>{{ item.title }}</h3>
                <span>{{ item.date }}</span>
                <p>
                  {{ item.main }}
                </p>
                <div class="AboutUs-news-main-card-footer">
                  <button> <a :href="item.href">新闻资讯</a> </button>
                  <a :href="item.href"><span>→</span></a> 
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
    img: "AboutUs-ourServices1",
    title: "环境管控",
    main: "消毒防疫、节能管控、智能家居",
  },
  {
    img: "AboutUs-ourServices2",
    title: "AR多媒体",
    main: "AR眼镜远程协助巡检、互动多媒体数字展陈、多媒体教学、远程医疗",
  },
    {
    img: "AboutUs-ourServices3",
    title: "系统集成",
    main: "数据中心建设、AI场景落地、多源异构、智能化系统维护",
  },
  {
    img: "AboutUs-ourServices4",
    title: "智能产品研发",
    main: "人脸识别管控系统、智慧养老跌倒系统等、智慧养老定位系统等",
  },
 
]);
// const CardList2 = ref([
//    {
//     img: "AboutUs-ourServices3",
//     title: "系统集成",
//     main: "数据中心建设、AI场景落地、多源异构、智能化系统维护",
//   },
//   {
//     img: "AboutUs-ourServices4",
//     title: "智能产品研发",
//     main: "人脸识别管控系统、智慧养老跌倒系统等、智慧养老定位系统等",
//   },
// ])
const NewList = ref([
  {
    img: "index-footer-card1",
    title: "科技挽救生命，AR技术让急救加速",
    date: " 2022-11-04",
    main: "在急救车内，随车医生佩戴AR眼镜，以第一视角对病患进行抢救，远程联系医院中的医生，让医生及时了解病患情况，对随车医生的急救措施进行指导与辅助，确保将“黄金抢救时间”运用到极致！",
  href:"https://mp.weixin.qq.com/s/jCJoHY6HYWubBRDqDQaCmA"
 },
  {
    img: "index-footer-card2",
    title: "我司可协助医疗企业 遵守广审制度 规范广告行为",
    date: "2022-02-11",
    main: "上海市市场监督管理局网站日前公布的行政处罚信息显示，上海光正新视界眼科医院投资有限公司发布虚假广告，对其罚款60万元.",
    href:"https://mp.weixin.qq.com/s/Pi3kn49o9F26mk69ZQPAIA"
  },
  {
    img: "index-footer-card3",
    title: "警惕！习惯性违章的13种“危险人”!",
    date: " 2021-12-10",
    main: "未穿戴劳保用品、不设置警戒线、酒后上岗……还记得那些发生在我们身边的不安全行为吗？",
    href:"https://mp.weixin.qq.com/s/FI6460BUu3VJXNMbRf2AIg"
 },
  {
    img: "index-footer-card4",
    title: "Facebook改名Meta，高端MR头显明年发布",
    date: " 2021-10-29",
    main: "北京时间10月29日凌晨1点，2021年Facebook Connect大会正式开幕。会上，Facebook首席执行官马克·扎克伯格宣布Facebook将改名为Meta，原Facebook旗下所有应用和技术都将整合到新公司品牌中。",
    href:"https://mp.weixin.qq.com/s/2kLsj-UUEEyvoK4jS4vd_g"

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

// .el-row {
//   display: flex;
//   justify-content: space-around;
// }
.el-header{
  height: 80px;
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
    background-color: #0d0d0d;
    margin: 0;
    &-left {
      width: 80%;
      margin-top: 20px;
      line-height: 30px;
      color: #969696;
      margin: 0 auto;
    }
    &-left h1,
    .case-header h1,
    .ourServices-header h1 {
      margin: 0;
      font-size: 36px;
      font-weight: 300;
      margin: 20px 0;
    }
    &-left span,
    .case-header span,
    .ourServices-header span {
      font-size: 12px;
    }

    &-right {
      line-height: 300px;
      vertical-align: middle;
      text-align: center;
    }
    &-right img {
      width: 90%;
    }
  }

  /* 我们的服务 */
  &-hover-card {
    flex-flow: wrap;
		align-items: center;
    margin: 20px auto 0;
      &-col {
        width: 260px;
        height: 200px;
        background-color: #1c1c1c;
        color: #fff;
        border: 1px;
        margin: 10px auto;
         display: flex;
         justify-content: center;
        text-align: center;

        align-items: center;
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
        align-items: center;
        background: url("../static/Our/Our.jpg");
        border: none;
        margin: 10px 0;
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
        &-card
         {
          // background-color: greenyellow;
          color: #969696;
          h4{
            font-size: 24px;

          }
        }
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
    position: relative;
    &-main {
      padding: 10px 16px;
      text-align: left;
      padding: 10px;
      transition: all 1;
      height: 440px;
      img {
        text-align: center;
        width: 100%;
      }
      img:hover {
        // transform: scale(1.1, 1.1);
      }
    }
    &-footer {
      color: #969696;
              position: absolute;
               bottom: 0;
        margin-bottom: 20px;

      button {
        float: left;
        left: 20px;
      }
      span {
        float: right;
        margin-left: 170px;
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
