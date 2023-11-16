const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Data to be uploaded
const postData = {
  title: 'Buy groceries',
  completed: false
};

// Options for the fetch request
const options = {
  method: 'POST', // Use the POST method for uploading data
  headers: {
    'Content-Type': 'application/json'
    // You can add other headers as needed
  },
  body: JSON.stringify(postData) // Convert data to JSON format
};

// Make the fetch request
fetch(apiUrl, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log('Data successfully uploaded:', data);
  })
  .catch(error => {
    console.error('Error uploading data:', error);
  });
