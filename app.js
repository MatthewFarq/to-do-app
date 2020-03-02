/*jshint esversion: 6 */

function onReady() {
  let id = 0;
  let toDos = [];
  const localStore = localStorage.getItem('myTodos');

  if (localStore) {
    toDos = JSON.parse(localStore);
  }

  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id,
    });
    id++;
    newToDoText.value = '';

    renderTheUI();
    localStorage.setItem('myTodos', JSON.stringify(toDos));
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function (toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = toDo.complete;

      checkbox.addEventListener('change', (event) => {
        toDo.complete = !toDo.complete;
        localStorage.setItem('myTodos', JSON.stringify(toDos));
      });

      const deleteButton = document.createElement('button');

      deleteButton.classList.add(
        'delete-button', 'mdl-button', 'mdl-js-button', 'mdl-button--icon');

      let buttonIcon = document.createElement('i');
      buttonIcon.classList.add('material-icons');
      buttonIcon.textContent = 'clear';

      //append icon to button
      deleteButton.appendChild(buttonIcon);
      deleteButton.addEventListener('click', event => {
        toDos = toDos.filter(item => item.id !== toDo.id);
        renderTheUI();
        localStorage.setItem('myTodos', JSON.stringify(toDos));
      });
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function () {
  onReady();
};
