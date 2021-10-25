// set local storage item
// localStorage.setItem('name', 'Sharmin');
// localStorage.setItem('age', '18');

//Session storage item
// sessionStorage.setItem('name', 'jara');

//Removed from storage
// localStorage.removeItem('name');

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// Clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
  console.log(123);
  const task = document.getElementById('task').value;
  // console.log(task);
  localStorage.setItem('task', task);
  alert('task saved');

  e.preventDefault();

});

  // Array & String
  // const task = document.getElementById('task').value;

  //  let tasks;

  //  if(localStorage.getItem('tasks') === null){
  //    tasks = [];
  //  }
  //  else {
  //    tasks = JSON.parse(localStorage.getItem('tasks'));
  //  }

  //  tasks.push(task);

  //  localStorage.setItem('tasks', JSON.stringify(tasks));

  //  alert('Task saved');

  //  e.preventDefault();

// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//   console.log(task);

// });