// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var bun = require("bunny");
cc.Class({
  extends: bun,
  properties: {
    _scale: 1,
    _time: 0,
  },

  scaleAction(dt) {
    if (dt <= 20) {
      this.node.scale += 0.5 / 20;
    } else {
      this.node.scale -= 1 / 40;
    }
  },

  start() {},

  update(dt) {
    this._time += 1;
    if (this._time <= 60) {
      this.scaleAction(this._time);
    } else if (this._time >= 120) {
        this.node.scale=1
        this._time=0
    }
  },
});
