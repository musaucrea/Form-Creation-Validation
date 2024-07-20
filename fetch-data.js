// Define the asynchronous function to fetch user data
async function fetchUserData() {
    // API URL for fetching user data
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the HTML element where the API data will be displayed
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the existing content
        dataContainer.innerHTML = '';
        
        // Create a <ul> element
        const userList = document.createElement('ul');
        
        // Loop through the users and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle any errors
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Add an event listener to invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
