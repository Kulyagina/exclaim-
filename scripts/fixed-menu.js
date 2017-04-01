var el = document.querySelector('.menu');
var elHeight = el.offsetHeight;
var elH = document.querySelector('header').clientHeight;
document.addEventListener('scroll', function (e) {
	var  m = document.querySelector(".goods");

	var scrollTop = window.pageYOffset;

	if(scrollTop >= elH) {

        el.classList.add('scrollTop');
        m.style.paddingTop = (elHeight + el.style.Height ) + "px";
				console.log(m.style.paddingTop);
    }
    else {
        el.classList.remove('scrollTop');
        m.style.paddingTop = el.style.Height + "px";
    }
});
