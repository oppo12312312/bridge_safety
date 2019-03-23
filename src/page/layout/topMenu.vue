<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 18:44:31
 * @LastEditTime: 2019-03-23 10:53:01
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
      :default-active="active"
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
                @click="openPage(attr)">   
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
          @click="openPage(item)">   
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
        path: '/largeCreen/index'
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
        path: '/systemMap/index'
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
      active: '',
     
    };
  },
  mounted() {
    this.menuCfg = this.addIndex(menuCfg, -1);
    this.getActiveByPathName(menuCfg, window.location.pathname);
  },
  methods: {
    openPage(value) {
      debugger;
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
          this.active = element.index;
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
    .el-submenu__title{
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
    .el-menu-item{
        background-color: rgba(30,30,30,.3) !important;
        &:hover{
            background-color: rgba(30,30,30,.3) !important;
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
