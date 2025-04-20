
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
document.getElementById('add-note').addEventListener('click', function() {
  // Create a new note element
  let newNote = document.createElement('textarea');
  newNote.className = 'note';
  newNote.placeholder = 'New Note';

  // Append the new note to the note container
  document.getElementById('addNewNote').appendChild(newNote);
});


