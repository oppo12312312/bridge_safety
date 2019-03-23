<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-23 17:50:56
 * @LastEditTime: 2019-03-23 21:34:08
 -->

<template>
  <div class="search">
    <div class="text">
      <el-input
        placeholder="请输入内容"
        v-model="text">
        <i 
          slot="prefix" 
          class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <el-scrollbar 
      class="height100">
      <div class="tree height100">
        <bridgeTree 
          :treeData="treeData" 
          :filterText="text"></bridgeTree>
      </div>
       
    </el-scrollbar>
    
      
  </div>
</template>

<script>
import bridgeTree from '@/page/components/tree/bridgeTree';

export default {
  components: {
    bridgeTree
  },
  props: {
    treeData: {
      default() {
        return [];
      },
      type: Array
    },
  },
  data() {
    return {
      text: ''
    };
  }

};
</script>

<style lang="scss" scoped>
@import '@/assets/style/base.scss';
@import '@/assets/style/themeColor.scss';
    .search{
        @extend .height100;
        width: 200px;
        background-color: rgba(242, 242, 242, 0.8);
        .text{
            border-right: solid #d1d1d1 1px;
            padding: 4px 10px;
            background-color: $c-bg-gray; 
           
        }
        /deep/ .el-input__inner{
            border-radius: 16px !important;
        }
        .tree{
            padding: 5px;
        }

    }
 

</style>
