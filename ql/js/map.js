/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-04-30 21:57:47
 * @LastEditTime: 2019-05-13 21:07:26
 */
var map = null;
var imageOverlay = null;
var defaultZoom = 0.3;

var allJm = [];

var popup= {
    noHide: true,
    offset: new L.Point(0, 0)
};
var icon = {
    iconSize: new L.Point(26, 26),
    baseUrl : "./img/yuan-1.svg",
    iconUrl: ""
};

var editableLayers =  new L.FeatureGroup();
editableLayers.on("contextmenu", contextmenuLayer)
editableLayers.on("mouseover", mouseoverLayer)
editableLayers.on("mouseout",  mouseoutLayer)

//当前选中的桥梁id
var checkedJcId = -1;

//当前标注的点
var addPoint = null;

//当前点击的点
var clickPoint = null;

//是编辑框还是删除框
var dialogType = null;



function initMap(url, zoom){
    var num = 20;
    var h = 540,
    w = 900;
    //地图的范围，不能修改，修改后之前的标注坐标全部作废
    var bounds = [[
        [0, 0],
        [h,w]
      ]]
    map = L.map('leaflet-map', {   //div容器id
        crs: L.CRS.Simple,
        maxZoom: 7,  //最大级别
        minZoom: 0,  //最小级别
        zoomDelta: 0.1,  //点击放大按钮每次缩放的级别
        zoomSnap: 0.1,   //鼠标滚轮每次的缩放级别
        center: [h/2, w/2],  //地图的中心点，不能修改
        zoom: defaultZoom    //默认缩放级别
    });

    // var southWest = map.unproject([0, h], map.getMaxZoom() - 1);
    // var northEast = map.unproject([w, 0], map.getMaxZoom() - 1);
    // var bounds = new L.LatLngBounds(southWest, northEast);
    console.log(bounds)
    //创建项目图层
    imageOverlay =  L.imageOverlay(url, bounds);
    //创建项目图层
    imageOverlay.addTo(map);
    //设置项目图层的最大范围
    map.setMaxBounds(bounds);
    map.addLayer(editableLayers);
    //地图缩放的时候清楚menu和popup
    map.on("zoom",function(){
        closePopup()
        closeMenu()
    })
    map.on("click", function(){
        closeMenu()
    })
    map.on("move", function(){
        closeMenu()
    })
    L.drawLocal = mapCfg;
    //开启标注
    startDraw();
    //设置地图的项目url
    setMapUrl(url)
}

function setMapUrl(url,zoom){
    //如果后台配置了zoom则使用后台的zoom
    if(zoom){
        map.setZoom(zoom);
    }else{
        // var img = new Image();
        // img.src = url;
        // img.onload = function() {   
            // map.setZoom(defaultZoom* (img.height/img.width));
            map.setZoom(defaultZoom)
        // }

    }
    imageOverlay.setUrl(url);
    
}

function  startDraw() {
    new L.EditToolbar.Edit(this.map, {
      featureGroup: editableLayers
    });
    icon.iconUrl = icon.baseUrl;
    //设置标准的时候的鼠标的图标
    var MyCustomMarker = L.Icon.extend({
      options: icon
    });
    var options = {
      position: "bottomleft",
      draw: {
        polyline: false,
        polygon: false,
        circle: false, // Turns off this drawing tool
        rectangle: false,
        circlemarker: false,
        marker: {
            icon: new MyCustomMarker()
        }
      },
      edit: {
        featureGroup: editableLayers, //REQUIRED!!
        remove: true
      }
    };
    // this.drawControl = new L.Draw.Marker(this.map, {
    //   icon: new MyCustomMarker()
    // });

    //开启标注
    var drawControl = new L.Control.Draw(options);
    map.addControl(drawControl);
    let scope = this;
    /**
     * 地图添加标注成功事件
     */
   
    //每次标准成功触发的事件
    map.on(L.Draw.Event.CREATED, function(e) {
        addPoint = e.layer;
        // addPoint.bindPopup(addPoint._latlng.lat + "  "+ addPoint._latlng.lng);
        editableLayers.addLayer(addPoint);
        // addPoint.openPopup();
        dialogType = "add"
        $("#add-cross-section").modal('show');
        initDialogContent();
        $("#basic-addon-y").val(addPoint._latlng.lat.toFixed(2))
        $("#basic-addon-x").val(addPoint._latlng.lng.toFixed(2))

        
    });

  }


//通过项目id 绘制所有界面
function  initMarker(id){
    if(id){
        checkedJcId = id;
    }
    editableLayers.clearLayers();
    getJcCrosssectionByProId(checkedJcId, function(data){
        data.forEach(function(item){
            icon.iconUrl = icon.baseUrl.replace('1',item.croAlarmLevel)
            //截面的图标配置
            item.icon = L.icon(icon);
            if(item.crossSectionProjectY && item.crossSectionProjectX){
                var marker = L.marker([item.crossSectionProjectY, item.crossSectionProjectX],item);
                editableLayers.addLayer(marker);
            }
        })
    })
}

