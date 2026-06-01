# V1

## Bila

Types:

- <code><a href="./src/resources/v1/bila/bila.ts">PaginationMeta</a></code>
- <code><a href="./src/resources/v1/bila/bila.ts">ResolvedAccount</a></code>
- <code><a href="./src/resources/v1/bila/bila.ts">BilaListBanksResponse</a></code>
- <code><a href="./src/resources/v1/bila/bila.ts">BilaResolveBankAccountResponse</a></code>
- <code><a href="./src/resources/v1/bila/bila.ts">BilaResolveMobileMoneyResponse</a></code>

Methods:

- <code title="get /api/v1/bila/banks">client.v1.bila.<a href="./src/resources/v1/bila/bila.ts">listBanks</a>({ ...params }) -> BilaListBanksResponse</code>
- <code title="post /api/v1/bila/resolve/bank-account">client.v1.bila.<a href="./src/resources/v1/bila/bila.ts">resolveBankAccount</a>({ ...params }) -> BilaResolveBankAccountResponse</code>
- <code title="post /api/v1/bila/resolve/mobile-money">client.v1.bila.<a href="./src/resources/v1/bila/bila.ts">resolveMobileMoney</a>({ ...params }) -> BilaResolveMobileMoneyResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/v1/bila/accounts.ts">Account</a></code>
- <code><a href="./src/resources/v1/bila/accounts.ts">AccountBalance</a></code>
- <code><a href="./src/resources/v1/bila/accounts.ts">PaginatedAccounts</a></code>
- <code><a href="./src/resources/v1/bila/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/bila/accounts.ts">AccountGetBalanceResponse</a></code>

Methods:

- <code title="get /api/v1/bila/accounts/{id}">client.v1.bila.accounts.<a href="./src/resources/v1/bila/accounts.ts">retrieve</a>(id) -> AccountRetrieveResponse</code>
- <code title="get /api/v1/bila/accounts">client.v1.bila.accounts.<a href="./src/resources/v1/bila/accounts.ts">list</a>({ ...params }) -> AccountsBilaPage</code>
- <code title="get /api/v1/bila/accounts/{id}/balance">client.v1.bila.accounts.<a href="./src/resources/v1/bila/accounts.ts">getBalance</a>(id) -> AccountGetBalanceResponse</code>

### TransferRecipients

Types:

- <code><a href="./src/resources/v1/bila/transfer-recipients.ts">PaginatedRecipients</a></code>
- <code><a href="./src/resources/v1/bila/transfer-recipients.ts">Recipient</a></code>
- <code><a href="./src/resources/v1/bila/transfer-recipients.ts">TransferRecipientRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/bila/transfer-recipients.ts">TransferRecipientCreateBankAccountResponse</a></code>
- <code><a href="./src/resources/v1/bila/transfer-recipients.ts">TransferRecipientCreateMobileMoneyResponse</a></code>

Methods:

- <code title="get /api/v1/bila/transfer-recipients/{id}">client.v1.bila.transferRecipients.<a href="./src/resources/v1/bila/transfer-recipients.ts">retrieve</a>(id) -> TransferRecipientRetrieveResponse</code>
- <code title="get /api/v1/bila/transfer-recipients">client.v1.bila.transferRecipients.<a href="./src/resources/v1/bila/transfer-recipients.ts">list</a>({ ...params }) -> RecipientsBilaPage</code>
- <code title="post /api/v1/bila/transfer-recipients/bank-account">client.v1.bila.transferRecipients.<a href="./src/resources/v1/bila/transfer-recipients.ts">createBankAccount</a>({ ...params }) -> TransferRecipientCreateBankAccountResponse</code>
- <code title="post /api/v1/bila/transfer-recipients/mobile-money">client.v1.bila.transferRecipients.<a href="./src/resources/v1/bila/transfer-recipients.ts">createMobileMoney</a>({ ...params }) -> TransferRecipientCreateMobileMoneyResponse</code>

### Transfers

Types:

- <code><a href="./src/resources/v1/bila/transfers.ts">PaginatedTransfers</a></code>
- <code><a href="./src/resources/v1/bila/transfers.ts">Transfer</a></code>
- <code><a href="./src/resources/v1/bila/transfers.ts">TransferRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/bila/transfers.ts">TransferGetStatusByReferenceResponse</a></code>
- <code><a href="./src/resources/v1/bila/transfers.ts">TransferInitiateBankTransferResponse</a></code>
- <code><a href="./src/resources/v1/bila/transfers.ts">TransferInitiateMobileMoneyTransferResponse</a></code>

Methods:

- <code title="get /api/v1/bila/transfers/{id}">client.v1.bila.transfers.<a href="./src/resources/v1/bila/transfers.ts">retrieve</a>(id) -> TransferRetrieveResponse</code>
- <code title="get /api/v1/bila/transfers">client.v1.bila.transfers.<a href="./src/resources/v1/bila/transfers.ts">list</a>({ ...params }) -> TransfersBilaPage</code>
- <code title="get /api/v1/bila/transfers/status/{reference}">client.v1.bila.transfers.<a href="./src/resources/v1/bila/transfers.ts">getStatusByReference</a>(reference) -> TransferGetStatusByReferenceResponse</code>
- <code title="post /api/v1/bila/transfers/bank-account">client.v1.bila.transfers.<a href="./src/resources/v1/bila/transfers.ts">initiateBankTransfer</a>({ ...params }) -> TransferInitiateBankTransferResponse</code>
- <code title="post /api/v1/bila/transfers/mobile-money">client.v1.bila.transfers.<a href="./src/resources/v1/bila/transfers.ts">initiateMobileMoneyTransfer</a>({ ...params }) -> TransferInitiateMobileMoneyTransferResponse</code>

