let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function toggleCompletedAll() {
    // todos의 원본을 직접 변경해버림
    todos.map(todo => (todo.completed = true))
    
    // 스프레드 문법을 사용하면 복사되기 때문에 todos에 재할당
    todos = todos.map(todo => ({...todo, completed: true}))
  }
  
  toggleCompletedAll();
  
  console.log(todos);
  /*
  [
    { id: 3, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: true }
  ]
  */