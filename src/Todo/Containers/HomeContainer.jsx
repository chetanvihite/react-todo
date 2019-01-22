

import React, { Component } from 'react';
import removeIcon from '../../removeIcon.png';

import Todo from '../Components/Todo';
import HeaderRow from '../Components/Header';
import ActionRow from '../Components/ActionRow';
import {getNewTodo, removeTodo} from './todoHandler';

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
    let emptyTodo = getNewTodo();
    let currentTodos = this.state.todos;
    currentTodos.push(emptyTodo);
    this.setState ({todos: currentTodos});
  }
  removeTodo = (itemTobeRemoved) => {
    let currentTodos = this.state.todos;
    let remainingTodos = removeTodo(currentTodos, itemTobeRemoved);
    this.setState ({todos: remainingTodos});
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
          <HeaderRow />
        </div>
        {
          todos && todos.map(function(item, index){      
          return (
            <Todo 
              index={index}
              item={item}
              removeTodo={removeTodo}
              removeIcon={removeIcon}
            />
           );
        })
        }
        <ActionRow addNewTodo={this.addNewTodo} addButtonText="Add New Todo" />
			</div>
		)
	}
}

export default HomeContainer;