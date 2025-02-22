function addTask() {
    let input = document.getElementById("taskInput").value;
    if (input.trim() === "") return;
    
    let li = document.createElement("li");
    li.textContent = input;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}
