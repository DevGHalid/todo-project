const app = require('./app');
const config = require('./config');

app.listen(config.port, error => {
  if (error) throw error;
  console.log(`http://localhost:${config.port}`);
});
