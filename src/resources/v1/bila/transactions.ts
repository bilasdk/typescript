// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BilaAPI from './bila';
import { APIPromise } from '../../../core/api-promise';
import { BilaPage, type BilaPageParams, PagePromise } from '../../../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const transaction of client.v1.bila.transactions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TransactionsBilaPage, Transaction> {
    return this._client.getAPIList('/api/v1/bila/transactions', BilaPage<Transaction>, { query, ...options });
  }
}

export type TransactionsBilaPage = BilaPage<Transaction>;

export interface PaginatedTransactions {
  /**
   * List of transactions
   */
  data: Array<Transaction>;

  /**
   * Pagination metadata
   */
  meta: BilaAPI.PaginationMeta;
}

export interface Transaction {
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

  data?: Transaction;
}

export interface TransactionListParams extends BilaPageParams {
  /**
   * Filter by account ID
   */
  accountId?: string;

  /**
   * Filter by end date (ISO 8601)
   */
  endDate?: string;

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
    type PaginatedTransactions as PaginatedTransactions,
    type Transaction as Transaction,
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionsBilaPage as TransactionsBilaPage,
    type TransactionListParams as TransactionListParams,
  };
}
