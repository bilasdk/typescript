# V1

## Bila

Methods:

- <code title="get /api/v1/bila/banks">client.v1.bila.<a href="./src/resources/v1/bila/bila.ts">listBanks</a>({ ...params }) -> BilaResponse</code>
- <code title="post /api/v1/bila/resolve/bank-account">client.v1.bila.<a href="./src/resources/v1/bila/bila.ts">resolveBankAccount</a>({ ...params }) -> BilaResponse</code>
- <code title="post /api/v1/bila/resolve/mobile-money">client.v1.bila.<a href="./src/resources/v1/bila/bila.ts">resolveMobileMoney</a>({ ...params }) -> BilaResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/v1/bila/accounts.ts">BilaResponse</a></code>

Methods:

- <code title="get /api/v1/bila/accounts/{id}">client.v1.bila.accounts.<a href="./src/resources/v1/bila/accounts.ts">retrieve</a>(id) -> BilaResponse</code>
- <code title="get /api/v1/bila/accounts">client.v1.bila.accounts.<a href="./src/resources/v1/bila/accounts.ts">list</a>({ ...params }) -> BilaResponse</code>
- <code title="get /api/v1/bila/accounts/{id}/balance">client.v1.bila.accounts.<a href="./src/resources/v1/bila/accounts.ts">getBalance</a>(id) -> BilaResponse</code>

### TransferRecipients

Methods:

- <code title="get /api/v1/bila/transfer-recipients/{id}">client.v1.bila.transferRecipients.<a href="./src/resources/v1/bila/transfer-recipients.ts">retrieve</a>(id) -> BilaResponse</code>
- <code title="get /api/v1/bila/transfer-recipients">client.v1.bila.transferRecipients.<a href="./src/resources/v1/bila/transfer-recipients.ts">list</a>({ ...params }) -> BilaResponse</code>
- <code title="post /api/v1/bila/transfer-recipients/bank-account">client.v1.bila.transferRecipients.<a href="./src/resources/v1/bila/transfer-recipients.ts">createBankAccount</a>({ ...params }) -> BilaResponse</code>
- <code title="post /api/v1/bila/transfer-recipients/mobile-money">client.v1.bila.transferRecipients.<a href="./src/resources/v1/bila/transfer-recipients.ts">createMobileMoney</a>({ ...params }) -> BilaResponse</code>

### Transfers

Methods:

- <code title="get /api/v1/bila/transfers/{id}">client.v1.bila.transfers.<a href="./src/resources/v1/bila/transfers.ts">retrieve</a>(id) -> BilaResponse</code>
- <code title="get /api/v1/bila/transfers">client.v1.bila.transfers.<a href="./src/resources/v1/bila/transfers.ts">list</a>({ ...params }) -> BilaResponse</code>
- <code title="get /api/v1/bila/transfers/status/{reference}">client.v1.bila.transfers.<a href="./src/resources/v1/bila/transfers.ts">getStatusByReference</a>(reference) -> BilaResponse</code>
- <code title="post /api/v1/bila/transfers/bank-account">client.v1.bila.transfers.<a href="./src/resources/v1/bila/transfers.ts">initiateBankTransfer</a>({ ...params }) -> BilaResponse</code>
- <code title="post /api/v1/bila/transfers/mobile-money">client.v1.bila.transfers.<a href="./src/resources/v1/bila/transfers.ts">initiateMobileMoneyTransfer</a>({ ...params }) -> BilaResponse</code>

### Collections

Methods:

- <code title="get /api/v1/bila/collections/{id}">client.v1.bila.collections.<a href="./src/resources/v1/bila/collections.ts">retrieve</a>(id) -> BilaResponse</code>
- <code title="get /api/v1/bila/collections">client.v1.bila.collections.<a href="./src/resources/v1/bila/collections.ts">list</a>({ ...params }) -> BilaResponse</code>
- <code title="get /api/v1/bila/collections/status/{reference}">client.v1.bila.collections.<a href="./src/resources/v1/bila/collections.ts">getStatusByReference</a>(reference) -> BilaResponse</code>
- <code title="post /api/v1/bila/collections/mobile-money">client.v1.bila.collections.<a href="./src/resources/v1/bila/collections.ts">initiateMobileMoneyCollection</a>({ ...params }) -> BilaResponse</code>

### Transactions

Methods:

- <code title="get /api/v1/bila/transactions/{id}">client.v1.bila.transactions.<a href="./src/resources/v1/bila/transactions.ts">retrieve</a>(id) -> BilaResponse</code>
- <code title="get /api/v1/bila/transactions">client.v1.bila.transactions.<a href="./src/resources/v1/bila/transactions.ts">list</a>({ ...params }) -> BilaResponse</code>
