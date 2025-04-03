// 🌟 Exercise 1 : Giphy API #2

const fetchRandomGif = async () => {
    try {
        const response = await fetch("https://api.giphy.com/v1/gifs/search?q=random&limit=1&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const gifUrl = data.data[0].images.original.url;
        const img = document.createElement("img");
        img.src = gifUrl;
        img.alt = "GIF";
        document.body.appendChild(img);
    } catch (error) {
        console.error("Error fetching GIF:", error);
    }
};

fetchRandomGif();

// 🌟 Exercise 1 : Giphy API #3

const form = document.getElementById("gif-form");
const gifContainer = document.getElementById("gif-container");

form.addEventListener("submit", async (event) => {
    event.preventDefault(); 
    gifContainer.innerHTML = "";
    const searchTerm = document.getElementById("search-input").value;

    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=10&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        data.data.forEach((gif) => {
            const img = document.createElement("img");
            img.src = gif.images.original.url;
            img.alt = gif.title;
            gifContainer.appendChild(img);
        });
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        gifContainer.innerHTML = `<p>Error fetching GIFs. Please try again later.</p>`;
    }
});