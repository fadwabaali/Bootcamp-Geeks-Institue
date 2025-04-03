const form = document.getElementById("gif-form");
const gifContainer = document.getElementById("gif-container");
const deleteAllButton = document.getElementById("delete-all");

form.addEventListener("submit", async (event) => {
    event.preventDefault(); 
    const searchTerm = document.getElementById("search-input").value;

    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const gifUrl = data.data.images.original.url;

        const gifWrapper = document.createElement("div");
        gifWrapper.className = "gif-wrapper";

        const img = document.createElement("img");
        img.src = gifUrl;
        img.alt = searchTerm;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            gifWrapper.remove(); 
        });

        gifWrapper.appendChild(img);
        gifWrapper.appendChild(deleteButton);

        gifContainer.appendChild(gifWrapper);
    } catch (error) {
        console.error("Error fetching GIF:", error);
        alert("Error fetching GIF. Please try again.");
    }
});

deleteAllButton.addEventListener("click", () => {
    gifContainer.innerHTML = ""; 
});