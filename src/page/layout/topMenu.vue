<!--
import { debug } from 'util';
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 18:44:31
 * @LastEditTime: 2019-04-14 21:55:49
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
      :default-active="activeIndex"
      class="el-menu-vertical-demo" 
      background-color="#33485c"
      unique-opened  
      text-color="#fff"
      active-text-color="#ea644a">
      <template 
        v-for="item in menuCfg" 
        :index="item.index">
        <el-submenu 
          v-if="item.haveChild"
          :key="item.index"
          :index="item.index">

          <template 
            slot="title">
            <i 
              class="iconfont" 
              :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>

          <template 
            v-for="att in item.child" 
          >

            <el-submenu 
              :key="att.index"
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
                @click="openPage(attr)">   
                <i 
                  class="iconfont" 
                  :class="attr.icon"></i>
              <span >{{ attr.name }}</span></el-menu-item>
            </el-submenu>


            <el-menu-item 
              v-else
              class="chird"
              :key="att.index"
              :index="att.index" 
              @click="openPage(att)">   
              <i 
                class="iconfont" 
                :class="att.icon"></i>
            <span slot="title">{{ att.name }}</span></el-menu-item>
          </template>

        </el-submenu>
        <el-menu-item 
          v-else
          :index="item.index" 
          :key="item.index"
          class="stair-menu"
          @click="openPage(item)">   
          <i 
            class="iconfont" 
            :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>


    </el-menu>
  </div>
  
</template>

 
<script>

const menuCfg = [
  {
    // name: '综合大屏',
    name: '大屏控制',
    icon: 'icon-dapingfuwu',
    path: 'daping',
    child: [
      {
        name: '综合大屏',
        icon: 'icon-alarm-statistics',
        path: '/largeCreen/index'
      }
    ]
  },
  {
    // name: '数据中心',
    name: '主图系统',
    icon: 'icon-chakandaping',
    path: '/systemMap/index'
  },
  {
    // name: '数据中心',
    name: '实时监测',
    icon: 'icon-chakandaping',
    path: '/monitor/index'
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
          name: '测试三级',
          icon: 'icon-alarm-statistics',
          path: '/systemMap/index'
        }]
      }
    ]
  }

];

export default {
  data() {
    return {
      menuCfg: [],
      isCollapse: false,
      activeIndex: '',
     
    };
  },
  watch: {
    activeIndex(value) {
      const index = value.split('_');
      const re = [];
      let menu = this.menuCfg;
      for (let i = 1; i < index.length; i++) {
        const item = menu[index[i]];
        re.push(item.name);
        if (item.child) {
          menu = item.child;
        }
      }
      this.$emit('active', re);
    }
  },
  mounted() {
    this.menuCfg = this.addIndex(menuCfg, -1);
    this.getActiveByPathName(menuCfg, window.location.pathname);
  },
  methods: {
    openPage(value) {
      this.activeIndex = value.index;
      this.$router.push({
        path: value.path
      });
    },
    menuSwitch() {
      this.isCollapse = !this.isCollapse;
    },
    getActiveByPathName(menuCfg, pathname) {
      menuCfg.forEach((element) => {
        if (element.path === pathname) {
          this.activeIndex = element.index;
          return;
        }
        if (element.child) {
          this.getActiveByPathName(element.child, pathname);
        }
      });
    },
    addIndex(menuCfg, parentIndex) {
      menuCfg.forEach((element, i) => {
        element.index = parentIndex + '_' + i;
        element.haveChild = false;
        if (element.child) {
          element.haveChild = true;
          this.addIndex(element.child, element.index);
        }
      });
      return menuCfg;
    }
  }
};
</script>


<style lang="scss" >
@import '@/assets/style/base.scss';
@import '@/assets/style/themeColor.scss';
.br-top-menu{
    .is-active{
        i,span{
            color:$c-hover-red !important;
        }
    }
    // width: 200px;
    background-color: #33485c;
    .el-menu-item{
        &:hover{
            background-color: rgba(30,30,30,.3) ;
        }
        &:hover{
            span, i{
                color:$c-hover-red !important;
            }
            span{
                font-weight: 500!important;
            }
        }
    }
    .el-submenu__title,.stair-menu{
        height: 50px;
        padding: 0 10px;
        line-height: 51px;
        &:hover{
            background-color:$c-hover-red !important;
            i,span{
                color:$c-white !important;
            }
        }
        .el-submenu__icon-arrow{
            display: none;
        }

    }
    .chird{
        .el-submenu__icon-arrow{
            display: block !important;
        }
    }

    .br-switch{
        text-align: center;
        padding: 5px;
        border-top: 1px solid #555;
        border-bottom: 1px solid #555;
        cursor: pointer;
        &:hover{
            background-color: $c-hover-bg
        }
        &:hover .iconfont{
            color: $c-hover-blue
        }
        .iconfont{
            font-size: 20px;
            margin-right: 0px;
            margin-left: 0px;
            
        }

    }

        .iconfont{
            margin-right: 10px;
            margin-left: 4px;
            width: 24px;
            text-align: center;
            font-size: 16px;
            vertical-align: middle;
        }

    i{
        color: #ffffff
    }
    .is-active{
        .el-menu-item{
            i {
                color:#ea644a
            }
        }
    }
}

</style>
