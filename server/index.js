const express = require('express')

const app = express()
const testpage = require('./routes/testpage')

app.use(testpage)
module.exports = app

const startServer = () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
};

if (require.main === module) {
  startServer();
}
