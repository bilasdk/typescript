// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BilaAPI from './bila';
import { APIPromise } from '../../../core/api-promise';
import { BilaPage, type BilaPageParams, PagePromise } from '../../../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const collection of client.v1.bila.collections.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CollectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CollectionsBilaPage, Collection> {
    return this._client.getAPIList('/api/v1/bila/collections', BilaPage<Collection>, { query, ...options });
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

export type CollectionsBilaPage = BilaPage<Collection>;

export interface Collection {
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
  customer: Collection.Customer;

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

export namespace Collection {
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

export interface PaginatedCollections {
  /**
   * List of collections
   */
  data: Array<Collection>;

  /**
   * Pagination metadata
   */
  meta: BilaAPI.PaginationMeta;
}

export interface CollectionRetrieveResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: Collection;
}

export interface CollectionGetStatusByReferenceResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: Collection;
}

export interface CollectionInitiateMobileMoneyCollectionResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: Collection;
}

export interface CollectionListParams extends BilaPageParams {
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
    type Collection as Collection,
    type PaginatedCollections as PaginatedCollections,
    type CollectionRetrieveResponse as CollectionRetrieveResponse,
    type CollectionGetStatusByReferenceResponse as CollectionGetStatusByReferenceResponse,
    type CollectionInitiateMobileMoneyCollectionResponse as CollectionInitiateMobileMoneyCollectionResponse,
    type CollectionsBilaPage as CollectionsBilaPage,
    type CollectionListParams as CollectionListParams,
    type CollectionInitiateMobileMoneyCollectionParams as CollectionInitiateMobileMoneyCollectionParams,
  };
}
