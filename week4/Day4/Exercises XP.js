// 🌟 Exercise 2 : HTML Form #2
// URL as a query string it appears on browser

// 🌟 Exercise 2 : HTML Form #2
// The POST method sends data securely in the request body instead of the URL.

// 🌟 Exercise 3 : JSON Mario
const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

const jsonString = JSON.stringify(marioGame);

console.log(jsonString);