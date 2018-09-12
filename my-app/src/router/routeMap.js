import React from 'react'
import {Menu,Icon} from 'antd'
import {Link} from 'react-router-dom'

class RouteMap extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            current : 'mail'
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail">
                    <Link to={
                        {pathname:"/email"}
                    }>
                        <Icon type="mail" />修改邮箱
                    </Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to={
                        {pathname:"/password"}
                    }>
                        <Icon type="appstore" />修改密码
                    </Link>

                </Menu.Item>
                <Menu.Item key="login">
                    <Link to={
                        {pathname:"/phone"}
                    }>
                        <Icon type="setting" />修改手机号码
                    </Link>

                </Menu.Item>
            </Menu>
        )
    }
}

export default RouteMap