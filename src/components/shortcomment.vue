<template>
  <el-container class="wrapper">
    <el-footer>
      <div class="pinglun">
        <img src="http://pic3.zhimg.com/01d9e29ae_im.jpg" alt="">
        <div class="biaoti">
          <h1>短评内容</h1>
          <p>的凤飞飞问问报父报二个人贝尔丰 且当前的氛围法人</p>
          <span>时间</span>
        </div>
        <i>点赞</i>
      </div>
    </el-footer>
    
  </el-container>
</template>

<script type="text/ecmascript-6">
import URL from '../api'
export default {
  components: {},
  data () {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
   
  },
  created () {},
  mounted () {
    // this.$http({
    //   url:URL.comment+this.$route.params.id+'/short-comments'
    // }).then((res)=>{
    //   console.log(res)
    // })
  }
};

</script>
<style scoped>
.wrapper{
    max-width: 46.875rem;
    min-width: 20rem;
    margin: 0 auto !important;
    overflow: hidden;
}
.el-header{
  margin: 0px;
  padding: 0px;
  height: 100% !important;
  width: 100%;
}
.el-main{
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
overflow: hidden;
}
/* 导航 */
.el-col{
  width: 100%;
  height: 3.125rem;
  background: #00a2ed;
}

/* 评论 */
.el-footer{
    height: 100% !important;
    padding: 0;
}
.el-footer .pinglun{
  padding:30px;
  overflow: hidden;
  border-bottom: 2px solid #e5e5e5;
}
.el-footer img{
  float: left;
  width: 60px;
  height: 60px;

}
.el-footer .biaoti{
  float: left;
  width: 500px;
  padding-left: 30px;

}
.el-footer .biaoti h1{
  font-size: 21px;
  font-weight: bold;
  padding-bottom: 24px;

}
.el-footer .biaoti p{
  font-size: 18px;
  padding-bottom: 24px;

}
.el-footer .biaoti span{
  color: #ccc;
}
.el-footer i{
  float: right;

}


</style>