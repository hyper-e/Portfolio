
const express = require("express");
const PORT = process.env.PORT || 5001
const path = require("path");
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/api", (req, res) => {
  res.json({
    service: process.env.SERVICE_ID,
    template: process.env.TEMPLATE_ID,
    user: process.env.USER_ID
  })
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
