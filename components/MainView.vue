<template>
  <div class="AboutUs">
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
          <el-col :span="5" :xs="11" v-for="(item, index) in ourServicesList" :key="'ourServicesList' + index">
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
            <NuxtLink to="/case" class="AboutUs-case-main-left-link"
              v-for="(item, index) in list"
              :key="'list' + index">
              <p> {{ item.name }}</p>
              </NuxtLink>
          </el-col>
          <el-col :span="17" :xs="24">
            <el-row type="flex" justify="space-around" style="flex-flow: wrap;position: relative;"  class="AboutUs-case-main-right">
              <!-- <el-col :span="10" :xs="24" v-for="(item, index) in CardList" :key="'CardList' + index">
                <div class="AboutUs-case-main-right-div">
                    <img
                    :src="require(`../static/Index/${item.img}.jpg`)"
                    style="width: 100%;height: 100%;text-align: center;"
                  />
                <div class="AboutUs-case-main-right-card">
                    <h4 >{{ item.title }}</h4>
                    <p>{{ item.main }}</p>
                  </div>
                </div>
                 <NuxtLink to="/service">
                    <div class="AboutUs-case-main-right-animation2">
                      <div>
                        <h4 style="font-size: 30px;">{{ item.title }}</h4>
                        <p>{{ item.main }}</p>
                      </div>
                    </div>
                  </NuxtLink>
              </el-col> -->
              <el-col :span="10" :xs="24" v-for="(item, index) in CardList" :key="'CardList' + index" class="AboutUs-case-main-col">
                <NuxtLink to="/service">
                  <div class="AboutUs-case-main-col-img">
                    <img :src="require(`../static/Index/${item.img}.jpg`)" alt="">
                  </div>
                  <div class="AboutUs-case-main-col-text">
                    <p class="AboutUs-case-main-col-p">{{item.title}}</p>
                    <h4 class="AboutUs-case-main-col-h4">{{item.main}}</h4>
                    <h5 class="AboutUs-case-main-col-h5">{{item.title}}</h5>
                    <h6 class="AboutUs-case-main-col-h6">{{item.main}}</h6>
                  </div>
                </NuxtLink>
                
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
        <el-row type="flex" justify="space-around" style="flex-flow: wrap;">
          <el-col :xs="16" :sm="10" :md="5" v-for="(item, index) in NewList" :key="'NewList' + index">
            <el-card class="AboutUs-news-main-card">
              <a style="text-decoration: none;color: black;" :href="item.href">
              <div class="AboutUs-news-main-card-main">
                <img :src="require(`../static/Index/${item.img}.jpg`)"/>
                 <h3>&nbsp;&nbsp;{{ item.title }}</h3>
                <span> &nbsp;&nbsp; &nbsp;{{ item.date }}</span>
                <p>
                 &nbsp;&nbsp; {{ item.main }}
                </p>
                <div style="position: absolute;bottom: 0;margin-bottom: 20px;display: flex;width: 100%;">
                 <button style="padding: 4px;">新闻资讯</button>
                 
                  <span style="display: block;position: absolute;right: 0;margin-right: 30px;" id="span">
                    <NuxtLink to="/components/weChat">→</NuxtLink>
                  </span>
                  <!-- netsh winsock reset -->
                </div>
              </div>
              </a>
            </el-card></el-col>
        </el-row>
      </div>
    </div>
    <!-- <div class="AboutUs-footer-main">
      <h1>视觉探索 追求更好的未来</h1>
      <p>
        <span>邮箱：sales@jungt.com </span>
      </p>
      <a href="">我们在一直前行</a>
    </div>-->
  </div> 
</template>

<script setup>
import { ref } from "vue";

const w = document.documentElement.clientWidth;

