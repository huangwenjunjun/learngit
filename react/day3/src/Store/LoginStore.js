//调度中心调用对应的回调函数修改store - register
//数据本身 - 属性
//通知view - events

import  dispatcher from '../dispatcher'
import {EventEmitter} from 'events'

class LoginStore extends EventEmitter{
    constructor(){
        super()
        this.isLogin=false
    }
    //回调函数，修改store
    changeLoginStatus(){
        console.log('原本的isLogin-store'+this.isLogin);
        this.isLogin=true;
        console.log('修改后isLogin-store'+this.isLogin);
        this.emit("change")
    }
    //getter
    //分配器
    handlAction(action){
        switch (action.type){
            case 'LOGINSUCCESS':{
                this.changeLoginStatus();
                break;
            }
        }
    }

}

//1.实例化store
const loginstore=new LoginStore();
//2.把任务分派
dispatcher.register(loginstore.handlAction.bind(loginstore))
export default loginstore;