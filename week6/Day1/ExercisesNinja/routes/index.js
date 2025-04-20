const express = require('express');
const router = express.Router();


const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

router.get('/', (req, res) => {
    const emojiOptions = emojis.map(emoji => `<option value="${emoji}">${emoji}</option>`).join('');
    res.send(`
        <html>
            <head>
                <title>Emoji Greeting</title>
            </head>
            <body>
                <h1>Welcome to the Emoji Greeting App!</h1>
                <form action="/greet" method="POST">
                    <label for="name">Enter your name:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="emoji">Choose an emoji:</label>
                    <select id="emoji" name="emoji">
                        ${emojiOptions}
                    </select>
                    <button type="submit">Greet Me!</button>
                </form>
            </body>
        </html>
    `);
});

router.post('/greet', (req, res) => {
    const { name, emoji } = req.body;
    if (!name) {
        return res.status(400).send('Name is required!');
    }
    res.send(`
        <html>
            <head>
                <title>Greeting</title>
            </head>
            <body>
                <h1>Hello, ${name}! ${emoji}</h1>
                <a href="/">Go Back</a>
            </body>
        </html>
    `);
});

module.exports = router;