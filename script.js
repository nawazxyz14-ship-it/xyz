function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}