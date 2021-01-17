import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
            this.state={
                count : 0
            }
        
    }

    changeCounter (){
        this.setState({
            count : this.state.count +1
        })
    }
    render() {
        return (
            <div>
               count - {this.state.count} 
               <button onClick={()=>this.changeCounter()}>click me</button>
            </div>
        )
    }
}
