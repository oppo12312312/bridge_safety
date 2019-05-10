/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-04-30 21:07:36
 * @LastEditTime: 2019-05-10 22:15:33
 */

var commonUrl = "http://39.97.111.250";
$(function() {
	//initCss();
	//初始化tree
    initTree();
	initFullScreen();

});
var svg1PointInfo = [{x:600,y:1600,id:1,cr:20,fontSize:32,tDy:50,rectHeight:50,ty:60,rectY:25}, {x:300,y:1600,id:2,cr:20,fontSize:32,tDy:50,rectHeight:50,ty:60,rectY:25}];
var svg2PointInfo = [{x:500,y:2930,id:1,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:900,y:2930,id:2,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:3100,y:2930,id:3,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:2200,y:2930,id:4,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:5200,y:2930,id:5,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:6800,y:2930,id:6,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:7500,y:2930,id:7,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:3100,y:1200,id:8,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},

										{x:1200,y:2500,id:9,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:1400,y:2500,id:10,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:1600,y:2500,id:11,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:1800,y:2500,id:12,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:2500,y:2500,id:13,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:2650,y:2500,id:14,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:2800,y:2500,id:15,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										
										{x:3600,y:2500,id:16,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										
										{x:3950,y:2500,id:17,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:4050,y:2500,id:18,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:4500,y:2500,id:19,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										
										{x:4900,y:2500,id:20,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										
										{x:5400,y:2500,id:21,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50},
										{x:5700,y:2500,id:22,cr:40,fontSize:80,tDy:100,rectHeight:100,ty:120,rectY:50}
									];



var setting = {  
    view: {
      nameIsHTML: true,      
      selectedMulti: false
    },
    data: {
      simpleData: {
        enable: true
      }
    },
    callback: {
    	onClick : zTreeOnClick,
    }
};

function initTree(){
	$.ajax({
		url : commonUrl +"/JcProjectRest/showMainSystem",
		type : "post",
		dataType : "json",
		success : function(json) {
			$.fn.zTree.init($("#tree"), setting, json);
			$('#tree li a').find("span:last").css("marginRight","15px");
			$('#tree>li:last').css("marginBottom","30px");
			$("#tree").getNiceScroll().resize();
			zTreeMenu = $.fn.zTree.getZTreeObj("tree");
			zNodesMenu = zTreeMenu;
			fuzzySearch('tree','#key',null,true); //初始化模糊搜索方法
			var nodes = zTreeMenu.getNodes();
			
				var temp = nodes[0];
				titleZtree = nodes[0].name;
				temp = temp.children[0];
				titleZtree = titleZtree  + temp.name;
				//默认选中第一节点
				selectedTree = temp;
			
			// else {
			// 	selectedTree = removeStation(nodes,parseInt(sessionStorage.getItem("lineStationId")));
			// 	if(selectedTree == null || selectedTree == undefined){
			// 		nodes = zTreeMenu.getNodes();
			// 		var temp = nodes[0];
			// 		titleZtree = nodes[0].name;
			// 		temp = temp.children[0];
			// 	titleZtree = titleZtree + titleMenuIcon + temp.name;
			// 		//默认选中第一节点
			// 		selectedTree = temp;
			// 	}else {
			// 		var temp = selectedTree;
			// 		var name = temp.name;
			// 		while(temp.getParentNode() != null){
			// 			temp = temp.getParentNode();
			// 			name = temp.name + titleMenuIcon + name;
			// 		}
			// 		titleZtree = titleZtree + name;
			// }
			// }
            zTreeMenu.selectNode(selectedTree);
			console.log(selectedTree)
            initMap(getSvgUrl(selectedTree.id));
            initMarker(selectedTree.id)
			$("#"+selectedTree.tId+">a").css({"color":"#fff","backgroundColor":"#03B8CF","borderRadius":"4px"});
			$("#"+selectedTree.tId+">a span").css({"color":"#fff"});
			$("#"+selectedTree.tId+">a").addClass("iconActive");
			titleZtree = titleZtree;
			$("#rightCon .headCon p").html(titleZtree).css({
				"color":"#555",
				"fontSize":"14px",
			});
		}
  });
};

function zTreeOnClick (event, treeId, treeNode) {
	initTitle(treeNode,selectedTree);
	selectedTree = treeNode;
	var svgId = treeNode.id;
	console.log(treeNode)
	var svgPath = getSvgUrl(svgId);
	console.log(svgPath);
	if(!treeNode.children){
		setMapUrl(svgPath)
		initMarker(svgId)
	}

} 
function getSvgUrl(id){
    return commonUrl+ '/img/' + 'svg' + id + '.svg';
}
function initTitle (e, n){
	zTreeMenu.selectNode(e);
	$("#" + n.tId + ">a").css({
		backgroundColor: "transparent"
	});
	$("#" + n.tId + ">a span").css({
			color: "#333"
	});
	$("#" + n.tId + ">a.iconActive").removeClass("iconActive");
	$("#" + e.tId + ">a").css({
			color: "#fff",
			backgroundColor: "#03B8CF",
			borderRadius: "4px"
	});
	$("#" + e.tId + ">a span").css({
			color: "#fff"
	});
	$("#" + e.tId + ">a").addClass("iconActive");
}


	var initSVG = function(svgDoc,svg1PointInfo) {
		$.each(svg1PointInfo, function(i,v) {
			addElement(svgDoc,v.x, v.y,v.id, v.cr);
			showTooltip(svgDoc,v.x, v.y,v.id,v.fontSize,v.ty,v.tDy,v.rectHeight,v.rectY);
		});
	}

var addElement = function(svgDom,x, y, id,cr) {
	var c = svgDom.createElementNS('http://www.w3.org/2000/svg', 'circle');
	var eachRectId = 'rect' + id;
	var eachTId = 't' + id;
	c.setAttribute('cx', x);
	c.setAttribute('cy', y);
	c.setAttribute("id", 'c'+id);
	c.r.baseVal.value = cr;
	c.setAttribute('fill', 'red');
	c.addEventListener("mouseover", function() {
			var svgDoc2 = document.getElementById("realView1").getSVGDocument();
			var rect1 = svgDoc2.getElementById(eachRectId);
			var t1 = svgDoc2.getElementById(eachTId);
			rect1.style.setProperty("visibility","visible");
			t1.style.setProperty("visibility","visible");
	});
	c.addEventListener("mouseout", function() {
			var svgDoc2 = document.getElementById("realView1").getSVGDocument();
			var rect1 = svgDoc2.getElementById(eachRectId);
			var t1 = svgDoc2.getElementById(eachTId);
			rect1.style.setProperty("visibility","hidden");
			t1.style.setProperty("visibility","hidden");
	});
	svgDom.rootElement.appendChild(c);
}
var showTooltip = function(svgDom,x,y,id,fontSize,ty,tDy,rectHeight,rectY) {
	var rectId = 'rect'+ id;
	var tId = 't'+ id;
	var t = svgDom.createElementNS('http://www.w3.org/2000/svg', 'text');
	var rect = svgDom.createElementNS('http://www.w3.org/2000/svg', 'rect');
	
	//text里面的内容
	$.ajax({
			url:commonUrl +'svgTips.json',
			type: 'get'
	}).done(function(data) {
			if(data) {
					var data =data.data;
					var tspanLength = data.length;
					$.each(data, function(i,v) {
							var tspan1 =  svgDom.createElementNS('http://www.w3.org/2000/svg', 'tspan');
							var tspan2 =  svgDom.createElementNS('http://www.w3.org/2000/svg', 'tspan');
							var tspan3 =  svgDom.createElementNS('http://www.w3.org/2000/svg', 'tspan');
							if(i == 0) {
									tspan1.setAttribute("x", x+10);
									tspan1.innerHTML = v.name + ":";
									tspan2.innerHTML = v.value;
									tspan2.setAttribute('fill', '#3fd34a');
									tspan3.innerHTML = v.unity;
									tspan3.setAttribute('fill', '#2d63fb');
									t.appendChild(tspan1);
									t.appendChild(tspan2);
									t.appendChild(tspan3);
							}else {
									tspan1.setAttribute("x", x+10);
									tspan1.setAttribute("dy", tDy);
									tspan1.innerHTML = v.name + ":";
									tspan2.innerHTML = v.value;
									tspan2.setAttribute('fill', '#3fd34a');
									tspan3.innerHTML = v.unity;
									tspan3.setAttribute('fill', '#2d63fb');
									t.appendChild(tspan1);
									t.appendChild(tspan2);
									t.appendChild(tspan3);
							}
					});
					t.setAttribute("id", tId);
					t.setAttribute("x", x+10);
					t.setAttribute("y", y + ty);
					t.style.setProperty("font-size",fontSize);
					t.style.setProperty("font-family","SimSun");
					t.setAttribute('fill', '#000');
					t.style.setProperty("visibility","hidden");
					var tWidth = t.getBBox().width;
					rect.setAttribute("id", rectId);
					rect.setAttribute("x", x);
					rect.setAttribute("y", y+rectY);
					rect.setAttribute("rx", 10);
					rect.setAttribute("ry", 10);
					rect.setAttribute("width", tWidth+20);
					rect.setAttribute("height", tspanLength*rectHeight);
					rect.style.setProperty("fill","#fff");
					rect.style.setProperty("visibility","hidden");
					
			}
	});
	svgDom.rootElement.appendChild(rect);
	svgDom.rootElement.appendChild(t);
}
function initFullScreen(){
    $("#fullScreen2").on("click", function() {
        
        var isFullscreen = document.fullscreenElement
                ||document.msFullscreenElement 
                ||document.mozFullScreenElement 
                ||document.webkitFullscreenElement 
                ||false;
        if(!isFullscreen){
				var el = document.getElementById('map-content');

                if (el.requestFullscreen) { 
                        el.requestFullscreen(); 
                } else if (el.mozRequestFullScreen) { 
                        el.mozRequestFullScreen(); 
                } else if (el.webkitRequestFullscreen) { 
                        el.webkitRequestFullscreen(); 
                } else if (el.msRequestFullscreen) { 
                        el.msRequestFullscreen(); 
                }
                $("#ql").getNiceScroll().hide();
        }else{
                if (document.exitFullscreen) { 
                        document.exitFullscreen(); 
                } else if (document.msExitFullscreen) { 
                        document.msExitFullscreen(); 
                } else if (document.mozCancelFullScreen) { 
                        document.mozCancelFullScreen(); 
                } else if (document.webkitCancelFullScreen) { 
                        document.webkitCancelFullScreen(); 
                } 
        }
    })
}
