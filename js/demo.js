/**
 * Created by 993711336 on 2016/5/28.
 */
/**
 * @fileoverview Description of file, its uses and information
 * about its dependencies.
 * @author user@meizu.com (Firstname Lastname)
 * Copyright 2016 oneway . All Rights Reserved.
 */


//获取时间
function showTime(){
    var show_day=new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日');
    var time=new Date();
    var month=time.getMonth();
    var date=time.getDate();
    var day=time.getDay();
    month=month+1;
    var now_time=month+'月'+date+'日'+' '+show_day[day-1];
    document.getElementById('showtime').innerHTML=now_time;
    setTimeout("showTime();",1000);
}

// 列表
function menuFix(){
    var sfEles = document.getElementById("logbar").getElementsByTagName("li");
    for(var i = 0;i <sfEles.length;i++){
        sfEles[i].onmouseover=function(){
            this.className +="listshow";
        }
        sfEles[i].onmouseout=function(){
            this.className =this.className.replace("listshow","");
        }
    }
}

function together()         //同时调用的方法
{
    menuFix();
    showTime();
}
window.onload=together;

