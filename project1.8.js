/*function picSwitch(){
	for (var i=0; i<=14; i++){         
        document.getElementById("img"+i).setAttribute("src", "JB"+i+".jpg");
	}
}*/

function picSwitch(pic){
	for(i=0;i<=14;i++){
		document.getElementById("img"+i).className=pic;
	}
}

function highlight(box){
	if (checkMargins(box)) {
		document.getElementById(box).style.borderColor = "red";
	}
}

function endHighlight(box){
	document.getElementById(box).style.borderColor = "black";
}

function highlight2(box){
		document.getElementById(box.id).style.borderColor = "red";
}

function endHighlight2(box){
	document.getElementById(box.id).style.borderColor = "black";
}

function move(box){
	if (checkMargins(box)) {
		var topMarginPx = document.getElementById(box).style.marginTop;
	    var leftMarginPx = document.getElementById(box).style.marginLeft;
		document.getElementById(box).style.marginTop = document.getElementById("boxW").style.marginTop;
		document.getElementById(box).style.marginLeft = document.getElementById("boxW").style.marginLeft;
		document.getElementById("boxW").style.marginTop = topMarginPx;
		document.getElementById("boxW").style.marginLeft = leftMarginPx;
	}
}

function shuffle(){
	for(var i=1; i<600; i++){
		var randomBox = "box"+(Math.round(Math.random() * 14));
		move(randomBox);
	}
}

function checkMargins(box){
	var topMarginPx = document.getElementById(box).style.marginTop;
	var leftMarginPx = document.getElementById(box).style.marginLeft;
	var topMargin = parseInt(topMarginPx.substring(0,3));
	var leftMargin = parseInt(leftMarginPx.substring(0,3));
	var boxWTopMarginPx = document.getElementById("boxW").style.marginTop; 
	var boxWLeftMarginPx = document.getElementById("boxW").style.marginLeft;
	var boxWTopMargin = parseInt(boxWTopMarginPx.substring(0,3));
	var boxWLeftMargin = parseInt(boxWLeftMarginPx.substring(0,3));
	var boxMoveable = (((topMargin === boxWTopMargin) && ((Math.abs(leftMargin-boxWLeftMargin))<200)) || ((leftMargin === boxWLeftMargin) && ((Math.abs(topMargin-boxWTopMargin))<200)))
	return boxMoveable;
	}