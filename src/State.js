import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()
        this.state ={
           message : "welcome everyone" 
        }
    }

    MessageChanged (){
        this.setState({
            message : "welcome good evening"
        })
    }
    render() {
        return (
            <div>
             {this.state.message}
             <button onClick={()=>this.MessageChanged()}>Change</button>   
            </div>
        )
    }
}
