import React, { Component } from 'react';
import * as loginActions from '../../Action/LoginAction'
import LoginStore from '../../Store/LoginStore'
class Login extends Component {
    loginSuccess(){
        console.log('登录成功-view')
        //从视图发起一个action
        loginActions.loginSuccess();
        //events up
    }
    render() {
        return (
            <div>
                <h1>Login页面</h1>
                <button onClick={this.loginSuccess.bind(this)}>登录</button>
            </div>
        );
    }
}
export default Login;