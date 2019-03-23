<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 16:58:28
 * @LastEditTime: 2019-03-23 23:33:14
 -->
<template>
  <div class="monitor"> 

    <searchTree :treeData="treeData"></searchTree>
    <div class="content">

      <breadcrumb></breadcrumb>

      <el-tabs
        class="br-tab" 
        type="card"
        v-model="activeName" 
        @tab-click="tabsClick">
        <el-tab-pane 
          label="用户管理" 
          name="first">  
        
        </el-tab-pane>
        <el-tab-pane 
          label="配置管理" 
          name="second"></el-tab-pane>
        <el-tab-pane 
          label="角色管理" 
          name="third"></el-tab-pane>
        <el-tab-pane 
          label="定时任务补偿" 
          name="fourth"></el-tab-pane>
      </el-tabs>
     
      <div class="char">
        <CHistogram 
          width="100%"
          height="100%"
          :data="chartData">
        </CHistogram>
      </div>
    
      <div class="table">
        <el-table
          :data="tableData"
          height="250px"
          style="width: 100% "
          border>
          <el-table-column
            prop="date"
            label="日期"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>   

      </div> 


    </div>


  </div>  
  
  
</template>

<script>
import bridgeMap from '@/components/bridgeMap';
import searchTree from '@/page/components/tree/searchTree';
import breadcrumb from '@/page/layout/breadcrumb';

import CHistogram from 'v-charts/lib/histogram';
import {} from 'echarts';

export default {
  components: {
    bridgeMap,
    breadcrumb,
    searchTree,
    CHistogram
  },
  data() {
    return {
      text: '',
      activeName: 'first',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: ' 1516 弄'
      }],
      markers: [{
        id: 1,
        lng: 200,
        lat: 300,
        name: '999'
      }, {
        id: 2,
        lng: 400,
        lat: 610.5,
        name: '999'
      }],
      treeData: [{
        id: 1,
        label: '一级 1',
        icon: 'icon-alarm-statistics',
        children: [{
          id: 4,
          label: '二级 1-1',
          icon: 'icon-alarm-statistics',
          children: [{
            id: 9,
            label: '三级 1-1-1',
            icon: 'icon-alarm-statistics',
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {
            '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 
          },
          {
            '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 
          },
          {
            '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 
          },
          {
            '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 
          },
          {
            '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 
          },
          {
            '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 
          }
        ]
      }
    };
  },
  methods: {
    tabsClick() {
          
    }
  }

};
</script>
