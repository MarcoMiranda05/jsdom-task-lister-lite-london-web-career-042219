document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // const taskList = new TaskList();

  const newTaskForm = document.getElementById("create-task-form");

  newTaskForm.addEventListener("submit", (e) => {
		e.preventDefault();
		let textField = document.getElementById("new-task-description")
    let task_text = textField.value
    e.target.reset(); 

		let taskList = document.getElementById("tasks")
		let li = document.createElement("li");
		li.innerText = task_text;
		taskList.appendChild(li);
	});

});
