const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
function sortBy(key) {
  // 비교연산자는 음수, 양수, 0을 리턴한다?
  return [...todos].sort((todo1, todo2) => (todo1[key] > todo2[key] ? 1 : (todo1[key] < todo2[key] ? -1 : 0)));
}
// 한 줄로 정리
const sortBy = (key) => [...todos].sort((todo1, todo2) => (todo1[key] > todo2[key] ? 1 : (todo1[key] < todo2[key] ? -1 : 0)));


console.log(sortBy('id'));
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy('content'));

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
