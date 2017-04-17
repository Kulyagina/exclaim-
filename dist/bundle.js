(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("./fixed-menu.js");
require("./load-data.js");
require("./drop_proto.js");

},{"./drop_proto.js":2,"./fixed-menu.js":3,"./load-data.js":4}],2:[function(require,module,exports){
class Drag {

constructor (node) {
   this.node = node;
  this.is_Move = false;
    this.lastPos = {
        top: 0,
        left: 0
    };
  this.curPos = {
      top: 0,
      left: 0
  };

  this.bindedMouseDownHandler = this.MouseDownHandler.bind(this);
  this.node.addEventListener('mousedown', this.bindedMouseDownHandler);
  document.addEventListener('mousemove', this.MouseMoveHandler.bind(this));
  document.addEventListener('mouseup', this.MouseUpHandler.bind(this));
}


  MouseDownHandler (e) {
    this.is_Move = true;
    this.curPos.left = e.clientX;
    this.curPos.top = e.clientY;
  }

  MouseMoveHandler  (e) {
    if (this.is_Move){
      e.preventDefault();
      this.node.style.transform = "translate(" + (e.clientX - this.curPos.left + this.lastPos.left) + "px, "+
      (e.clientY - this.curPos.top + this.lastPos.top)+"px)";
    }
  }

  MouseUpHandler (e) {
    if (this.is_Move){
      this.lastPos.left += e.clientX - this.curPos.left;
      this.lastPos.top += e.clientY - this.curPos.top;
      this.is_Move = false;
    }
  }



}
let logo = new Drag(document.querySelector('header .center'));

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){

    let elements = document.querySelector('.elements');
   document.addEventListener('scroll', function (e) {
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  let clientHeight = document.documentElement.clientHeight;
  let scrollTop = window.pageYOffset;

  if((scrollHeight - clientHeight) <= scrollTop + 170 ) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', './data.json', true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;

      if (xhr.status === 200 || xhr.status === 201) {
        var data = JSON.parse(xhr.responseText);

        data.goods.forEach(function (item) {
          var itemNode = document.createElement('div');
            itemNode.classList.add('item');
            itemNode.innerHTML =
                `<span class="preview">
                <img src="goods/${item.preview}" />
                </span>
                <span class="title">${item.title}</span>
                <span class="price">${item.price} </span>`;

          elements.appendChild(itemNode);
        });
      }
    }

    xhr.send();
  }
});

},{}]},{},[1]);
