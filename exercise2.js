const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  

  function getValues(key) {
    // 대괄호 표기법 안에는 문자로 평가되는 식별자도 사용 가능하다.
      return todos.map(todo=>todo[key])
  } 
  
// 화살표 함수로만
const getValues = key => todos.map(todo => todo[key])



  console.log(getValues('id')); // [3, 2, 1]
  console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
  console.log(getValues('completed')); // [false, true, false]



