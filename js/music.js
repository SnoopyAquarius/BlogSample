// JavaScript Document
var version = parseFloat(navigator.appVersion);
if(version !== 5) {
	document.getElementById("img").style.display="none";
}
var timeout, rotate = 0;
var img = document.getElementById("img");
var audio = document.getElementById("audio");
function startAnim() {
	audio.play();
	img.title = "点击暂停";
	timeout = setInterval(function () {
		var rotateStyle = "rotate(" + rotate + "deg)";		/* rotate是旋转角度 */
		img.style.transform = rotateStyle;
 
		rotate += 6;
		if (rotate > 360) {
			rotate = 0;
		}													/* setInterval()用于指定周期调用函数 */
	}, 60);
}
function stopAnim() {
	clearInterval(timeout);
	timeout = null;
	audio.pause();
	img.title = "点击播放";
}
 
startAnim();