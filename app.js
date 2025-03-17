const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Express API');
});

app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello, this is a simple Node.js web service!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
