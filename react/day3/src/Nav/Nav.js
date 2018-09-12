import React from 'react'
import {Menu,Icon} from 'antd'
import {Link} from 'react-router-dom'
// const SubMenu=Menu.SubMenu
// const MenuItemGroup=Menu.ItemGroup

export default class Nav extends React.Component{
    constructor(){
        super()
        this.state={
            current:'product'
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render(){
        return(
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="product">
                    <Link to={{pathname:"/ProductList"}}>
                        <Icon type="mail" />产品罗列
                    </Link>
                </Menu.Item>
                <Menu.Item key="shopping">
                    <Link to={{pathname:"/Shopping"}}>
                        <Icon type="appstore" />购物车
                    </Link>
                </Menu.Item>
                <Menu.Item key="login">
                    <Link to={{pathname:"/Login"}}>
                        <Icon type="setting" />登陆
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}