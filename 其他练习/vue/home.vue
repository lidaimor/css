<template>
  <div>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo">
        <h1 class="logo_p">天天影视</h1>
      </div>
      <!-- <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
        <a-menu-item key="1">
          <a-icon type="video-camera" />
          <router-link to="/home/homepage"><span class="nav-text">首页</span></router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <router-link to="/home/movietype"><span class="nav-text">热门电影</span></router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <router-link to="/home/newmovie"><span class="nav-text">最新发布</span></router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <router-link to="/home/contact"><span class="nav-text">联系我们</span></router-link>
        </a-menu-item>
      </a-menu> -->
    <!-- <ul>
       <li v-for="(item,index) in tablist" :key="index" :class="{actived:isactived==index}" 
          @click="isactived=index,toggle('tab'+(index+1))" style="color: #fff;">
        <span>{{item.title}}</span>
      </li>
    </ul> -->
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
        <a-menu-item v-for="(item,index) in tablist" :key="index" :class="{actived:isactived==index}" 
          @click="isactived=index,toggle('tab'+(index+1))">
          <a-icon type="video-camera" />
         <span class="nav-text">{{item.title}}</span>
        </a-menu-item>
    </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#243745', left: 40 }" >
      <a-dropdown>
        <a-input-search
            placeholder=" "
            style="width: 200px"
            @search="onSearch"
          />
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">左耳</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">分手合约</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">我的野蛮女友</a>
            </a-menu-item>
          </a-menu>
      </a-dropdown>

        <router-link to="/login"><span class="iconfont person">&#xe640;</span></router-link>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ minHeight: '560px' }" class="content">

          <component :is='currnetView' keep-alive></component>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
      </a-layout-footer>
    </a-layout>
  </a-layout>
  </div>
</template>
<script>
import homepage from './components/home/homepage.vue'
import movietype from './components/home/movietype.vue'
import newmovie from './components/home/newmovie.vue'
import contact from './components/home/contact.vue'

export default {
  data () {
      return {
          //用来保存tab的数据
          tablist : [
            {homepage : 'tab1',title : "首页"},
            {movietype : 'tab2',title : "热门电影"},
            {newmovie : 'tab3',title : "最新发布"},
            {contact: 'tab4',title:"联系我们"}
          ],
          //来保存被点击的下标
          isactived:1,
          //来保存的子组件的name
          currnetView : 'tab2'
      }
    },
    methods : {
      //替换子组件,传递参数来改变展示不同的子组件
      toggle(arg) {
        this.currnetView = arg;
      },
      onCollapse(collapsed, type) {
        console.log(collapsed, type);
      },
      onBreakpoint(broken) {
        console.log(broken);
      },
      onSearch (value) {
        console.log(value)
      }
    },
    //把子组件挂在到父组件
    components : {
      "tab1" : homepage,
      "tab2" : movietype,
      "tab3" : newmovie,
      "tab4" : contact
    }
}
</script>

<style>
*{
	box-sizing:border-box;/*//盒模型为边框盒模型*/
	-moz-box-sizing:border-box;
	-webkit-box-sizing:border-box;/*//低版本火狐和谷歌*/
}
.clearfix:before,.clearfix:after{
	display:table;
	content:"";
}
.clearfix:after{
	clear:both;
}
.clearfix{
	zoom:1;
}/*//清除浮动，兼容低版本ie浏览器*/

/* 登录图标 */
.person{
  position:absolute;
  left:90%;
  font-size: 30px;
  color: #fff;
}

#components-layout-demo-responsive .logo {
  height: 42px;
  /* background: rgba(255,255,255,.2); */
  margin-top: 10px;
  margin-bottom:20px;
}
p,h1,h2,h3,h4,h5,h6,ul,ol,dl,li,form,table{
	margin:0;
	padding:0;
}
li{
	list-style:none;
}
a{
	text-decoration:none; 
	color:#000000;
	border:0;
}
a:link{
	text-decoration:none; 
	color:#000000;
}
a:visited{
	text-decoration:none; 
	color:#000000;
}
a:hover{
	text-decoration:none; 
	color:#000000;
}
a:active{
	text-decoration:none; 
	color:#000000;
}
h1.logo_p{
  font-size:33px;
  font-family:楷体;
  font-weight:800;
  text-align:center;
  color:#12acce;
}

.content_top{
  clear:both;
  /* margin-bottom:20px; */
}

/* 轮播图 */
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
  .lbt{
    width:75%;
    height:280px;
    float:left;
  }
  .lbt_img{
    height:280px;
  }
/* 推荐电影 */
.commend{
  width:23%;
  float:left;
  margin-left:2%;
}
.commend_ul li{
    width: 100%;
    float: left;
    height: 40px;
    background-color: #28292d;
    line-height: 40px;
    padding-left: 21px;
    font-size: 13px;
    border-bottom:#4b4c50 1px solid;
}
.commend_ul .end_li{
  border-bottom:0px;
}
.commend_ul li a{
  color:#d3d4d6;
}
.hot_movies{
  line-height:20px;
  font-size:20px;
  color:#28292d;
  /* font-weight:400; */
  margin-bottom:20px;
}

/* 电影列表 */
.content .hot_m_ul li{
  float:left;
}
.content .hot_m_ul li img{
  width:144px;
  height:200px;
  margin-right:15px;
  margin-bottom:15px;
}
</style>
