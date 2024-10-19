
let tasks = [];

let x = true;
let id = 1;

let task;
let taskId;

function taskManager() {
    while (x) {

        console.log(`
Choose from the following Task Manager menu options:
  1- Add Task.
  2- Update Task.
  3- Remove Task.
  4- Display All Tasks.
  5- Toggle Task Completion.
  6- Search for tasks.
  7- Exit.
`);


        let choice = prompt("Please enter your choice:");

        switch (choice) {
            case "1":
                let taskDescription = prompt("Please enter the task description:");
                tasks.push({
                    id: id++,
                    description: taskDescription,
                    completion: false
                });
                console.log(`Task added successfully: "${taskDescription}".`);
                break;

            case "2":
                taskId = prompt("Please enter the task ID to edit:");
                task = tasks.find(task => task.id == taskId);
                if (!task) {
                    console.log("Task not found.");
                }
                else {
                    let text = prompt("Please enter the new task description:");
                    let oldDescription = task.description;
                    task.description = text;
                    console.log(`Task "${oldDescription}" updated successfully to : "${task.description}".`);
                }

                break;

            case "3":
                taskId = prompt("Please enter the task ID to remove:");
                task = tasks.find(task => task.id == taskId);
                if (!task) {
                    console.log("Task not found.");
                }
                else {
                    tasks = tasks.filter(task => task.id != taskId);
                    console.log(`Task removed: "${task.description}".`);
                }

                break;

            case "4":
                console.log("Tasks:");
                tasks.forEach((task) => {
                    return console.log(`${task.id}. ${task.description} [${task.completion ? "Completed" : "Not Completed"}]`);
                })
                break;

            case "5":
                taskId = prompt("Please enter the task ID to toggle completion:");
                task = tasks.find(task => task.id == taskId);
                if (!task) {
                    console.log("Task not found");
                }
                else {
                    if (task.completion) {
                        task.completion = false;
                        console.log(`Task "${task.description}" is now marked as Not completed.`);
                    }
                    else {
                        task.completion = true;
                        console.log(`Task "${task.description}" is now marked as completed.`);
                    }
                }
                break;

            case "6":
                let taskName = prompt("Please enter the task name:");
                let results = tasks.filter(task => task.description.includes(taskName));
                if (results.length == 0) {
                    console.log("No results found.");
                }
                else {
                    console.log("Search results:");
                    results.forEach((task) => {
                        return console.log(`${task.id}. ${task.description} [${task.completion ? "Completed" : "Not Completed"}]`);
                    })
                }

                break;

            case "7":
                x = false;
                console.log("Exiting Task Manager.");
                break;

            default:
                console.log("Invalid choice, please enter a valid choice from 1 to 6");
        }

    }
}

taskManager();