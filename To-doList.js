const todoValue=document.getElementById("todoText");
const listItems=document.querySelector("#list-items");
const addUpdateClick=document.querySelector("#AddUpdateClick");
let alertMessage=document.querySelector("#AlertMessage");
let updateText;
let todoData=JSON.parse(localStorage.getItem("todoData"))||[];
if (!Array.isArray(todoData)) {
  todoData = [];
}

todoValue.addEventListener("keypress",function(e){
  if(e.key==="Enter"){
     if(todoValue.value=== ""){
    alertMessage.innerHTML="Please Enter your todo text!";
     todoValue.focus();
    return;
   }else{
     alertMessage.innerHTML="";
     
   }
    addUpdateClick.click();
  }
});
addUpdateClick.addEventListener('click',CreateToDoList);

function CreateToDoList(){
  if(todoValue.value=== ""){
   alertMessage.innerHTML="Please Enter your todo text!";
    todoValue.focus();
   return;
  }else{
    alertMessage.innerHTML="";
    
  }
    let newTask=document.createElement("li");
    //const node=document.createTextNode(todoValue.value);
    const nodeItems=`<div ondblclick="CompleteTodoItem(this)">${todoValue.value}</div><div>
    <img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="imgs/editTask.png">
    <img class="delete todo-controls" onclick="DeleteToDoItem(this)" src="imgs/deleteBin.png">
    </div>`;
    newTask.innerHTML=nodeItems;
    listItems.appendChild(newTask);
    
    /*newTask.appendChild(node);
    listItems.appendChild(newTask)*/
    
   // let toDoData=localStorage.setItem("userData",todoValue.value);
    //console.log(typeof toDoData);

    
    let dataItem = {
      item: todoValue.value,
      status:false
    };
    todoData.push(dataItem);
    localStorage.setItem("todoData",JSON.stringify(todoData));
    console.log(todoData);
    todoValue.value="";
    alertMessage.innerHTML="Todo item Created Successfully";
    setTimeout(() => {
      alertMessage.innerHTML = "";
    }, 2000);
  }

  function CompleteTodoItem(e){
  const toDoDiv=e.parentElement.querySelector("div");
   if(toDoDiv.style.textDecoration=== ""){
   toDoDiv.style.textDecoration= "line-through";
   }
  }
  function UpdateOnSelectedItems(){
  updateText.innerText=todoValue.value;
  addUpdateClick.setAttribute("onclick","CompleteTodoItem()");
  addUpdateClick.setAttribute("src","imgs/addNewTask.gif");
  alertMessage.innerHTML="Todo item updated Successfully";
    }

 function UpdateToDoItems(e){
    if(e.parentElement.parentElement.querySelector("div").style.textDecoration===""){
      todoValue.value= e.parentElement.parentElement.querySelector("div").innerText;//this is ul
     addUpdateClick.setAttribute("onclick","UpdateOnSelectedItems()");
     addUpdateClick.setAttribute("src","imgs/editGif.gif")
     updateText=e.parentElement.parentElement.querySelector("div");
     e.parentElement.parentElement.remove();
    
    }
  }
  function DeleteToDoItem(e){
    let deleteValue=e.parentElement.parentElement.querySelector("div").innerHTML;
     /*if(e.parentElement.parentElement.querySelector("div").style.textDecoration==="" ||  e.parentElement.parentElement.querySelector("div").style.textDecoration==="line-through"){
      e.parentElement.parentElement.remove();
     }*/
     if(confirm(`Are you sure?.Do you want to delete this: ${deleteValue}`)){
      const taskElement=e.parentElement.parentElement;
      taskElement.setAttribute("class","delete-item");
      setTimeout(() => {
        taskElement.remove();
        todoValue.focus();
      }, 1000);
     }
  }
   
  //sidebar Js  
const toggleButton=document.getElementById('toggle-btn');
const sidebar=document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');
  newComingPict();
  closeAllSubMenus();
  
}
function toggleSubMenu(button){
  //to check if the sub-menu is oppened,becauseif we didnt is making a problem thaat we cant close ita gaian until we open another submenu
  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus();
   }
  
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');

if(sidebar.classList.contains('close'))/*CHECK if the side bar is closed if it was it was it will remove the class and thw show class wil be displayed */{
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
   
  }

}
// for phone device if one sub-menu was open and we want to open another one the first one will be closed
function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul=>{
    ul.classList.remove('show');
    ul.previousElementSibling.classList.remove('rotate');
  })
}
function newComingPict() {
  const newComingLogo = document.querySelector('.newComingLogo');
  if (sidebar.classList.contains('close')) {
    newComingLogo.style.display = 'none';
  } else {
    newComingLogo.style.display = 'block';
  }
}


//addNwe Note div to hem
/*document.getElementById('add-note').addEventListener('click', function() {
  // Create a new note element
  let newNote = document.createElement('textarea');
  newNote.className = 'note';
  newNote.placeholder = 'New Note';

  // Append the new note to the note container
  document.getElementById('addNewNote').appendChild(newNote);
});*/


//GreetingText
let textContainer=document.querySelector(".greeting");
let timeNow=new Date().getHours();
let greeting;
  console.log(timeNow);
  if(timeNow>=5 && timeNow<12){
    textContainer.innerHTML="Good Morning"+`<img class="emojiGreeting" src="imgs/sunrise.gif.">`;
  }else if(timeNow>=12 && timeNow <18){
    textContainer.innerHTML="Good Evening"+`<img class="emojiGreeting" src="imgs/moon1.gif">`;
    textContainer.innerHTML="Good Afternoon"+`<img class="emojiGreeting" src="imgs/afternoon.gif">`;
  }else{
    textContainer.innerHTML="Good Evening"+`<img class="emojiGreeting" src="imgs/moon1.gif">`;
  }


  //dateOfTheDay text
  const dateTextContainer=document.querySelector(".dateOfTheDayText");
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const daysOfMonth =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];
  const currentDate=new Date();
  const currentDayNumber=currentDate.getDay();
  const curentMonthNumber=currentDate.getMonth();
  const currentYear=currentDate.getFullYear();
 const curentDayName=daysOfWeek[currentDayNumber];
 const currentMonthName=daysOfMonth[curentMonthNumber];
 const currentDayOfMonth=currentDate.getDate();
 dateTextContainer.innerHTML=
 `Today,${curentDayName} ${currentDayOfMonth} ${currentMonthName} ${currentYear}`;