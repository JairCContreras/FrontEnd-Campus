const myForm = document.getElementById("my-form");

const nameInput = document.querySelector('#name');
const emailInput = document.querySelectorAll('#email');

const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = 'Pleaser enter all values';
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value));
        userList.appendChild(li);
        nameInput.value = ''
    }
});