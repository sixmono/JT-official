<template>
  <div class="AboutUs">
      <el-row :gutter="0" class="AboutUs-card">
        <el-col :span="12" :xs="24"> 
        <div class="AboutUs-card-left">
          <span>A B O U T U S</span>
          <h1>公司简介</h1>
          <div>
          上海疆通科技有限公司于2016年成立，是高新技术企业、科技型中小企业、上海市华东师范大学毕业生实习基地、上海市人工智能行业协会会员单位，拥有电子与智能化工程专业承包二级资质和ISO9001质量体系认证，公司拥有软硬件自主研发能力，一直致力于智能应急处置系统和数据中心的智能化建设。
主营业务是以物联传感为依托、以算法模型赋能、以MR图文呈现，实现MR/OT/IT互通的低代码系统集成方案。
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
          <el-col :span="4" :xs="24" >
            <NuxtLink v-for="(item, index) in list"
              :key="'list' + index" :to="item.router" class="AboutUs-case-main-left-link">
              <p>
              <h3>{{item.title}}</h3>
               <p style="font-size: 14px;color: silver;">{{ item.name }}</p>
               </p>
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

const items = ref([
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
]);

const list = ref([
  {
    title:"AR眼镜远程协助巡检:",
    name: "大连商品交易所机房",
    router: "/Case#AR-remote-assistance",
  },
  {
    title:"互动多媒体展陈:",
    name: "国家会展中心",
    router: "/Case#Interactive-multimedia",
  },
  {
    title:"多媒体教学:",
    name: "大学实验室",
    router: "/Case#Multimedia-teaching",
  },
  {
    title:"AI识别服务:",
    name: "某世界前三医疗企业合规方案AI识别服务",
    router: "/Case#AI-recognition-service",
  },
  {
    title:"Al场景落地:",
    name: "普陀区垃圾分类智能管理",
    router: "/Case#AI-scene-landing",
  },
  {
    title:"数字孪生:",
    name: "福斯润滑油工厂生产优化",
    router: "/Case#Digital-twin",
  },
  {
    title:"南方电网数字可视化项目:",
    name: "电力系统数字可视化智能项目",
    router: "/Case#Digital-visualization",
  },
  {
    title:"智能化改造: ",
    name: "银行全国网点智能化改造和运维",
    router: "/Case#Intelligent-transformation",
  },
  {
    title:"人脸识别管控系统:某资产公司VVIP接待厅: ",
    name:"某十大资产公司VVIP接待厅",
    router: "/Case#Face-recognition",
  },
  {
    title:"智慧养老跌倒系统等: ",
    name:" 某养老院智慧养老系统",
    router: "/Case#intelligent-system",
  },
  {
    title:"智慧养老系统: ",
    name:" 上海华阳路为民务中心",
    router: "/Case#intelligent-system2",
  },
  {
    name: "....",
    router: "/Case",
  },
]);

const ourServicesList = ref([
  {
    title: "环境管控",
    span: "消毒防疫、节能管控、智能家居",
  },
  {
    title: "MR多媒体",
    span: "智能MR眼镜、多媒体教学系统、远程医疗、互动多媒体数字展厅",
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
    title: "MR多媒体",
    main: "MR眼镜远程协助巡检、互动多媒体数字展陈、多媒体教学、远程医疗",
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

const NewList = ref([
  {
    img: "index-footer-card0",
    title: '疆通荣获西门子黑客松大赛最佳创意奖',
    date: "2023-04-13 ",
    main:"近日，由河北省工业和信息化厅指导，河北省保定市工业和信息化局主办，西门子(中国)有限公司、河北深保投资发展有限公司联合承办的西门子科技创新大赛暨“数字化触手可及”黑客马拉松圆满结束!",
    href: "https://mp.weixin.qq.com/s/_HaXXiRaoAJTwCrKNSWlDw",
  },
  {
    img: "index-footer-card1",
    title: '科技挽救生命，AR技术让急救加速',
    date: " 2022-11-04",
    main:"在急救车内，随车医生佩戴AR眼镜，以第一视角对病患进行抢救，远程联系医院中的医生，让医生及时了解病患情况，对随车医生的急救措施进行指导与辅助，确保将“黄金抢救时间”运用到极致！",
    href: "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247485912&idx=1&sn=e5bc6ca4479a1b2945caee5224276868&chksm=96f73193a180b8855731f8980921c4987705957f7c9ef0662bca0a71189c69a6965f0cd2558c#rd",
  },
  {
    img: "index-footer-card2",
    title: "Rokid眼镜助力智慧工厂",
    date: "2021-09-10",
    main:"在政策加持与技术发展的双重推动下，智能制造已经成为当今制造行业的发展重点，那么如何通过数字化转型提升智慧工厂效能，降低用工成本，也成为了行业面临的新课题。疆通科技正与Rokid深度合作，欢迎有需求、有兴趣的客户前来垂询。",
    href: "https://mp.weixin.qq.com/s/PV1ChrcCaOsiSb5PbTjYuA",
  },
  {
    img: "index-footer-card3",
    title: "让“养老”到“享老”不再遥远",
    date: "2021-04-23",
    main:"近年来，智能技术对日常生活的渗透，为大部分人带来了便利，也加大了老年人面临的挑战。“智慧养老”“适老化”成为了摆在人们面前的现实课题，也是今年全国两会代表委员们关注的热点。",
    href: "https://mp.weixin.qq.com/s/Lt8dzcu6eVi1xS20x_YrSA",
  }
]
);

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
            margin-bottom: 20px;
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

            h5 {
            transition: all linear 0.5s;
            text-decoration: none;
            color: #b2b2b2;
            opacity: 0;
            display: table-column;
            font-size: 26px;
          }
          h6 {
             transition: all linear 0.5s;
            text-decoration: none;
            color: #b2b2b2;
            opacity: 0;
            display: table-column;
            font-size: 20px;
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
