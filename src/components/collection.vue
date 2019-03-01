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
                 
                  <el-dropdown-item is='router-link' to="/">首页</el-dropdown-item>
            
                </el-dropdown-menu>
              </el-dropdown>
              <span class="demonstration">2 条收藏</span>
            </el-col> 
            
        </el-header>
      
        <el-main>
          <ul>
             <li>
              <p>发顺丰到付</p>
              <img src="http://pic3.zhimg.com/4131a3385c748c9e2d02ab80e29a0c52_im.jpg" alt="pic">
            </li>
          </ul>

        </el-main>

        <!-- <el-footer>Footer</el-footer> -->
            
     
             
          
    
     
 
  </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
import URL from '../api'
export default {
  components: {},
  data () {
    return {
      gengduo:require("../assets/更多.png"),
    };
  },
  watch: {},
  computed: {},
  methods: {
   
  },
  created () {},
  mounted () {},
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
  padding-right: 36.25rem;
  padding-top: 0.75rem;
}



/* 今日热文 */
.el-main{
  background: #f3f3f3;
}
.el-main h1{
  color: #727272;
  padding: 1.875rem;
}
.el-main ul li{
  border-radius: 10px;
  display: block;
  overflow: hidden;
  height: 9.375rem;
  background: #ffffff;
  margin: 0.625rem 1.25rem 1.25rem 1.25rem;
}
.el-main ul li p{
  float: left;
  padding: 1.875rem;
  font-size: 1.875rem;
  font-weight: bold;
  width: 28.125rem;
}
.el-main ul li img{
  float: right;
  padding: 0.625rem 1.25rem 0.625rem 0;
  height: 8.125rem;
  width: 8.125rem;
}
</style>