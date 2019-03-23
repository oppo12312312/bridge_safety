<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-23 14:44:08
 * @LastEditTime: 2019-03-23 21:16:57
 -->
<template>
  <div class="height100">
    <el-tree
      class="filter-tree"
      :data="treeData"
      :props="defaultProps"
      default-expand-all
      check-on-click-node
      highlight-current
      :filter-node-method="filterNode"
      ref="tree2">
      <span 
        class="bridge-icon"
        slot-scope="{ node, data }">
        <i 
          v-if="data.icon" 
          class="iconfont" 
          :class="data.icon"></i>
        {{ node.label }}

      </span>
    </el-tree>
  </div>
</template>


<script>
export default {
  props: {
    treeData: {
      default() {
        return [];
      },
      type: Array
    },
    filterText: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },

    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  },
};
</script>

<style lang="scss" scoped>
.bridge-icon{
  font-size: 12px;
  i{
    padding-right: 2px;
    font-size: 14px;
  }
}
.el-tree-node__content > .el-tree-node__expand-icon {
    padding: 3px !important;
}
   .el-tree{
        background: rgba(242, 242, 242, 0.8);
    }
</style>
