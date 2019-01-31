import configs from '../config';
import request from '../../request';
import { error, success } from '../../response';


export default body => {
  return new Promise((resolve, reject) => {
    console.log('getFiatRates')
    const req = {
      url: configs.API_URL + configs.BITY_EXIT_RATES,
      method: 'GET'
    };
    request(req)
      .then(result => {
        resolve(
          success(JSON.parse(result))
        );
      })
      .catch(err => {
        reject(error(err, ''));
      });
  });
};
