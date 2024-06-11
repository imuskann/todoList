document.addEventListener("DOMContentLoaded", () => {
  const task = document.querySelector("#task");
  const btn = document.querySelector("#add");
  const list = document.querySelector(".list");
  const edit = document.querySelector(".edit");
  const form = document.querySelector("form");
  // const del_btn = document.querySelector(".del");
  let isEditing = false;
  let currentTaskItem = null;

  btn.addEventListener("click", handleClick);
  list.addEventListener("click", handleListClick);
  edit.addEventListener("click", handleEditClick);

  //function
  function handleClick(e) {
    e.preventDefault();
    const taskInput = task.value;
    if (taskInput === "") {
      alert("Please enter a task");
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
      task.value = "";
    }
  }

  function handleListClick(e) {
    if (e.target.classList.contains("del")) {
      const item = e.target.closest("li");
      item.remove();
    } else if (e.target.classList.contains("edit")) {
      const taskItem = e.target.closest("li");
      const taskContent = taskItem.querySelector("p");
      task.value = taskContent.textContent;
      const btn = document.createElement("button");

      btn.textContent = "Update";
      form.appendChild(btn);
    }
  }
});
