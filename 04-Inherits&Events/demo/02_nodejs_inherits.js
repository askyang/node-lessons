'use strict'

var inherits = require('util').inherits;

function Shape(x, y) {
    this.x = x;
    this.y = y;
}

Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;

    console.log(`(${x},${y})`);
};

function Rectangle(x, y, w, h) {
  Shape.call(this); // 借用构造函数
  this.w = w;
  this.h = h;
}

inherits(Rectangle, Shape);

Rectangle.prototype.area = function(){
    return this.w * this.h;
};

var rect = new Rectangle(10, 20, 200, 100);

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);

rect.move(20, 20);
console.log(rect.area());
