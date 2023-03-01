const Express = require('express');

const listenPort = 3000;
const app = Express();

app.get('/', (req, res) => {
  return res.send('Hello world!');
})

app.listen(listenPort, () => {
  console.log('Listening on port', listenPort);
})
