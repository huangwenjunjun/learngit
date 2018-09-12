/**
 * Created by HWJ on 2018/4/10.
 */
import React from 'react'
import './commentForm.css'

class CommentForm extends React.Component{


    addObj(x){
        // 现在获取表单内容
        console.log('执行add函数')
        console.log(this.refs.authorName.value)
        console.log(this.refs.content.value)
        // 需要组装对象
        let newComment = {
            id:new Date().toLocaleTimeString(),
            author:this.refs.authorName.value,
            content:this.refs.content.value,
            date:new Date().toLocaleTimeString()
        }
        // 执行box父组件的自定义事件
        this.props.onUpDate(newComment)
        // console.log(this.props.onUpDate(newComment))
    }
    render(){
        return(
            <div>
                <h2>评论表单</h2>
                <label >内容</label>
                <textarea ref="content" name="mytext" cols="30" rows="10"></textarea>
                <label>评论人</label>
                <input ref="authorName" type="text"/>
                <button onClick={this.addObj.bind(this)}>提交</button>
            </div>
        )
    }
}
export default CommentForm