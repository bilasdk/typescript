# Bila TypeScript API Library

[![NPM version](<https://img.shields.io/npm/v/@usebila%2Fsdk.svg?label=npm%20(stable)>)](https://npmjs.org/package/@usebila/sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@usebila%2Fsdk)

This library provides convenient access to the Bila REST API from server-side TypeScript or JavaScript.

The full API of this library can be found in [api.md](api.md).

It is generated with [Stainless](https://www.stainless.com/).

## Installation

```sh
npm install @usebila/sdk
```

## Usage

<!-- prettier-ignore -->
```js
import Bila from '@usebila/sdk';

const client = new Bila({
  apiKey: 'Your API key',
  environment: 'sandbox', // either production or sandbox
});

const accounts = await client.accounts.list();
```

## Examples

Runnable examples live in the [examples](./examples/) directory. Each file demonstrates a specific area of the API:

| Example                                                     | Description                                          |
| ----------------------------------------------------------- | ---------------------------------------------------- |
| [accounts.ts](./examples/accounts.ts)                       | Retrieve accounts, list accounts, and check balances |
| [banks.ts](./examples/banks.ts)                             | List supported banks and financial institutions      |
| [collections.ts](./examples/collections.ts)                 | Collect payments via mobile money                    |
| [resolve.ts](./examples/resolve.ts)                         | Verify bank account and mobile money details         |
| [transactions.ts](./examples/transactions.ts)               | Retrieve and list transaction history                |
| [transfer-recipients.ts](./examples/transfer-recipients.ts) | Manage payout recipients                             |
| [transfers.ts](./examples/transfers.ts)                     | Send payouts via bank transfer and mobile money      |
| [webhooks.ts](./examples/webhooks.ts)                       | Configure webhooks and manage delivery history       |

To run an example from this repository:

```sh
pnpm install
pnpm tsn -T examples/accounts.ts
```

Replace `accounts.ts` with any example from the table above. Set your API key in the example file before running.

## TypeScript types

Every API method has typed request params and responses. You only need one import — types are available on the `Bila` namespace:

<!-- prettier-ignore -->
```ts
import Bila from '@usebila/sdk';

const client = new Bila({
  apiKey: 'Your API key',
  environment: 'sandbox',
});

// Response type — what the API returns
const accounts: Bila.AccountListResponse = await client.accounts.list();

// Request type — what you send to the API
const params: Bila.CollectionListParams = {
  accountId: 'your-wallet-id',
  page: 1,
  perPage: 50,
};
const collections = await client.collections.list(params);
```

Type names follow a simple pattern:

| Kind           | Pattern                      | Example                         |
| -------------- | ---------------------------- | ------------------------------- |
| Response       | `{Resource}{Action}Response` | `Bila.TransferRetrieveResponse` |
| Request params | `{Resource}{Action}Params`   | `Bila.WebhookCreateParams`      |

Hover over any method or type in your editor to see field-level documentation. See [api.md](api.md) for the full list of types, or browse the [examples](./examples/) for real usage.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
import Bila from '@usebila/sdk';

const client = new Bila({
  apiKey: 'Your API key',
  environment: 'sandbox',
});

try {
  const account = await client.accounts.retrieve('account-id');
  console.log(account);
} catch (err) {
  if (err instanceof Bila.APIError) {
    console.error(
      JSON.stringify(
        {
          status: err.status,
          name: err.name,
          message: err.message,
          headers: Object.fromEntries(err.headers?.entries?.() ?? []),
        },
        null,
        2,
      ),
    );
  } else {
    throw err;
  }
}
```

Example output:

```json
{
  "status": 401,
  "name": "Error",
  "message": "401 Invalid API key",
  "headers": {
    "content-type": "application/json; charset=utf-8"
  }
}
```

To handle a specific error, check the status code or use `instanceof`:

<!-- prettier-ignore -->
```ts
} catch (err) {
  if (err instanceof Bila.AuthenticationError) {
    // 401 — invalid API key
  } else if (err instanceof Bila.NotFoundError) {
    // 404 — resource not found
  } else if (err instanceof Bila.APIError) {
    // other API errors
  } else {
    throw err;
  }
}
```

Error codes are as follows:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

## Contributing

See [the contributing documentation](./CONTRIBUTING.md).
