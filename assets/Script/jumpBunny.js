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
        _jumdirection: 1,
        jumpHeight:[cc.Integer],
        jumpDuration:1,
        time:0,
    },

    jumpAction(dt) {
        if (this.node.y >= this.jumpHeight) this._jumdirection = -1;
        if (this.node.y < 50) this._jumdirection = 1;
        this.node.y += 10* this._jumdirection;
    },

    start() {
        this.talk('Bunny')
    },

    update(dt) {
        this.jumpAction(dt)
        this.time+=dt
        if(this.time>=1){
            this.talk('Bunny')
            this.time=0
        }

    },
});
