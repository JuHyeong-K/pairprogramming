const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
const newTodos = [...todos]
function sortBy(key) {
  return newTodos.sort((a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0)));
}
  
  console.log(sortBy('id'));
  /*
  [
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ]
  */
  console.log(sortBy('content'));
  console.log(todos);
  /*
  [
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
  console.log(sortBy('completed'));
  /*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true }
  ]
  */
