import configs from './config';
import request from 'request';

const wrappedRequest = (url, data, method = "POST") => {

return getToken()
  .then(token => {
    const options = {
      url: url,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      method: "POST",
      body: JSON.stringify(data)
    };
    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
  })

};

const getToken = () => {
  return new Promise((resolve, reject) => {
    let options = {
      'method': 'POST',
      'url': 'https://connect.bity.com/oauth2/token',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        'grant_type': 'client_credentials',
        'scope': 'https://auth.bity.com/scopes/exchange.client-history',
        'client_id': configs.BITY_OAUTH_CLIENT_ID,
        'client_secret': configs.BITY_OAUTH_CLIENT_SECRET
      }
    };
    return request(options, function (error, response) {
      if (error) throw new Error(error);
      resolve(JSON.parse(response.body).access_token);
    });
  });
};

export default wrappedRequest;