### Collections

Types:

- <code><a href="./src/resources/v1/bila/collections.ts">Collection</a></code>
- <code><a href="./src/resources/v1/bila/collections.ts">PaginatedCollections</a></code>
- <code><a href="./src/resources/v1/bila/collections.ts">CollectionRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/bila/collections.ts">CollectionGetStatusByReferenceResponse</a></code>
- <code><a href="./src/resources/v1/bila/collections.ts">CollectionInitiateMobileMoneyCollectionResponse</a></code>

Methods:

- <code title="get /api/v1/bila/collections/{id}">client.v1.bila.collections.<a href="./src/resources/v1/bila/collections.ts">retrieve</a>(id) -> CollectionRetrieveResponse</code>
- <code title="get /api/v1/bila/collections">client.v1.bila.collections.<a href="./src/resources/v1/bila/collections.ts">list</a>({ ...params }) -> CollectionsBilaPage</code>
- <code title="get /api/v1/bila/collections/status/{reference}">client.v1.bila.collections.<a href="./src/resources/v1/bila/collections.ts">getStatusByReference</a>(reference) -> CollectionGetStatusByReferenceResponse</code>
- <code title="post /api/v1/bila/collections/mobile-money">client.v1.bila.collections.<a href="./src/resources/v1/bila/collections.ts">initiateMobileMoneyCollection</a>({ ...params }) -> CollectionInitiateMobileMoneyCollectionResponse</code>

### Transactions

Types:

- <code><a href="./src/resources/v1/bila/transactions.ts">PaginatedTransactions</a></code>
- <code><a href="./src/resources/v1/bila/transactions.ts">Transaction</a></code>
- <code><a href="./src/resources/v1/bila/transactions.ts">TransactionRetrieveResponse</a></code>

Methods:

- <code title="get /api/v1/bila/transactions/{id}">client.v1.bila.transactions.<a href="./src/resources/v1/bila/transactions.ts">retrieve</a>(id) -> TransactionRetrieveResponse</code>
- <code title="get /api/v1/bila/transactions">client.v1.bila.transactions.<a href="./src/resources/v1/bila/transactions.ts">list</a>({ ...params }) -> TransactionsBilaPage</code>

### Webhooks

Types:

- <code><a href="./src/resources/v1/bila/webhooks.ts">CreateWebhookConfig</a></code>
- <code><a href="./src/resources/v1/bila/webhooks.ts">PaginatedDeliveries</a></code>
- <code><a href="./src/resources/v1/bila/webhooks.ts">RotateSecretResult</a></code>
- <code><a href="./src/resources/v1/bila/webhooks.ts">UpdateWebhookConfig</a></code>
- <code><a href="./src/resources/v1/bila/webhooks.ts">WebhookConfig</a></code>
- <code><a href="./src/resources/v1/bila/webhooks.ts">WebhookDelivery</a></code>
- <code><a href="./src/resources/v1/bila/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/v1/bila/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/v1/bila/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/v1/bila/webhooks.ts">WebhookDeactivateResponse</a></code>
- <code><a href="./src/resources/v1/bila/webhooks.ts">WebhookListEventTypesResponse</a></code>
- <code><a href="./src/resources/v1/bila/webhooks.ts">WebhookRotateSecretResponse</a></code>

Methods:

- <code title="post /api/v1/bila/webhooks">client.v1.bila.webhooks.<a href="./src/resources/v1/bila/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="patch /api/v1/bila/webhooks/{id}">client.v1.bila.webhooks.<a href="./src/resources/v1/bila/webhooks.ts">update</a>(id, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /api/v1/bila/webhooks">client.v1.bila.webhooks.<a href="./src/resources/v1/bila/webhooks.ts">list</a>() -> WebhookListResponse</code>
- <code title="delete /api/v1/bila/webhooks/{id}">client.v1.bila.webhooks.<a href="./src/resources/v1/bila/webhooks.ts">deactivate</a>(id) -> WebhookDeactivateResponse</code>
- <code title="get /api/v1/bila/webhooks/{id}/deliveries">client.v1.bila.webhooks.<a href="./src/resources/v1/bila/webhooks.ts">listDeliveries</a>(id, { ...params }) -> WebhookDeliveriesBilaPage</code>
- <code title="get /api/v1/bila/webhooks/events">client.v1.bila.webhooks.<a href="./src/resources/v1/bila/webhooks.ts">listEventTypes</a>() -> WebhookListEventTypesResponse</code>
- <code title="post /api/v1/bila/webhooks/{id}/rotate-secret">client.v1.bila.webhooks.<a href="./src/resources/v1/bila/webhooks.ts">rotateSecret</a>(id) -> WebhookRotateSecretResponse</code>
