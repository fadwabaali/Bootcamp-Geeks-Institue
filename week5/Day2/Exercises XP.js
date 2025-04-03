// 🌟 Exercise 1 : Giphy API

const getdata = async () => {
    try {
        const response = await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
        const data = await response.json();
        // console.log(data.data);
    } catch (error) {
        console.error("Error fetching data from Giphy API:", error);
    }
}

getdata();

// 🌟 Exercise 2 : Giphy API

const searchQuery = async () => {
    try {
        const response = await fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
        const data = await response.json();
        // console.log(data.data); 
    } catch (error) {
        console.error("Error fetching data from Giphy API:", error);
    }
};

searchQuery();

// 🌟 Exercise 3 : Async function

const fetchdata = async () => {

    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data starship:", data); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
