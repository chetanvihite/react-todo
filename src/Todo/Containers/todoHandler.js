

function getNewTodo(){
  let emptyTodo = {
    id: Math.floor(Math.random() * 100 ),
    whatToDo: '',
    assignedTo: '',
    status: false
  }
  return emptyTodo;
}

function removeTodo(currentTodos, itemTobeRemoved){
  let index = currentTodos.findIndex( x => x.id === itemTobeRemoved.id);
  if ( index !== -1) {//not found 
    currentTodos.splice(index, 1);
  }
  return currentTodos;
}

export { getNewTodo, removeTodo};