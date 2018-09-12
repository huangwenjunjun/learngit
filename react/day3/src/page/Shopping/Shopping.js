import React, { Component } from 'react';
import Login from '../Login/Login'
import LoginStore from '../../Store/LoginStore'
class Shopping extends Component {
    constructor(){
        super()
        //初始化构造函数绑定this指向
        this.updateLogin=this.updateLogin.bind(this);
        this.state={
            isLogin:LoginStore.isLogin
        }
    }
    updateLogin(){
        console.log('shopping页面'+LoginStore.isLogin)
        this.setState({
            isLogin:LoginStore.isLogin
        })
    }
    componentWillMount(){
        LoginStore.on("change",this.updateLogin)
    }
    render() {
        let login;
        if(this.state.isLogin){
            login=(
                <div>
                    <h1>Shopping页面</h1>
                </div>
            )
        }else{
            login=(
                <Login/>
            )
        }
        return (
            <div>
                {login}
            </div>
        );
    }
}
export default Shopping;