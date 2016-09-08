//----------GLOBAL--SLIDER------------------
// getting actual size of window
var screenWidth = window.innerWidth;
// console.log(screenWidth);

var howMuchToSlide = function () {
	var screenWidth = window.innerWidth;
	if (screenWidth > 1600){
		screenWidth = 1600;
	}else{
		screenWidth = screenWidth;
	}
	return screenWidth;
};

var navButton = document.getElementsByClassName("nav__item");

var slider = document.getElementById("slideIt");

for (var i = 0; i < navButton.length; i++ ) {
	navButton[i].onclick=function(){
		// console.log(this);
		var multiply = +this.dataset.item;
		var getIt = (howMuchToSlide() * multiply) * -1 + "px";
		// this.addClass("active_nav");
		this.classList.add("active_nav");
		var siblings = this.parentNode.children
		// console.log(siblings);
		slider.style.marginLeft = getIt;
		for (var j = 0; j < siblings.length; j++){
			// console.log(this.id);
			// console.log(siblings[j].id);
			if(siblings[j].id != this.id){
				siblings[j].classList.remove("active_nav");
			}
		}
	};
};

//-------------POPUP--WINDOWS----------------

var popupOpenButton = document.getElementsByClassName("open_popup");

// var popupWindow = document.getElementById("popup_01");
// console.log(popupWindow);

for(var j = 0; j < popupOpenButton.length; j++){
	popupOpenButton[j].onclick=function(){
		var exactButton = this.dataset.read;
		document.getElementById("popup_"+exactButton).style.display="block";
		document.getElementById("mug").style.display="none";
	};
};

var popupCloseButton = document.getElementsByClassName("close_popup");
// console.log(popupCloseButton);

for(var k = 0; k < popupCloseButton.length; k++){
	popupCloseButton[k].onclick=function(){
		var exactCloseButton = this.dataset.pop;
		document.getElementById("popup_"+exactCloseButton).style.display="none";
		document.getElementById("mug").style.display="block";
	};
};

// var checkIfNeedResize = function(){
// 	if(screenWidth > 1024){
// 		window.onresize = function(){ 
// 			this.location.reload(); 
// 		};
// 	};
// };

// window.onresize = checkIfNeedResize();

// if(screenWidth > 1024){
// 	window.onresize = function(){ 
// 		this.location.reload(); 
// 	};
// };

window.onresize = function(){ 
	if(screenWidth > 1024){
		this.location.reload();
	}; 
};









