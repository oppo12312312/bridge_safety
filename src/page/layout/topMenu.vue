<!--
import { debug } from 'util';
import { truncate } from 'fs';
import { debug } from 'util';
import { SSL_OP_ALL } from 'constants';
import { truncate } from 'fs';
import { debug } from 'util';
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 18:44:31
 * @LastEditTime: 2019-03-19 21:23:56
 -->

<template>
  <div class="height100">
    <div 
      class="br-switch" 
      @click="menuSwitch">
      <i class="iconfont icon-qiehuan" ></i>
    </div>
    <el-menu
      :collapse="isCollapse"
      default-active="2"
      class="el-menu-vertical-demo" 
      background-color="#33485c"
      unique-opened
      text-color="#fff"
      active-text-color="#ea644a">
      <div 
        v-for="item in menuCfg" 
        :key="item.index"
        :index="item.index">
        <el-submenu 
          v-if="item.haveChild"
          :index="item.index">

          <template 
            slot="title">
            <i 
              class="iconfont" 
              :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>

          <div 
            v-for="att in item.child" 
            :key="att.index">

            <el-submenu 
              v-if="att.haveChild"
              :index="att.index" 
              class="chird" >
              <template
                slot="title">
                <i 
                  class="iconfont" 
                  :class="att.icon"></i>
                <span>{{ att.name }}</span>
              </template>

              <el-menu-item 
                v-for="attr in att.child" 
                :key="attr.index"
                :index="attr.index"
                @click="openPage(att)">   
                <i 
                  class="iconfont" 
                  :class="attr.icon"></i>
              <span>{{ attr.name }}</span></el-menu-item>
            </el-submenu>


            <el-menu-item 
              v-else
              class="chird"
              :index="att.index" 
              @click="openPage(att)">   
              <i 
                class="iconfont" 
                :class="att.icon"></i>
            <span>{{ att.name }}</span></el-menu-item>
          </div>

        </el-submenu>
        <el-menu-item 
          v-else
          :index="item.index" 
          @click="openPage(att)">   
          <i 
            class="iconfont" 
            :class="item.icon"></i>
        <span>{{ item.name }}</span></el-menu-item>
      </div>

    </el-menu>
  </div>
  
</template>

 
<script>
const menuCfg = [
  {
    // name: '综合大屏',
    name: '测试菜单',
    icon: 'icon-dapingfuwu',
    path: 'daping',
    child: [
      {
        name: '项目总览',
        icon: 'icon-alarm-statistics',
        path: 'largeCreen'
      }
    ]
  },
  {
    // name: '数据中心',
    name: '测试菜单',
    icon: 'icon-chakandaping',
    path: 'daping',
    child: [
      {
        name: '图表分析',
        icon: 'icon-qushi',
        path: 'test'
      }
    ]
  },
  {
    name: '测试三级菜单',
    icon: 'icon-chakandaping',
    path: 'sanji',
    child: [
      {
        name: '测试三级菜单',
        icon: 'icon-chakandaping',
        path: 'layout',
        child: [{
          name: '测试三级菜单',
          icon: 'icon-chakandaping',
          path: 'layout',
        }]
      }
    ]
  }

];
const addIndex = function (menuCfg, parentIndex) {
  menuCfg.forEach((element, i) => {
    element.index = parentIndex + '_' + i;
    element.haveChild = false;
    if (element.child) {
      element.haveChild = true;
      addIndex(element.child, element.index);
    }
  });
  console.log(menuCfg);
};
addIndex(menuCfg, -1);
export default {
  data() {
    return {
      menuCfg,
      isCollapse: false
    };
  },
  methods: {
    openPage(value) {
      this.$router.push({
        name: value.path
      });
    },
    menuSwitch() {
      debugger;
      this.isCollapse = !this.isCollapse;
    }

  }
};
</script>
