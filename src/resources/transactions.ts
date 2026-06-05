// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransactionsAPI from './transactions';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Transaction history endpoints
 */
export class Transactions extends APIResource {
  /**
   * Retrieve a single transaction by its UUID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TransactionRetrieveResponse> {
    return this._client.get(path`/api/v1/bila/transactions/${id}`, options);
  }

  /**
   * Retrieve a paginated list of transactions
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/api/v1/bila/transactions', { query, ...options });
  }
}

export interface TransactionResponseDto {
  /**
   * Transaction UUID
   */
  id: string;

  /**
   * Account / wallet ID
   */
  accountId: string;

  /**
   * Transaction amount
   */
  amount: number;

  /**
   * Balance after transaction
   */
  balanceAfter: number;

  /**
   * Balance before transaction
   */
  balanceBefore: number;

  /**
   * Transaction timestamp
   */
  createdAt: string;

  /**
   * Currency code
   */
  currency: string;

  /**
   * Transaction status
   */
  status: 'pending' | 'successful' | 'failed' | 'cancelled';

  /**
   * Transaction type
   */
  type: 'credit' | 'debit';

  /**
   * Transaction description
   */
  description?: string;

  /**
   * Client reference
   */
  reference?: string;
}

export interface TransactionRetrieveResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: TransactionResponseDto;
}

export interface TransactionListResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: TransactionListResponse.Data;
}

export namespace TransactionListResponse {
  export interface Data {
    /**
     * List of transactions
     */
    data: Array<TransactionsAPI.TransactionResponseDto>;

    /**
     * Pagination metadata
     */
    meta: Shared.PaginationMetaDto;
  }
}

export interface TransactionListParams {
  /**
   * Filter by account ID
   */
  accountId?: string;

  /**
   * Filter by end date (ISO 8601)
   */
  endDate?: string;

  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Items per page (default: 50)
   */
  perPage?: number;

  /**
   * Filter by start date (ISO 8601)
   */
  startDate?: string;

  /**
   * Filter by transaction type
   */
  type?: 'credit' | 'debit';
}

export declare namespace Transactions {
  export {
    type TransactionResponseDto as TransactionResponseDto,
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };
}
