let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function toggleCompletedById(key) {
    // let newTodos = todos.filter(todo => todo.id === key)
    // newTodos[0].completed = !newTodos[0].completed

    // map을 사용한 방법, key파라미터로 타입이 다를 경우를 대비해서 key에 숫자로 암묵적 타입변환
    todos = todos.map(todo => todo.id === +key ? {...todo, completed: !todo.completed} : todo)    
  }
  toggleCompletedById('2');
  
  console.log(todos);
  /*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */