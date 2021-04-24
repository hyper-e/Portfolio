const express = require("express");
const PORT = process.env.PORT || 5001
const path = require("path");
const app = express();
const emailjs = require("emailjs-com");

app.use(express.json()); //Used to parse JSON bodies

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}
console.log(process.env.SERVICE_ID)

app.post("/", function(req,res) {
 const formInfo = req.body.emailInfo;
 emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, formInfo, process.env.USER_ID)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
})

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
