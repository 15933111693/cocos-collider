// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const Player = require('Player')

cc.Class({
    extends: cc.Component,

    properties: {
        player: Player
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getCollisionManager().enabled = true
        cc.director.getCollisionManager().enabledDebugDraw = true
        this.player.init()
        this.node.on('touchstart', this.player.onTouchStart, this.player)
        this.node.on('touchmove',this.player.onTouchMove, this.player)
        this.node.on('touchend', this.player.onTouchEnd, this.player)
        this.node.on('touchcancel',this.player.onTouchCancel, this.player)
    },

    start () {
     
    },



    update (dt) {
        this.player.updatePlayer()
    },


});
