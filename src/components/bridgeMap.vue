<!--
 * @Description: 地图
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-03-01 14:59:51
 * @LastEditTime: 2019-03-16 10:43:40
 -->
<template>
  <div class="map">
    <l-map 
      ref="map" 
      @click="click" 
      :minZoom="minZoom" 
      :maxZoom="maxZoom" 
      :zoomAnimationThreshold="zoomAnimationThreshold"
      :crs="crs">
      <l-image-overlay 
        :url="url" 
        :bounds="bounds"></l-image-overlay>
    </l-map>
  </div>
</template>

<script>
import {
  LMap, LImageOverlay, LMarker, LPopup, LPolyline 
} from 'vue2-leaflet';
import L from 'leaflet'; 

import 'leaflet/dist/leaflet.css';

export default {
  name: 'CameraMap',
  components: {
    LMap,
    LImageOverlay,
    LMarker,
    LPopup,
    LPolyline
  },
  props: {
    width: {
      type: Number,
      default: 1266
    },
    height: {
      type: Number,
      default: 984
    },
    url: {
      type: String,
      default: '/map/bigMap.svg'
    },
    markers: {
      type: Array,
      default() {
        return [];
      }
    },
    iconType: {
      type: String,
      default: 'icon'
    }
  },
  data() {
    return {
      /**
         * 普通图标
         */
      zoomAnimationThreshold: 0,
      icon: {
        iconAnchor: new L.Point(30, 30),
        iconSize: new L.Point(50, 32),
        iconUrl: '/map/location.png'
      },
      /**
         * 红色图标
         */
      iconRed: {
        iconAnchor: new L.Point(30 * 1.2, 30 * 1.2),
        iconSize: new L.Point(50 * 1.2, 32 * 1.2),
        iconUrl: '/map/location_gif.gif'
      },
      tooltip: {
        permanent: true,
        offset: new L.Point(-3, -30),
        direction: 'top',
        className: 'tooltip',
        closeButton: false
      },
      /**
         * 最小最大缩放级别
         */
      minZoom: -3,
      maxZoom: 3,
      crs: L.CRS.Simple,
      /**
         * tip偏移量
         */
      popup: {
        noHide: true,
        offset: new L.Point(0, -15)
      }
    };
  },
  computed: {
    bounds() {
      return this.getBounds();
    }
  },
  watch: {
    url() {
      this.setCenter();
    },
    markers() {
      this.addMarker();
    }
  },
  mounted() {
    this.initMap();
    this.setCenter();
    this.initFeatureGroup();
    this.addMarker();
  },
  methods: {
    initMap() {
      this.map = this.$refs.map.mapObject;
    },
    /**
       * 通过传入的markers， 在地图上面添加标注点
       */
    addMarker() {
      this.clearLayers();
      this.markers.forEach(att => {
        att.icon = new L.Icon(this[this.iconType]);
        const marker = L.marker([att.lat, att.lng], att);
        this.editableLayers.addLayer(marker);
        marker.bindPopup('<div>245</div>', this.tooltip);
        // const scope = this;
        marker.on('click', () => {
        //   this.bindTooltip(att.name, scope.tooltip);
          marker.openPopup();
        });
        // marker.on('click', function () {
        //   this.closePopup();
        // });
      });
    },
    bindPopup(html, callBack) {
      const markers = this.editableLayers.getLayers();
      this.setCenter();
      const scope = this;
      setTimeout(() => {
        const i = Math.random() > 0.5 ? 1 : 0;
        this.highlightMarker(markers[i].options.id);
        scope.location(markers[i].options);
        markers[i].bindPopup(html, scope.tooltip);
        markers[i].openPopup();
        callBack();
      }, 500);
    },
    /**
       * 清楚地图上的所有标注
       */
    clearLayers() {
      this.editableLayers.clearLayers();
    },
    /**
       * 初始化图层组
       */
    initFeatureGroup() {
      this.editableLayers = new L.FeatureGroup();
      this.map.addLayer(this.editableLayers);
    },
    /**
       * 设置地图的中心，复位地图
       */
    setCenter() {
      this.map.fitBounds(this.getBounds());
    },
    /**
       * 通过坐标定位
       */
    location(coor) {
      this.map.setView(coor, 2);
    },
    /**
       * 高亮某个点
       */
    highlightMarker(id) {
      const markers = this.editableLayers.getLayers();
      let result = {};
      markers.forEach(att => {
        if (att.options.id === id) {
          att.setIcon(new L.Icon(this.iconRed));
          result = att;
        } else {
          att.setIcon(new L.Icon(this.icon));
        }
      });
      return result;
    },
    /**
       * 获取地图的范围
       */
    getBounds() {
      return [
        [0, 0],
        [this.height, this.width]
      ];
    },
    click(val) {
      if (!this.isInLayer(val.latlng)) {
        this.$emit('clickBlankSpace', val);
      }
    },
    /**
       * 判断标会的点是否在图片的范围之内
       */
    isInLayer(latlng) {
      const lat = latlng.lat;
      const lng = latlng.lng;
      if (lat < this.height && lng < this.width && lat > 0 && lng > 0) {
        return true;
      } 
      return false;
    }
  }
};
</script>
<style lang="scss" scoped>
  .map {
    height: 100%;
    width: 100%;
  }
</style>
