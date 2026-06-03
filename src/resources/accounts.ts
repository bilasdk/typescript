// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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

export interface BilaResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;
}

export interface AccountRetrieveResponse extends BilaResponse {
  data?: AccountRetrieveResponse.Data;
}

export namespace AccountRetrieveResponse {
  export interface Data {
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
    details: Data.Details;

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

  export namespace Data {
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
}

export interface AccountListResponse extends BilaResponse {
  data?: AccountListResponse.Data;
}

export namespace AccountListResponse {
  export interface Data {
    /**
     * List of accounts
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
      details: Data.Details;

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

    export namespace Data {
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

export interface AccountGetBalanceResponse extends BilaResponse {
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
    type BilaResponse as BilaResponse,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountGetBalanceResponse as AccountGetBalanceResponse,
    type AccountListParams as AccountListParams,
  };
}
