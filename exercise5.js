let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

function removeTodo(key) {
    todos = todos.filter(todo => todo.id !== key);

  }
  removeTodo(2);
  
  console.log(todos);
  /*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */