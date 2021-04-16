const axios = require("axios");

axios({
    method: "get",
    url: "https://api.heroku.com/apps/eddie-reta/config-vars",
    headers:{"Accept" : "application/vnd.heroku+json; version=3"},
})
.then(function(response) {
    console.log(response)
})
.catch(function(error){
    console.log("this is the " + error)
})




// const aws = require('aws-sdk');cd

// let s3 = new aws.S3({
//   accessKeyId: process.env.SERVICE_ID,
//   secretAccessKey: process.env.S3_SECRET
// });

// console.log(s3.accessKeyId)

// function Pass() {
//     const keys = {
//         serviceId : process.env.REACT_APP_SERVICE_ID,
//         templateId : process.env.REACT_APP_TEMPLATE_ID,
//         userId : process.env.REACT_APP_USER_ID
//     };
//     return keys;
// }

//export default Pass;