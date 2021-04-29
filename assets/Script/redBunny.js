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
        _time:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    skewAction(){
        if(this._time<30){
            this.node.skewX-=1.5
        }else if(this._time<60) {
            this.node.skewX+=3 
        }else{
            this.node.skewX-=1.5
        }
    },
    start () {
        this.talk('Red bunny, we skew')
    },

    update (dt) {
        this._time+=1
        if(this._time<=90)
        {
            this.skewAction()
        }else if(this._time>150){
            this._time=0
        }
        // this.node.skewX+=dt
    },
});
