let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function countCompletedTodos() {
    // 가독성이 최고
    return todos.filter(todo => todo.completed).length

    // 굳이 reduce를 사용하지 않아도 된다.
    return todos.reduce((acc,cur) => cur.completed ? acc+= 1 : acc, 0 );
  }
  
  console.log(countCompletedTodos()); // 1