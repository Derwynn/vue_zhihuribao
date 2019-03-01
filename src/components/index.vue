<template>
  <div class="wrapper">
    
      <el-container>
        <el-header>
            <el-col :span="12">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <img :src="gengduo" alt="pic"> 
                </span>
                <el-dropdown-menu slot="dropdown">
                 
                  <el-dropdown-item>首页</el-dropdown-item>
            
                </el-dropdown-menu>
              </el-dropdown>
              <img class="dian" :src="dian" alt="pic"> 
              <i class="el-icon-bell"></i>
              <a href="/" class="demonstration">首页</a> 
            </el-col> 
            
        </el-header>
        <el-main>
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(item,index) in topimg" :key="index">
                <div class="imgbox" is='router-link' :to='"/details/"+item.id'>
                  <h3>{{ item.title }}</h3>
                <img :src="item.image" alt="pic">
                </div>
                
                
              </el-carousel-item>
            </el-carousel>
        </el-main>
        <el-main>
          <h1>今日热闻</h1>
          <ul>
             <li is='router-link' :to='"/details/"+item.id' v-for="(item,index) in stories" :key='index'>
              <p>{{item.title}}</p>
              <img :src="item.images" alt="pic">
            </li>
          </ul>

        </el-main>

        <!-- <el-footer>Footer</el-footer> -->
            
     
             
          
    
     </el-container>
     <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import URL from '../api'
export default {
  components: {},
  data () {
    return {
      topimg:[],
      stories:[],
      gengduo:require("../assets/更多.png"),
      dian:require("../assets/列表-点.png"),
    };
  },
  watch: {},
  computed: {},
  methods: {
  },
  created () {},
  mounted () {
       this.$http({
          url:URL.news
      }).then((res)=>{
          console.log(res)
          this.topimg=res.data.top_stories
      }),
      this.$http({
          url:URL.news
      }).then((res)=>{
          // console.log(res)
          this.stories=res.data.stories
      })
  }
};

</script>
<style scoped>
/* wrap */
.wrapper{
    max-width: 46.875rem;
    min-width: 20rem;
    margin: 0 auto;
    overflow: hidden;
}
.el-header{
  margin: 0rem;
  padding: 0rem;
  height: 100% !important;
  width: 100%;
}
.el-main{
  margin: 0rem;
  padding: 0rem;
  height: 100%;
  width: 100%;
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
.el-header .el-col .el-dropdown .el-dropdown-link img{
  width: 1.25rem;
  
}
.el-header .el-col .demonstration{
  float: right;
  color: #fff;
  font-size: 1.25rem;
  padding-right: 31.25rem;
  padding-top: 0.75rem;
}
.el-header .el-col i{
  float: right;
  color: #fff;
  font-size: 1.5rem;
  padding-right: 2.5rem;
  padding-top: 0.8125rem;
}
.el-header .el-col .dian{
  width: 1.25rem;
  float: right;
  padding-top: 0.75rem;
  padding-right: 1.875rem;

}
.wrapper >>> .el-header .el-col .el-dropdown-menu{
    position: absolute;
    top: 33px;
    left: 289px !important;

}
/* 轮播图 */
.el-carousel__item h3 {
    color: #ffffff;
    font-size: 1.25rem;
    opacity: 0.75;
    margin: 0;
    position: absolute;
    bottom: 4.375rem;
    left: 1.25rem;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.el-carousel__item .imgbox{
  width: 100%;
  height: 100%;
}
.wrapper >>> .el-carousel .el-carousel__container{
  height: 18.75rem !important;
}
.wrapper >>> .el-carousel__indicators{
    position:absolute; 

}
.wrapper >>> .el-carousel__button{
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
}
.wrapper >>> .el-carousel img{
  width: 100%;
  height: 100%;
}
/* 今日热文 */
.el-main{
  background: #f3f3f3;
}
.el-main h1{
  color: #727272;
  padding: 1.875rem;
}
.el-main ul a{
  display: block;
  overflow: hidden;
  height: 9.375rem;
  background: #ffffff;
  margin: 0 1.25rem 1.25rem 1.25rem;;
}
.el-main ul a p{
  float: left;
  padding: 1.875rem;
  font-size: 1.875rem;
  font-weight: bold;
  width: 28.125rem;
}
.el-main ul a img{
  float: right;
  padding: 0.625rem 1.25rem 0.625rem 0;
  height: 8.125rem;
  width: 8.125rem;
}
</style>