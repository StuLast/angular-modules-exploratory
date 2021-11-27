function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
app.use(requireHTTPS);

app.use(express.static('./dist/comps-and-mods'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/comps-and-mods/'});
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});