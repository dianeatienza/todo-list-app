const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');



const addTask = () => {
    if(inputBox.value === '') {
        alert("Make sure to add your task!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else {
        if(e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            saveData();
        }
    }
}, false)

// To make the enter key work the same way as onClick of "ADD" button

inputBox.addEventListener('keypress', function(e){
    if(e.key === 'Enter') {
        addTask();
    }   
});

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();