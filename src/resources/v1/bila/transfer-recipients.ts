// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BilaAPI from './bila';
import { APIPromise } from '../../../core/api-promise';
import { BilaPage, type BilaPageParams, PagePromise } from '../../../core/pagination';
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
   * const transferRecipient =
   *   await client.v1.bila.transferRecipients.retrieve(
   *     '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TransferRecipientRetrieveResponse> {
    return this._client.get(path`/api/v1/bila/transfer-recipients/${id}`, options);
  }

  /**
   * Retrieve a paginated list of saved transfer recipients
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const recipient of client.v1.bila.transferRecipients.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TransferRecipientListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RecipientsBilaPage, Recipient> {
    return this._client.getAPIList('/api/v1/bila/transfer-recipients', BilaPage<Recipient>, {
      query,
      ...options,
    });
  }

  /**
   * Create a new bank account transfer recipient
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.bila.transferRecipients.createBankAccount(
   *     { accountNumber: '1234567890', bankId: 'bank-001' },
   *   );
   * ```
   */
  createBankAccount(
    body: TransferRecipientCreateBankAccountParams,
    options?: RequestOptions,
  ): APIPromise<TransferRecipientCreateBankAccountResponse> {
    return this._client.post('/api/v1/bila/transfer-recipients/bank-account', { body, ...options });
  }

  /**
   * Create a new mobile money transfer recipient
   *
   * @example
   * ```ts
   * const response =
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
  ): APIPromise<TransferRecipientCreateMobileMoneyResponse> {
    return this._client.post('/api/v1/bila/transfer-recipients/mobile-money', { body, ...options });
  }
}

export type RecipientsBilaPage = BilaPage<Recipient>;

export interface PaginatedRecipients {
  /**
   * List of recipients
   */
  data: Array<Recipient>;

  /**
   * Pagination metadata
   */
  meta: BilaAPI.PaginationMeta;
}

export interface Recipient {
  /**
   * Recipient UUID
   */
  id: string;

  /**
   * Account holder name
   */
  accountName: string;

  /**
   * Country code
   */
  country: string;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Recipient type
   */
  type: 'bank-account' | 'mobile-money';

  /**
   * Bank account number (bank-account only)
   */
  accountNumber?: string;

  /**
   * Bank ID (bank-account only)
   */
  bankId?: string;

  /**
   * Bank name (bank-account only)
   */
  bankName?: string;

  /**
   * Mobile money operator (mobile-money only)
   */
  operator?: string;

  /**
   * Phone number (mobile-money only)
   */
  phone?: string;
}

export interface TransferRecipientRetrieveResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: Recipient;
}

export interface TransferRecipientCreateBankAccountResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: Recipient;
}

export interface TransferRecipientCreateMobileMoneyResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: Recipient;
}

export interface TransferRecipientListParams extends BilaPageParams {
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
    type PaginatedRecipients as PaginatedRecipients,
    type Recipient as Recipient,
    type TransferRecipientRetrieveResponse as TransferRecipientRetrieveResponse,
    type TransferRecipientCreateBankAccountResponse as TransferRecipientCreateBankAccountResponse,
    type TransferRecipientCreateMobileMoneyResponse as TransferRecipientCreateMobileMoneyResponse,
    type RecipientsBilaPage as RecipientsBilaPage,
    type TransferRecipientListParams as TransferRecipientListParams,
    type TransferRecipientCreateBankAccountParams as TransferRecipientCreateBankAccountParams,
    type TransferRecipientCreateMobileMoneyParams as TransferRecipientCreateMobileMoneyParams,
  };
}
