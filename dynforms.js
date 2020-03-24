function addItem() {
    let text = document.getElementById('item').value;

    if(text != ''){
        let newItem = document.createElement('li');
        let textNode = document.createTextNode(text);

        if(document.getElementById('important').checked){
            newItem.style.color = 'red';
        }

        if(document.getElementById('buyable').checked) {
            newItem.style['text-decoration'] = 'underline';
        }

        newItem.appendChild(textNode);
        document.getElementById('shopping-list').appendChild(newItem);
    }
}

function removeItem() {
    let index = document.getElementById('itemIndex').value - 1;
    let list = document.getElementById('shopping-list').children;
    if(index < list.length & index >= 0)
        list[index].remove();
}