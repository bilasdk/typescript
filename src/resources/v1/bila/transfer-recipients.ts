// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Transfer recipient management endpoints
 */
export class TransferRecipients extends APIResource {
  /**
   * Retrieve a single transfer recipient by its UUID
   *
   * @example
   * ```ts
   * const bilaResponse =
   *   await client.v1.bila.transferRecipients.retrieve(
   *     '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.get(path`/api/v1/bila/transfer-recipients/${id}`, options);
  }

  /**
   * Retrieve a paginated list of saved transfer recipients
   *
   * @example
   * ```ts
   * const bilaResponse =
   *   await client.v1.bila.transferRecipients.list();
   * ```
   */
  list(
    query: TransferRecipientListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.get('/api/v1/bila/transfer-recipients', { query, ...options });
  }

  /**
   * Create a new bank account transfer recipient
   *
   * @example
   * ```ts
   * const bilaResponse =
   *   await client.v1.bila.transferRecipients.createBankAccount(
   *     { accountNumber: '1234567890', bankId: 'bank-001' },
   *   );
   * ```
   */
  createBankAccount(
    body: TransferRecipientCreateBankAccountParams,
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.post('/api/v1/bila/transfer-recipients/bank-account', { body, ...options });
  }

  /**
   * Create a new mobile money transfer recipient
   *
   * @example
   * ```ts
   * const bilaResponse =
   *   await client.v1.bila.transferRecipients.createMobileMoney(
   *     {
   *       country: 'zm',
   *       operator: 'airtel',
   *       phone: '0977433571',
   *     },
   *   );
   * ```
   */
  createMobileMoney(
    body: TransferRecipientCreateMobileMoneyParams,
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.post('/api/v1/bila/transfer-recipients/mobile-money', { body, ...options });
  }
}

export interface TransferRecipientListParams {
  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Items per page (default: 50)
   */
  perPage?: number;

  /**
   * Filter by recipient type
   */
  type?: 'bank-account' | 'mobile-money';
}

export interface TransferRecipientCreateBankAccountParams {
  /**
   * Bank account number
   */
  accountNumber: string;

  /**
   * Bank ID
   */
  bankId: string;

  /**
   * Account holder name (optional, will be resolved)
   */
  accountName?: string;

  /**
   * Country code
   */
  country?: 'zm' | 'ng';
}

export interface TransferRecipientCreateMobileMoneyParams {
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

  /**
   * Account holder name (optional, will be resolved)
   */
  accountName?: string;
}

export declare namespace TransferRecipients {
  export {
    type TransferRecipientListParams as TransferRecipientListParams,
    type TransferRecipientCreateBankAccountParams as TransferRecipientCreateBankAccountParams,
    type TransferRecipientCreateMobileMoneyParams as TransferRecipientCreateMobileMoneyParams,
  };
}