const h = document.getElementById('span')


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
    name: "智能应急处理：上海城投电气柜智能诊断及应急处置项目",
  },
  {
    name: "银行数据改造：某世界知名外资银行数据中心机房系统改造",
  },
  {
    name: "数字双胞胎：西门子在德国汉诺威工业博览会（全球最大工业展）数字双胞胎项目",
  },
  {
    name: "AI识别服务：某世界前三医疗企业合规方案AI识别服务",
  },
  {
    name: "医疗急救中心：上海市急救中心120救护车",
  },
  {
    name: "部队演练培训：某部队遇袭演练培训项目",
  },
  {
    name: "数字可视化项目：电力系统数字可视化智能项目",
  },
  {
    name: "智能化改造：银行全国网点智能化改造和运维",
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
    title: "  科技挽救生命，AR技术让急救加速",
    date: " 2022-11-04",
    main: "在急救车内，随车医生佩戴AR眼镜，以第一视角对病患进行抢救，远程联系医院中的医生，让医生及时了解病患情况，对随车医生的急救措施进行指导与辅助，确保将“黄金抢救时间”运用到极致！",
     href:"https://mp.weixin.qq.com/s/jCJoHY6HYWubBRDqDQaCmA"
 },
  {
    img: "index-footer-card2",
    title: "  我司可协助医疗企业 遵守广审制度 规范广告行为",
    date: "2022-02-11",
    main: "上海市市场监督管理局网站日前公布的行政处罚信息显示，上海光正新视界眼科医院投资有限公司发布虚假广告，对其罚款60万元.",
    href:"https://mp.weixin.qq.com/s/Pi3kn49o9F26mk69ZQPAIA"
  },
  {
    img: "index-footer-card3",
    title: "  警惕！习惯性违章的13种“危险人”!",
    date: " 2021-12-10",
    main: "未穿戴劳保用品、不设置警戒线、酒后上岗……还记得那些发生在我们身边的不安全行为吗？在安全管理中，我们将违反安全操作规...",
    href:"https://mp.weixin.qq.com/s/FI6460BUu3VJXNMbRf2AIg"
 },
  {
    img: "index-footer-card4",
    title: "  Facebook改名Meta，高端MR头显明年发布",
    date: " 2021-10-29",
    main: "北京时间10月29日凌晨1点，2021年Facebook Connect大会正式开幕。会上，Facebook首席执行官马克·扎克伯格宣布Facebook将改名为Meta，",
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
  margin: 0;
}

