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
          img: "6-19-index-footer-card1",
          title: "疆通AR眼镜助力大连商品交易所机房",
          date: "2023-06-06 ",
          main:
            "随着科技的不断发展，人们对于高效、智能的工作方式也提出了更高的要求。其中，AR眼镜（增强现实眼镜）为工作现场的各项巡检任务带来了全新的协作方式。通过引入AR眼镜远程协助巡检，能够使现场人员依托专业巡检人员的指导，解决复杂问题，提升巡检质量及效率。",
          href:
            "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247485930&idx=1&sn=d1ff0e78f2c6780749d326c042585aa8&chksm=96f731a1a180b8b770dc5eda7915b9f09f24d5c6ac57a7c6423d8467852b5616ebbaf9227d38#rd",
        },
        {
          img: "6-19-index-footer-card2",
          title: "科技与文化相结合，疆通为国家会展中心带来多媒体展陈的全新体验",
          date: "2023-05-29 ",
          main:
            "随着科技的不断进步，互动多媒体展陈已经逐渐成为展示文化、艺术、历史的重要手段之一。这种展陈方式可以将静态的文物与历史场景转化为生动的现场演示，通过多媒体、虚拟现实、互动体验等手段让观众在身临其境的情境中更好地感受到文化艺术的魅力。",
          href:
            "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247485938&idx=1&sn=5e65bfb405675e367708f4449e494d5f&chksm=96f731b9a180b8af3668acfa47b79b864ed6b2f106cda41c0252e516e043a9d297e57bada881#rd",
        },
        {
          img: "6-19-index-footer-card3",
          title: "喜报！疆通科技入选​上海市人工智能行业协会会员单位",
          date: "2023-05-05 ",
          main:
            "经过上海市人工智能行业协会的层层审核和综合评估，疆通科技成功入选协会会员单位。这标志着疆通科技在人工智能算法和大数据技术方面的能力获得了行业权威的认可。这是疆通科技的一项重要荣誉，也是对我司技术实力和专业水平的肯定。",
          href:
            "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247485964&idx=1&sn=0bdd16a19cf18904edb3eaa268865ca7&chksm=96f73247a180bb519282a31d89d5c555a237b4a6ad0175390730944a489e69ffe6f362c64823#rd",
        },
        {
          img: "6-19-index-footer-card4",
          title: "热烈庆贺疆通科技顺利取得电子与智能化工程专业承包二级资质",
          date: "2023-04-19 ",
          main:
            "建筑业是我国经济建设中的重要组成部分，也是一个不断发展和变革的行业。作为一家专注于数字化转型的科技公司，疆通科技一直致力于为建筑业合作伙伴提供一站式数字化转型服务，包括基于物联网技术的设备自主定制研发、人工智能自有知识产权算法的开发和应用等。",
          href:
            "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247485977&idx=1&sn=d3b600f4a3e2e3cdb1854d529e512953&chksm=96f73252a180bb4484fb7854acade75cf323534ba9102e159d2cb5d5503132e3758da0b1fc0f#rd",
        },
        {
          img: "index-footer-card0",
          title: "疆通荣获西门子黑客松大赛最佳创意奖",
          date: "2023-04-13 ",
          main:
            "近日，由河北省工业和信息化厅指导，河北省保定市工业和信息化局主办，西门子(中国)有限公司、河北深保投资发展有限公司联合承办的西门子科技创新大赛暨“数字化触手可及”黑客马拉松圆满结束!",
          href: "https://mp.weixin.qq.com/s/_HaXXiRaoAJTwCrKNSWlDw",
        },
        {
          img: "6-19-index-footer-card5",
          title: "祝贺！疆通科技荣获高新技术企业证书",
          date: "2023-03-29",
          main:
            "2022年11月15日，上海市高新技术企业认定机构张告，公示《关于对上海市认定机构2022年认定的第二批高新技术企业进行备案公示的通知》。在上海市2022年度第二批高新技术企业名单中，上海疆通科技有限公司荣膺在列，光荣上榜。",
          href:
            "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247485987&idx=1&sn=871ad95d3b004745b2e4a4af0651ce2c&chksm=96f73268a180bb7e747b0d1942416dea3929234a8641ada428f316ffd0c10a80f8252b993ef9#rd",
        },
        {
          img: "6-19-index-footer-card6",
          title: "恭贺疆通科技荣获ISO管理体系认证证书",
          date: "2023-03-14 ",
          main:
            "经公司员工的勤奋付出以及专家们的严格指导和审核，上海疆通科技有限公司成功通过了ISO9001质量管理体系认证。",
          href:
            "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247486005&idx=1&sn=b06b33807edeaeabbb90d0d82a01523d&chksm=96f7327ea180bb685f5090c223e20acc8f3bcb64db0c258bbc94438155a1eb551a9db11c51d6#rd",
        },
        {
          img: "6-19-index-footer-card7",
          title: "祝贺！三名员工荣获2023年人工智能职业技能证书",
          date: "2023-02-24 ",
          main:
            "上海市人工智能行业协会发布了《人工智能训练师职业技能等级直接认定通过名单》，疆通科技有三位同事也在名单之列，顺利通过人工智能训练师技师（二级）、人工智能训练师（三级）认定。",
          href:
            "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247486016&idx=1&sn=cee6534c922fa0b1efc9541d7a1e800a&chksm=96f7320ba180bb1d8083d47894ef4d2ab0492b14f6197247291a94b6ba368b6e0726bd17cd9f#rd",
        },
        {
          img: "6-19-index-footer-card8",
          title: "喜讯！祝贺疆通科技获得发明专利证书！",
          date: "2023-02-10 ",
          main:
            "热烈祝贺疆通科技“无接触电梯控制方法及装置”发明专利获得国家知识产权局授权，并取得专利证书。",
          href:
            "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247486041&idx=1&sn=c1d61447bea166fa891f0a2e706b3a2a&chksm=96f73212a180bb043236e56a62481d57812b1e3a40d2f2c8b0cc26cac1d158979d7369d5ca9c#rd",
        },
        {
          img: "6-19-index-footer-card9",
          title: "远程医疗,带你进入不一样的互联网世界",
          date: "2023-01-20 ",
          main:
            "近年来，随着信息技术的不断发展和医疗需求的不断增长，远程医疗逐渐成为一个备受关注的领域。远程医疗作为一种新的医疗模式，通过网络、通讯技术等手段，实现了医生和患者之间的交流和诊疗，具有时间灵活、距离无限、成本低等优点，为广大患者提供了更便捷、高效、个性化的医疗服务。",
          href:
            "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247486089&idx=1&sn=8847cb7869aeed5844da22e044a864d5&chksm=96f732c2a180bbd418e4ef62d7cee860a9f2b36e7d44b229fe96f3d173bdf40bfb857fbbe1e2#rd",
        },

        {
          img: "index-footer-card1",
          title: "科技挽救生命，AR技术让急救加速",
          date: " 2022-11-04",
          main:
            "在急救车内，随车医生佩戴AR眼镜，以第一视角对病患进行抢救，远程联系医院中的医生，让医生及时了解病患情况，对随车医生的急救措施进行指导与辅助，确保将“黄金抢救时间”运用到极致！",
          href:
            "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247485912&idx=1&sn=e5bc6ca4479a1b2945caee5224276868&chksm=96f73193a180b8855731f8980921c4987705957f7c9ef0662bca0a71189c69a6965f0cd2558c#rd",
        },
        {
          img: "index-footer-card2",
          title: "Rokid眼镜助力智慧工厂",
          date: "2021-09-10",
          main:
            "在政策加持与技术发展的双重推动下，智能制造已经成为当今制造行业的发展重点，那么如何通过数字化转型提升智慧工厂效能，降低用工成本，也成为了行业面临的新课题。疆通科技正与Rokid深度合作，欢迎有需求、有兴趣的客户前来垂询。",
          href: "https://mp.weixin.qq.com/s/PV1ChrcCaOsiSb5PbTjYuA",
        },
        {
          img: "index-footer-card3",
          title: "让“养老”到“享老”不再遥远",
          date: "2021-04-23",
          main:
            "近年来，智能技术对日常生活的渗透，为大部分人带来了便利，也加大了老年人面临的挑战。“智慧养老”“适老化”成为了摆在人们面前的现实课题，也是今年全国两会代表委员们关注的热点。",
          href: "https://mp.weixin.qq.com/s/Lt8dzcu6eVi1xS20x_YrSA",
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
          img: "index-footer-card11",
          title: `智能家居别墅项目`,
          date: "2021-01-30",
          main:
            "随着各企业不断开足马力加大投入，大力提升产能，随之而来的会产生大量的危废，选址及贮存不当极易造成污染环境，甚至危及生命财产安全。",
          href: "https://mp.weixin.qq.com/s/xaYYgsOJektLqtziGoax2g",
        },

        {
          img: "index-footer-card4",
          title: "物联网简史",
          date: "2020-08-14",
          main:
            "世界上第一台物联网设备，到底是谁发明的？第一个提出物联网概念的人，究竟是谁？",
          href: "https://mp.weixin.qq.com/s/nFLwfOjX0pnzhRAgOcj2yA",
        },

        {
          img: "index-footer-card12",
          title: "欧盟委员会发起物联网反垄断调查",
          date: " 2020-07-17",
          main:
            "欧盟委员会（EC）发起了一项对消费者物联网领域的调查，担心这个新兴市场可能已遭受竞争扭曲。",
          href: "https://mp.weixin.qq.com/s/_9NJJPeQKvFFhNyD1h1N-A",
        },
        {
          img: "index-footer-card7",
          title: "物联网塑造新常态",
          date: "2020-07-24",
          main:
            "全球COVID-19的大流行改变了我们思考模式、生活方式和工作节奏。它推动了探索新兴技术的机会，并在各个领域带来了机遇。此外，更加推进了物联网（IoT）的修改和部署",
          href: "https://mp.weixin.qq.com/s/Afsv5SNJIo51zwqkLFGawg",
        },
        {
          img: "index-footer-card8",
          title: "工信部发通知，再推5G发展",
          date: "2020-05-15",
          main:
            "5月7日，工信部办公厅正式发布了《关于深入推进移动物联网全面发展的通知》，这是2020年度专门针对物联网领域的首个文件。",
          href: "https://mp.weixin.qq.com/s/o5q5HJhWO5TwVhIy49E4Jg",
        },
        {
          img: "index-footer-card10",
          title: "一起来刷题（人工智能+物联网）",
          date: " 2020-03-27",
          main:
            "往期文章也为大家普及了相关物联网与人工智能的应用。今天来验收一下成果，大家可以识别下图的二维码，共20道单选题。 ( ᖛ ̫ ᖛ )ʃ)   ",
          href: "https://mp.weixin.qq.com/s/e970zN-_RPVy1yfARttFIQ",
        },
        {
          img: "index-footer-card6",
          title: `ZigBee or WI-Fi？`,
          date: " 2019-07-19",
          main:
            "目前常用的几种无线通讯协议，各有优缺点。最广为人知的可能就是蓝牙与WI-FI了。而ZigBee作为目前物联网常用的协议之一，自然也有其独特的优势存在。这两种技术承担的角色功能却并不相同。",
          href: "https://mp.weixin.qq.com/s/HS1ZW5a8Amep7mITDVOCvg",
        },
        {
          img: "index-footer-card4",
          title: "到底什么是物联网？",
          date: " 2019-10-31",
          main:
            "物联网（ IoT ，Internet of things ）即“万物相连的互联网”，是互联网基础上的延伸和扩展的网络，将各种信息传感设备与互联网结合起来而形成的一个巨大网络，实现在任何时间、任何地点，人、机、物的互联互通。",
          href: "https://mp.weixin.qq.com/s/ldWD_JRRKKXFCZyJVU_5Rw",
        },

        {
          img: "index-footer-card17",
          title: "科技公司里面是啥样的？",
          date: " 2019-11-29",
          main:
            "不同于卡片需要伸手，人脸门禁做到无感操作，只需要站在门禁面前，轻轻一瞥，自动识别，刷脸进出。简单的录入过人脸后，后面的识别任务就全部交给算法，同时也不用担心门卡或者钥匙遗失啦。",
          href: "https://mp.weixin.qq.com/s/N7NpYOc6UlLEDCQ04G6NvA",
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
</style>
