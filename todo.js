//this array get user input todo and save in list
let todoList = [];
// we page load must show displayitems function
displayItems();

//Here we get user input todo and put it above array list
function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  // Now we clear input box
  inputElement.value = "";

  //also when new element created
  displayItems();
}

function displayItems() {
  let containerEle = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += ` 
<span> ${item}</span>
<span> ${dueDate}</span>
<button class="btn-delete" onclick="todoList.splice(${i},1); displayItems();">Delete</button>
`;
  }
  containerEle.innerHTML = newHtml;
}
