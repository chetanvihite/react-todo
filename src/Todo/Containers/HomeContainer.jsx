

import React, { Component } from 'react';
import removeIcon from '../../removeIcon.png';
import styles from './styles.css'

class HomeContainer extends Component {
	
	constructor (props) {
		super(props);
		this.state = {
      todos : 
        [{
          "id": 1,
          "whatToDo": "Fix blocker defect# 1555",
          "assignedTo": "Martin Davitashvili",
          "status": false
        }, {
          "id": 2,
          "whatToDo": "Fix css issues with reading questions",
          "assignedTo": "Talbot Dilawey",
          "status": true
        }, {
          "id": 3,
          "whatToDo": "Signup for monthly newsletter",
          "assignedTo": "Pattie Bloodworthe",
          "status": true
        }, {
          "id": 4,
          "whatToDo": "Read something",
          "assignedTo": "Randee Ramshaw",
          "status": true
        }, {
          "id": 5,
          "whatToDo": "Catch train",
          "assignedTo": "Nealy Rizzetti",
          "status": false
        }]
    }
    
    this.addNewTodo = this.addNewTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
	}
  componentDidMount(){
    // load data from -- https://my.api.mockaroo.com/todos.json?key=0b8e0b60
    console.log (this.state.todos);
  }
	addNewTodo = (e) => {
    let emptyTodo = {
      id: Math.floor(Math.random() * 100 ),
      whatToDo: '',
      assignedTo: '',
      status: false
    }
    let currentTodos = this.state.todos;
    currentTodos.push(emptyTodo);
    this.setState ({todos: currentTodos});
  }
  removeTodo = (e) => {
    let currentTodos = this.state.todos;
    let index = currentTodos.findIndex( x => x.id === e.id);
    if ( index !== -1) {//not found 
      currentTodos.splice(index, 1);
      this.setState({todos: currentTodos});
    }
  }
	render () {
    let todos = this.state.todos;
    let removeTodo = this.removeTodo;
		return (
			<div>
        <div className="header">
          Welcome to my Todo App
        </div>
        <div>
        <div className="headerRow">
              <div className="itemStyle">What</div>
              <div className="itemStyle">Who</div>
              <div className="removeCellStyle">Complete?</div>
              <div className="removeCellStyle"></div>
            </div>
        </div>
        {
          todos && todos.map(function(item, index){      
          return (
            <div className="todoRow" key={index}>
              <div className="itemStyle">
                <input type="text" className="inputStyle" value={item.whatToDo}></input> 
              </div>
              <div className="itemStyle">
                <input type="text" className="inputStyle" value={item.assignedTo}></input> 
              </div>
              <div className="removeCellStyle">{item.status ? 'Complete' : 'In Process'}</div>
              <div className="removeCellStyle">
                <button className="noborderButton" onClick={() => removeTodo(item)}>
                  <img src={removeIcon} className="deleteIcon" alt="remove" />
                </button>
              </div>
            </div>);
        })

        }
        <div className="floatRight">
          <button className="buttonStyle" onClick={this.addNewTodo} >Add New Todo</button>
        </div>
			</div>
		)
	}
}

export default HomeContainer;