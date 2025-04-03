const form = document.getElementById("sunrise-form");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const lat1 = document.getElementById("lat1").value;
    const lon1 = document.getElementById("lon1").value;
    const lat2 = document.getElementById("lat2").value;
    const lon2 = document.getElementById("lon2").value;

    const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lon1}&formatted=0`;
    const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lon2}&formatted=0`;

    try {
        const [response1, response2] = await Promise.all([
            fetch(url1),
            fetch(url2)
        ]);

        if (!response1.ok || !response2.ok) {
            throw new Error("Failed to fetch sunrise times.");
        }

        const data1 = await response1.json();
        const data2 = await response2.json();

        const sunrise1 = new Date(data1.results.sunrise).toLocaleTimeString("en-US", { timeZone: "UTC" });
        const sunrise2 = new Date(data2.results.sunrise).toLocaleTimeString("en-US", { timeZone: "UTC" });

        resultsDiv.innerHTML = `
            <h3>Sunrise Times</h3>
            <p>City 1: ${sunrise1}</p>
            <p>City 2: ${sunrise2}</p>
        `;
    } catch (error) {
        resultsDiv.innerHTML = `<p>Error fetching sunrise times. Please try again.</p>`;
    }
});