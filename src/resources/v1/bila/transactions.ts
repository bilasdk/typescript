// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Transaction history endpoints
 */
export class Transactions extends APIResource {
  /**
   * Retrieve a single transaction by its UUID
   *
   * @example
   * ```ts
   * const transaction =
   *   await client.v1.bila.transactions.retrieve(
   *     '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TransactionRetrieveResponse> {
    return this._client.get(path`/api/v1/bila/transactions/${id}`, options);
  }

  /**
   * Retrieve a paginated list of transactions
   *
   * @example
   * ```ts
   * const transactions =
   *   await client.v1.bila.transactions.list();
   * ```
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/api/v1/bila/transactions', { query, ...options });
  }
}

export interface TransactionRetrieveResponse extends AccountsAPI.BilaResponse {
  data?: TransactionRetrieveResponse.Data;
}

export namespace TransactionRetrieveResponse {
  export interface Data {
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
}

export interface TransactionListResponse extends AccountsAPI.BilaResponse {
  data?: TransactionListResponse.Data;
}

export namespace TransactionListResponse {
  export interface Data {
    /**
     * List of transactions
     */
    data: Array<Data.Data>;

    /**
     * Pagination metadata
     */
    meta: Data.Meta;
  }

  export namespace Data {
    export interface Data {
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

    /**
     * Pagination metadata
     */
    export interface Meta {
      /**
       * Current page number
       */
      currentPage: number;

      /**
       * Total number of pages
       */
      pageCount: number;

      /**
       * Items per page
       */
      perPage: number;

      /**
       * Total number of records
       */
      total: number;
    }
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
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };
}
