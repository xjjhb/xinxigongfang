// 页面尺寸匹配
containerFitScreen();
window.addEventListener("resize", containerFitScreen);

function containerFitScreen() {
	var el = document.getElementById('container');
	var viewport_w = window.innerWidth,
		viewport_h = window.innerHeight,
		el_w = 1920,
		el_h = 900;
	var scale = viewport_w / el_w;
	el.style.transform = el.style.webkitTransform = "scale(" + scale + ")";
	document.body.style.overflow = "hidden";
}