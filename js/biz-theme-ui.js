window.onload = function() {

	//e-active活动类
	var checkbox = document.getElementsByClassName("e-switch e-active");
	for (var i = 0; i < checkbox.length; i++) {
		var checkboxChild = checkbox[i].children;
		if (checkboxChild == undefined) continue;
		for (var j = 0; j <= checkboxChild.length; j++) {
			if (checkboxChild[j] == undefined) continue;
			if (checkboxChild[j].tagName == "INPUT") {
				if (checkboxChild[j].getAttribute("type") == "checkbox") {
					checkboxChild[j].checked = true;
				}
			}
		}
	}

	var pullmenu = document.getElementsByClassName("e-pullmenu");
	var pullmenuButton = new Array();
	var pullmenuList = new Array();
	var pullmenuListItem = new Array();

	for (var i = 0; i < pullmenu.length; i++) {
		(function(i) {
			if (pullmenu[i] == undefined) return;

			pullmenuButton[i] = pullmenu[i].getElementsByTagName("button")[0];
			pullmenuList[i] = pullmenu[i].getElementsByClassName("e-list")[0];

			if (pullmenuButton[i] == undefined || pullmenuList[i] == undefined) return;

			pullmenuButton[i].onclick = function() {
				for(var z=0;z<pullmenu.length;z++){
					if(z==i) continue;
					pullmenu[z].getElementsByClassName("e-list")[0].style.visibility="hidden";
				}
				var listVisibility = getComputedStyle(pullmenuList[i], null).visibility;
				if (listVisibility == "visible") {
					pullmenuList[i].style.visibility = "hidden";
				} else if (listVisibility == "hidden") {
					pullmenuList[i].style.visibility = "visible";
				}
			}
			pullmenuListItem[i] = pullmenuList[i].getElementsByClassName("e-item");
			for (var j = 0; j < pullmenuListItem[i].length; j++) {
				(function(j) {
					pullmenuListItem[i][j].onclick = function() {
						pullmenuList[i].style.visibility = "hidden";
						var buttonInner = pullmenuButton[i].innerHTML;
						var itemInner = pullmenuListItem[i][j].innerHTML;
						var symbolTag = buttonInner.match(/<.+>/);
						pullmenuButton[i].innerHTML=itemInner + symbolTag;
					}
				})(j)
			}
		})(i)
	}
	
	// var	checkbox = document.getElementsByClassName("e-checkbox");
	// for(var i=0;i<checkbox.length;i++){
	// 	
	// }

}
