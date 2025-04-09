export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({task: task.trim(), completed: false});
        console.log(`Task "${task}" added to the list.`);
    }

    markTask(task) {
        const taskToComplete = this.tasks.find((t) => t.task === task.trim());
        if (taskToComplete) {
            taskToComplete.completed = true;
            console.log(`Task marked as complete: "${task}"`);
        } else {
            console.log(`Task not found: "${task}"`);
        }
    }

    listTasks() {
        console.log("Todo List:");
        this.tasks.forEach((t, index) => {
            console.log(`${index + 1}. ${t.task} - ${t.completed ? "Completed" : "Pending"}`);
        });
    }
}