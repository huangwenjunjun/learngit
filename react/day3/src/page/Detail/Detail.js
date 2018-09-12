import React, { Component } from 'react';
class Detail extends Component {
    render() {
        console.log(this.props.location.query)
        return (
            <div>
                <h1>Detail页面</h1>
                <h2>商品名称：{this.props.location.query.name}</h2>
                <img src={this.props.location.query.src} alt=""/>
            </div>
        );
    }
}
export default Detail;
