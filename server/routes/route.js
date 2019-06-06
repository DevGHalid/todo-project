const { Router } = require('express');
const router = new Router();

router.get('/list', (req, res) => {
  res.json({ id: 2, title: 'Testing', computed: false });
});

module.exports = router;
