// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the Add Task button
    const addButton = document.getElementById('add-task-btn');
    // Select the input field for task entry
    const taskInput = document.getElementById('task-input');
    // Select the list where tasks will be displayed
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get the value from the input and trim it
        const taskText = taskInput.value.trim();

        // If the input is empty, alert the user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a button for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add functionality to the remove button
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the task item
        li.appendChild(removeBtn);
        // Add the new task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding task by pressing the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

