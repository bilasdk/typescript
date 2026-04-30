// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import { AccountListParams, Accounts, BilaResponse } from './accounts';
import * as CollectionsAPI from './collections';
import {
  CollectionInitiateMobileMoneyCollectionParams,
  CollectionListParams,
  Collections,
} from './collections';
import * as TransactionsAPI from './transactions';
import { TransactionListParams, Transactions } from './transactions';
import * as TransferRecipientsAPI from './transfer-recipients';
import {
  TransferRecipientCreateBankAccountParams,
  TransferRecipientCreateMobileMoneyParams,
  TransferRecipientListParams,
  TransferRecipients,
} from './transfer-recipients';
import * as TransfersAPI from './transfers';
import {
  TransferInitiateBankTransferParams,
  TransferInitiateMobileMoneyTransferParams,
  TransferListParams,
  Transfers,
} from './transfers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Bila extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  transferRecipients: TransferRecipientsAPI.TransferRecipients = new TransferRecipientsAPI.TransferRecipients(
    this._client,
  );
  transfers: TransfersAPI.Transfers = new TransfersAPI.Transfers(this._client);
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);

  /**
   * Retrieve a list of all supported banks and financial institutions
   *
   * @example
   * ```ts
   * const bilaResponse = await client.v1.bila.listBanks();
   * ```
   */
  listBanks(
    query: BilaListBanksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.get('/api/v1/bila/banks', { query, ...options });
  }

  /**
   * Verify and retrieve bank account holder details
   *
   * @example
   * ```ts
   * const bilaResponse =
   *   await client.v1.bila.resolveBankAccount({
   *     accountNumber: '1234567890',
   *     bankId: 'bank-001',
   *   });
   * ```
   */
  resolveBankAccount(
    body: BilaResolveBankAccountParams,
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.post('/api/v1/bila/resolve/bank-account', { body, ...options });
  }

  /**
   * Verify and retrieve mobile money account holder details
   *
   * @example
   * ```ts
   * const bilaResponse =
   *   await client.v1.bila.resolveMobileMoney({
   *     country: 'zm',
   *     operator: 'airtel',
   *     phone: '0977433571',
   *   });
   * ```
   */
  resolveMobileMoney(
    body: BilaResolveMobileMoneyParams,
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.post('/api/v1/bila/resolve/mobile-money', { body, ...options });
  }
}

export interface BilaListBanksParams {
  /**
   * Filter banks by country code
   */
  country?: string;
}

export interface BilaResolveBankAccountParams {
  /**
   * Bank account number
   */
  accountNumber: string;

  /**
   * Bank ID
   */
  bankId: string;

  /**
   * Country code
   */
  country?: 'zm' | 'ng';
}

export interface BilaResolveMobileMoneyParams {
  /**
   * Country code
   */
  country: 'zm' | 'ng';

  /**
   * Mobile money operator
   */
  operator: 'airtel' | 'mtn' | 'zamtel' | 'vodacom';

  /**
   * Mobile phone number
   */
  phone: string;
}

Bila.Accounts = Accounts;
Bila.TransferRecipients = TransferRecipients;
Bila.Transfers = Transfers;
Bila.Collections = Collections;
Bila.Transactions = Transactions;

export declare namespace Bila {
  export {
    type BilaListBanksParams as BilaListBanksParams,
    type BilaResolveBankAccountParams as BilaResolveBankAccountParams,
    type BilaResolveMobileMoneyParams as BilaResolveMobileMoneyParams,
  };

  export {
    Accounts as Accounts,
    type BilaResponse as BilaResponse,
    type AccountListParams as AccountListParams,
  };

  export {
    TransferRecipients as TransferRecipients,
    type TransferRecipientListParams as TransferRecipientListParams,
    type TransferRecipientCreateBankAccountParams as TransferRecipientCreateBankAccountParams,
    type TransferRecipientCreateMobileMoneyParams as TransferRecipientCreateMobileMoneyParams,
  };

  export {
    Transfers as Transfers,
    type TransferListParams as TransferListParams,
    type TransferInitiateBankTransferParams as TransferInitiateBankTransferParams,
    type TransferInitiateMobileMoneyTransferParams as TransferInitiateMobileMoneyTransferParams,
  };

  export {
    Collections as Collections,
    type CollectionListParams as CollectionListParams,
    type CollectionInitiateMobileMoneyCollectionParams as CollectionInitiateMobileMoneyCollectionParams,
  };

  export { Transactions as Transactions, type TransactionListParams as TransactionListParams };
}
