// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Payment collection operation endpoints
 */
export class Collections extends APIResource {
  /**
   * Retrieve a single collection by its UUID
   *
   * @example
   * ```ts
   * const collection =
   *   await client.v1.bila.collections.retrieve(
   *     '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CollectionRetrieveResponse> {
    return this._client.get(path`/api/v1/bila/collections/${id}`, options);
  }

  /**
   * Retrieve a paginated list of payment collections for the authenticated merchant
   *
   * @example
   * ```ts
   * const collections = await client.v1.bila.collections.list();
   * ```
   */
  list(
    query: CollectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionListResponse> {
    return this._client.get('/api/v1/bila/collections', { query, ...options });
  }

  /**
   * Retrieve collection status by client reference
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.bila.collections.getStatusByReference(
   *     'collection-001',
   *   );
   * ```
   */
  getStatusByReference(
    reference: string,
    options?: RequestOptions,
  ): APIPromise<CollectionGetStatusByReferenceResponse> {
    return this._client.get(path`/api/v1/bila/collections/status/${reference}`, options);
  }

  /**
   * Initiate a payment collection from a mobile money account. Creates a transaction
   * record in your dashboard.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.bila.collections.initiateMobileMoneyCollection(
   *     {
   *       amount: 100.5,
   *       country: 'zm',
   *       operator: 'airtel',
   *       phone: '0977433571',
   *       reference: 'collection-001',
   *       walletId: '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   *     },
   *   );
   * ```
   */
  initiateMobileMoneyCollection(
    body: CollectionInitiateMobileMoneyCollectionParams,
    options?: RequestOptions,
  ): APIPromise<CollectionInitiateMobileMoneyCollectionResponse> {
    return this._client.post('/api/v1/bila/collections/mobile-money', { body, ...options });
  }
}

export interface CollectionRetrieveResponse extends AccountsAPI.BilaResponse {
  data?: CollectionRetrieveResponse.Data;
}

export namespace CollectionRetrieveResponse {
  export interface Data {
    /**
     * Collection ID
     */
    id: string;

    /**
     * Collection amount
     */
    amount: number;

    /**
     * Collection creation timestamp
     */
    createdAt: string;

    /**
     * Currency code
     */
    currency: string;

    /**
     * Customer details
     */
    customer: Data.Customer;

    /**
     * Client reference
     */
    reference: string;

    /**
     * Collection status
     */
    status: 'pending' | 'successful' | 'failed' | 'otp-required' | 'pay-offline';

    /**
     * Collection completion timestamp
     */
    completedAt?: string;

    /**
     * Who bears the collection platform fee
     */
    feeBearer?: 'merchant' | 'customer';

    /**
     * Collection narration
     */
    narration?: string;
  }

  export namespace Data {
    /**
     * Customer details
     */
    export interface Customer {
      /**
       * Customer name
       */
      name: string;

      /**
       * Mobile money operator
       */
      operator: string;

      /**
       * Customer phone number
       */
      phone: string;
    }
  }
}

export interface CollectionListResponse extends AccountsAPI.BilaResponse {
  data?: CollectionListResponse.Data;
}

export namespace CollectionListResponse {
  export interface Data {
    /**
     * List of collections
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
       * Collection ID
       */
      id: string;

      /**
       * Collection amount
       */
      amount: number;

      /**
       * Collection creation timestamp
       */
      createdAt: string;

      /**
       * Currency code
       */
      currency: string;

      /**
       * Customer details
       */
      customer: Data.Customer;

      /**
       * Client reference
       */
      reference: string;

      /**
       * Collection status
       */
      status: 'pending' | 'successful' | 'failed' | 'otp-required' | 'pay-offline';

      /**
       * Collection completion timestamp
       */
      completedAt?: string;

      /**
       * Who bears the collection platform fee
       */
      feeBearer?: 'merchant' | 'customer';

      /**
       * Collection narration
       */
      narration?: string;
    }

    export namespace Data {
      /**
       * Customer details
       */
      export interface Customer {
        /**
         * Customer name
         */
        name: string;

        /**
         * Mobile money operator
         */
        operator: string;

