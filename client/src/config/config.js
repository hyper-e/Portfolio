import axios from "axios";

function Pass() {
    const keys = {
        serviceId : (process.env.REACT_APP_SERVICE_ID || process.env.SERVICE_ID),
        
        templateId : (process.env.REACT_APP_TEMPLATE_ID || process.env.TEMPLATE_ID),
        
        userId : (process.env.USER_ID || process.env.REACT_APP_USER_ID )
    };
    return keys;
}

// var onloadCallback = function() {
//   grecaptcha.render('html_element', {
//     'sitekey' : '6Ldr87MaAAAAAE0vXzE_14xfU9PyiRO-O2d8RZcn'
//   });
// };

// axios.get("https://api.heroku.com/apps/eddie-reta/config-vars", (data) =>{
//   console.log(data)
// })
// .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });  



export default Pass;