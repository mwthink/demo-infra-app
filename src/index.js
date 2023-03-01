const Express = require('express');

const listenPort = 3000;
const app = Express();

app.get('/', (req, res) => {
  return res.send('Hello world!');
})

const httpServer = app.listen(listenPort, () => {
  console.log('Listening on port', listenPort);
})

/**
 * Handles shutting down the application cleanly
 */
function shutdownApp(){
  console.log('Stopping application...');
  httpServer.close(() => {
    console.log('HTTP server has stopped');
    process.exit();
  })
}

// Listen for process signals to handle shutdown
process.on('SIGINT', shutdownApp);
process.on('SIGTERM', shutdownApp);
