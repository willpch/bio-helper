var ul = document.querySelector('ul');
var item = document.querySelector('li');

function createList() {
    var select = document.querySelector('#sel');
    var val = select.options[select.selectedIndex].text;

    var li = document.createElement('li');

    li.appendChild(document.createTextNode(val));
    ul.appendChild(li);
    val.value = "";

    var xBtn = document.createElement('button');
    xBtn.appendChild(document.createTextNode("x"));
    li.appendChild(xBtn);
    xBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.innerHTML = null;
        li.classList.add("delete");
    }
}

