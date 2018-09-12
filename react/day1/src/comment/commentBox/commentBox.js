import React from 'react'
import './commentBox.css'
import List from './../commentList/commentList'
import CommentForm from './../commentForm/commentForm'

class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
    componentWillMount(){
        fetch('/getData.do',{
            method:'get'
        }).then(resp=>{
            // console.log(resp.json())
            return resp.json()
        }).then(data=>{
            console.log(data)
            this.setState({data:data})
        })
    }
    myUpdate(obj){
        console.log(obj)
        let currentData = this.state.data
        currentData.push(obj)
        this.setState({
            data:currentData
        })
    }
    render(){
        return(
            <div className="myBox">
                <div>
                    <h1>评论</h1>
                </div>
                <CommentForm onUpDate={this.myUpdate.bind(this)}/>
                <List data={this.state.data}/>
            </div>
        )
    }
}

export default CommentBox