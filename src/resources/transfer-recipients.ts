// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransferRecipientsAPI from './transfer-recipients';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
   *   await client.transferRecipients.retrieve(
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
   * const transferRecipients =
   *   await client.transferRecipients.list();
   * ```
   */
  list(
    query: TransferRecipientListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransferRecipientListResponse> {
    return this._client.get('/api/v1/bila/transfer-recipients', { query, ...options });
  }

  /**
   * Create a new bank account transfer recipient
   *
   * @example
   * ```ts
   * const response =
   *   await client.transferRecipients.createBankAccount({
   *     accountNumber: '1234567890',
   *     bankId: 'bank-001',
   *   });
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
   *   await client.transferRecipients.createMobileMoney({
   *     country: 'zm',
   *     operator: 'airtel',
   *     phone: '0977433571',
   *   });
   * ```
   */
  createMobileMoney(
    body: TransferRecipientCreateMobileMoneyParams,
    options?: RequestOptions,
  ): APIPromise<TransferRecipientCreateMobileMoneyResponse> {
    return this._client.post('/api/v1/bila/transfer-recipients/mobile-money', { body, ...options });
  }
}

export interface RecipientResponseDto {
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
   * Transfer recipient type
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

  data?: RecipientResponseDto;
}

export interface TransferRecipientListResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: TransferRecipientListResponse.Data;
}

export namespace TransferRecipientListResponse {
  export interface Data {
    /**
     * List of recipients
     */
    data: Array<TransferRecipientsAPI.RecipientResponseDto>;

    /**
     * Pagination metadata
     */
    meta: Shared.PaginationMetaDto;
  }
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

  data?: RecipientResponseDto;
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

  data?: RecipientResponseDto;
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
  country?: 'zm';
}

export interface TransferRecipientCreateMobileMoneyParams {
  /**
   * Country code
   */
  country: 'zm';

  /**
   * Mobile money operator
   */
  operator: 'airtel' | 'mtn' | 'zamtel';

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
    type RecipientResponseDto as RecipientResponseDto,
    type TransferRecipientRetrieveResponse as TransferRecipientRetrieveResponse,
    type TransferRecipientListResponse as TransferRecipientListResponse,
    type TransferRecipientCreateBankAccountResponse as TransferRecipientCreateBankAccountResponse,
    type TransferRecipientCreateMobileMoneyResponse as TransferRecipientCreateMobileMoneyResponse,
    type TransferRecipientListParams as TransferRecipientListParams,
    type TransferRecipientCreateBankAccountParams as TransferRecipientCreateBankAccountParams,
    type TransferRecipientCreateMobileMoneyParams as TransferRecipientCreateMobileMoneyParams,
  };
}
