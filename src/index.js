const Express = require('express');
const appRouter = require('./router').default;

const listenPort = 3000;
const app = Express();
app.use(appRouter);

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
