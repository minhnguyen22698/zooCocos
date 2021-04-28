// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var bun = require('bunny')

cc.Class({
    extends: bun,

    properties: {
        _angleRotate: 180,
        _time: 0
    },

    start() {

    },
    rotateAction(dt) {
        this.node.angle = Math.round(this.node.angle + 3)
        cc.log(this.node.angle)
    },

    update(dt) {
        this._time+=Math.round(dt*100)/100
        // cc.log(this.node.angle+':'+this._angleRotate)
        // cc.log(this._time < 1 || this.node.angle<this._angleRotate)
        // console.log(this.node.angle+":"+this._time)
        if(this._time>=1){
            cc.log(this._time)
            this._time=0;
        }
        // if (this._time <= 60) {
        //     this.rotateAction(this._time);
        // } else if (this._time > 60 * 3) {
        //     this._time = 0;
        //     this._angleRotate += 180

        // }
    },
});
