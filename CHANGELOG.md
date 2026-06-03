# Changelog

## 1.1.0 (2026-06-03)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/bilasdk/typescript/compare/v1.0.0...v1.1.0)

### Features

* **api:** manual updates ([699b2f0](https://github.com/bilasdk/typescript/commit/699b2f04b604da8f2b3840fbd8d307f3fb6cd269))
* **api:** manual updates ([e156a57](https://github.com/bilasdk/typescript/commit/e156a579a061fef1345e665d0ac93d34cea08f89))
* **api:** manual updates ([26ad6ea](https://github.com/bilasdk/typescript/commit/26ad6eaecf4410aa18f5f095d1e15648fd9482ad))
* **api:** manual updates ([51a9c6f](https://github.com/bilasdk/typescript/commit/51a9c6f854b994021242d4cfe6adabc012180596))
* **api:** manual updates ([b2082c3](https://github.com/bilasdk/typescript/commit/b2082c32831dcd14c4087f1d4059d9652ba197e5))
* **api:** manual updates ([8140a04](https://github.com/bilasdk/typescript/commit/8140a045f2d7dc3be298dcfc0cccd2dbca1f7b63))


### Bug Fixes

* **typescript:** upgrade tsc-multi so that it works with Node 26 ([075a4d0](https://github.com/bilasdk/typescript/commit/075a4d0b96e05084dd5d74410a50901bcddd76df))


### Chores

* redact api-key headers in debug logs ([ac467a1](https://github.com/bilasdk/typescript/commit/ac467a14fe1104eb3d770b49fcc7c80d20463f2a))
* **tests:** remove redundant File import ([6f474b8](https://github.com/bilasdk/typescript/commit/6f474b821191836652dc1088c8c1fdaca0c38db0))
* update SDK settings ([e4502ab](https://github.com/bilasdk/typescript/commit/e4502ab7c92d38c40cf1165918227a6caf2db6b0))
* update SDK settings ([3cfb5ad](https://github.com/bilasdk/typescript/commit/3cfb5adc648a6cfcbf7675944f1b7a0ba37fb7c9))
* update SDK settings ([3ab3dd5](https://github.com/bilasdk/typescript/commit/3ab3dd58ac484c25ff82e05fd1c7a314138517bb))


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
