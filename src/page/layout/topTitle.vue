<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-12 13:42:07
 * @LastEditTime: 2019-03-14 21:38:10
 -->
<template>
  <div class="br-top-title">
    <div class="br-logo">
     
    </div>
    <div class="br-text">京安云</div>
    <div class="br-info">
      <a><i class="iconfont icon-app_waring" ></i> <span>44</span></a> 
      <a><i class="iconfont icon-gonggao" ></i><span>2</span></a> 
      <a @click="fullScreen"><i class="iconfont icon-quanping" ></i></a> 

      <el-dropdown>
        <div class="el-dropdown-link user-v">
          <i class="el-icon--right user"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >sitc</el-dropdown-item>
          <el-dropdown-item divided>修改密码</el-dropdown-item>
          <el-dropdown-item>注销登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
     

    </div>
  </div>
</template>

<script>
import { exitFullscreen, fullScreen } from '@/js/util/dom';
export default {
  data() {
    return {
      full: false
    };
  },

  methods: {
    fullScreen() {
      this.full = !this.full;
      const dom = document.getElementById('app');
      if (this.full) {
        exitFullscreen(dom);
      } else {
        fullScreen(dom);
      }
    }
  }
};
</script>

<style>

</style>
