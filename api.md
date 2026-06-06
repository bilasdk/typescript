# Shared

Types:

- <code><a href="./src/resources/shared.ts">PaginationMetaDto</a></code>

# [Accounts](./src/resources/accounts.ts)

Types:

- <code><a href="./src/resources/accounts.ts">AccountDetailsDto</a></code>
- <code><a href="./src/resources/accounts.ts">AccountResponseDto</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountGetBalanceResponse</a></code>

Methods:

- <code title="get /api/v1/bila/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(id) -> AccountRetrieveResponse</code>
- <code title="get /api/v1/bila/accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="get /api/v1/bila/accounts/{id}/balance">client.accounts.<a href="./src/resources/accounts.ts">getBalance</a>(id) -> AccountGetBalanceResponse</code>

# [TransferRecipients](./src/resources/transfer-recipients.ts)

Types:

- <code><a href="./src/resources/transfer-recipients.ts">RecipientResponseDto</a></code>
- <code><a href="./src/resources/transfer-recipients.ts">TransferRecipientRetrieveResponse</a></code>
- <code><a href="./src/resources/transfer-recipients.ts">TransferRecipientListResponse</a></code>
- <code><a href="./src/resources/transfer-recipients.ts">TransferRecipientCreateBankAccountResponse</a></code>
- <code><a href="./src/resources/transfer-recipients.ts">TransferRecipientCreateMobileMoneyResponse</a></code>

Methods:

- <code title="get /api/v1/bila/transfer-recipients/{id}">client.transferRecipients.<a href="./src/resources/transfer-recipients.ts">retrieve</a>(id) -> TransferRecipientRetrieveResponse</code>
- <code title="get /api/v1/bila/transfer-recipients">client.transferRecipients.<a href="./src/resources/transfer-recipients.ts">list</a>({ ...params }) -> TransferRecipientListResponse</code>
- <code title="post /api/v1/bila/transfer-recipients/bank-account">client.transferRecipients.<a href="./src/resources/transfer-recipients.ts">createBankAccount</a>({ ...params }) -> TransferRecipientCreateBankAccountResponse</code>
- <code title="post /api/v1/bila/transfer-recipients/mobile-money">client.transferRecipients.<a href="./src/resources/transfer-recipients.ts">createMobileMoney</a>({ ...params }) -> TransferRecipientCreateMobileMoneyResponse</code>

# [Transfers](./src/resources/transfers.ts)

Types:

- <code><a href="./src/resources/transfers.ts">TransferRecipientDto</a></code>
- <code><a href="./src/resources/transfers.ts">TransferResponseDto</a></code>
- <code><a href="./src/resources/transfers.ts">TransferRetrieveResponse</a></code>
- <code><a href="./src/resources/transfers.ts">TransferListResponse</a></code>
- <code><a href="./src/resources/transfers.ts">TransferGetStatusByReferenceResponse</a></code>
- <code><a href="./src/resources/transfers.ts">TransferInitiateBankTransferResponse</a></code>
- <code><a href="./src/resources/transfers.ts">TransferInitiateMobileMoneyTransferResponse</a></code>

Methods:

- <code title="get /api/v1/bila/transfers/{id}">client.transfers.<a href="./src/resources/transfers.ts">retrieve</a>(id) -> TransferRetrieveResponse</code>
- <code title="get /api/v1/bila/transfers">client.transfers.<a href="./src/resources/transfers.ts">list</a>({ ...params }) -> TransferListResponse</code>
- <code title="get /api/v1/bila/transfers/status/{reference}">client.transfers.<a href="./src/resources/transfers.ts">getStatusByReference</a>(reference) -> TransferGetStatusByReferenceResponse</code>
- <code title="post /api/v1/bila/transfers/bank-account">client.transfers.<a href="./src/resources/transfers.ts">initiateBankTransfer</a>({ ...params }) -> TransferInitiateBankTransferResponse</code>
- <code title="post /api/v1/bila/transfers/mobile-money">client.transfers.<a href="./src/resources/transfers.ts">initiateMobileMoneyTransfer</a>({ ...params }) -> TransferInitiateMobileMoneyTransferResponse</code>

