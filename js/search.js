// JavaScript Document
function clickit(obj){
	window.open("https://www.baidu.com/s?&wd=" + document.getElementById(obj).value);
}
function enterit(e,obj){
	var keyCode = null;
	if(e.which){
		keyCode = e.which;
	}else if(e.keyCode){
		keyCode = e.keyCode;
	}
	if(keyCode === 13)
	{
		clickit(obj);
		return false;
	}
	return true;
}