let logo = document.querySelector('header .center');

let is_Move = false;
let lastPos = {
  top: 0,
  left : 0
};
let curPos = {
  top: 0,
  left: 0
};

logo.addEventListener('mousedown', function (e) {
  is_Move = true;
  console.log(5);
  curPos.left = e.clientX;
  curPos.top = e.clientY;
});

document.addEventListener('mousemove', function (e) {
  if (is_Move){
    e.preventDefault();
    logo.style.transform = "translate(" + (e.clientX - curPos.left + lastPos.left) + "px, "+
    (e.clientY - curPos.top + lastPos.top)+"px)"
  }
});

document.addEventListener('mouseup', function (e) {
  if (is_Move){
    lastPos.left += e.clientX - curPos.left;
    lastPos.top += e.clientY - curPos.top;
    is_Move = false;
  }
});
