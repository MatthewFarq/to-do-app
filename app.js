/*jshint esversion: 6 */

function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = 'checkbox';

    //create delete button with icon
    let button = document.createElement('button');
    button.classList.add('delete-button', 'mdl-button', 'mdl-js-button', 'mdl-button--icon');

    let buttonIcon = document.createElement('i');
    buttonIcon.classList.add('material-icons');
    buttonIcon.textContent = 'clear';

    //append icon to button
    button.appendChild(buttonIcon);

    //add event listener to delete button
    button.addEventListener('click', event => {
      event.preventDefault();
      toDoList.removeChild(newLi);
    });

    //combine input text and checkbox in one div
    let titleSpan = document.createElement('span');
    titleSpan.textContent = title;

    let titleCheckContainer = document.createElement('div');
    titleCheckContainer.appendChild(checkbox);
    titleCheckContainer.appendChild(titleSpan);

    //attach the elements to the li
    newLi.appendChild(titleCheckContainer);
    newLi.appendChild(button);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
}

window.onload = function () {
  alert('The window has loaded!');
  onReady();
};
