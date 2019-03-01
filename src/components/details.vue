<template>
  <el-container class="wrapper">
      <el-header>
            <el-col :span="12">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <img class="fanhui" :src="fanhui" @click='$router.go(-1)'  alt="pic"> 
                </span>
              </el-dropdown>
              <div class="dianzanbox">
                  <img class="dianzan" :src="dianzan" alt="pic">
                  <h6>25</h6>
              </div>
              <div class="pinglunbox" is='router-link' :to='"/comment/"+$route.params.id'>
                  <img class="pinglun"  :src="pinglun" alt="pic">
                  <h6>6</h6>
              </div>
              <i class="el-icon-star-on" is='router-link' to='/collection'></i>
              <img class="dian" @click="centerDialogVisible = true" :src="dian" alt="pic"> 
              
              
            </el-col> 
            
        </el-header>

    <el-main>
        <el-dialog
        title=""
        :visible.sync="centerDialogVisible"
        width="50%"
        center>
        <span>分享</span>
        <span slot="footer" class="dialog-footer">
            <div class="imgbigbox">
                <div class="imgbox">
                     <img :src="weibo" alt="logo">
                     <h3>新浪微博</h3>
                </div>
                <div class="imgbox">
                    <img :src="weixin" alt="logo">
                    <h3>微信</h3>
                </div>
                 <div class="imgbox">
                    <img :src="pengyouquan" alt="logo">
                    <h3>微信朋友圈</h3>
                </div>
                 <div class="imgbox">
                    <img :src="yinxiang" alt="logo">
                    <h3>印象笔记</h3>
                </div>
                  <div class="imgbox">
                    <img :src="youdao" alt="logo">
                    <h3>有道云笔记</h3>
                </div>
                  <div class="imgbox">
                    <img :src="qq" alt="logo">
                    <h3>QQ</h3>
                </div>
                  <div class="imgbox">
                    <img :src="gengduo" alt="logo">
                    <h3>更多平台</h3>
                </div>
               
                
                
                
                
                
                


            </div>
        </span>
</el-dialog>
    </el-main>
    
    <el-main>
        <div class="xqpic">
            <img :src="arr.image" alt="pic">
            <p>{{arr.title}}</p>
            <span>{{arr.image_source}}</span>
        </div>
    </el-main> 
    <el-footer>
        <p v-html="arr.body"></p>
        <link rel="stylesheet" :href="arr.css[0]">
       
            
        
    </el-footer>
  </el-container>
</template>

<script type="text/ecmascript-6">
import URL from '../api'
export default {
  components: {},
  data () {
    return {
        arr:[],
         centerDialogVisible: false,
         fanhui:require("../assets/返回.png"),
         dian:require("../assets/分享.png"),
         dianzan:require("../assets/点赞.png"),
         pinglun:require("../assets/评论.png"),

          weibo:require("../assets/微博.png"),
          weixin:require("../assets/微信.png"),
          pengyouquan:require("../assets/朋友圈.png"),
          yinxiang:require("../assets/印象.png"),
          youdao:require("../assets/有道.png"),
          qq:require("../assets/qq.png"),
          gengduo:require("../assets/更多_1.png"),
        
    };
  },
  watch: {},
  computed: {},
  methods: {
   
  },
  created () {},
  mounted () {
       this.$http({
          url:URL.tonews+this.$route.params.id
      }).then((res)=>{
          console.log(res)
          this.arr=res.data
      })
  }
};

</script>
<style scoped>
.wrapper{
    max-width: 46.875rem;
    min-width: 20rem;
    margin: 0 auto;
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
.el-header .el-col{
  width: 100%;
  height: 3.125rem;
  background: #00a2ed;
  
}
.el-header .el-col .el-dropdown .el-dropdown-link{
  display: inline-block;
  padding-top: 0.75rem;
  padding-left: 1.875rem;

}
.el-header .el-col .el-dropdown .el-dropdown-link .fanhui{
  width: 20px;
  padding-top: 5px;
  cursor:pointer;
  
}

.el-header .el-col .el-icon-bell{
  float: right;
  color: #fff;
  font-size: 1.5rem;
  padding-right: 2.5rem;
  padding-top: 0.8125rem;
}
.el-header .el-col .dian{
    width: 24px;
    float: right;
    padding-top: 13px;
    padding-right: 40px;
    cursor:pointer;

}
.el-header .el-col .dianzanbox{
    float: right;
    padding-top: 13px;
    padding-right: 30px;

}
.el-header .el-col .dianzanbox .dianzan{
    width: 20px;
    float: left;
    cursor:pointer;

}
.el-header .el-col .dianzanbox h6{
    float: right;
    color: #fff;
    padding-left: 4px;
    padding-top: 3px;
}
.el-header .el-col .pinglunbox{
    float: right;
    padding-top: 16px;
    padding-right: 20px;

}
.el-header .el-col .pinglunbox .pinglun{
    width: 20px;
    float: left;
    cursor:pointer;

}
.el-header .el-col .pinglunbox h6{
    float: right;
    color: #fff;
    padding-left: 4px;
}
.el-header .el-col .el-icon-star-on{
    float: right;
    color: #fff;
    font-size: 24px;
    padding-right: 30px;
    padding-top: 10px;
    cursor:pointer;
}


/* 详情图片 */
.el-main .xqpic{
    width: 100%;
    height:300px;
    position: relative;

}
.el-main .xqpic img{
    width: 100%;
    height: 100%;
    
}
.el-main .xqpic p{
    font-size: 30px;
    color: #ffffff;
    padding: 0 40px;
    position: absolute;
    bottom: 60px;
    left:0px;


}
.el-main .xqpic span{
    position: absolute;
    bottom: 20px;
    right:30px;
    font-size: 21px;
    color: #c3c3c3;
    

}
.el-main .el-dialog .el-dialog__body span{
    font-weight: bold;
    font-size: 40px;
    padding-left: 12px;
    
}
.el-main .el-dialog .el-dialog__footer .dialog-footer .imgbigbox{
    overflow: hidden;
}
.el-main .el-dialog .el-dialog__footer .dialog-footer .imgbox{
    width: 140px;
    float: left;
    padding: 32px;

}
.el-main .el-dialog .el-dialog__footer .dialog-footer .imgbox h3{
    color: #686868;
    padding-top: 10px;
    font-size: 28px;

}
.el-main .el-dialog .el-dialog__footer .dialog-footer img{
    width: 100%;
    height: 100%;
}
/* 评论 */
.el-footer{
    height: 100% !important;
}
.el-footer p{
    height: 100%;
}

</style>