// 调用调度中心 - 分发任务 dispatch
//注册回调函数 - 修改store - register
import dispatcher from '../dispatcher'
export function loginSuccess() {
    console.log('loginSuccess Action被触发')
    //Action告诉dispatcher
    //逻辑
    dispatcher.dispatch({
        //任务名全大写
        type:"LOGINSUCCESS"
    })
}