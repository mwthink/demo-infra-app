const Express = require('express');
const Prometheus = require('prom-client');

const router = Express.Router();

const counterMetric = new Prometheus.Counter({
  name: 'demo_counter_total',
  help: 'The current value of the counter'
})
let counter = 0;

router.get('/', (req, res) => {
  return res.contentType('html').send(`
<!DOCTYPE html>
<html>
<head>
  <title>Demo App</title>
</head>
<body>
  <h1>Welcome to the Demo!</h1>
  <hr/>
  <p>The counter value is: <strong>${counter}</strong></p>
  <br/>
  <a href="/counter/increase"><button>Increase Counter</button></a>
  <br/>
  <a href="/metrics">Metrics</a>
</body>
</html>
`.trim());
})

router.get('/metrics', async (req, res) => {
  return res.contentType('text/plain').send(await Prometheus.register.metrics())
})

router.get('/counter/increase', (req, res) => {
  // Increase the counter value
  counter++;
  counterMetric.inc();

  // Redirect request to front-page
  return res.redirect('/');
})

exports.default = router;
