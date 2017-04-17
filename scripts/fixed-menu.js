let el = document.querySelector('.menu');
let elHeight = el.offsetHeight;
let elH = document.querySelector('header').clientHeight;
document.addEventListener('scroll', function (e) {
	let  m = document.querySelector(".goods");

	let scrollTop = window.pageYOffset;

	if(scrollTop >= elH) {
        el.classList.add('scrollTop');
        m.style.paddingTop = (elHeight + el.style.Height ) + "px";
    }
    else {
        el.classList.remove('scrollTop');
        m.style.paddingTop = el.style.Height + "px";
    }
});
