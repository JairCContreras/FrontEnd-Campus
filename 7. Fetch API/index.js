const jsonBtn = document.getElementById('jsonBtn');
const txtBtn = document.getElementById('txtBtn');

const json = document.getElementById('json');
const txt = document.getElementById('txt')


txtBtn.addEventListener("click", ()=>{
    fetch('sample.txt')
    .then(res=>res.text())
    .then(data=> {
        txt.innerHTML = data;
    })
});



jsonBtn.addEventListener("click", ()=>{
    fetch('users.json')
v});