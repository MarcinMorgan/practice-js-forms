const form = document.querySelector('form');
const usersList = document.querySelector('.users-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formFirstName = e.target.elements.firstName.value;
    const formLastName = e.target.elements.lastName.value;
    const newPerson = document.createElement('li');
    newPerson.classList.add('users-list__person');
    newPerson.innerText = formFirstName+' '+formLastName;
    usersList.appendChild(newPerson);
})