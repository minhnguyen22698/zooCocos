// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        redBunny: {
            default: null,
            type: [cc.Prefab],
        }
    },

    // LIFE-CYCLE CALLBACKS:
    initRedBunny() {
        for (let i = 0; i < 7; i++) {
            var redBun = cc.instantiate(this.redBunny)
            redBun.x = 500+i*70
            redBun.y = 50
            this.node.addChild(redBun)
        }

    },
    // onLoad () {},

    start() {
        this.initRedBunny()
    },

    // update (dt) {},
});
