import { robots } from './Assets.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('card_container');
    const searchInput = document.querySelector('input[type="text"]');

    // Function to create cards dynamically
    const createCards = (robots) => {
        container.innerHTML = ''; // Clear the container before adding new cards

        robots.forEach(robot => {
            // Create card element
            const card = document.createElement('div');
            card.className = 'card';

            // Add robot image
            const img = document.createElement('img');
            img.src = robot.image;
            img.alt = `${robot.name}'s image`;

            // Add robot name
            const name = document.createElement('h2');
            name.textContent = robot.name;

            // Add robot email
            const email = document.createElement('p');
            email.textContent = robot.email;

            // Append elements to card
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(email);

            // Append card to container
            container.appendChild(card);
        });
    };

    createCards(robots);

    // Event listener for the search input
    searchInput.addEventListener('input', (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchQuery)
        );
        createCards(filteredRobots); 
    });
});