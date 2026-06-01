// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BilaAPI from './bila';
import { APIPromise } from '../../../core/api-promise';
import { BilaPage, type BilaPageParams, PagePromise } from '../../../core/pagination';
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
   * const account = await client.v1.bila.accounts.retrieve(
   *   '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/api/v1/bila/accounts/${id}`, options);
  }

  /**
   * Retrieve a paginated list of accounts/wallets for the authenticated merchant
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const account of client.v1.bila.accounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountsBilaPage, Account> {
    return this._client.getAPIList('/api/v1/bila/accounts', BilaPage<Account>, { query, ...options });
  }

  /**
   * Retrieve the balance of a specific account
   *
   * @example
   * ```ts
   * const response = await client.v1.bila.accounts.getBalance(
   *   '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   * );
   * ```
   */
  getBalance(id: string, options?: RequestOptions): APIPromise<AccountGetBalanceResponse> {
    return this._client.get(path`/api/v1/bila/accounts/${id}/balance`, options);
  }
}

export type AccountsBilaPage = BilaPage<Account>;

export interface Account {
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
  details: Account.Details;

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

export namespace Account {
  /**
   * Account details
   */
  export interface Details {
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
}

export interface AccountBalance {
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

export interface PaginatedAccounts {
  /**
   * List of accounts
   */
  data: Array<Account>;

  /**
   * Pagination metadata
   */
  meta: BilaAPI.PaginationMeta;
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

  data?: Account;
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

  data?: AccountBalance;
}

export interface AccountListParams extends BilaPageParams {}

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountBalance as AccountBalance,
    type PaginatedAccounts as PaginatedAccounts,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountGetBalanceResponse as AccountGetBalanceResponse,
    type AccountsBilaPage as AccountsBilaPage,
    type AccountListParams as AccountListParams,
  };
}
