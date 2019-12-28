// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    
    },

    start () {

    },

    // update (dt) {},
    onCollisionEnter: function (other, self) {
        let action = window.global.action
        switch(self.tag){
            case 1:
                action.setSpeed.top = false
                action.speed.top = 0
                break
            case 2:
                action.setSpeed.bottom = false
                action.speed.bottom = 0
                break
            case 3:
                action.setSpeed.left = false
                action.speed.left = 0
                break
            case 4:
                action.setSpeed.right = false
                action.speed.right = 0
                break
        }             
    },
    
    onCollisionStay(other, self){
        let action = window.global.action
        switch(self.tag){
            case 1:
                action.setSpeed.top = false
                action.speed.top = 0
                break
            case 2:
                action.setSpeed.bottom = false
                action.speed.bottom = 0
                break
            case 3:
                action.setSpeed.left = false
                action.speed.left = 0
                break
            case 4:
                action.setSpeed.right = false
                action.speed.right = 0
                break
        }          
    },

    onCollisionExit(){
        let action = window.global.action
        for(let i in action.setSpeed){
            action.setSpeed[i] = true
        }
    }

});
