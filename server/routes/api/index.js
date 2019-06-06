const router = require('../route');

router.get('/todo', (req, res) => {
  res.json({ id: 1, title: 'Testing', computed: false });
});

module.exports = router;
