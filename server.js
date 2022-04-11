const express = require("express");
const PORT = process.env.PORT || 5001
const path = require("path");
const app = express();
import emailjs from "emailjs-com";

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/api", (req, res) => {
  console.log(req);
})

//email api
// emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.USER_ID)
// .then((result) => {
//     console.log(result.text);
// }, (error) => {
//     console.log(error.text);
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
