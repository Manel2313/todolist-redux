import React, { Component } from 'react';
import {connect} from 'react-redux'
import './input.css'
class Input extends Component {
    render() { 
        return ( 
            <div className="input">
                <input type="text" onChange={(e)=>{this.props.handleChange(e.target)}}/>
                <button onClick={()=>{this.props.add(this.props.input)}}>ADD</button>
            </div>
        );
    }
}

const mapStateToProps =(state)=>{
    return {
        input:state.input
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        handleChange:(target)=>{
            dispatch({type:'SET_INPUT',value:target.value})
        },
        add:(input)=>{
            let obj ={}
            let id=Math.floor(Math.random()*1000)
            let input1= input
            obj ={id,input1}
            dispatch({type:'ADD_INPUT',input:obj})
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (Input);