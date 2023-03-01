const Express = require('express');

const router = Express.Router();

router.get('/', (req, res) => {
  return res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>Demo App</title>
</head>
<body>
  <h1>Welcome to the Demo!</h1>
</body>
</html>
`.trim());
})

exports.default = router;
