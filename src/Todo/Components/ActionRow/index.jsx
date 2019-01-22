

import React from 'react';

export default function ActionRow(props){
  return (
    <div className="floatRight">
      <button className="buttonStyle" onClick={props.addNewTodo} >{props.addButtonText}</button>
    </div>
  )
}