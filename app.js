const STORAGE_KEY = "todo-list-items";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const emptyState = document.querySelector("#empty-state");
const remainingCount = document.querySelector("#remaining-count");
const filterButtons = document.querySelectorAll("[data-filter]");

let todos = loadTodos();
let activeFilter = "all";

// 從瀏覽器儲存空間讀取待辦資料，資料損壞時回到空清單。
function loadTodos() {
  try {
    const savedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(savedTodos) ? savedTodos : [];
  } catch {
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function getVisibleTodos() {
  if (activeFilter === "active") {
    return todos.filter((todo) => !todo.completed);
  }

  if (activeFilter === "completed") {
    return todos.filter((todo) => todo.completed);
  }

  return todos;
}

function updateEmptyState(visibleTodos) {
  if (todos.length === 0) {
    emptyState.textContent = "還沒有任何待辦事項，新增一個吧!";
  } else if (visibleTodos.length === 0 && activeFilter === "completed") {
    emptyState.textContent = "目前沒有已完成的事項";
  } else if (visibleTodos.length === 0 && activeFilter === "active") {
    emptyState.textContent = "目前沒有未完成的事項";
  }

  emptyState.hidden = visibleTodos.length > 0;
}

function renderTodos() {
  todoList.replaceChildren();
  const visibleTodos = getVisibleTodos();
  updateEmptyState(visibleTodos);

  visibleTodos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.classList.toggle("completed", todo.completed);

    const checkbox = document.createElement("input");
    checkbox.className = "todo-checkbox";
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", `完成待辦事項：${todo.text}`);
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      saveTodos();
      renderTodos();
    });

    const todoText = document.createElement("span");
    todoText.className = "todo-text";
    todoText.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "刪除";
    deleteButton.setAttribute("aria-label", `刪除待辦事項：${todo.text}`);
    deleteButton.addEventListener("click", () => {
      todos = todos.filter((item) => item.id !== todo.id);
      saveTodos();
      renderTodos();
    });

    listItem.append(checkbox, todoText, deleteButton);
    todoList.append(listItem);
  });

  const unfinishedCount = todos.filter((todo) => !todo.completed).length;
  remainingCount.textContent = `未完成：${unfinishedCount} 項`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderTodos();
  });
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = todoInput.value.trim();

  if (!text) {
    todoInput.focus();
    return;
  }

  todos.push({
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    text,
    completed: false,
  });

  saveTodos();
  renderTodos();
  todoForm.reset();
  todoInput.focus();
});

renderTodos();
