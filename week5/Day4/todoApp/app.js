import { TodoList } from "./todo.js";

const todoList = new TodoList();

todoList.addTask("Learn JavaScript");
todoList.addTask("Learn React");
todoList.addTask("Learn Node.js");

todoList.markTask("Learn JavaScript");

todoList.listTasks()