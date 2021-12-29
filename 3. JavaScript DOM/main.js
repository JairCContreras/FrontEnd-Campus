const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //get input value
    const newItem = document.getElementById('item').value;
    //create new li element
    const li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //creete delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete'

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li)
});


//delete an item
itemList.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('delete')){

            var li = e.target.parentElement;
            itemList.removeChild(li);
        
    }
});


//filter items;
filter.addEventListener('keyup', (e) => {
    const txt = e.target.value.toLowerCase();

    const items = itemList.getElementsByTagName('li');

    //convert to array
    Array.from(items).forEach(item => {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase() .indexOf(txt) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    })
});