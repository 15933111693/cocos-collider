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

    // onLoad () {},

    init(){
        // player的动作
        this.action = window.global.action
    },

    onTouchStart(e){
        this.action.active = true
    },

    onTouchMove(e){
        // 获取触点相对位置
        let xTouch = e.getLocation().x - cc.find('Canvas').width/2
        let yTouch = e.getLocation().y - cc.find('Canvas').height/2
        // 计算速度
        switch(Math.sign(xTouch-this.node.x)){
            case 1:
                if(this.action.setSpeed.right){
                    this.action.speed.right = 5
                }
                this.action.speed.left = 0
                break
            case 0:
                this.action.speed.right = 0
                this.action.speed.left = 0
                break
            case -1:
                if(this.action.setSpeed.left){
                    this.action.speed.left = -5 
                }
                this.action.speed.right = 0
                break
        }

        switch(Math.sign(yTouch-this.node.y)){
            case 1:
                if(this.action.setSpeed.top){
                    this.action.speed.top = 5
                }
                this.action.speed.bottom = 0
                break
            case 0:
                this.action.speed.top = 0
                this.action.speed.bottom = 0
                break
            case -1:
                if(this.action.setSpeed.bottom){
                    this.action.speed.bottom = -5                    
                }
                this.action.speed.top = 0
                break
        }
    },

    onTouchEnd(){
        this.action.active = false
        for(let i in this.action.speed){
            this.action.speed[i] = 0
        }
    },

    onTouchCancel(){
        this.action.active = false
        for(let i in this.action.speed){
            this.action.speed[i] = 0
        }
    },

    start () {

    },

    updatePlayer (dt) {
        if(this.action.active){
            let x = this.node.x + this.action.speed.left + this.action.speed.right
            let y = this.node.y + this.action.speed.top + this.action.speed.bottom
            this.node.setPosition(cc.v2(x,y))                        
        }

    },
});
