const todoList = [];
const todoList2 = JSON.parse(localStorage.getItem('todo')) || [];

const saveTodos = () => {
  localStorage.setItem('todo', JSON.stringify(todoList2));
};

const addTodo = () => {
  const title = document.querySelector('.js-input-1');
  todoList.push(title.value);
  title.value = '';
  console.log(todoList);
}

const addTodo2 = () => {
  const title = document.querySelector('.js-input-2');
  const dueDate = document.querySelector('.js-dueDate');
  todoList2.push({title: title.value, dueDate: dueDate.value}) // using shorthand property when both the variable and object property's nammmme are samme
  saveTodos();
  title.value = '';

  printTodo();
}

const printTodo = () => {
  const todoListDiv = document.getElementById('todo-list');
  todoListDiv.innerHTML = '';
  let index = 0;

  todoList2.forEach((element) => {
    // const div = document.createElement('div');
    // div.className = 'todo-row';
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const button = document.createElement('button');
    div1.innerHTML = element.title;
    div2.innerHTML = element.dueDate;
    // button.innerHTML = 'Delete';
    // button.onclick = () => {
    //   todoList2.splice(index-1, 1);
    //   printTodo();
    // };

    // div.append(div1, div2);
    
    
    todoListDiv.append(div1, div2);

    todoListDiv.innerHTML += `<button
    onclick="todoList2.splice(${index}, 1); saveTodos(); printTodo();"
    class="delete-button";
    >Delete</button>`;


    ++index;
  })
}

printTodo();