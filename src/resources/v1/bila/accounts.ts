// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Account/wallet management endpoints
 */
export class Accounts extends APIResource {
  /**
   * Retrieve a single account by its UUID
   *
   * @example
   * ```ts
   * const bilaResponse = await client.v1.bila.accounts.retrieve(
   *   '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BilaResponse> {
    return this._client.get(path`/api/v1/bila/accounts/${id}`, options);
  }

  /**
   * Retrieve a paginated list of accounts/wallets for the authenticated merchant
   *
   * @example
   * ```ts
   * const bilaResponse = await client.v1.bila.accounts.list();
   * ```
   */
  list(query: AccountListParams | null | undefined = {}, options?: RequestOptions): APIPromise<BilaResponse> {
    return this._client.get('/api/v1/bila/accounts', { query, ...options });
  }

  /**
   * Retrieve the balance of a specific account
   *
   * @example
   * ```ts
   * const bilaResponse =
   *   await client.v1.bila.accounts.getBalance(
   *     '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   *   );
   * ```
   */
  getBalance(id: string, options?: RequestOptions): APIPromise<BilaResponse> {
    return this._client.get(path`/api/v1/bila/accounts/${id}/balance`, options);
  }
}

export interface BilaResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  /**
   * Response data
   */
  data?: unknown;
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
  export { type BilaResponse as BilaResponse, type AccountListParams as AccountListParams };
}
