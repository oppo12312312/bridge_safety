<!--
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-11 16:58:28
 * @LastEditTime: 2019-03-24 10:44:39
 -->
<template>
  <div class="system-map"> 

    <searchTree :treeData="treeData"></searchTree>
    <div class="content">

      <breadcrumb></breadcrumb>
      <div class="map">
        <bridgeMap 
          ref="map" 
          :markers="markers"></bridgeMap>
      </div>
      <div class="table">
        <div class="table-c">
          <el-table
            :data="tableData"
            height="270"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>


      </div>


    </div>


  </div>  
  
  
</template>

<script>
import bridgeMap from '@/components/bridgeMap';
import searchTree from '@/page/components/tree/searchTree';
import breadcrumb from '@/page/layout/breadcrumb';

export default {
  components: {
    bridgeMap,
    breadcrumb,
    searchTree
  },
  data() {
    return {
      text: '',
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
      }]
    };
  }

};
</script>
