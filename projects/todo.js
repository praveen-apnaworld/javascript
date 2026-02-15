let todoList = [
  {item: 'Buy Milk', dueDate: '2024-06-30'},
  {item:'Go to school', dueDate: '2024-07-01'}];


function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
    // Dot (.) ke turant baad bina space ke class name likho
    let containerElement = document.querySelector('.todo-container');
    
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      let {item, dueDate} = todoList[i];

        newHtml += `
          
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1);
         displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}

  