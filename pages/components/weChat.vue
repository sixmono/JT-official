<template>
  <div>
    <el-header>
      <HeaderView />
    </el-header>
    <el-main>
      <BannerView>
        <img src="../../static/Banner/AboutUs.jpg" alt="" />
      </BannerView>
      <div class="wrapper">
        <el-row type="flex" justify="space-around" class="wrapper-row" id="row">
          <el-col
            v-for="(item, index) in NewList"
            :key="'NewList' + index"
            class="AboutUs"
            :xs="24"
            :span="6"
            id="col"
          >
            <el-card class="AboutUs-card">
              <a style="text-decoration: none; color: black" :href="item.href">
                <div class="AboutUs-card-main" id="card2">
                  <img :src="require(`../../static/Index/${item.img}.jpg`)" />
                  <h3>&nbsp;&nbsp;{{ item.title }}</h3>
                  <span> &nbsp;&nbsp; &nbsp;{{ item.date }}</span>
                  <p>&nbsp;&nbsp; {{ item.main }}</p>
                  <div class="AboutUs-card-footer">
                    <button style="padding: 4px">新闻资讯</button>
                    <!-- netsh winsock reset -->
                  </div>
                </div>
              </a>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer>
      <FooterView />
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spend: 120,
      NewList: [
        {
          img: "index-footer-card0",
          title: `疆通荣获西门子黑客松大赛最佳创意奖`,
          date: "  2023-04-13 ",
          main:
            "近日，由河北省工业和信息化厅指导，河北省保定市工业和信息化局主办，西门子(中国)有限公司、河北深保投资发展有限公司联合承办的西门子科技创新大赛暨“数字化触手可及”黑客马拉松圆满结束!",
          href: "https://mp.weixin.qq.com/s/_HaXXiRaoAJTwCrKNSWlDw",
        },
        {
          img: "index-footer-card1",
          title: `  科技挽救生命，
          AR技术让急救加速`,
          date: " 2022-11-04",
          main:
            "在急救车内，随车医生佩戴AR眼镜，以第一视角对病患进行抢救，远程联系医院中的医生，让医生及时了解病患情况，对随车医生的急救措施进行指导与辅助，确保将“黄金抢救时间”运用到极致！",
          href: "https://mp.weixin.qq.com/s/jCJoHY6HYWubBRDqDQaCmA",
        },
        {
          img: "index-footer-card2",
          title: "  我司可协助医疗企业 遵守广审制度 规范广告行为",
          date: "2022-02-11",
          main:
            "上海市市场监督管理局网站日前公布的行政处罚信息显示，上海光正新视界眼科医院投资有限公司发布虚假广告，对其罚款60万元.",
          href: "https://mp.weixin.qq.com/s/Pi3kn49o9F26mk69ZQPAIA",
        },
        {
          img: "index-footer-card3",
          title: "  警惕！习惯性违章的13种“危险人”!",
          date: " 2021-12-10",
          main:
            "未穿戴劳保用品、不设置警戒线、酒后上岗……还记得那些发生在我们身边的不安全行为吗？在安全管理中，我们将违反安全操作规...",
          href: "https://mp.weixin.qq.com/s/FI6460BUu3VJXNMbRf2AIg",
        },
        {
          img: "index-footer-card4",
          title: "  Facebook改名Meta，高端MR头显明年发布",
          date: " 2021-10-29",
          main:
            "北京时间10月29日凌晨1点，2021年Facebook Connect大会正式开幕。会上，Facebook首席执行官马克·扎克伯格宣布Facebook将改名为Meta，",
          href: "https://mp.weixin.qq.com/s/2kLsj-UUEEyvoK4jS4vd_g",
        },
        {
          img: "index-footer-card5",
          title: `危废贮存间建设管理规范`,
          date: "2021-10-15",
          main:
            "随着各企业不断开足马力加大投入，大力提升产能，随之而来的会产生大量的危废，选址及贮存不当极易造成污染环境，甚至危及生命财产安全。",
          href: "https://mp.weixin.qq.com/s/xaYYgsOJektLqtziGoax2g",
        },
        {
          img: "index-footer-card6",
          title: "Rokid眼镜助力智慧工厂",
          date: "2021-09-10",
          main:
            "在政策加持与技术发展的双重推动下，智能制造已经成为当今制造行业的发展重点，那么如何通过数字化转型提升智慧工厂效能，降低用工成本，也成为了行业面临的新课题。疆通科技正与Rokid深度合作，欢迎有需求、有兴趣的客户前来垂询。",
          href: "https://mp.weixin.qq.com/s/PV1ChrcCaOsiSb5PbTjYuA",
        },
        {
          img: "index-footer-card7",
          title: "  私藏危化品老板被控制！《新安法》已生效！",
          date: " 2021-12-10",
          main:
            "8月29日，湖北武汉市江岸区塔子湖街道凯信大厦，其二号楼8楼发生化学品泄漏，现场产生烟雾，并伴有浓烈的刺鼻气味，楼内办公人员被紧急疏散。",
          href: "https://mp.weixin.qq.com/s/aNmBpK--lUtQPFwSTUN6Yg",
        },
        {
          img: "index-footer-card8",
          title: "触碰《新安法》这些条款，将被追责到底！",
          date: " 2021-08-27",
          main:
            "安全是重中之重的事，许多事故是由于员工的不安全行为导致，控制人为差错对安全有重要的作用。“十大黄金安全原则”你知道吗？",
          href: "https://mp.weixin.qq.com/s/e4zwDxs7wlgQoSNIbZs6tg",
        },
        {
          img: "index-footer-card9",
          title: `化工工艺中的这些“危险”，你都了解吗？`,
          date: "2021-08-06",
          main:
            "在化工生产中，高危险装置存在非常多安全隐患，不知道大家有没有注意过？今天就带大家了解一下！",
          href: "https://mp.weixin.qq.com/s/JB-Bey8fQaaVN-1FsET39Q",
        },
        {
          img: "index-footer-card10",
          title: "危废管理新方案发布，企业该怎么做？",
          date: "2021-07-16",
          main:
            "近日，国务院办公厅印发《强化危险废物监管和利用处置能力改革实施方案》（以下简称《实施方案》）。生态环境部有关负责人就《实施方案》发布和实施有关情况，回答了记者的提问。",
          href: "https://mp.weixin.qq.com/s/F6JBg-xLqkFYx0s0ftkDFA",
        },
        {
          img: "index-footer-card11",
          title: "智能家居，生活走心",
          date: "2021-07-02",
          main:
            "随着智能家居的亮相，越来越多的智能硬通货进入大众家庭，技术日新月异，功能花样翻新，用户拥有了最具新鲜感的生活方式。",
          href: "https://mp.weixin.qq.com/s/rJnh3LyY0BjBlgiCtiqlkg",
        },
        {
          img: "index-footer-card12",
          title: "相约2021老博会",
          date: " 2021-06-08",
          main:
            "中国国际养老、辅具及康复医疗博览会（CHINA AID）是国内首屈一指的福祉产业品牌博览会，位居世界同类展会前列。2021养老展，将于6月9日-11日在上海新国际博览中心举办。",
          href: "https://mp.weixin.qq.com/s/VMRT65qkFHwB80xics_RKQ",
        },
        {
          img: "index-footer-card13",
          title: `“碳中和”给环卫行业带来的影响`,
          date: "2021-06-06",
          main:
            "今年的政府工作报告，不仅将扎实做好碳达峰、碳中和各项工作列入2021年重点任务，更要求各行各业制定2030年前碳排放达峰行动方案。而促进新型节能低碳环保装备的研发和应用，",
          href: "https://mp.weixin.qq.com/s/3waPDMUtyPKyBizyW7B7UA",
        },
        {
          img: "index-footer-card14",
          title: "新固废法实施：危废处置企业怎么做？",
          date: " 2021-04-16",
          main:
            "近期，违法倾倒化工废料导致多人死亡的事故引起广泛关注。新修订的《固体废物污染环境防治法》已施行半年，危废处置，企业怎么做，政府怎么管，值得关注。",
          href: "https://mp.weixin.qq.com/s/6fkykec3FNUgCrI1EG7TIQ",
        },
        {
          img: "index-footer-card15",
          title: "职业病防治科普小知识",
          date: "2021-04-09",
          main:
            "职业病，是指企业、事业单位和个体经济组织等用人单位的劳动者在职业活动中，因接触粉尘、放射性物质和其他有毒、有害因素而引起的疾病。我国法定的职业病...",
          href: "https://mp.weixin.qq.com/s/0uwhC5y67wJhCNwRtePmGQ",
        },
        {
          img: "index-footer-card16",
          title: "“护脸计划”即将开始",
          date: " 2021-03-19",
          main:
            " 曾几何时，人脸识别还是被人们极为信赖的技术，得益于其在生产生活中所带来的便捷性、高效性与精准性，深受广大用户青睐。而如今，随着产业发展的不断加快，...",
          href: "https://mp.weixin.qq.com/s/ErD9Crez5V0KarOL0B6Dzw",
        },
        {
          img: "index-footer-card17",
          title: `两会聚焦“AI人脸识别”`,
          date: "2021-03-05",
          main:
            "两会正在火热进行中，全国来自不同领域的代表分别提出了自己的建议。其中，全国政协委员谈剑锋就当前AI科技行业普遍面临的数据安全问题提出了自己的建议，...",
          href: "https://mp.weixin.qq.com/s/SzXSOtl8Q880EsJr_Fe78g",
        },
        {
          img: "index-footer-card18",
          title: "消毒剂该如何使用？",
          date: " 2021-01-08",
          main:
            "化学消毒剂是指用于杀灭传播媒介上病原微生物，使其达到无害化要求的制剂。不同于抗生素，化学消毒剂在防病中的主要作用是将病原微生物消灭于人体之外，...",
          href: "https://mp.weixin.qq.com/s/I0vTNGIbVsOxu2h55jgLgQ",
        },
        {
          img: "index-footer-card19",
          title: "最新消息！2021年1月1日前企业须配备安全总监，享一票否决权!",
          date: "2020-12-18",
          main: "最新消息北京市将试行安全总监制度2021年1月1日前企业须配备安全总监",
          href: "https://mp.weixin.qq.com/s/YVsTYChgmvzBzsmhNNQwaQ",
        },
      ],
    };
  },
  mounted() {
    const row = document.getElementById("row");
    const card = document.getElementsByClassName("AboutUs-card");
    const left = document.getElementsByClassName("leftBtn");
    const right = document.getElementsByClassName("rightBtn");
    const w = document.documentElement.clientWidth;

    // if (w < 500) {
    //   row.style.width = "280%";
    //   this.speed = 10;
    // }
    const wrapper = document.getElementsByClassName("wrapper")[0]; // 容器
    const text = document.getElementsByClassName("wrapper-row")[0]; // 文本
    const wrapperWidth = wrapper.clientWidth; // 容器的总宽度
    const textWidth = text.clientWidth; // 文本的总宽度
    text.style.left = wrapperWidth + "px"; // 开始滚动前设定文本在容器最右侧以外
    const tranTime = textWidth / this.spend; // 根据文本宽度设置过渡时间
    const againTime = tranTime * 1000 + 1000; // 重新开始滚动时间计算(动态)

    setTimeout(() => {
      textRoll();
    }, 0);

    // 开始滚动
    function textRoll() {
      text.style.transition = "left " + tranTime + "s linear"; // 滚动前绑定过渡属性
      text.style.left = -textWidth + "px"; // 向容器最左移动

      setTimeout(() => {
        // 还原文本位置
        text.style.transition = ""; // 还原前需清除过渡
        text.style.left = wrapperWidth + "px";
        setTimeout(() => {
          textRoll();
        }, 0);
      }, againTime);
    }
  },
};
</script>

