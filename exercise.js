const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function render() {
    // let html = '';
    
    // return todos.forEach(todo => {
      // // string interpolation 안에 삼항연산자를 넣을 수 있는 이유는 표현식인 문이기 때문에 가능했다.
      // html += `
      // <li id="${todo.id}">
      // <label><input type="checkbox"${todo.completed ? ' checked' : ''}>${todo.content}</label>
      // </li>`;
      
      // 
    // });
    return todos.map(({ id, content, completed }) => {return `<li id="${id}">
    <label><input type="checkbox"${completed ? ' checked' : ''}>${content}</label>
    </li>`}).join('')
    
    // return html;
  }
  console.log(render());
  
  /*
  <li id="3">
    <label><input type="checkbox">HTML</label>
  </li>
  <li id="2">
    <label><input type="checkbox" checked>CSS</label>
  </li>
  <li id="1">
    <label><input type="checkbox">Javascript</label>
  </li>
  */
