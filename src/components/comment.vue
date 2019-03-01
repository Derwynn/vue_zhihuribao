<template>
  <el-container class="wrapper">
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
              <i class="el-icon-edit-outline"></i>
              <span class="demonstration">2 条点评</span>
              
              
            </el-col> 
            
        </el-header>

    <el-main class="el-main" is='router-link' to="shortcomment">
      <div>
        <h6>0 条短评</h6>
        <i>箭头</i>
      </div>
    </el-main> 
    <router-view></router-view>
    <el-footer class="el-footer" is='router-link' to="longcomment">
      <div>
        <h6>0 条长评</h6>
        <i>箭头</i>
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
      arr:[],
      gengduo:require("../assets/更多.png"),
    };
  },
  watch: {},
  computed: {},
  methods: {
   
  },
  created () {},
  mounted () {
      //  this.$http({
      //     url:URL.tonews+this.$route.params.id
      // }).then((res)=>{
      //     console.log(res)
      //     this.arr=res.data
      // })
  }
};

</script>
<style scoped>
.wrapper{
    display: block;
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
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  color: black;
  
}
.el-footer{
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  color: black;
  
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
  padding-right:31.25rem;
  padding-top: 0.75rem;
}
.el-header .el-col .el-icon-edit-outline{
    float: right;
    color: #fff;
    font-size: 24px;
    padding-right: 30px;
    padding-top: 10px;
    cursor:pointer;
}



/* 短评 */
.el-main div{
  display: block;
  overflow: hidden;
  padding: 20px;
  font-weight: bold;
  border-bottom: 2px solid #e5e5e5;
}
.el-main h6{
  float: left;

}
.el-main i{
  float:right;

}
/* 长评 */
.el-footer div{
  overflow: hidden;
  padding: 20px;
  font-weight: bold;
  border-bottom: 2px solid #e5e5e5;
}
.el-footer h6{
  float: left;

}
.el-footer i{
  float:right;

}



</style>