        /**
         * Customer phone number
         */
        phone: string;
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

export interface CollectionGetStatusByReferenceResponse extends AccountsAPI.BilaResponse {
  data?: CollectionGetStatusByReferenceResponse.Data;
}

export namespace CollectionGetStatusByReferenceResponse {
  export interface Data {
    /**
     * Collection ID
     */
    id: string;

    /**
     * Collection amount
     */
    amount: number;

    /**
     * Collection creation timestamp
     */
    createdAt: string;

    /**
     * Currency code
     */
    currency: string;

    /**
     * Customer details
     */
    customer: Data.Customer;

    /**
     * Client reference
     */
    reference: string;

    /**
     * Collection status
     */
    status: 'pending' | 'successful' | 'failed' | 'otp-required' | 'pay-offline';

    /**
     * Collection completion timestamp
     */
    completedAt?: string;

    /**
     * Who bears the collection platform fee
     */
    feeBearer?: 'merchant' | 'customer';

    /**
     * Collection narration
     */
    narration?: string;
  }

  export namespace Data {
    /**
     * Customer details
     */
    export interface Customer {
      /**
       * Customer name
       */
      name: string;

      /**
       * Mobile money operator
       */
      operator: string;

      /**
       * Customer phone number
       */
      phone: string;
    }
  }
}

export interface CollectionInitiateMobileMoneyCollectionResponse extends AccountsAPI.BilaResponse {
  data?: CollectionInitiateMobileMoneyCollectionResponse.Data;
}

export namespace CollectionInitiateMobileMoneyCollectionResponse {
  export interface Data {
    /**
     * Collection ID
     */
    id: string;

    /**
     * Collection amount
     */
    amount: number;

    /**
     * Collection creation timestamp
     */
    createdAt: string;

    /**
     * Currency code
     */
    currency: string;

    /**
     * Customer details
     */
    customer: Data.Customer;

    /**
     * Client reference
     */
    reference: string;

    /**
     * Collection status
     */
    status: 'pending' | 'successful' | 'failed' | 'otp-required' | 'pay-offline';

    /**
     * Collection completion timestamp
     */
    completedAt?: string;

    /**
     * Who bears the collection platform fee
     */
    feeBearer?: 'merchant' | 'customer';

    /**
     * Collection narration
     */
    narration?: string;
  }

  export namespace Data {
    /**
     * Customer details
     */
    export interface Customer {
      /**
       * Customer name
       */
      name: string;

      /**
       * Mobile money operator
       */
      operator: string;

      /**
       * Customer phone number
       */
      phone: string;
    }
  }
}

export interface CollectionListParams {
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
   * Filter by collection status
   */
  status?: 'pending' | 'successful' | 'failed' | 'otp-required' | 'pay-offline';
}

export interface CollectionInitiateMobileMoneyCollectionParams {
  /**
   * Collection amount
   */
  amount: number;

  /**
   * Country code
   */
  country: 'zm' | 'ng';

  /**
   * Mobile money operator
   */
  operator: 'airtel' | 'mtn' | 'zamtel' | 'vodacom';

  /**
   * Customer phone number
   */
  phone: string;

  /**
   * Unique client reference
   */
  reference: string;

  /**
   * Target wallet ID to credit
   */
  walletId: string;

  /**
   * Who bears the transaction fee
   */
  bearer?: 'merchant' | 'customer';

  /**
   * Customer name for the transaction record
   */
  customerName?: string;

  /**
   * Collection narration
   */
  narration?: string;
}

export declare namespace Collections {
  export {
    type CollectionRetrieveResponse as CollectionRetrieveResponse,
    type CollectionListResponse as CollectionListResponse,
    type CollectionGetStatusByReferenceResponse as CollectionGetStatusByReferenceResponse,
    type CollectionInitiateMobileMoneyCollectionResponse as CollectionInitiateMobileMoneyCollectionResponse,
    type CollectionListParams as CollectionListParams,
    type CollectionInitiateMobileMoneyCollectionParams as CollectionInitiateMobileMoneyCollectionParams,
  };
}