# [Collections](./src/resources/collections.ts)

Types:

- <code><a href="./src/resources/collections.ts">BilaCollectionCustomerDto</a></code>
- <code><a href="./src/resources/collections.ts">BilaCollectionResponseDto</a></code>
- <code><a href="./src/resources/collections.ts">CollectionRetrieveResponse</a></code>
- <code><a href="./src/resources/collections.ts">CollectionListResponse</a></code>
- <code><a href="./src/resources/collections.ts">CollectionGetStatusByReferenceResponse</a></code>
- <code><a href="./src/resources/collections.ts">CollectionInitiateMobileMoneyCollectionResponse</a></code>

Methods:

- <code title="get /api/v1/bila/collections/{id}">client.collections.<a href="./src/resources/collections.ts">retrieve</a>(id) -> CollectionRetrieveResponse</code>
- <code title="get /api/v1/bila/collections">client.collections.<a href="./src/resources/collections.ts">list</a>({ ...params }) -> CollectionListResponse</code>
- <code title="get /api/v1/bila/collections/status/{reference}">client.collections.<a href="./src/resources/collections.ts">getStatusByReference</a>(reference) -> CollectionGetStatusByReferenceResponse</code>
- <code title="post /api/v1/bila/collections/mobile-money">client.collections.<a href="./src/resources/collections.ts">initiateMobileMoneyCollection</a>({ ...params }) -> CollectionInitiateMobileMoneyCollectionResponse</code>

# [Transactions](./src/resources/transactions.ts)

Types:

- <code><a href="./src/resources/transactions.ts">TransactionResponseDto</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /api/v1/bila/transactions/{id}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(id) -> TransactionRetrieveResponse</code>
- <code title="get /api/v1/bila/transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>

# [Webhooks](./src/resources/webhooks.ts)

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookConfigResponseDto</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookDeactivateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookGetDeliveriesResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListEventsResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookRotateSecretResponse</a></code>

Methods:

- <code title="post /api/v1/bila/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="patch /api/v1/bila/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(id, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /api/v1/bila/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>() -> WebhookListResponse</code>
- <code title="delete /api/v1/bila/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">deactivate</a>(id) -> WebhookDeactivateResponse</code>
- <code title="get /api/v1/bila/webhooks/{id}/deliveries">client.webhooks.<a href="./src/resources/webhooks.ts">getDeliveries</a>(id, { ...params }) -> WebhookGetDeliveriesResponse</code>
- <code title="get /api/v1/bila/webhooks/events">client.webhooks.<a href="./src/resources/webhooks.ts">listEvents</a>() -> WebhookListEventsResponse</code>
- <code title="post /api/v1/bila/webhooks/{id}/rotate-secret">client.webhooks.<a href="./src/resources/webhooks.ts">rotateSecret</a>(id) -> WebhookRotateSecretResponse</code>

# [Banks](./src/resources/banks.ts)

Types:

- <code><a href="./src/resources/banks.ts">BankListResponse</a></code>

Methods:

- <code title="get /api/v1/bila/banks">client.banks.<a href="./src/resources/banks.ts">list</a>({ ...params }) -> BankListResponse</code>

# [Resolve](./src/resources/resolve.ts)

Types:

- <code><a href="./src/resources/resolve.ts">ResolvedAccountResponseDto</a></code>
- <code><a href="./src/resources/resolve.ts">ResolveBankAccountResponse</a></code>
- <code><a href="./src/resources/resolve.ts">ResolveMobileMoneyResponse</a></code>

Methods:

- <code title="post /api/v1/bila/resolve/bank-account">client.resolve.<a href="./src/resources/resolve.ts">bankAccount</a>({ ...params }) -> ResolveBankAccountResponse</code>
- <code title="post /api/v1/bila/resolve/mobile-money">client.resolve.<a href="./src/resources/resolve.ts">mobileMoney</a>({ ...params }) -> ResolveMobileMoneyResponse</code>
