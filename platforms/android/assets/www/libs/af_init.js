//初始化默认设置
$.ui.animateHeaders = false; //禁止头部动画
$.ui.useOSThemes = false; //禁止自动选择皮肤
$.ui.autoLaunch = true; //自动初始化
$.ui.openLinksNewTab = false; //禁止在新窗口打开页面？
$.ui.splitview = false; //禁止大于某个分辨率自动展开菜单
$.ui.backButtonText = " "; //设置后退按钮文字
$.feat.nativeTouchScroll = false; //Disable native scrolling globally 全部的页面都没有了滚动条
// $.ui.setLeftSideMenuWidth("200px"); //设置左边菜单宽度为200px   
// $.ui.setLeftSideMenuWidth($("#afui").width()-50);//设置左边菜单的宽度为 整个页面的宽度减去50px;
// $.ui.setRightSideMenuWidth("300px"); //Set the right side menu to be 300 pixels wide
//$.ui.splitview=true; 设置左边菜单一直显示在桌面上
//$.ui.disableSplitView(); 关闭左边菜单
// $.ui.toggleLeftSideMenu(true);//Force the menu to show
//$.ui.toggleLeftSideMenu(false);//Force the menu to hide
//启动页面
var init = function init() {
    setTimeout(function() {
        $.ui.launch();
    }, 2000)
};
document.addEventListener("DOMContentLoaded", init, false);

function setSS(key, data) {
    sessionStorage.setItem(key, data);
}

function getSS(key) {
    return sessionStorage.getItem(key);
}

function setLS(key, data) {
    console.log(key + '已写入缓存');
    localStorage.setItem(key, data);
}

function getLS(key) {
    return localStorage.getItem(key);
}

function getTimestamp() {
    var timestamp = Date.parse(new Date());
    return timestamp / 1000;
}

//第一判断是否存在某个缓存
//第二判断释放存在这个缓存的时间戳  ( 某个数据在写入缓存的同时写入一个时间戳 )
//第三获取当前的时间戳减去保存的时间戳
// 86400s 为 60*60*24 的值，一天的秒数
if (getLS("test") && getLS("test_time") && (getTimestamp - getLS("test_time")) < 86400) {
    //coding
} else {
    //coding
};

function showHide(obj, objToHide) {
    var el = $("#" + objToHide)[0];

    if (obj.className == "expanded") {
        obj.className = "collapsed";
    } else {
        obj.className = "expanded";
    }
    $(el).toggle();

}



$(document).ready(function() {


});

function slideChange1(args) {

    try {
        console.log('changed: ' + (args.currentSlideNumber - 1));
    } catch (err) {}

    $('.indicators1 .item11').removeClass('selected');
    $('.indicators1 .item11:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

}

function slideChange(args) {

    try {
        console.log('changed: ' + (args.currentSlideNumber - 1));
    } catch (err) {}

    $('.indicators .item').removeClass('selected');
    $('.indicators .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

}

// 改变头部 底部高度
function load_sub() {
    $('#header').removeClass("oldheader");
    $('#header').addClass("subheader");
}

function load_old() {
    $('#header').removeClass("subheader");
    $('#header').addClass("oldheader");
}

function foot_old() {
    $('#navbar').removeClass("newfooter");
    $('#navbar').addClass("oldfooter");
}

function foot_big() {
    $('#navbar').removeClass("oldfooter");
    $('#navbar').addClass("newfooter");
}
// 商品list页面加载
function foodslist_load() {

    load_sub();
    $("#list_onclick>li").on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $("#list_onclick > li").not(event.currentTarget).removeClass("activeli");
        $(event.currentTarget).addClass("activeli");
    });
}

function foodslist_unload() {

    load_old();
}
// 我的订单页面加载
function myorder_load() {
    load_sub();

    $("#submenu_order>li").on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $("#submenu_order > li").not(event.currentTarget).removeClass("activeli");
        $(event.currentTarget).addClass("activeli");
    });

}

function myorder_unload() {
    load_old();
}
// 购物车 页面加载
function mycart_load() {
    foot_big();
}

function mycart_unload() {
    foot_old();
}
//编辑购物车  页面加载
function changecart_load() {
    foot_big();
}

function changecart_unload() {
    foot_old();
}
//商品详情页面加载
function fooddetail_load() {
    $("#Pro_info").hide();
    $("#Pro_parame").hide();
    $("#Pro_parame").hide();
    foot_big();
    $('.iosSlider1').iosSlider({
        snapToChildren: true,
        desktopClickDrag: true,
        infiniteSlider: true,
        snapSlideCenter: true,
        onSlideChange: slideChange1
    });

}

function fooddetail_unload() {
    foot_old();
}

function welcome_load() {
    $('.iosSlider').iosSlider({
        snapToChildren: true,
        desktopClickDrag: true,
        infiniteSlider: true,
        snapSlideCenter: true,
        onSlideChange: slideChange
    });
}

function setlanguage_load() {

}
var zh= {
    name: "姓名",
    id: "序号",
    others:"中文"
};
var en= {
    name: "name",
    id: "id",
    others:"English"
};
var lang;
function setlang(e) {
    if(typeof analytics !== "undefined") { analytics.trackView("setting language"); }
    setLS('currenLanguage',e);
    if(e=='en'){
     $('#zh-TW').removeClass('pressed');
     $('#en-US').addClass('pressed');
     lang=en;
    }else if (e=='zh') {
    $('#en-US').removeClass('pressed');
     $('#zh-TW').addClass('pressed');
     lang=zh;
    };
   ShowHideLanguage();
}

function setappLanguege() {
    if (!getLS('firstOpen')) {
        navigator.globalization.getPreferredLanguage(
            function(language) {
                console.log('language: ' + (language.value).split("-")[0] + '\n');
                setlang((language.value).split("-")[0]);
                setLS('firstOpen','ok');
            },
            function() {
                console.log('Error getting language\n');
            }
        );
    } else {
      setlang(getLS('currenLanguage'));
    }
}
function app_init(){
console.log("setLangFromDevice");   
if(typeof analytics !== "undefined") {
              analytics.startTrackerWithId('UA-56622153-1');
            } else {
                console.log("Google Analytics Unavailable");
            }

setappLanguege();
}

function ShowHideLanguage(){
    $("#name").attr('placeholder', lang.name);
    $("#other")[0].innerHTML = lang.others;
    $("#id")[0].innerHTML = lang.id;
}
document.addEventListener("deviceready", app_init, false);
