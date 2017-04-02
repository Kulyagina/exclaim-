var el = document.querySelector('.menu');
var elHeight = el.offsetHeight;
var elH = el.getBoundingClientRect().top;
var  m = document.querySelector(".goods");
document.addEventListener('scroll', function (e) {
	var scrollTop = window.pageYOffset;
	if(scrollTop >= elH) {
        el.classList.add('scrollTop');
        m.style.paddingTop = (elHeight + el.offsetHeight  ) + "px";
    }
    else {
            el.classList.remove('scrollTop');
            m.style.paddingTop = el.offsetHeight  + "px";
        }
    });