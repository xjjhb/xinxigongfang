// 页面尺寸匹配
containerFitScreen();
window.addEventListener("resize", containerFitScreen);

function containerFitScreen() {
	var el = document.getElementById('container');
	var viewport_w = window.innerWidth,
		viewport_h = window.innerHeight,
		el_w = 1600,
		el_h = 900;
	var scale = viewport_w / el_w;
	el.style.transform = el.style.webkitTransform = "scale(" + scale + ")";
	document.body.style.overflow = "hidden";
}

//点击全屏
var documentElement = document.documentElement
var cancelFullScreen = (
	document.cancelFullScreen ||
	document.webkitCancelFullScreen ||
	document.mozCancelFullScreen
).bind(document)

var requestFullScreen = (
	documentElement.requestFullScreen ||
	documentElement.webkitRequestFullScreen ||
	documentElement.mozRequestFullScreen
).bind(documentElement)

function isFullScreen() {
	return document.fullScreen ||
		document.webkitIsFullScreen ||
		document.mozFullScreen
}

function toggleFullScreen() {
	if (isFullScreen()) {
		cancelFullScreen()
	} else {
		requestFullScreen()
	}
}

document.body.addEventListener('click', toggleFullScreen)