import cryptoKitties from './contracts/cryproKitties'
import mycryptoheroes from './contracts/mycryptoheroes'

import request from 'request';
import {error} from '../response';
import api from '../api';


export default (req, logger) => {
  return new Promise((resolve, reject) => {
    const query = req.queryString;
    if (logger) logger.process(query);
    if (query.proxy) {
      var options = {
        url: 'https://' + query.proxy,
        method: 'GET'
      };
      request(options, (error, response, body) => {
        if (logger) logger.process(body);
        if (error) reject(error);
        else resolve(new api.ApiResponse(
          body,
          response.headers,
          200
        ));
      });
    } else {
      switch (query.contract) {
        case '0x06012c8cf97bead5deae237070f9587f8e7a266d':
          cryptoKitties(query.token)
            .then(resolve)
            .catch(reject);
          break;
        case '0x273f7f8e6489682df756151f5525576e322d51a3':
          mycryptoheroes(query.token)
            .then(resolve)
            .catch(reject);
          break;
        default:
          reject(error('unknown error'));
      }
    }
  });
};
