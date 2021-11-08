/* DOM Level 2 Event 처리: element의 HTML element의 event의 Listener를 등록하는 방식 */
// 2) JavaScript Code(DOM API) 로만 작성하기
var tabBox = {
	init: function() {
		// window.addEventListener("load", this.onWindowLoad);
		window.addEventListener("load", this.onWindowLoad.bind(this));	// 여기서 this는 tabBox
	},
	onTabClicked: function() {
		// unselect
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length === 1) && (lisSelected[0].className = '');
		
		// select
		this.className = "selected";
	},
	onWindowLoad: function(/*event*/) {
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		
		console.log(this);
		
		var liTabs = ul.getElementsByTagName("li");
		
		for(var i=0; i<liTabs.length; i++){
			liTabs[i].addEventListener("click", tabBox.onTabClicked);	// this.onWindowLoad를 썼을 때는 this 쓰면 tabBox가 아니라 위에 window?가 불러지는듯!
		}
	}
}
