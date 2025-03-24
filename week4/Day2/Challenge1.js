const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

const usernames = gameInfo.map((user) => `${user.username} !`);

console.log(usernames);

const winners = gameInfo.filter((win) => win.score > 5).map((win) => win.username);

console.log(winners);

const sum = gameInfo.reduce((acc, user) => acc + user.score, 0);

console.log(sum);