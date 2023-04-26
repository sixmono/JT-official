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
            :id="item.name"
          >
            <!--
              跳转新闻页面 
              <NuxtLink to="/components/news" rel="opener"> -->
            <div class="Case-card-col-positive">
              <img :src="require(`../static/Case/${item.img}.jpg`)" alt="" />
            </div>
            <div class="Case-card-col-positive-text">
              <h6>{{ item.title }}</h6>

              <h5>{{ item.title }}</h5>
              <h1>{{ item.background }}</h1>
              <h2>{{ item.tong }}</h2>
              <h3>{{ item.body }}</h3>
              <h4>{{ item.good }}</h4>
            </div>
            <!-- </NuxtLink> -->
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
          title: `AR眼镜远程协助巡检:大连商品交易所机房。`,
          background: `背景∶数据机房与总部保持远程维修、维护,采用技术方案是手机、监控摄像机和电脑联调,进行远程汇报。
          
          痛点:现场检修技术难度高,总部技术人员无法第一视角判断,机房背景噪音大,总部听不见,现场服务器检修代码,总部看不清,现场检修动作协作,不同步。
          
          方案︰采用AR眼镜和其远程平台益处:轻巧便捷解决了上述所有问题。
          
          益处:轻巧便捷解决了上述所有问题。`,
          activePage: 1,
          name: "AR-remote-assistance",
        },
        {
          img: "CaseCard2",
          title: "互动多媒体展陈:国家会展中心",
          background: `背景:三百余块多媒体屏,其中几十块物理损坏、信息发布系统瘫痪,资料缺失,多家供应商未能解决。
            
            痛点︰展览开展在即,如不能如期播放广告面临巨额赔偿。
            
            方案:摸排现场线路,调配零件,重新调试,通宵作业,在开展前恢复系统,并搭建提供了相应的多媒体展陈方案。
            
            益处:多媒体系统如期正常使用,避免了巨额经济损失。
            `,
          activePage: 2,
          name: "Interactive-multimedia",
        },
        {
          img: "CaseCard3",
          title: "多媒体教学:大学实验室",
          background: `背景:实验室有多种危险化学品,需要进行培训。
          
          痛点:有些实验场景因为危险性和试验成本问题,再现难度比较高,培训和实际情况割裂。
          
          方案:通过AR虚拟教学模拟场景。
          
          益处:安全培训教学,不规范动作AI自动识别纠错。
          `,
          activePage: 3,
          name: "Multimedia-teaching",
        },
        {
          img: "CaseCard4",
          title: "AI识别服务",
          background: `背景:某世界前三医疗企业合规方案AI识别服务。
          
          痛点:文件要求的专业性要求高、数量多,须同时满足药企国内总部、境外总部、药监局等要求,普通OCR和语义识别软件无法满足企业要求,企业安排专人撰写,成本高、效率低；危化品运输和仓储成本高。
         
          方案:采用知识图谱AI识别学习方式,生成合规报告；依据政府豁免条款,为危化品设计了全流程豁免方案,并取得了监管部门认可的合规报告。
          
          益处:报告的交付时间减少90%,合规方案设计减少32%的物流费用
          `,

          activePage: 4,
          name: "AI-recognition-service",
        },
        {
          img: "CaseCard5",
          title: "Al场景落地:普陀区政府垃圾分类智能管理",
          background: `背景:某社区居民在非规定时间段在垃圾桶外乱丢垃圾
          
          痛点︰乱丢垃圾影响脏乱差,安排专门人员看守成本高,小区保安监控实时性和积极性不高。
          
          方案∶利用原有垃圾房普通监控进行系统升级,出现违规行为,系统会自动识别并在现场发出语音督导,执法人员可同步收到违规截图提醒。
          
          益处︰低成本解决了违规行为,语音督导和图文追溯相结合,大幅降低现场违规现象,提高了监管效率。
          `,
          activePage: 5,
          name: "AI-scene-landing",
        },
        {
          img: "CaseCard6",
          title: "数字孪生:福斯润滑油工厂生产优化",
          background: `背景:工厂原有不同年代建设的数字化系统,流水线作业采用人工巡检的方式。
            
            痛点︰不同智能化系统信息孤岛,不能和业务流程紧密结合,日常巡检,易出现人为失误。
            
            方案∶采用多源异构集成方案,将不同品牌的系统整合在一个平台,将智能化系统嵌入生产业务流程中,利用AR和Al相结合的方式,对生产过程中的异常情况自动识别,全程跟踪溯源。
            
            益处:智能化系统提供优化策略,避免损失,提高了生产效益。
            `,
          activePage: 6,
          name: "Digital-twin",
        },
        {
          img: "CaseCard7",
          title: "数字可视化项目",
          background: `背景:电力项目配电品牌差异大、地点分散、作业环境复杂、高危作业频繁, 作业任务量、繁重,在生产作业过程中存在较多人为不安全行为状态和环境的不安全因素。
            
            痛点:需采集的数据参差不齐、流程复杂、任务繁重,专业数据多,必须在合规前提下如期完成,要求苛刻。
            
            方案:低代码将设备与管理纵向打通；将专业、部门、管理系统、地域四个维度横向融通；将历史数据总结经验,建立模型,分析实时运行,预测将来运行参数实现时间贯通,在关键节点采用AR可视化辅助,最终实现项目全周期可视化协同。
            
            益处:打通数据孤岛,将专业数据可视化,系统操作更简便；提升软件运行可靠性,运检效率提升30%。
            `,
          activePage: 7,
          name: "Digital-visualization",
        },
        {
          img: "CaseCard8",
          title: "银行全国网点智能化改造和运维",
          background: `背景:某银行全国营业厅网点分散,各地宣传视频、人员考勤、智能设备的品牌均不同,维护要求不同,管理部门不同,总部希望需要统一管理。
          
          痛点:新旧系统维护种类多、地域分散,现场处置时间紧。
          
          方案:根据总行政策,整体设计,分步实施,重新设计低代码系统,打通IT和OT多要素；结合全国现场驻扎员工和长期合作人员相结合,对当地的智能化系统进行全生命周期服务。
          
          益处:低成本下覆盖全国所有网点的智能化系统,确保了设备维修及时性、系统运行稳定性,维修效率提升40。
          `,
          activePage: 8,
          name: "Intelligent-transformation",
        },
        {
          img: "CaseCard9",
          title: "人脸识别管控系统︰某十大资产公司VIP接待厅",
          background: `背景︰金融展厅,用于接待VVIP客户和宣传金融产品。
          
          痛点:门头采用LED招牌无新意,投资顾问更替频繁,新来人员无法记住每个贵宾,不能即时给贵宾提供精准的个性化服务。
          
          方案:采用全息投影招牌替代原有门头,内容可随意调整,通过人工智能识别,自动通知相关投资顾问迎宾,将合适的理财产品推送给顾问,并匹配贵宾喜好的场景。
          
          益处:全息门头时尚新颖,即时更新理财广告,提高了企业形象和信息发布效率;智能识别,降低服务成本,提供宾至如归的精准服务,提升了服务品质。
          `,
          activePage: 9,
          name: "Face-recognition",
        },
        {
          img: "CaseCard10",
          title: "智慧养老跌倒系统等:高端养老院智慧养老系统",
          background: `背景︰养老院由园区多栋建筑构成,需要多种智慧场景解决方案,尤其是跌倒和定位。
          
          痛点:成本有限,同时不希望采取手环和摄像监控的方式。
          
          方案:我司跌倒监测提供了人工智能和物联网相结合的方式,一旦发现老人跌倒,可自动通知相关人员采取措施;同时物联网定位方案使得老人无需佩戴手环即可实现定位。
          
          益处:非接触,不改变老人生活习惯的前提下,实现了多种智慧养老场景。
          `,
          activePage: 10,
          name: "intelligent-system",
        },
        {
          img: "CaseCard11",
          title: "智慧养老定位系统等:上海长宁区为民服务中心",
          background: `背景:街道为民服务中心打造智慧养老样板背景:街道为民服务中心打造智慧养老样板。

          痛点:对客流量和提供的服务类型是否匹配不了解,没有数据参考,参观人员也不能做到一直有人跟随解说。

          方案:非接触客流分析系统提供数据可调整相应的服务,参观者无需佩戴设备即可实现智能家居场景切换和无线定位跟随解说。
          
          益处:数据更准确,场景更智能,民政部和市政府相关领导多次现场参观智慧养老场景。
          `,
          activePage: 11,
          name: "intelligent-system2",
        },
      ],
      //  list2: [
      //   {
      //     img: "CaseCard1",
      //     title: `AR眼镜远程协助巡检:大连商品交易所机房。

      //     `,
      //     background: `
      //     背景∶数据机房与总部保持远程维修、维护,采用技术方案是手机、监控摄像机和电脑联调,进行远程汇报。
      //     痛点:现场检修技术难度高,总部技术人员无法第一视角判断,机房背景噪音大,总部听不见,现场服务器检修代码,总部看不清,现场检修动作协作,不同步。
      //     方案︰采用AR眼镜和其远程平台益处:轻巧便捷解决了上述所有问题。
      //     益处:轻巧便捷解决了上述所有问题。`,
      //     tong: "",
      //     body: "",
      //     good: "",
      //     activePage: 1,
      //     name: "AR-remote-assistance",
      //   },
      //   {
      //     img: "CaseCard2",
      //     title: "互动多媒体展陈:国家会展中心",
      //     background:
      //       "背景:三百余块多媒体屏,其中几十块物理损坏、信息发布系统瘫痪,资料缺失,多家供应商未能解决",
      //     tong: "痛点︰展览开展在即,如不能如期播放广告面临巨额赔偿。",
      //     body:
      //       "方案:摸排现场线路,调配零件,重新调试,通宵作业,在开展前恢复系统,并搭建提供了相应的多媒体展陈方案",
      //     good: "益处:多媒体系统如期正常使用,避免了巨额经济损失",
      //     activePage: 2,
      //     name: "Interactive-multimedia",
      //   },
      //   {
      //     img: "CaseCard3",
      //     title: "多媒体教学:大学实验室",
      //     background: "背景:实验室有多种危险化学品,需要进行培训",
      //     tong:
      //       "痛点:有些实验场景因为危险性和试验成本问题,再现难度比较高,培训和实际情况割裂",
      //     body: "方案:通过AR虚拟教学模拟场景",
      //     good: "益处:安全培训教学,不规范动作AI自动识别纠错",
      //     activePage: 3,
      //     name: "Multimedia-teaching",
      //   },
      //   {
      //     img: "CaseCard4",
      //     title: "AI识别服务",
      //     background: "背景:某世界前三医疗企业合规方案AI识别服务",
      //     tong:
      //       "痛点:文件要求的专业性要求高、数量多,须同时满足药企国内总部、境外总部、药监局等要求,普通OCR和语义识别软件无法满足企业要求,企业安排专人撰写,成本高、效率低；危化品运输和仓储成本高",
      //     body:
      //       "方案:采用知识图谱AI识别学习方式,生成合规报告；依据政府豁免条款,为危化品设计了全流程豁免方案,并取得了监管部门认可的合规报告",
      //     good: "益处:报告的交付时间减少90%,合规方案设计减少32%的物流费用",
      //     activePage: 4,
      //     name: "AI-recognition-service",
      //   },
      //   {
      //     img: "CaseCard5",
      //     title: "Al场景落地:普陀区政府垃圾分类智能管理",
      //     background: "背景:某社区居民在非规定时间段在垃圾桶外乱丢垃圾",
      //     tong:
      //       "痛点︰乱丢垃圾影响脏乱差,安排专门人员看守成本高,小区保安监控实时性和积极性不高",
      //     body:
      //       "方案∶利用原有垃圾房普通监控进行系统升级,出现违规行为,系统会自动识别并在现场发出语音督导,执法人员可同步收到违规截图提醒",
      //     good:
      //       "益处︰低成本解决了违规行为,语音督导和图文追溯相结合,大幅降低现场违规现象,提高了监管效率",
      //     activePage: 5,
      //     name: "AI-scene-landing",
      //   },
      //   {
      //     img: "CaseCard6",
      //     title: "数字孪生:福斯润滑油工厂生产优化",
      //     background:
      //       "背景:工厂原有不同年代建设的数字化系统,流水线作业采用人工巡检的方式",
      //     tong:
      //       "痛点︰不同智能化系统信息孤岛,不能和业务流程紧密结合,日常巡检,易出现人为失误",
      //     body:
      //       "方案∶采用多源异构集成方案,将不同品牌的系统整合在一个平台,将智能化系统嵌入生产业务流程中,利用AR和Al相结合的方式,对生产过程中的异常情况自动识别,全程跟踪溯源",
      //     good: "益处:智能化系统提供优化策略,避免损失,提高了生产效益",
      //     activePage: 6,
      //     name: "Digital-twin",
      //   },
      //   {
      //     img: "CaseCard7",
      //     title: "数字可视化项目",
      //     background:
      //       "背景:电力项目配电品牌差异大、地点分散、作业环境复杂、高危作业频繁, 作业任务量、繁重,在生产作业过程中存在较多人为不安全行为状态和环境的不安全因素。",
      //     tong:
      //       "痛点:需采集的数据参差不齐、流程复杂、任务繁重,专业数据多,必须在合规前提下如期完成,要求苛刻",
      //     body:
      //       "方案:低代码将设备与管理纵向打通；将专业、部门、管理系统、地域四个维度横向融通；将历史数据总结经验,建立模型,分析实时运行,预测将来运行参数实现时间贯通,在关键节点采用AR可视化辅助,最终实现项目全周期可视化协同",
      //     good:
      //       "益处:打通数据孤岛,将专业数据可视化,系统操作更简便；提升软件运行可靠性,运检效率提升30%",
      //     activePage: 7,
      //     name: "Digital-visualization",
      //   },
      //   {
      //     img: "CaseCard8",
      //     title: "银行全国网点智能化改造和运维",
      //     background:
      //       "背景:某银行全国营业厅网点分散,各地宣传视频、人员考勤、智能设备的品牌均不同,维护要求不同,管理部门不同,总部希望需要统一管理",
      //     tong: "痛点:新旧系统维护种类多、地域分散,现场处置时间紧",
      //     body:
      //       "方案:根据总行政策,整体设计,分步实施,重新设计低代码系统,打通IT和OT多要素；结合全国现场驻扎员工和长期合作人员相结合,对当地的智能化系统进行全生命周期服务",
      //     good:
      //       "益处:低成本下覆盖全国所有网点的智能化系统,确保了设备维修及时性、系统运行稳定性,维修效率提升40",
      //     activePage: 8,
      //     name: "Intelligent-transformation",
      //   },
      //   {
      //     img: "CaseCard9",
      //     title: "人脸识别管控系统︰信达资产公司VIP接待厅",
      //     background: "背景︰金融展厅,用于接待VVIP客户和宣传金融产品",
      //     tong:
      //       "痛点:门头采用LED招牌无新意,投资顾问更替频繁,新来人员无法记住每个贵宾,不能即时给贵宾提供精准的个性化服务",
      //     body:
      //       "方案:采用全息投影招牌替代原有门头,内容可随意调整,通过人工智能识别,自动通知相关投资顾问迎宾,将合适的理财产品推送给顾问,并匹配贵宾喜好的场景",
      //     good:
      //       "益处:全息门头时尚新颖,即时更新理财广告,提高了企业形象和信息发布效率;智能识别,降低服务成本,提供宾至如归的精准服务,提升了服务品质。",
      //     activePage: 9,
      //     name: "Face-recognition",
      //   },
      //   {
      //     img: "CaseCard10",
      //     title: "智慧养老跌倒系统等:裔睿养老院智慧养老系统",
      //     background:
      //       "背景︰养老院由园区多栋建筑构成,需要多种智慧场景解决方案,尤其是跌倒和定位",
      //     tong: "痛点:成本有限,同时不希望采取手环和摄像监控的方式",
      //     body:
      //       "方案:我司跌倒监测提供了人工智能和物联网相结合的方式,一旦发现老人跌倒,可自动通知相关人员采取措施;同时物联网定位方案使得老人无需佩戴手环即可实现定位。",
      //     good: "益处:非接触,不改变老人生活习惯的前提下,实现了多种智慧养老场景",
      //     activePage: 10,
      //     name: "intelligent-system",
      //   },
      //   {
      //     img: "CaseCard11",
      //     title: "智慧养老定位系统等:上海华阳路为民服务中心",
      //     background:
      //       "背景:街道为民服务中心打造智慧养老样板背景:街道为民服务中心打造智慧养老样板",
      //     tong:
      //       "痛点:对客流量和提供的服务类型是否匹配不了解,没有数据参考,参观人员也不能做到一直有人跟随解说",
      //     body:
      //       "方案:非接触客流分析系统提供数据可调整相应的服务,参观者无需佩戴设备即可实现智能家居场景切换和无线定位跟随解说",
      //     good:
      //       "益处:数据更准确,场景更智能,民政部和市政府相关领导多次现场参观智慧养老场景",
      //     activePage: 11,
      //     name: "intelligent-system2",
      //   },
      // ],
      indexs: parseInt(sessionStorage.getItem("下标")),
      listIndex: 0,
    };
  },
  methods: {
    // 不好用的锚点
    // handleClick(item) {
    //   sessionStorage.setItem("下标", item.activePage);
    // },
    // handleClick1(index) {
    //   this.indexs = index;
    //   document.getElementsByClassName("Case-card-col")[this.indexs].style.transition =
    //     "all .1s linear";
    //   setTimeout(() => {
    //     document.getElementsByClassName("Case-card-col")[this.indexs].style.transform =
    //       "scale(1.1)";
    //   }, 1000);
    //   setTimeout(() => {
    //     document.getElementsByClassName("Case-card-col")[this.indexs].style.transform =
    //       "scale(1.0)";
    //   }, 2000);
    //   document.getElementsByClassName("Case-card-col")[this.indexs].scrollIntoView({
    //     behavior: "smooth", // 平滑过渡
    //     block: "start", // 上边框与视窗顶部平齐。默认值
    //   });
    // },
    // 好用的锚点
    goAnchor(selector) {
      setTimeout(() => {
        // 获取锚点元素
        const anchor = this.$el.querySelector(selector);
        anchor.style.transition = "all .4s ease-in-out";
        setTimeout(() => {
          anchor.style.transform = "scale(1.1)";
        }, 500);
        setTimeout(() => {
          anchor.style.transform = "scale(1.0)";
        }, 1000);
        anchor.scrollIntoView({
          behavior: "smooth", // 平滑过渡
          block: "start", // 上边框与视窗顶部平齐。默认值
        });
      }, 1000);
    },
  },
  mounted() {
    // 好用的锚点
    if (window.location.hash) {
      this.goAnchor(window.location.hash);
    }
    // 不好用的锚点
    // document.getElementsByClassName("Case-card-col")[this.indexs].style.transition =
    //   "all .1s linear";
    // setTimeout(() => {
    //   document.getElementsByClassName("Case-card-col")[this.indexs].style.transform =
    //     "scale(1.1)";
    // }, 1000);
    // setTimeout(() => {
    //   document.getElementsByClassName("Case-card-col")[this.indexs].style.transform =
    //     "scale(1.0)";
    // }, 2000);
    // document.getElementsByClassName("Case-card-col")[this.indexs].scrollIntoView({
    //   behavior: "smooth", // 平滑过渡
    //   block: "start", // 上边框与视窗顶部平齐。默认值
    // });
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
@media screen and (max-width: 500px) {
  .Banner {
    margin-top: 80px;
  }
  .Case-card-col-positive-text h4 {
    font-size: 20px !important;
  }
  .Case-card-col-positive-text h5 {
    font-size: 18px !important;
  }
  .Case-card-col-positive-text {
    display: none;
  }
}
@media screen and (min-width: 950px) and (max-width: 1450px) {
  .Case-card-col-positive-text {
    display: none;
  }
}
@media screen and (max-width: 380px) {
  .Banner {
    margin-top: 160px;
  }
  .Case-card-col-positive-text {
    h1,
    h2,
    h3,
    h4 {
      font-size: 12px;
    }
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

      // 既定模型,算法模型,应急策略生成
      // 传感器有没有好的建议,气体或其他
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
          white-space: pre-line;
          // 顶部内容
          h6 {
            margin: 10px 0;
            color: #b2b2b2;
            font-size: 22px;
            font-weight: 300;
            transition: all linear 0.5s;
          }
          p {
            margin: 10px 0;
            color: #b2b2b2;
            font-size: 2vh;
            font-weight: 300;
            transition: all linear 0.5s;
          }
          // 主要部分内容
          h5 {
            transition: all linear 0.5s;
            text-decoration: none;
            color: silver;
            opacity: 0;
            display: table-column;
            font-size: 20px;
            width: 90%;
          }

          h1,
          h2 {
            transition: all linear 0.5s;
            text-decoration: none;
            color: silver;
            opacity: 0;
            display: table-column;
            font-size: 16px;
            width: 90%;
            text-overflow: ellipsis;
          }
          h3 {
            transition: all linear 0.5s;
            text-decoration: none;
            color: silver;
            display: table-column;
            font-size: 16px;
            width: 90%;
          }
          h4 {
            transition: all linear 0.5s;
            text-decoration: none;
            color: silver;
            display: table-column;
            font-size: 16px;
            padding-right: 20px;
          }
        }
      }
    }
    &-col:hover {
      h1 {
        display: inline-block;
        opacity: 1;
        transform: translateY(-100px);
        position: absolute;
        top: 140px;
      }
      h2 {
        display: inline-block;
        opacity: 1;
        transform: translateY(-100px);
        position: absolute;
        top: 190px;
      }
      h3 {
        display: inline-block;
        opacity: 1;
        transform: translateY(-100px);
        position: absolute;
        top: 260px;
      }
      h4 {
        display: inline-block;
        opacity: 1;
        transform: translateY(-100px);
        position: absolute;
        top: 330px;
      }
      h5 {
        display: inline-block;
        opacity: 1;
        position: absolute;
        top: 100px;
        transform: translateY(-100px);
      }

      h6 {
        opacity: 0;
      }
      img {
        opacity: 0.2;
        height: 100%;
      }
    }
  }
}
</style>
