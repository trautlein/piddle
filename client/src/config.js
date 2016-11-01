const differentHostname = '';

const prepend = 'http://';
const normalHostname = 'localhost';
const serverPort = '3000';
const normalUrl = prepend + (differentHostname ? differentHostname : normalHostname) + ":" + serverPort;



const fullUrl = || normalUrl;

process.env.BASE_URL = '' || fullUrl;

