init(); //실행

function init(){
    document.querySelector('form').addEventListener('submit', addTodo);
    document.getElementById('clearAll').addEventListener('click',clearAll);
    document.querySelector('ul').addEventListener('click',delTodo);
}

function addTodo(e){
    e.preventDefault(); //자동 실행 될 때 버튼이 눌려 함수가 실행되는 것 방지
    let toDoValue = document.getElementById('todo');
    if(toDoValue.value == ''){
        alert('내용을 입력해주세요.');
    } else {
        addTask(toDoValue.value);
        toDoValue.value = '';
    }
}

function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<input type = "checkbox"><label id="val">${value}</label><button class = "del"></button>`;
    ul.appendChild(li); //리스트 내용 추가
}

function delTodo(e){
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    if(e.target.className == 'del')
        parentNode.removeChild(remove);
    else {
        checkTodo(e);
    }
}

function checkTodo(e){
    const todo = e.target.nextSibling;
    if(e.target.checked){
        todo.style.textDecoration = "line-through"
        todo.style.color = "#dddddd";
    } else{
        todo.style.textDecoration = "none"
        todo.style.color = "#000000";
    }
}


function clearAll(e){
    let ul = document.querySelector('ul').innerHTML=''
}