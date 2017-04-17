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
