<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-20 20:40:56
 * @LastEditTime: 2019-03-20 22:31:41
 -->
<template>
  <el-breadcrumb 
    class="breadcrumb" 
    separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {

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
