// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import {
  AccountGetBalanceResponse,
  AccountListParams,
  AccountListResponse,
  AccountRetrieveResponse,
  Accounts,
  BilaResponse,
} from './accounts';
import * as CollectionsAPI from './collections';
import {
  CollectionGetStatusByReferenceResponse,
  CollectionInitiateMobileMoneyCollectionParams,
  CollectionInitiateMobileMoneyCollectionResponse,
  CollectionListParams,
  CollectionListResponse,
  CollectionRetrieveResponse,
  Collections,
} from './collections';
import * as TransactionsAPI from './transactions';
import {
  TransactionListParams,
  TransactionListResponse,
  TransactionRetrieveResponse,
  Transactions,
} from './transactions';
import * as TransferRecipientsAPI from './transfer-recipients';
import {
  TransferRecipientCreateBankAccountParams,
  TransferRecipientCreateBankAccountResponse,
  TransferRecipientCreateMobileMoneyParams,
  TransferRecipientCreateMobileMoneyResponse,
  TransferRecipientListParams,
  TransferRecipientListResponse,
  TransferRecipientRetrieveResponse,
  TransferRecipients,
} from './transfer-recipients';
import * as TransfersAPI from './transfers';
import {
  TransferGetStatusByReferenceResponse,
  TransferInitiateBankTransferParams,
  TransferInitiateBankTransferResponse,
  TransferInitiateMobileMoneyTransferParams,
  TransferInitiateMobileMoneyTransferResponse,
  TransferListParams,
  TransferListResponse,
  TransferRetrieveResponse,
  Transfers,
} from './transfers';
import * as WebhooksAPI from './webhooks';
import {
  WebhookCreateParams,
  WebhookCreateResponse,
  WebhookGetDeliveriesParams,
  WebhookGetDeliveriesResponse,
  WebhookListEventsResponse,
  WebhookListResponse,
  WebhookRotateSecretResponse,
  WebhookUpdateParams,
  WebhookUpdateResponse,
  Webhooks,
} from './webhooks';
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
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);

  /**
   * Retrieve a list of all supported banks and financial institutions
   *
   * @example
   * ```ts
   * const response = await client.v1.bila.listBanks();
   * ```
   */
  listBanks(
    query: BilaListBanksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BilaListBanksResponse> {
    return this._client.get('/api/v1/bila/banks', { query, ...options });
  }

  /**
   * Verify and retrieve bank account holder details
   *
   * @example
   * ```ts
   * const response = await client.v1.bila.resolveBankAccount({
   *   accountNumber: '1234567890',
   *   bankId: 'bank-001',
   * });
   * ```
   */
  resolveBankAccount(
    body: BilaResolveBankAccountParams,
    options?: RequestOptions,
  ): APIPromise<BilaResolveBankAccountResponse> {
    return this._client.post('/api/v1/bila/resolve/bank-account', { body, ...options });
  }

  /**
   * Verify and retrieve mobile money account holder details
   *
   * @example
   * ```ts
   * const response = await client.v1.bila.resolveMobileMoney({
   *   country: 'zm',
   *   operator: 'airtel',
   *   phone: '0977433571',
   * });
   * ```
   */
  resolveMobileMoney(
    body: BilaResolveMobileMoneyParams,
    options?: RequestOptions,
  ): APIPromise<BilaResolveMobileMoneyResponse> {
    return this._client.post('/api/v1/bila/resolve/mobile-money', { body, ...options });
  }
}

export interface BilaListBanksResponse extends AccountsAPI.BilaResponse {
  data?: Array<BilaListBanksResponse.Data>;
}

export namespace BilaListBanksResponse {
  export interface Data {
    /**
     * Bank ID
     */
    id: string;

    /**
     * Bank code
     */
    code: string;

    /**
     * Country code
     */
    country: string;

    /**
     * Bank name
     */
    name: string;

    /**
     * Bank type
     */
    type?: string;
  }
}

export interface BilaResolveBankAccountResponse extends AccountsAPI.BilaResponse {
  data?: BilaResolveBankAccountResponse.Data;
}

export namespace BilaResolveBankAccountResponse {
  export interface Data {
    /**
     * Account holder name
     */
    accountName: string;

