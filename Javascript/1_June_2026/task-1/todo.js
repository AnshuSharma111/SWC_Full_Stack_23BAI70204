const tasks = [];

const textInput = document.getElementById("task-text");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const doneList = document.getElementById("done-list");

addBtn.addEventListener("click", () => {
    // create new list item
    const li = document.createElement("li");
    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Task -";

    // add functionality to delete button
    deleteBtn.addEventListener("click", () => {
        if (chkBox.checked) doneList.removeChild(li);
        else taskList.removeChild(li);
    });

    // add done button
    const chkBox = document.createElement("input");
    chkBox.type = 'checkbox';

    // get text of input
    let new_task = textInput.value;
    
    // set text of list item to the input
    li.textContent = new_task;

    // add delete button and check box to list item
    li.appendChild(deleteBtn);
    li.appendChild(chkBox);

    // add functionality to done checkbox
    chkBox.addEventListener("change", () => {
        if (chkBox.checked) {
            taskList.removeChild(li);
            doneList.appendChild(li);

            li.style.textDecoration = "line-through";
            li.style.opacity = '0.5';
        } else {
            doneList.removeChild(li);
            taskList.appendChild(li);

            li.style.textDecoration = "none";
            li.style.opacity = '1';
        }
    });

    // add new list item to list
    taskList.appendChild(li);

    // reset input value
    textInput.value = "";
});