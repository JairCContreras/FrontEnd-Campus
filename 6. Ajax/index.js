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
})