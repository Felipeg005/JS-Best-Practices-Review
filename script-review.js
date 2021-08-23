let listArray = [];

const load = () => {
/* eslint-disable-next-line */
  if (!(listArray = JSON.parse(localStorage.getItem('taskStorage')))) {
    listArray = [];
    localStorage.setItem('taskStorage', JSON.stringify(listArray));
  }
  const headerContainer = document.querySelector('#refresh');
  const refreshButton = document.createElement('img');
  const enterButton = document.querySelector('.enter-btn');
  const imgEnterButton = document.createElement('img');
  refreshButton.src = refreshIcon;
  refreshButton.alt = '';
  refreshButton.classList.add('refresh-img');
  headerContainer.appendChild(refreshButton);
  imgEnterButton.src = enterIcon;
  imgEnterButton.classList.add('enter-img');
  enterButton.appendChild(imgEnterButton);

  for (let i = 0; i < listArray.length; i += 1) {
    if ((listArray[i].completed === false)) {
      if (listArray[i].index > i) {
        listArray[i].idContainer = `list-element move-button${i + 1}`;
        listArray[i].idInput = `input-text${i + 1}`;
        listArray[i].idCheckbox = `input-checkbox${i + 1}`;
        listArray[i].index = i + 1;
        localStorage.setItem('taskStorage', JSON.stringify(listArray));
      }
      const listContainer = document.querySelector('.list-items');
      const listElement = document.createElement('li');
      listElement.classList.add('list-element', `move-button${i + 1}`);
      listContainer.appendChild(listElement);
      const checkButtonDiv = document.createElement('div');
      const checkInput = document.createElement('input');
      const description = document.createElement('input');
      const moveButton = document.createElement('img');
      checkButtonDiv.classList.add('form-check');
      checkInput.setAttribute('type', 'checkbox');
      checkInput.id = `input-checkbox${i + 1}`;
      description.id = `input-text${i + 1}`;
      description.classList.add('description', `input-checkbox${i + 1}`);
      description.placeholder = listArray[i].description;
      moveButton.src = optionsIcon;
      moveButton.classList.add('move-button');
      moveButton.id = `move-button${i + 1}`;
      listElement.appendChild(checkButtonDiv);
      listElement.appendChild(description);
      listElement.appendChild(moveButton);
      checkButtonDiv.appendChild(checkInput);
    } else if (listArray[i].completed === true) {
      if (listArray[i].index > i) {
        listArray[i].idContainer = `list-element move-button${i + 1}`;
        listArray[i].idInput = `input-text${i + 1}`;
        listArray[i].idCheckbox = `input-checkbox${i + 1}`;
        listArray[i].index = i + 1;
        localStorage.setItem('taskStorage', JSON.stringify(listArray));
      }
      const listContainer = document.querySelector('.list-items');
      const listElement = document.createElement('li');
      listElement.classList.add('list-element', `move-button${i + 1}`);
      listContainer.appendChild(listElement);
      const checkButtonDiv = document.createElement('div');
      const checkInput = document.createElement('input');
      const description = document.createElement('input');
      const moveButton = document.createElement('img');
      checkButtonDiv.classList.add('form-check');
      checkInput.setAttribute('type', 'checkbox');
      checkInput.id = `input-checkbox${i + 1}`;
      description.id = `input-text${i + 1}`;
      description.classList.add('description', `input-checkbox${i + 1}`);
      description.placeholder = listArray[i].description;
      moveButton.src = optionsIcon;
      moveButton.classList.add('move-button');
      moveButton.id = `move-button${i + 1}`;
      listElement.appendChild(checkButtonDiv);
      listElement.appendChild(description);
      listElement.appendChild(moveButton);
      checkButtonDiv.appendChild(checkInput);
      document.querySelector(`.${listArray[i].idCheckbox}`).classList.toggle('checked-description');
    }
  }
};
document.body.addEventListener('keydown', (event) => {
  editDescription(event.target.id);
});
document.getElementById('form').addEventListener('submit', add);
document.body.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    checkTask(event.target.id);
  }
  if (`${event.target.className}` === 'clear-btn') {
    clear();
  }
  if (`${event.target.className}` === 'move-button') {
    showDeleteBtn(event.target.id);
  }
  if (`${event.target.className}` === 'delete-button') {
    deleteElement(event.target.parentNode);
  }
});
window.addEventListener('DOMContentLoaded', () => {
  load();
});

const add = () => {
  let listArray = JSON.parse(localStorage.getItem('taskStorage'));
  if (!listArray) {
    listArray = [];
  }
  const newInput = document.getElementById('new-item');
  const newTask = {
    idContainer: `list-element move-button${listArray.length + 1}`,
    idInput: `input-text${listArray.length + 1}`,
    idCheckbox: `input-checkbox${listArray.length + 1}`,
    description: `${newInput.value}`,
    completed: false,
    index: listArray.length + 1,
  };
  listArray.push(newTask);
  localStorage.setItem('taskStorage', JSON.stringify(listArray));
};

const checkTask = (checkedId) => {
  const listArray = JSON.parse(localStorage.getItem('taskStorage'));
  const checkBox = document.querySelector(`.${checkedId}`);
  checkBox.classList.toggle('checked-description');
  for (let i = 0; i < listArray.length; i += 1) {
    if ((`${listArray[i].idCheckbox}` === `${checkedId}`)) {
      if (listArray[i].completed === false) {
        listArray[i].completed = true;
        localStorage.setItem('taskStorage', JSON.stringify(listArray));
      } else if (listArray[i].completed === true) {
        listArray[i].completed = false;
        localStorage.setItem('taskStorage', JSON.stringify(listArray));
      }
    }
  }
};

  const listArray = JSON.parse(localStorage.getItem('taskStorage'));
  /* eslint-disable-line */const trueValues = listArray.filter((e) => {
    return e.completed === false;
  });
  localStorage.setItem('taskStorage', JSON.stringify(trueValues));
  /* eslint-disable-line */location.reload();
};

const deleteElement = (event) => {
  event.parentNode.removeChild(event);
  const listArray = JSON.parse(localStorage.getItem('taskStorage'));
  for (let i = 0; i < listArray.length; i += 1) {
    if (`${event.className}` === `${listArray[i].idContainer}`) {
      listArray.splice(i, 1);
      localStorage.setItem('taskStorage', JSON.stringify(listArray));
    }
  }
  /* eslint-disable-line */location.reload();
};

const editDescription = (event) => {
  const listArray = JSON.parse(localStorage.getItem('taskStorage'));
  const inputValue = document.getElementById(`${event}`);
  for (let i = 0; i < listArray.length; i += 1) {
    if (event === listArray[i].idInput) {
      listArray[i].description = inputValue.value;
      localStorage.setItem('taskStorage', JSON.stringify(listArray));
    }
/* eslint-disable-line */  }
};

const showDeleteBtn = (event) => {
  // console.log(event);
  const deleteOption = document.querySelector(`.${event}`);
  const showDelete = document.querySelector('.delete-button');
  if (!showDelete) {
    const deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-button');
    deleteOption.appendChild(deleteButton);
    deleteButton.innerHTML = 'Delete';
  } else {
    showDelete.parentNode.removeChild(showDelete);
  }
};
