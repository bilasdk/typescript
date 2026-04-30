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
   * const bilaResponse =
   *   await client.v1.bila.transactions.retrieve(
   *     '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.get(path`/api/v1/bila/transactions/${id}`, options);
  }

  /**
   * Retrieve a paginated list of transactions
   *
   * @example
   * ```ts
   * const bilaResponse =
   *   await client.v1.bila.transactions.list();
   * ```
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.get('/api/v1/bila/transactions', { query, ...options });
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
  export { type TransactionListParams as TransactionListParams };
}
