# Serverless APIs for MEW Partners

Serverless api to communicate with Changelly/Bity api

# Live endpoint

> `https://swap.mewapi.io`

# Bity API

> `https://swap.mewapi.io/bity`

### createTransaction

```
{
  "jsonrpc": "2.0",
  "method": "createTransaction",
  "params": {	"amount": 0.5,
				"pair": "ETHBTC",
				"mode": 1,
				"destAddress": "1DECAF2uSpFTP4L1fAHR8GCLrPqdwdLse9"
			},
  "id": 83
 }
```

### getStatus

```
{
  "jsonrpc": "2.0",
  "method": "getStatus",
  "params": [orderId],
  "id": 83
 }
```

# Changelly API

> `https://swap.mewapi.io/changelly`

changelly api is identical to https://api-docs.changelly.com
Except `api-key` and `sign` headers are not required

### createTransaction

```
{
  "jsonrpc": "2.0",
  "method": "createTransaction",
  "params": {
			  "from": "eth",
			  "to": "btc",
			  "address": "1DECAF2uSpFTP4L1fAHR8GCLrPqdwdLse9",
			  "amount": "1"
			},
  "id": 85
}
```
