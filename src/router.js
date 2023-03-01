const Express = require('express');

const router = Express.Router();

let counter = 0;

router.get('/', (req, res) => {
  return res.send(`
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
</body>
</html>
`.trim());
})

router.get('/counter/increase', (req, res) => {
  // Increase the counter value
  counter++;

  // Redirect request to front-page
  return res.redirect('/');
})

exports.default = router;
