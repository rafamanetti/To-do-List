const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let btnAdd = document.getElementById("btnAdd")


// Creating the function to add tasks to the list
function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!!')
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; // Code for the X to delete, and creating the child to show him
        li.appendChild(span);
    }
    inputBox.value = '' // Cleaning the input box and making him on focus when you add a task
    inputBox.focus();
    saveData();
}

// Creating the event to check the task or delete
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Saving the data when you close or refresh your browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Creating a function to ENTER on your keyboard works to add a task.
inputBox.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})
showTask();