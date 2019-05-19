// 页面尺寸匹配
containerFitScreen();
window.addEventListener("resize", containerFitScreen);

function containerFitScreen() {
	var el = document.getElementById('container');
	var viewport_w = window.innerWidth,
		viewport_h = window.innerHeight,
		el_w = 1920,
		el_h = 1080;
	var scaleX = viewport_w / el_w;
	var scaleY = viewport_h / el_h;
	el.style.transform = el.style.webkitTransform = "scale(" + scaleX + ","+scaleY+")";
	//document.body.style.overflow = "hidden";
}