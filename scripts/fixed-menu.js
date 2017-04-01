var el = document.querySelector('.menu');
var elHeight = el.offsetHeight;

document.addEventListener('scroll', function (e) {
	var  menu = document.querySelector(".goods");

	var scrollTop = document.documentElement.scrollTop;

	if(scrollTop >= 130) {
        el.classList.add('scrollTop');
        menu.style.paddingTop = (elHeight+30) + "px";
    }   
    else {     
        el.classList.remove('scrollTop');
        menu.style.paddingTop = "30px";
    }
});