<style lang="scss" scoped>
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
.el-footer {
  margin: 0;
  padding: 0;
  position: relative;
  bottom: 0;
}
.el-main {
  background-color: black;
  overflow: inherit;
}
.wrapper {
  width: 100%;
  //   margin: 0 auto;
  height: 600px;
  background-color: black;
  overflow: hidden;
  position: relative;
  &-row {
    position: absolute;
  }
}

.text {
  color: #fff;
  white-space: pre;
  line-height: 30px;
}
// &-news-header {
//   color: white;
//   margin: 200px 0 0 0;
//   // line-height: 40px;
//   h1 {
//     text-align: center;
//   }
//   &-p {
//     text-align: center;
//     margin-bottom: 140px;
//     margin-top: 20px;
//   }
// }
// 新闻主题
// .el-row {
//   width: 200%;
// }
.el-col {
  width: 100%;
}
.AboutUs {
  margin-left: 20px;
  &-card {
    width: 200px;
    text-align: center;
    margin-bottom: 20px;
    position: relative;
    padding: 10px 16px;
    text-align: left;
    padding: 10px;
    height: 100%;
    img {
      text-align: center;
      width: 100%;
    }
    &-footer {
      position: absolute;
      bottom: 0;
      margin-bottom: 20px;
      display: flex;
    }
  }
}
.leftBtn {
  position: absolute;
  height: 30px;
  z-index: 99;
  left: 0;
  top: 20%;
}
.rightBtn {
  position: absolute;
  height: 30px;
  z-index: 99;
  right: 0;
  top: 20%;
}
</style>
