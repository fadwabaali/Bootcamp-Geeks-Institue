const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json()); 

app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello From Express" });
});

app.post('/api/world', (req, res) => {
  const userMessage = req.body.message;
  console.log("Received from client:", userMessage);
  res.send({ response: `I received your POST request. This is what you sent me: ${userMessage}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
