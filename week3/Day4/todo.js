// Create an empty array to store tasks
const tasks = [];

// Function to add a task
const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // Check that the input is not empty
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a task object
    const task = {
        task_id: tasks.length,
        text: taskText,
        done: false
    };

    // Add the task to the array
    tasks.push(task);

    // Add the task to the DOM
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.setAttribute('data-task-id', task.task_id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => doneTask(task.task_id));

    const taskLabel = document.createElement('span');
    taskLabel.className = 'task-text';
    taskLabel.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.addEventListener('click', () => deleteTask(task.task_id));

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskLabel);
    taskDiv.appendChild(deleteButton);

    document.querySelector('.listTasks').appendChild(taskDiv);

    // Clear the input
    taskInput.value = '';
};

// Function to mark a task as done
const doneTask = (task_id) => {
    const task = tasks.find(t => t.task_id === task_id);
    task.done = !task.done;

    const taskDiv = document.querySelector(`.task[data-task-id="${task_id}"] .task-text`);
    task.done ? taskDiv.classList.add('done') : taskDiv.classList.remove('done');
};

// Function to delete a task
const deleteTask = (task_id) => {
    const taskIndex = tasks.findIndex(t => t.task_id === task_id);
    tasks.splice(taskIndex, 1);

    const taskDiv = document.querySelector(`.task[data-task-id="${task_id}"]`);
    taskDiv.remove();
};

// Add event listener to the submit button
document.getElementById('submitButton').addEventListener('click', addTask);