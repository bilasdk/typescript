# Changelog

## 1.1.0 (2026-06-06)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/bilasdk/typescript/compare/v1.0.0...v1.1.0)

### Features

* **api:** manual updates ([5c5475e](https://github.com/bilasdk/typescript/commit/5c5475e4ee983348fe550239711c9c3c4491684f))
* **api:** manual updates ([c7d5253](https://github.com/bilasdk/typescript/commit/c7d525300d7f8ffbaa2b8b5462d4525b8933f207))


### Refactors

* update SDK references from @bila/sdk to @usebila/sdk across all files ([fd9509e](https://github.com/bilasdk/typescript/commit/fd9509ea4dadd6791dcc59247f7765a43960ad15))

## 1.0.0 (2026-06-03)

First stable release of the official Bila TypeScript SDK, published as [`@usebila/sdk`](https://www.npmjs.com/package/@usebila/sdk).

### Features

- **Accounts** — retrieve accounts, list accounts, and check balances
- **Banks** — list supported banks and financial institutions
- **Collections** — collect payments via mobile money, including status lookup by reference
- **Transfers** — send payouts via bank transfer and mobile money, including status lookup by reference
- **Transfer recipients** — create and manage bank account and mobile money payout recipients
- **Transactions** — retrieve and list transaction history
- **Resolve** — verify bank account and mobile money account details
- **Webhooks** — create, update, list, and deactivate webhooks; view deliveries and events; rotate secrets
- **Client** — typed request/response models, production and sandbox environments, and structured API errors

### Documentation

- README with installation, usage, error handling, and runnable examples
- API reference in [api.md](api.md)
