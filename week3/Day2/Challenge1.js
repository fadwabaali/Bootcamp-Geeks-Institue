const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "yellow", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "goldenrod", moons: 83 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

const section = document.querySelector(".listPlanets");

planets.forEach(planet => {
    const planetDiv = document.createElement("div"); // Create planet div
    planetDiv.classList.add("planet"); // Add planet class
    planetDiv.style.backgroundColor = planet.color; // Set planet color
    planetDiv.textContent = planet.name; // Display planet name

    section.appendChild(planetDiv); // Append planet to section

    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div"); // Create moon div
        moonDiv.classList.add("moon"); // Add moon class

        moonDiv.style.top = `${Math.random() * 150}px`;
        moonDiv.style.left = `${Math.random() * 150}px`;

        planetDiv.appendChild(moonDiv); // Append moon to planet
    }
});
