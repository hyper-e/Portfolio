const express = require("express");
const app = express();
const router = require("express").Router();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

router.use(function(request, response) {
    response.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now listening on PORT ${PORT}!`);
})