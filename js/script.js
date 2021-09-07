var ul = document.querySelector('ul');
var item = document.querySelector('li');
var input = document.querySelector('#inp-num');

function InputLength() {
    return input.value.length;
}

input.addEventListener("keyup", function(event) {

    if(event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('.btn-add').click();
    }
});

function addClick() {
    if (InputLength() > 0) {
        createList();
    } else {
        window.alert("Por favor, insira quantidade.");
    }
}


function createList() {
    var select = document.querySelector('#sel');
    var val = select.options[select.selectedIndex].text;
    var inpNum = document.querySelector('#inp-num').value;
    console.log(inpNum);
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(val));
    ul.appendChild(li);
    val.value = "";

    var xBtn = document.createElement('button');
    xBtn.appendChild(document.createTextNode("x"));
    li.appendChild(xBtn);
    xBtn.addEventListener("click", deleteListItem);

    document.querySelector('#inp-num').value = "";



    function deleteListItem() {
        li.innerHTML = null;
        li.classList.add("delete");
    }
}

