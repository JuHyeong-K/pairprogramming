let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function getMaxId() {
    return Math.max(...todos.map(todo => todo['id']));
    
    // 만약 todos가 빈 배열이라면? max()와 같아서 -Infinity가 나옴
    // todos의 길이가 truthy면 동작하고 아니면 0 리턴
    return todos.length ? Math.max(...todos.map(todo => todo['id'])) : 0;
    // or
    return Math.max(...todos.map(todo => todo['id']), 0);
  }
  
  console.log(getMaxId()); // 3