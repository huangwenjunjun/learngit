/**
 * Created by HWJ on 2018/4/10.
 */
import React from 'react'
import './commentList.css'
import Item from './../commentItem/commentItem'
// let commentArr = [
//   {id:1,autor:"张三",date:"三天前",content:"马上要就业了"},
//   {id:2,autor:"李四",date:"三天前",content:"马上要就业了"},
//   {id:3,autor:"王五",date:"三天前",content:"哈哈"},
//   {id:4,autor:"赵六",date:"三天前",content:"救不了"},
//   {id:5,autor:"李鑫",date:"三天前",content:"找工作怎么办"}
// ]
class CommentList extends React.Component{
    // 定义一个方法  从服务器获得数据
    // constructor(){
    //   super()
    // }
    // getInitialState(){
    //   this.getData()
    // }
    // getData(){
    //   console.log('向服务器发起请求')
    // }
    render(){
        let list = this.props.data.map((item)=>{
            return (<Item key={item.id} date={item.date} author={item.author}>{item.content}</Item>)
        })
        return(
            <div className="myList">
                <h2>我是list</h2>
                {list}
            </div>
        )
    }
}
export default CommentList