//hover截面
function mouseoverLayer(event){
    console.log(event)
    var crossSectionId = event.layer.options.crossSectionId;
    $("#marker-popup").html("<div class='popup'>" +"数据加载中..."+ "</div>")

    showPopup(event);

    getCroTermPar(crossSectionId, function(data){
        if(data.length > 0){
            var html = "";
            data.forEach(function(item,index){
                if(index === data.length -1){
                    html += "<div class ='f-left  p-name p-name-last'>" +item.name+ "：</div>"
                }else{
                    html += "<div class ='f-left p-name'>" +item.name+ "：</div>"
                }
                html += "<div class ='f-left p-value'>" +item.value+ "</div>"
                html += "<div class ='f-left p-unity'> " +item.unity+ "</div>"
            })
            $("#marker-popup").html("<div class='popup'>" +html+ "</div>")
        }else{
            $("#marker-popup").html("<div class='popup'>" +"暂无数据"+ "</div>")


        }

    })
}
$(function(){
    $("#marker-popup").mouseout(function(){
        if(!$("#marker-popup:hover").length ){
            closePopup()
        }
    })
    $("#add-cross-section-enter").click( function(){
        $("#add-cross-section").modal('hide');
        if(dialogType === 'add'){
            addCross()
        }else{
            editCross()
        }
       
    })
    $("#delete-cross-section-enter").on("click", function(){
        $("#delete-cross-section").modal('hide');
        deleteCross();
    })

    $('#add-cross-section').on('hidden.bs.modal', function () {
        // initMarker()
        editableLayers.removeLayer(addPoint);
    })

    $('#delete-cross-section').on('hidden.bs.modal', function () {
        // initMarker()
        
    })
    initTime()
})

function showPopup(event){
    $("#marker-popup").css("top",event.containerPoint.y);
    $("#marker-popup").css("left",event.containerPoint.x +5);
    $("#marker-popup").css("display","block");
}

function showMenu(event){
    $("#marker-menu").css("top",event.containerPoint.y);
    $("#marker-menu").css("left",event.containerPoint.x +5);
    $("#marker-menu").css("display","block");
}

function closeMenu(){
    $("#marker-menu").css("display","none");
}



/**************************************时间格式化处理************************************/
function dateFtt(fmt,date)   
{ //author: meizz   
  var o = {   
    "M+" : date.getMonth()+1,                 //月份   
    "d+" : date.getDate(),                    //日   
    "h+" : date.getHours(),                   //小时   
    "m+" : date.getMinutes(),                 //分   
    "s+" : date.getSeconds(),                 //秒   
    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
    "S"  : date.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}


function initTime(){
    var crtTime = new Date();
    var time =  dateFtt("yyyy-MM-dd hh:mm:ss",crtTime);//直接调用公共JS里面的时间类处理的办法   
    $(".map-time").html(time)
    t=setTimeout('initTime()',500)
}

function closePopup(){
    $("#marker-popup").css("display","none");
}

function mouseoutLayer(){
    console.log("移出")
    
    console.log($("#marker-popup:hover").length)
    if(!$("#marker-popup:hover").length ){
        closePopup();
    }
    
}

//右键点击截面
function contextmenuLayer(event){
    clickPoint = event.layer;
    $("#marker-menu").html("<div class='context-menu'><div id='delete-cross'>删除</div><div id='edit-cross'>编辑</div></div>")
    showMenu(event);
    $("#delete-cross").on("click", function(){
        closeMenu()
        $("#delete-cross-section").modal('show');
    })

    $("#edit-cross").on("click", function(){
        dialogType = 'edit';
        $("#add-cross-section").modal('show');
        closeMenu()
        initDialogContent();
        setValue(clickPoint.options.crossSectionId);
        $("#basic-addon-y").val(clickPoint._latlng.lat.toFixed(2))
        $("#basic-addon-x").val(clickPoint._latlng.lng.toFixed(2))
    })

}

//设备选择对话框
function initDialogContent(){
    getJcCrosssectionByProId(checkedJcId,function(data){
        var htmlHave = [];
        var htmlNo = [];
        allJm = data;
        
        data.forEach(function(item){
            var one =   "<label class='radio-inline'>" +
            "<input type='radio' class='radio-i' name='optionsRadiosinline'  value='{{termId}}'> {{termName}} </label>"
            one = one.replace("{{termName}}",item.crossSectionName );
            one = one.replace("{{termId}}",item.crossSectionId );
            if(item.crossSectionProjectX){
                htmlHave.push(one);
            }else{
                htmlNo.push(one);
            }
           
        })
        $("#add-cross-radio-have").html(htmlHave.join(''))
        $("#add-cross-radio-no").html(htmlNo.join(''))

    })
}

//给截面添加设备
function addCross(){
    var ids = getDeviceIds();
    console.log(getJmById(ids[0]))
    console.log(ids);
    console.log(checkedJcId);
    console.log(addPoint);
    var item = getJmById(ids[0]);
    var latlng = addPoint._latlng;90
    item.crossSectionProjectY = $("#basic-addon-y").val();
    item.crossSectionProjectX = $("#basic-addon-x").val();
    updateCrosssection(item, function(){
        initMarker()
    })
}

//修改截面设备
function editCross(){
    var ids = getDeviceIds();
    var item = getJmById(ids[0]);
    var latlng = clickPoint._latlng;
    item.crossSectionProjectY = $("#basic-addon-y").val();
    item.crossSectionProjectX = $("#basic-addon-x").val();
    updateCrosssection(item, function(){
        initMarker()
    })
}

//删除截面
function deleteCross(){
    clickPoint.options.crossSectionProjectY = "";
    clickPoint.options.crossSectionProjectX = "";
    updateCrosssection(clickPoint.options, function(){
        initMarker()
    })
}

//获取选择的设备id
function getDeviceIds(){
    var ids = [];
    var cross = document.getElementsByClassName("radio-i");
    for(var i = 0; i < cross.length; i ++){
        if(cross[i].checked){
            ids.push(cross[i].value)
        }
    }
    return ids;
}

//通过截面id 获取截面
function getJmById(id){
    
    var data =  allJm.filter(function(item){
        return item.crossSectionId == id;
    })
    return data[0];
    
}

function setValue(value){
    setTimeout(function(){
        var cross = document.getElementsByClassName("radio-i");

        for(var i = 0; i < cross.length; i ++){
            if( cross[i].value === value+""){
                cross[i].checked = true
            }
        }
    }, 500)
   
}
