console.log(window)
//single element
const form = document.getElementById("my-form");
const h1 = document.querySelector("h1");
const item = document.querySelectorAll('.item');
const items = document.getElementsByClassName('item');

const ul = document.querySelector('.items');
//remove

ul.children[1].textContent = "Hello world"


console.log(form);
console.log(h1);
console.log(items)



///btn
const btn = document.querySelector('.btn');
btn.style.background = 'red';


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById("my-form").style.background = "#ccc";
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('body').style.color = 'white';
    document.querySelector('.items').lastElementChild.textContent = "Bye world"
});