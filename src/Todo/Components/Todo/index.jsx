
import React from 'react';
import styles from './styles.css'


export default function Todo(props){
  return (
    <div className="todoRow" key={props.index}>
    <div className="itemStyle">
      <input type="text" className="inputStyle" value={props.item.whatToDo}></input> 
    </div>
    <div className="itemStyle">
      <input type="text" className="inputStyle" value={props.item.assignedTo}></input> 
    </div>
    <div className="removeCellStyle">{props.item.status ? 'Complete' : 'In Process'}</div>
    <div className="removeCellStyle">
      <button className="noborderButton" onClick={() => props.removeTodo(props.item)}>
        <img src={props.removeIcon} className="deleteIcon" alt="remove" />
      </button>
    </div>
  </div>
  );
}

