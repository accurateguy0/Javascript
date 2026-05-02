const todoList = [{name: 'make dinner', dueDate:'2022-12-22'}];
renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  for(let i = 0; i < todoList.length; i++){
    
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
    
    
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({
    // name:name,
    // dueDate: dueDate,
    name, 
    dueDate
});
  inputElement.value = '';
  renderTodoList();
  
}



todoListHTML; // we can't us p inside p so we use <div>, p adds space above and below it

/*
let i = 1;
while(i <= 5){
  console.log(i);
  i++;
}
for(let i=1; i<=5; i++){
  console.log(i);
}
const todoList = ['make dinner', 'wash dishes', 'watch youtube'];
for(let i = 0; i <= todoList.length-1;i++){
  const value = todoList[i];
  console.log(value);
}*/
