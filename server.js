const express = require("express");
const PORT = process.env.PORT || 5001
const path = require("path");
const app = express();
//const emailjs = require("emailjs-com");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

//app.use(express.json({limit: "1mb"}));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/api", (req, res) => {
  //email api
  var templateParams = {
    user_name: req.body.user_name,
    message: req.body.message,
    user_email: req.body.user_email
};
 
emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
});

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
