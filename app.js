var app = require('express').createServer();
app.get('/', function(req, res) {
  res.send("I love Heroku");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});

