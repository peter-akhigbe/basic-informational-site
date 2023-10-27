const app = require('express')();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.use((req, res) => {
  res.sendFile(__dirname + '/views/404.html');
});

app.listen(8080, () => {
  console.log('server listening on port 8080');
});
