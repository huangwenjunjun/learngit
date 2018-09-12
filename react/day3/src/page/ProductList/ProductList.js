import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ProductList extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        // fetch('/getData.do',{
        //     method:'get'
        // }).then(resp=>{
        //     // console.log(resp.json())
        //     return resp.json()
        // }).then(data=>{
        //     console.log(data)
        //     this.setState({data:data})
        // })
        this.setState({data:
            [{id: 1, name: "产品1", time: "刚上架",imgsrc: "https://ca-files-1256126199.cos.ap-chengdu.myqcloud.com/images/goods/CAB665A38F5A81C2/1535710820116-4.jpg"},
            {id: 2, name: "产品2", time: "三天前上架",imgsrc: "https://ca-files-1256126199.cos.ap-chengdu.myqcloud.com/images/goods/CAB665A38F5A81C2/1535710825493-4.jpg"},
            {id: 3, name: "产品3", time: "昨天上架",imgsrc: "https://ca-files-1256126199.cos.ap-chengdu.myqcloud.com/images/goods/CAB665A38F5A81C2/1535710817752-4.jpg"}]
        })
    }
    render() {
        return (
            <div>
                <h1>productlist页面</h1>

                {this.state.data.map(item=>{
                    return(
                        <div key={item.id}>
                            <Link to={{pathname:'/Detail',query:{id:item.id,name:item.name,src:item.imgsrc}}}>
                                <h1>商品名称：{item.name}</h1>
                                <img src={item.imgsrc}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default ProductList;