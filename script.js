document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const task = taskInput.value.trim();

        if (task) {
            await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ task })
            });

            taskInput.value = "";
            loadTasks();
        }
    });

    async function loadTasks() {
        taskList.innerHTML = "";
        const response = await fetch("http://localhost:3000/tasks");
        const tasks = await response.json();

        tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task.description;
            taskList.appendChild(li);
        });
    }

    loadTasks();
});