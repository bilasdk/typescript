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
   * const bilaResponse =
   *   await client.v1.bila.collections.retrieve(
   *     '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.get(path`/api/v1/bila/collections/${id}`, options);
  }

  /**
   * Retrieve a paginated list of payment collections for the authenticated merchant
   *
   * @example
   * ```ts
   * const bilaResponse =
   *   await client.v1.bila.collections.list();
   * ```
   */
  list(
    query: CollectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.get('/api/v1/bila/collections', { query, ...options });
  }

  /**
   * Retrieve collection status by client reference
   *
   * @example
   * ```ts
   * const bilaResponse =
   *   await client.v1.bila.collections.getStatusByReference(
   *     'collection-001',
   *   );
   * ```
   */
  getStatusByReference(reference: string, options?: RequestOptions): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.get(path`/api/v1/bila/collections/status/${reference}`, options);
  }

  /**
   * Initiate a payment collection from a mobile money account. Creates a transaction
   * record in your dashboard.
   *
   * @example
   * ```ts
   * const bilaResponse =
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
  ): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.post('/api/v1/bila/collections/mobile-money', { body, ...options });
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
    type CollectionListParams as CollectionListParams,
    type CollectionInitiateMobileMoneyCollectionParams as CollectionInitiateMobileMoneyCollectionParams,
  };
}
