import React, { Component } from 'react'
import { connect } from 'react-redux'
import './main.css'
class Main extends Component {
    render() {
        return (
            <div className='main'>
                <ul className="list">
                    {this.props.todo.map((el) => {
                            return (
                                <li key={el.id} className="list-item">
                                    <p>{el.input1}</p>
                                    <span onClick={()=>{this.props.delete(el.id)}}>  x </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.main
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => {
            dispatch({ type: 'REMOVE_INPUT', id: id })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);