//Navigation On Click 
//1. get all navs
var listNav = document.getElementsByClassName('nav__block--small');
console.log(listNav);

//2. register click event for each
for (var i = 0; i < listNav.length; i++) {
	var currentNav = listNav[i];
	console.log(currentNav);
	currentNav.onclick = clickHandle;
}

//3. on click event:
function clickHandle(e) {
//	- remove class 'active' for other objects
	if (this.classList.contains('active')) {
		return;
	} else {
		for (var i = 0; i < listNav.length; i++) {
			listNav[i].classList.remove('active');
		}
	//	- add class 'active' for current object
		this.classList.add('active');
	}
}

//Slide Show
var activeIndex = 0;
//1.get all img
var listSlide = document.getElementsByClassName('slide__bg');
console.log(listSlide);

for (var i = 0; i < listSlide.length; i++) {
	if (i == activeIndex) {
		return;
	} else {
		listSlide[i].style.display = 'none';
	}
}

