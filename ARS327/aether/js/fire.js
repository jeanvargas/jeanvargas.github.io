"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.clear();
var cv = document.querySelector("canvas"),
    ctx = cv.getContext("2d"),
    TAU = 2 * Math.PI,
    ps = [],
    PR = devicePixelRatio,
    N = 1000 / PR,
    M = 4,
    R = 20 * PR,
    Q = 40;

var lt = 0,
    mx = undefined,
    my = undefined,
    md = true;

var P = function () {
  function P(x, y, c) {
    _classCallCheck(this, P);

    this.x = 0;
    this.y = 0;
    this.init(x, y, c, 0);
  }

  P.prototype.init = function init(x, y, c, t) {
    this.sx = x;
    this.sy = y;
    this.c = ctx.createRadialGradient(0, 0, R, 0, 0, 0);
    this.c.addColorStop(0, "transparent");
    this.c.addColorStop(1, c);
    this.t = t;
    this.dx = 2 * PR * (Math.random() - 0.5);
    this.dy = 3 * PR * (Math.random() - 0.25);
    this.ddx = 0;
    this.ddy = 0.5 * PR * (Math.random() - 1.04);

    this.c1 = R * (Math.random() - 0.5);
    this.c2 = 1 * PR * (Math.random() - 0.5);
    this.c3 = R * (Math.random() - 0.5);
    this.c4 = 1.25 * PR * (Math.random() - 0.5);
  };

  P.prototype.paint = function paint(t) {
    var dt = t - this.t;
    this.x = this.sx + dt * this.dx + dt * dt * this.ddx + this.c1 * Math.cos(dt * this.c2);
    this.y = this.sy + dt * this.dy + dt * dt * this.ddy + this.c3 * Math.sin(dt * this.c4);
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.arc(0, 0, R, 0, TAU);
    ctx.fill();
    ctx.restore();
  };

  return P;
}();

function paint(t) {
  requestAnimationFrame(paint);

  var dt = t * 0.01,
      a = Q * 4,
      b = Q * 2,
      c = Q * 1;
 
  if (ps.length < N && md) {
    ps.push(new P(mx, my, "rgb(" + a + "," + b + "," + c + ")"));
  }

  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.globalCompositeOperation = "screen";
  ps.forEach(function (p, i) {
    p.paint(dt);
    if (md && (p.x < 0 || p.x >= cv.width || p.y < 0 || p.y >= cv.height)) {
      p.init(mx, my, "rgb(" + a + "," + b + "," + c + ")", dt);
    }
  });
}

function resize() {
  var b = cv.getBoundingClientRect();
  cv.width = b.width * PR;
  cv.height = b.height * PR;
}

window.addEventListener("resize", resize, false);
window.addEventListener("mousemove", function (e) {
  var b = cv.getBoundingClientRect();
  mx = (e.clientX - b.left) * cv.width / b.width;
  my = (e.clientY - b.top) * cv.height / b.height;
}, false);
window.addEventListener("mousedown", function (e) {
  return md = true;
}, false);
window.addEventListener("mouseup", function (e) {
  return md = false;
}, false);
resize();
mx = 0.5 * cv.width;
my = 0.95 * cv.height;
requestAnimationFrame(paint);