    /**
     * Country code
     */
    country: string;

    /**
     * Bank account number
     */
    accountNumber?: string;

    /**
     * Bank ID
     */
    bankId?: string;

    /**
     * Bank name
     */
    bankName?: string;

    /**
     * Mobile money operator
     */
    operator?: string;

    /**
     * Phone number
     */
    phone?: string;
  }
}

export interface BilaResolveMobileMoneyResponse extends AccountsAPI.BilaResponse {
  data?: BilaResolveMobileMoneyResponse.Data;
}

export namespace BilaResolveMobileMoneyResponse {
  export interface Data {
    /**
     * Account holder name
     */
    accountName: string;

    /**
     * Country code
     */
    country: string;

    /**
     * Bank account number
     */
    accountNumber?: string;

    /**
     * Bank ID
     */
    bankId?: string;

    /**
     * Bank name
     */
    bankName?: string;

    /**
     * Mobile money operator
     */
    operator?: string;

    /**
     * Phone number
     */
    phone?: string;
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
Bila.Webhooks = Webhooks;

export declare namespace Bila {
  export {
    type BilaListBanksResponse as BilaListBanksResponse,
    type BilaResolveBankAccountResponse as BilaResolveBankAccountResponse,
    type BilaResolveMobileMoneyResponse as BilaResolveMobileMoneyResponse,
    type BilaListBanksParams as BilaListBanksParams,
    type BilaResolveBankAccountParams as BilaResolveBankAccountParams,
    type BilaResolveMobileMoneyParams as BilaResolveMobileMoneyParams,
  };

  export {
    Accounts as Accounts,
    type BilaResponse as BilaResponse,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountGetBalanceResponse as AccountGetBalanceResponse,
    type AccountListParams as AccountListParams,
  };

  export {
    TransferRecipients as TransferRecipients,
    type TransferRecipientRetrieveResponse as TransferRecipientRetrieveResponse,
    type TransferRecipientListResponse as TransferRecipientListResponse,
    type TransferRecipientCreateBankAccountResponse as TransferRecipientCreateBankAccountResponse,
    type TransferRecipientCreateMobileMoneyResponse as TransferRecipientCreateMobileMoneyResponse,
    type TransferRecipientListParams as TransferRecipientListParams,
    type TransferRecipientCreateBankAccountParams as TransferRecipientCreateBankAccountParams,
    type TransferRecipientCreateMobileMoneyParams as TransferRecipientCreateMobileMoneyParams,
  };

  export {
    Transfers as Transfers,
    type TransferRetrieveResponse as TransferRetrieveResponse,
    type TransferListResponse as TransferListResponse,
    type TransferGetStatusByReferenceResponse as TransferGetStatusByReferenceResponse,
    type TransferInitiateBankTransferResponse as TransferInitiateBankTransferResponse,
    type TransferInitiateMobileMoneyTransferResponse as TransferInitiateMobileMoneyTransferResponse,
    type TransferListParams as TransferListParams,
    type TransferInitiateBankTransferParams as TransferInitiateBankTransferParams,
    type TransferInitiateMobileMoneyTransferParams as TransferInitiateMobileMoneyTransferParams,
  };

  export {
    Collections as Collections,
    type CollectionRetrieveResponse as CollectionRetrieveResponse,
    type CollectionListResponse as CollectionListResponse,
    type CollectionGetStatusByReferenceResponse as CollectionGetStatusByReferenceResponse,
    type CollectionInitiateMobileMoneyCollectionResponse as CollectionInitiateMobileMoneyCollectionResponse,
    type CollectionListParams as CollectionListParams,
    type CollectionInitiateMobileMoneyCollectionParams as CollectionInitiateMobileMoneyCollectionParams,
  };

  export {
    Transactions as Transactions,
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };

  export {
    Webhooks as Webhooks,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookGetDeliveriesResponse as WebhookGetDeliveriesResponse,
    type WebhookListEventsResponse as WebhookListEventsResponse,
    type WebhookRotateSecretResponse as WebhookRotateSecretResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookGetDeliveriesParams as WebhookGetDeliveriesParams,
  };
}
