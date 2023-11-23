document.addEventListener('DOMContentLoaded', function () {
    // Retrieve tasks from localStorage on page load
    let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Display tasks on the page
    let taskList = document.getElementById('taskList');
    displayTasks(savedTasks);
  
    // Function to add a new task
    window.addTask = function () {
      let taskInput = document.getElementById('taskInput');
      let newTask = taskInput.value.trim();
  
      if (newTask !== '') {
        // Add the new task to the list
        // savedTasks.push(newTask);
              // Add the new task with timestamp to the list
              const timestamp = formatTimestamp(new Date());
              const taskWithTimestamp = `${newTask} - ${timestamp}`;
              savedTasks.push(taskWithTimestamp);
  
        // Update the displayed tasks
        displayTasks(savedTasks);
  
        // Save the updated tasks to localStorage
        saveTasksToLocalStorage(savedTasks);
  
        // Clear the input field
        taskInput.value = '';
      }
    };

    function formatTimestamp(date) {
        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short',
        };
    
        return new Intl.DateTimeFormat('en-US', options).format(date);
      }
  
      // Function to handle "Enter" key press in the input field
  function handleEnterKey(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  }
    // Attach the event listener to the input field
    const taskInput = document.getElementById('taskInput');
    taskInput.addEventListener('keyup', handleEnterKey);

    // Function to remove a task
    window.removeTask = function (index) {
      // Remove the task at the specified index
      savedTasks.splice(index, 1);
  
      // Update the displayed tasks
      displayTasks(savedTasks);
  
      // Save the updated tasks to localStorage
      saveTasksToLocalStorage(savedTasks);
    };
  
    // Function to update a task
    window.updateTask = function (index) {
      let updatedTask = prompt('Update the task:', savedTasks[index]);
  
      if (updatedTask !== null) {
        // Update the task in the list
        savedTasks[index] = updatedTask;
  
        // Update the displayed tasks
        displayTasks(savedTasks);
  
        // Save the updated tasks to localStorage
        saveTasksToLocalStorage(savedTasks);
      }
    };
  
    // Function to display tasks on the page
function displayTasks(tasks) {
    taskList.innerHTML = ''; // Clear the existing list
  
    if (tasks.length === 0) {
      // Display a message when there are no tasks
      let emptyMessage = document.createElement('li');
      emptyMessage.textContent = 'No tasks added yet.';
      taskList.appendChild(emptyMessage);
    } else {
      tasks.forEach(function (task, index) {
        let listItem = document.createElement('li');
        listItem.textContent = task;
  
        // Create a div to hold the buttons
        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
  
        // Add a remove button to the container
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('removeButton');
        removeButton.onclick = function () {
          removeTask(index);
        };
  
        // Add an update button to the container
        let updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.classList.add('updateButton');
        updateButton.onclick = function () {
          updateTask(index);
        };
  
        // Append buttons to the container
        buttonContainer.appendChild(removeButton);
        buttonContainer.appendChild(updateButton);
  
        // Append the button container to the list item
        listItem.appendChild(buttonContainer);
  
        taskList.appendChild(listItem);
      });
    }
  }
    // Function to save tasks to localStorage
    function saveTasksToLocalStorage(tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

      // Function to toggle dark mode
  window.toggleDarkMode = function () {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');
    const isDarkMode = darkModeToggle.checked;

    // Toggle the dark mode class on the body
    body.classList.toggle('dark-mode', isDarkMode);

    // Save the dark mode preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
  };

  // Check and apply dark mode preference from localStorage on page load
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  document.getElementById('darkModeToggle').checked = savedDarkMode;
  toggleDarkMode(); // Apply the dark mode immediately if it was saved
  });
  