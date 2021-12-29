///asynchronous javascript and xml
//set of web technologies
// send and receive data
//does not interfere with current web page
//json has replaced xml



document.getElementById('button').addEventListener('click', ()=>{
    //create object
    var xhr = new XMLHttpRequest();

    //open file
    xhr.open('GET', 'sample.txt', true);
    xhr.onload = function() {
        if(this.status === 200){
            document.getElementById('txt').innerHTML = this.responseText
            console.log(this.responseText)
        }
    }
    //send request
    xhr.send();
})

document.getElementById('button').addEventListener('click', ()=>{
    //create object
    var xhr = new XMLHttpRequest();

    //open file
    xhr.open('GET', 'sample.txt', true);
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText)
        }
    }
    //send request
    xhr.send();
});




document.getElementById('buttonUsers').addEventListener('click', ()=>{
    console.log('clicked')
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.github.com/users', true);
    xhr.onload = function() {
        if(this.status === 200) {
            var users = JSON.parse(this.responseText);
            var output = '';
            users.map(user => { output +=`<div class="user">
                <img src=${user.avatar_url} width="70" heigth="70"/>
                <ul>
                    <li>${user.id}</li>
                    <li>${user.login}</li>
                </ul>
            </div>
            `});
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
})