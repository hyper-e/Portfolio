function Pass() {
    const keys = {
        serviceId : (process.env.REACT_APP_SERVICE_ID || process.env.SERVICE_ID),
        templateId : (process.env.REACT_APP_TEMPLATE_ID || process.env.TEMPLATE_ID),
        userId : (process.env.REACT_APP_USER_ID || process.env.USER_ID)
    };
    return keys;
}

export default Pass;