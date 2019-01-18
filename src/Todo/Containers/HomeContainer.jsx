

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
          "whatToDo": "Finish something",
          "assignedTo": "Randee Ramshaw",
          "status": true
        }, {
          "id": 5,
          "whatToDo": "Catch train",
          "assignedTo": "Nealy Rizzetti",
          "status": false
        }]
		}
	}

	
	render () {
    let todos = this.state.todos;

		return (
			<div>
        <div className="header">
          Welcome to my Todo App
        </div>
        {
          todos && todos.map(function(item, index){      
          return (
            <div className="todoRow">
              <div className="itemStyle">{item.whatToDo}</div>
              <div className="itemStyle">{item.assignedTo}</div>
              <div className="removeCellStyle">{item.status ? 'Completed' : 'In Process'}</div>
              <div className="removeCellStyle">
                <img src={removeIcon} className="deleteIcon" alt="remove" />
              </div>
            </div>);
        })

        }
        <div className="floatRight">
          <a href="#" onClick={this.addTodo} >Add New Todo</a>
        </div>
			</div>
		)
	}
}

export default HomeContainer;