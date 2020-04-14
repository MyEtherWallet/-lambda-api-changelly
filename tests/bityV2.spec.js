import bity from '../src/bity';
import { consoleLogger } from '../src/loggers';

const logger = new consoleLogger('BITY');
describe('Bity API', () => {
  let orderId = null;
  test('Create new order from bity', async done => {
    expect.assertions(0);
    bity(
      {
        body: {
          jsonrpc: '2.0',
          method: 'createTransaction',
          params: {
            "input": {
              "amount": "0.5",
              "crypto_address": "0xf35074bbd0a9aee46f4ea137971feec024ab7048",
              "currency": "ETH",
              "type": "crypto_address"
            },
            "output": {
              "crypto_address": "1DECAF2uSpFTP4L1fAHR8GCLrPqdwdLse9",
              "currency": "BTC",
              "type": "crypto_address"
            },
          },
          id: 83
        }
      },
      logger
    )
      .then(response => {
        const result = response.response.result;
        console.log(result); // todo remove dev item
        orderId = result.id;
        // expect(result.amount).toBe(0.5);
        // expect(result).toBe(expect.anything());
        // expect(result.input.currency).toBe('ETH');
        // expect(result.output.currency).toBe('BTC');
        // expect(response.response.id).toBe(83);
        done();
      })
      .catch(console.log);
  });
  // test('Check order status', async done => {
  //   expect.assertions(4);
  //   bity(
  //     {
  //       body: {jsonrpc: '2.0', method: 'getStatus', params: [orderId], id: 85}
  //     },
  //     logger
  //   )
  //     .then(response => {
  //       const result = response.response.result;
  //       expect(result.status).toBe('OPEN');
  //       expect(result.input.currency).toBe('ETH');
  //       expect(result.output.currency).toBe('BTC');
  //       expect(response.response.id).toBe(85);
  //       done();
  //     })
  //     .catch(console.log);
  // });
  // xtest('Login with phone and get token', async done => {
  //   expect.assertions(2);
  //   bity(
  //     {
  //       body: {
  //         jsonrpc: '2.0',
  //         method: 'logInWithPhoneNumber',
  //         params: {pair: 'ETHEUR', phoneNumber: '+18059309108'},
  //         id: 85
  //       }
  //     },
  //     logger
  //   )
  //     .then(response => {
  //       const result = response.response.result;
  //       expect(result.phone_token).toEqual(expect.anything());
  //       expect(response.response.id).toBe(85);
  //       done();
  //     })
  //     .catch(console.log);
  // });
  // xdescribe('Bity Exit to Fiat API', () => {
  //   test('create exit order', async done => {
  //     expect.assertions(3);
  //     const details = {
  //       pair: 'ETHCHF',
  //       phoneToken: '', // need to supply a valid phone token to run test
  //       orderDetails: {
  //         'input': {
  //           'amount': '0.1',
  //           'currency': 'ETH',
  //           'type': 'crypto_address',
  //           'crypto_address': '0xe51dDAa1B650c26B62fCA2520cdC2c60cE205F75'
  //         },
  //         'output': {
  //           'currency': 'CHF',
  //           'type': 'bank_account',
  //           'iban': 'CH980000MEW0000000009',
  //           'bic_swift': 'TESTCHBEXXX',
  //           'aba_number': '',
  //           'sort_code': '',
  //           'owner': {
  //             'name': 'FirstName LastName',
  //             'address': 'Test address',
  //             'address_complement': '',
  //             'zip': '2000',
  //             'city': 'los angeles',
  //             'state': '',
  //             'country': 'US'
  //           }
  //         }
  //       }
  //
  //     };
  //     bity(
  //       {
  //         body: {
  //           jsonrpc: '2.0',
  //           method: 'createExitToFiatTransaction',
  //           params: details,
  //           id: 85
  //         }
  //       },
  //       logger
  //     )
  //       .then(response => {
  //         const result = response.response.result;
  //         expect(result.created).toBe(true);
  //         expect(result.status_address).toEqual(expect.anything());
  //         orderId = result.status_address;
  //         expect(response.response.id).toBe(85);
  //         done();
  //       })
  //       .catch(console.log);
  //   });
  //   test('get exit order details', async done => {
  //     expect.assertions(2);
  //     const details = {
  //       pair: 'ETHCHF',
  //       phoneToken: '', // need to supply a valid phone token to run test
  //       detailsUrl: orderId
  //     };
  //     bity(
  //       {
  //         body: {
  //           jsonrpc: '2.0',
  //           method: 'getExitOrderDetails',
  //           params: details,
  //           id: 85
  //         }
  //       },
  //       logger
  //     )
  //       .then(response => {
  //         const result = response.response.result;
  //         expect(result).toEqual(expect.anything());
  //         expect(response.response.id).toBe(85);
  //         done();
  //       })
  //       .catch(console.log);
  //   });
  // });
});
