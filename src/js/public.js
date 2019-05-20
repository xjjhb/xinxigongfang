// 页面尺寸匹配
window.onload = function () {
    containerFitScreen();
    setScroll();
}

window.addEventListener("resize", containerFitScreen);

function containerFitScreen() {
	var el = document.getElementById('container');
	var viewport_w = window.innerWidth,
		viewport_h = window.innerHeight,
		el_w = 1920,
		el_h = 1080;
	if((viewport_w/viewport_h).toFixed(2) == 1.33){     //4：3屏幕
        var scaleX = viewport_w / el_w;
        var scaleY = viewport_h / 1440;
        el.style.height = '1440px';
        el.style.transform = el.style.webkitTransform = "scale(" + scaleX +","+scaleY+")";
    }else{  //16：9屏幕
        var scaleX = viewport_w / el_w;
        var scaleY = viewport_h / el_h;
        el.style.transform = el.style.webkitTransform = "scale(" + scaleX +")";
    }
}

//设置滚动条
function setScroll(){
    if($('.hasScroll').length > 0){
        $('.hasScroll').perfectScrollbar();
    }

}