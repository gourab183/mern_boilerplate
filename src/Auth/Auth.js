import auth0 from 'auth0-js';

export default class Auth {
    constructor(history) {
        this.auth0 = new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENTID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
            responseType: 'token id-token',
            scope: 'openid profile email'
        });
    }
}