let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function toggleCompletedById(key) {
    let newTodos = todos.filter(todo => todo.id === key)
    newTodos[0].completed = !newTodos[0].completed
  }
  
  toggleCompletedById(1);
  
  console.log(todos);
  /*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */