<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 16:58:28
 * @LastEditTime: 2019-03-23 11:51:18
 -->
<template>
  <div class="w100 height100">      
    <div>
      这里是一个默认的用户名，请求之后会改变
    </div> 
    <div>{{ loginName }}</div>
    <el-button @click="getData">请求</el-button>
  </div>
  
</template>

<script>
import servers from '@/js/servers/index';

export default {
  data() {
    return {
      loginName: 999
    };
  },
  methods: {
    async getData() {
      debugger;
      const data = await servers.get({ test: '我的用户' });
      debugger;
      this.loginName = data.loginName;
    }
  }

};
</script>

<style>

</style>
