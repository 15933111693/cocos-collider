window.global = {
    tendTo: tendTo,
    action:{
        active: false,
        speed:{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
        setSpeed:{
            top: true,
            bottom: true,
            left: true,
            right: true,
        },
    },
}

// 趋向函数
function tendTo(self, other,speed=10){
    if(typeof self === 'number' || typeof other === 'number'){
        if(self > other){
            return self -= speed
        }
        if(self == other){
            return self
        }
        if(self < other){
            return self += speed
        }
    }else{
        console.error(`It's not a number`)
    }
}