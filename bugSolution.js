const express = require('express');
const timeout = require('request-timeout');
const app = express();
app.use(timeout(5000)); // Set timeout to 5 seconds
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});