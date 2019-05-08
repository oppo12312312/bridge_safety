/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-05-01 15:56:59
 * @LastEditTime: 2019-05-04 22:26:45
 */

//通过平面图获取所有的截面
function getJcCrosssectionByProId(id, callBack){
    $.ajax({
        url : commonUrl +"/JcCrosssectionRest/getJcCrosssectionByProId",
        type : "get",
        dataType : "json",
        data:{
            id: id
        },
        success : callBack
    })
}

//通过截面获取所有的传感器信息
function getCroTermPar(crossSectionId, callBack){
    $.ajax({
        url : commonUrl +"/JcTerminalRest/getCroTermPar",
        type : "get",
        dataType : "json",
        data:{
            crossSectionId: crossSectionId
        },
        success : callBack
    })
}

//获取所有的设备
function getAllDevice(callBack){
    $.ajax({
        url : commonUrl +"/JcTerminalRest/getAllTerminalInNum",
        type : "get",
        dataType : "json",
        data:{
            offset: 1,
            limit: 1000
        },
        success : callBack
    })
}

//添加截面
function addCrosssection(data,callBack){
    $.ajax({
        url : commonUrl +"/JcCrosssectionRest/insertCrossByMainSystem",
        type : "post",
        dataType : "json",
        data:data,
        success : callBack
    })
}


//删除截面
function deleteCrosssection(id,callBack){
    $.ajax({
        url : commonUrl +"/JcCrosssectionRest/deleteCrossById",
        type : "post",
        dataType : "json",
        data:{
            id:id
        },
        success : callBack
    })
}

//编辑截面

function updateCrosssection(data,callBack){
    $.ajax({
        url : commonUrl +"/JcCrosssectionRest/updateCrossById",
        contentType: "application/json; charset=utf-8",  
        type : "post",
        dataType : "json",
        data:JSON.stringify(data),
        success : callBack
    })
}