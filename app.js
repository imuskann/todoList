document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.querySelector("#task");
  const btn = document.querySelector("#add");
  const list = document.querySelector(".list");

  let isEditing = false;
  let currentTaskItem = null;

  btn.addEventListener("click", handleClick);
  list.addEventListener("click", handleListClick);

  //function
  function handleClick(e) {
    e.preventDefault();
    const taskInput = userInput.value.trim();
    if (taskInput === "") {
      alert("Please enter a task");
      return;
    }

    if (isEditing) {
      currentTaskItem.querySelector("p").textContent = taskInput;
      resetForm();
    } else {
      list.innerHTML += `
    <li>
    <div class="task_list">
          <p>${taskInput}</p>
          <div class="action">
            <span class="edit">Edit</span>
            <span class="del">Delete</span>
          </div>
        </div>
      </li>
       `;
    }

    userInput.value = "";
  }

  function handleListClick(e) {
    if (e.target.classList.contains("del")) {
      const item = e.target.closest("li");
      item.remove();
    } else if (e.target.classList.contains("edit")) {
      const taskItem = e.target.closest("li");
      const taskContent = taskItem.querySelector("p").textContent;
      userInput.value = taskContent;

      isEditing = true;
      currentTaskItem = taskItem;
      btn.textContent = "Update Task";
    }
  }

  function resetForm() {
    isEditing = false;
    currentTaskItem = null;
    btn.textContent = "Add Task";
  }
});
