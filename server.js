// const throng = require('throng');

// const WORKERS = process.env.WEB_CONCURRENCY || 1;
// const PORT = process.env.PORT || 5001;

// // var WORKERS = process.env.WEB_CONCURRENCY || 1;

// function start() {
const express = require("express");
const PORT = process.env.PORT || 5001
const path = require("path");
const app = express();
// const buildPath = path.join(__dirname, './client', 'build');
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}
// ** MIDDLEWARE ** //
// const whitelist = ['http://localhost:3000'​, 'http://localhost:5000'​, "https://eddie-reta.herokuapp.com/"]
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin)
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable")
//       callback(null, true)
//     } else {
//       console.log("Origin rejected")
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions));
app.get("/api", (req, res) => {
  res.json({message: "Message from server!"})
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
// };

// throng({ 
//   workers: WORKERS,
//   lifetime: Infinity
// }, start);