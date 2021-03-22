const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
//   function getValues(key) {
//     let array = [...todos];
//     let answer = []
//         for (let i = 0; i < array.length; i++){
//             answer.push(array[i][key]);
//         } ;
//     return answer;
//   }
  
  function getValues(key) {
      return todos.map(todo=>todo[key])
  } 




  console.log(getValues('id')); // [3, 2, 1]
  console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
  console.log(getValues('completed')); // [false, true, false]



