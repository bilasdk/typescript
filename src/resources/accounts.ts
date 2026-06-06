// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Account/wallet management endpoints
 */
export class Accounts extends APIResource {
  /**
   * Retrieve a single account by its UUID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/api/v1/bila/accounts/${id}`, options);
  }

  /**
   * Retrieve a paginated list of accounts/wallets for the authenticated merchant
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/api/v1/bila/accounts', { query, ...options });
  }

  /**
   * Retrieve the balance of a specific account
   */
  getBalance(id: string, options?: RequestOptions): APIPromise<AccountGetBalanceResponse> {
    return this._client.get(path`/api/v1/bila/accounts/${id}/balance`, options);
  }
}

export interface AccountDetailsDto {
  /**
   * Account holder name
   */
  accountName: string;

  /**
   * Account detail type
   */
  type: string;

  /**
   * Till number (for mobile money)
   */
  tillNumber?: string;
}

export interface AccountResponseDto {
  /**
   * Account UUID
   */
  id: string;

  /**
   * Account creation timestamp
   */
  createdAt: string;

  /**
   * Currency code
   */
  currency: string;

  /**
   * Account details
   */
  details: AccountDetailsDto;

  /**
   * Account status
   */
  status: 'active' | 'inactive' | 'suspended';

  /**
   * Account type
   */
  type: 'main' | 'sub' | 'virtual';

  /**
   * Available balance
   */
  availableBalance?: string;

  /**
   * Ledger balance
   */
  ledgerBalance?: string;
}

export interface AccountRetrieveResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: AccountResponseDto;
}

export interface AccountListResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: AccountListResponse.Data;
}

export namespace AccountListResponse {
  export interface Data {
    /**
     * List of accounts
     */
    data: Array<AccountsAPI.AccountResponseDto>;

    /**
     * Pagination metadata
     */
    meta: Shared.PaginationMetaDto;
  }
}

export interface AccountGetBalanceResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: AccountGetBalanceResponse.Data;
}

export namespace AccountGetBalanceResponse {
  export interface Data {
    /**
     * Available balance
     */
    availableBalance: string;

    /**
     * Currency code
     */
    currency: string;

    /**
     * Ledger balance
     */
    ledgerBalance: string;
  }
}

export interface AccountListParams {
  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Items per page (default: 50)
   */
  perPage?: number;
}

export declare namespace Accounts {
  export {
    type AccountDetailsDto as AccountDetailsDto,
    type AccountResponseDto as AccountResponseDto,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountGetBalanceResponse as AccountGetBalanceResponse,
    type AccountListParams as AccountListParams,
  };
}
