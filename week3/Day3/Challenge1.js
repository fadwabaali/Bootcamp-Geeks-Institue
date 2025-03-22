document.getElementById('lib-button').addEventListener('click', generateStory);
document.getElementById('shuffle-button').addEventListener('click', shuffleStory);

function generateStory() {
    // Get the values of the inputs
    const noun = document.getElementById('noun').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    // Ensure the values are not empty
    if (!noun || !adjective || !person || !verb || !place) {
        alert('Please fill in all fields.');
        return;
    }

    // Write a story using the values
    const story = `${person} went to the ${place} to ${verb} a ${adjective} ${noun}.`;
    document.getElementById('story').textContent = story;
}

function shuffleStory() {
    // Get the values of the inputs
    const noun = document.getElementById('noun').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    // Ensure the values are not empty
    if (!noun || !adjective || !person || !verb || !place) {
        alert('Please fill in all fields.');
        return;
    }

    // Array of possible stories
    const stories = [
        `${person} went to the ${place} to ${verb} a ${adjective} ${noun}.`,
        `In the ${place}, ${person} decided to ${verb} the ${adjective} ${noun}.`,
        `Once upon a time, ${person} found a ${adjective} ${noun} and decided to ${verb} it at the ${place}.`
    ];

    // Select a random story
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    document.getElementById('story').textContent = randomStory;
}