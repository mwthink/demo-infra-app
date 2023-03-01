const Express = require('express');

const router = Express.Router();

router.get('/', (req, res) => {
  return res.send('Hello world!');
})

exports.default = router;