// .el-carousel__item:nth-child(2n) {
//   background-color: #0d0d0d;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
   
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
      margin: 20px 0;
      line-height: 30px;
      color: #969696;
      margin: 0 auto;
      div{
        font-size: 18px;
      }
    }
    &-left h1,
    .case-header h1,
    .ourServices-header h1 {
      margin: 0;
      font-size: 38px;
      font-weight: 300;
      margin: 20px 0;
    }
    &-left span,
    .case-header span,
    .ourServices-header span {
      font-size: 16px;
    }

    &-right {
      line-height: 300px;
      vertical-align: middle;
      text-align: center;
      display: flex;
    }
    &-right img {
      width: 70%;
      margin: 20px auto;

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
    margin-top: 160px;
    &-header{
      margin-bottom: 140px;
      line-height: 40px;
    }
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
    &-header{
      margin: 200px 0 140px 0;
      line-height: 40px;
    }
    &-main {
      &-left {
        text-align: left;
        list-style: none ;
        text-decoration: none;
        &-link{
          text-decoration: none;
          color: #fff;
          p{
            margin-bottom: 30px;
            line-height: 26px;
          }
        }
        &-link:hover{
          color: #a1a3a6;
          border: 10px solid #a1a3a6;
        }
      }   
      a{
        text-decoration: none;
        list-style: none;
      }
    
      &-col{
        line-height:38px !important;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        &-text {
          text-align: left;
          text-overflow: ellipsis;
          
          p {
            margin: 10px 0;
            color: #b2b2b2;
            font-size: 22px;
          }
           h4 {
            margin: 20px 0 20px 0;
            color: white;
            font-size: 18px;
            font-weight: 300;
            transition: all linear 0.5s;
          }
          h6 {
             transition: all linear 0.5s;
            text-decoration: none;
            color: #b2b2b2;
            opacity: 0;
            display: table-column;
            font-size: 20px;
          }
         
          h5 {
            transition: all linear 0.5s;
            text-decoration: none;
            color: #b2b2b2;
            opacity: 0;
            display: table-column;
            font-size: 18px;
          }
        }
      }
   
 &-col:hover {
  p{
    opacity: 0;
  }
  h4{
    opacity: 0;
  }
      h5 {
        display: inline-block;
        opacity: 1;
        position: absolute;
        top: 100px;
        transform: translateY(-100px);
      }
      h6 {
        display: inline-block;
        opacity: 1;
        transform: translateY(-100px);
        position: absolute;
        top: 40%;
      }
      img {
        opacity: .5;
        height: 100%;
      }
    }
      // &-right {
      //   &-div {
      //     margin-top: 20px;
      //     text-align: center;
      //     height: 60%;
      //     width: 100%;
      //   }
      //   &-card
      //    {
      //     // background-color: greenyellow;
      //     text-align: left;
      //     color: #969696;
      //     h4{
      //       font-size: 24px;
      //     }
      //     p{
      //       padding-bottom: 40px;
      //     }
          
      //   }
      //   &-animation{
      //     position: absolute; 
      //     top: 50%;
      //     width: 42%;
      //     height: 30%;
      //     opacity: 0;
      //     color: white;
      //     // display: none;
      //     h4{
      //       // margin-top: 47%;
      //       margin: 20px 0 0 5%;
      //     }
      //     p{
      //       margin-left: 5%;
      //     }
          
      //   }
      //   &-animation:hover{
      //     div{
      //       background:rgba(35,64,45,0.3);
      //       height: 100%; 
      //     }
      //     display: block;
      //     animation-duration: 2s;
      //     animation-name: rightCard;
      //     opacity: 1;
      //     @keyframes rightCard {
      //       0% {opacity: 0.1;}
      //       25% {opacity: 0.3;}
      //       50% {opacity: 0.6;}
      //       100% {opacity: 1;}
      //     }
      //   }
      //    &-animation2{
      //     position: absolute; 
      //     top: 0;
      //     width: 42%;
      //     height: 30%;
      //     opacity: 0;
      //     color: white;
      //     // display: none;
      //     h4{
      //       // margin-top: 47%;
      //       margin: 20px 0 0 5%;
      //     }
      //     p{
      //       margin-left: 5%;
      //     }
         
      //   }
      //   &-animation2:hover{
      //     div{
      //       background:rgba(35,64,45,0.3);
      //       height: 100%;
      //     }
      //     display: block;
      //     animation-duration: 2s;
      //     animation-name: rightCard;
      //     opacity: 1;
      //     @keyframes rightCard {
      //       0% {opacity: 0.1;}
      //       25% {opacity: 0.3;}
      //       50% {opacity: 0.6;}
      //       100% {opacity: 1;}
      //     }
      //   }
      // }
    }
  }

  /* 新闻 */
  // 新闻头部
  &-news-header {
    color: white;
    margin: 200px 0 0 0;
    // line-height: 40px;
    h1 {
      text-align: center;
    }
    &-p {
      text-align: center;
      margin-bottom: 140px;
      margin-top: 20px;
    }
  }
  // 新闻主题

  &-news-main-card {
    text-align: center;
    margin-bottom: 20px;
    position: relative;
    a{
      text-decoration: none;
      list-style: none
    }
    &-main {
      padding: 10px 16px;
      text-align: left;
      padding: 10px;
      height: 450px;
      img {
        text-align: center;
        width: 100%;
      }
      
    }
   
    &-footer {
      color: #969696;
        position: absolute;
        bottom: 0;
        right: 0;
        margin-bottom: 20px;

      button {
        position: relative;
        left: 0;
        float: left;
      }
      div {
        position: relative;
        right: 0;
        bottom: 0;
        margin-right: 20px;
      }
    }
  }

  /* 底部 */
  // &-footer-main {
  //   padding-top: 180px;
  //   background: url("http://www.jungt.com/uploads/allimg/20210814/1-210Q41513125H.jpg");
  //   width: 100%;
  //   height: 344px;
  //   color: white;
  //   text-align: center;
  //   text-decoration: none;
  //   h1 {
  //     font-size: 40px;
  //     font-weight: 400;
  //   }
  //   span {
  //     display: inline-block;
  //     font-size: 16px;
  //     margin-top: 20px;
  //   }
  //   a {
  //     width: 200px;
  //     margin: 40px auto 0;
  //     font-size: 24px;
  //     color: white;
  //     border: 2px solid white;
  //     border-radius: 5px;
  //     padding: 2px 50px;
  //     display: block;
  //     list-style: none;
  //     text-decoration: none;
  //   }
  // }

}

</style>
