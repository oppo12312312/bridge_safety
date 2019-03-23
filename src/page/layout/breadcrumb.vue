<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-20 20:40:56
 * @LastEditTime: 2019-03-23 16:12:12
 -->
<template>
  <el-breadcrumb 
    class="breadcrumb" 
    separator-class="el-icon-arrow-right">
    <el-breadcrumb-item 
      v-for="(name, index) in menuActiveNames" 
      :key="index">{{ name }}</el-breadcrumb-item>

  </el-breadcrumb>
</template>

<script>
export default {
  inject: ['menuObj'],
  computed: {
    menuActiveNames() {
      return this.menuObj.menuActiveNames;
    }
  }

};
</script>

<style lang="scss" scoped>
@import '@/assets/style/base.scss';
@import '@/assets/style/themeColor.scss';
.breadcrumb{
  padding: 13px 0px;
  padding-left: 13px;
  background-color: $c-bg-gray;
}
</style>
