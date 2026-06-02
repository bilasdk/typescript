// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Webhook configuration and delivery history
 */
export class Webhooks extends APIResource {
  /**
   * Create a webhook config
   *
   * @example
   * ```ts
   * const webhook = await client.v1.bila.webhooks.create({
   *   events: ['payment.completed', 'withdrawal.completed'],
   *   url: 'https://example.com/webhooks',
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/api/v1/bila/webhooks', { body, ...options });
  }

  /**
   * Update a webhook config
   *
   * @example
   * ```ts
   * const webhook = await client.v1.bila.webhooks.update(
   *   '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   * );
   * ```
   */
  update(id: string, body: WebhookUpdateParams, options?: RequestOptions): APIPromise<WebhookUpdateResponse> {
    return this._client.patch(path`/api/v1/bila/webhooks/${id}`, { body, ...options });
  }

  /**
   * List webhook configs
   *
   * @example
   * ```ts
   * const webhooks = await client.v1.bila.webhooks.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WebhookListResponse> {
    return this._client.get('/api/v1/bila/webhooks', options);
  }

  /**
   * Deactivate a webhook
   *
   * @example
   * ```ts
   * const bilaResponse =
   *   await client.v1.bila.webhooks.deactivate(
   *     '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   *   );
   * ```
   */
  deactivate(id: string, options?: RequestOptions): APIPromise<AccountsAPI.BilaResponse> {
    return this._client.delete(path`/api/v1/bila/webhooks/${id}`, options);
  }

  /**
   * Get delivery history
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.bila.webhooks.getDeliveries(
   *     '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   *   );
   * ```
   */
  getDeliveries(
    id: string,
    query: WebhookGetDeliveriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookGetDeliveriesResponse> {
    return this._client.get(path`/api/v1/bila/webhooks/${id}/deliveries`, { query, ...options });
  }

  /**
   * List webhook event types
   *
   * @example
   * ```ts
   * const response = await client.v1.bila.webhooks.listEvents();
   * ```
   */
  listEvents(options?: RequestOptions): APIPromise<WebhookListEventsResponse> {
    return this._client.get('/api/v1/bila/webhooks/events', options);
  }

  /**
   * Rotate webhook signing secret
   *
   * @example
   * ```ts
   * const response = await client.v1.bila.webhooks.rotateSecret(
   *   '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   * );
   * ```
   */
  rotateSecret(id: string, options?: RequestOptions): APIPromise<WebhookRotateSecretResponse> {
    return this._client.post(path`/api/v1/bila/webhooks/${id}/rotate-secret`, options);
  }
}

export interface WebhookCreateResponse extends AccountsAPI.BilaResponse {
  data?: WebhookCreateResponse.Data;
}

export namespace WebhookCreateResponse {
  export interface Data {
    /**
     * Webhook config UUID
     */
    id: string;

    createdAt: string;

    /**
     * Subscribed event types
     */
    events: Array<string>;

    /**
     * Whether the webhook is active
     */
    isActive: boolean;

    /**
     * Merchant UUID
     */
    merchantId: string;

    /**
     * Signing secret; plaintext only on create/rotate-secret, otherwise masked
     */
    secret: string;

    updatedAt: string;

    /**
     * Webhook endpoint URL
     */
    url: string;
  }
}

export interface WebhookUpdateResponse extends AccountsAPI.BilaResponse {
  data?: WebhookUpdateResponse.Data;
}

export namespace WebhookUpdateResponse {
  export interface Data {
    /**
     * Webhook config UUID
     */
    id: string;

    createdAt: string;

    /**
     * Subscribed event types
     */
    events: Array<string>;

    /**
     * Whether the webhook is active
     */
    isActive: boolean;

    /**
     * Merchant UUID
     */
    merchantId: string;

    /**
     * Signing secret; plaintext only on create/rotate-secret, otherwise masked
     */
    secret: string;

    updatedAt: string;

    /**
     * Webhook endpoint URL
     */
    url: string;
  }
}

export interface WebhookListResponse extends AccountsAPI.BilaResponse {
  data?: Array<WebhookListResponse.Data>;
}

export namespace WebhookListResponse {
  export interface Data {
    /**
     * Webhook config UUID
     */
    id: string;

    createdAt: string;

    /**
     * Subscribed event types
     */
    events: Array<string>;

    /**
     * Whether the webhook is active
     */
    isActive: boolean;

    /**
     * Merchant UUID
     */
    merchantId: string;

    /**
     * Signing secret; plaintext only on create/rotate-secret, otherwise masked
     */
    secret: string;

    updatedAt: string;

    /**
     * Webhook endpoint URL
     */
    url: string;
  }
}

export interface WebhookGetDeliveriesResponse extends AccountsAPI.BilaResponse {
  data?: WebhookGetDeliveriesResponse.Data;
}

export namespace WebhookGetDeliveriesResponse {
  export interface Data {
    /**
     * List of webhook deliveries
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
       * Delivery UUID
       */
      id: string;

      /**
       * Number of delivery attempts
       */
      attempts: number;

      createdAt: string;

      /**
       * When the delivery succeeded
       */
      deliveredAt: string | null;

      /**
       * Webhook event type
       */
      eventType: string;

      /**
       * When the delivery permanently failed
       */
      failedAt: string | null;

      /**
       * Maximum delivery attempts
       */
      maxAttempts: number;

      /**
       * When the next retry is scheduled
       */
      nextRetryAt: string | null;

      /**
       * Event payload JSON as stored for delivery
       */
      payload: { [key: string]: unknown };

      /**
       * Response body from the merchant endpoint (truncated)
       */
      responseBody: string | null;

      /**
       * HTTP status code from the merchant endpoint
       */
      responseStatus: number | null;

      /**
       * Delivery status
       */
      status: 'QUEUED' | 'DELIVERED' | 'FAILED' | 'RETRYING';

      /**
       * Webhook config UUID
       */
      webhookConfigId: string;
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

export interface WebhookListEventsResponse extends AccountsAPI.BilaResponse {
  data?: Array<string>;
}

export interface WebhookRotateSecretResponse extends AccountsAPI.BilaResponse {
  data?: WebhookRotateSecretResponse.Data;
}

export namespace WebhookRotateSecretResponse {
  export interface Data {
    /**
     * New signing secret (64-character hex, shown once)
     */
    secret: string;
  }
}

export interface WebhookCreateParams {
  /**
   * Event types to subscribe to
   */
  events: Array<
    | 'order.created'
    | 'order.paid'
    | 'order.cancelled'
    | 'stock.low'
    | 'payment.created'
    | 'payment.completed'
    | 'payment.failed'
    | 'collection.pending'
    | 'collection.completed'
    | 'collection.failed'
    | 'withdrawal.created'
    | 'withdrawal.completed'
    | 'withdrawal.failed'
    | 'transaction.updated'
    | 'transfer.pending'
    | 'transfer.completed'
    | 'transfer.failed'
    | 'settlement.completed'
  >;

  /**
   * Webhook endpoint URL
   */
  url: string;
}

export interface WebhookUpdateParams {
  /**
   * Event types to subscribe to
   */
  events?: Array<
    | 'order.created'
    | 'order.paid'
    | 'order.cancelled'
    | 'stock.low'
    | 'payment.created'
    | 'payment.completed'
    | 'payment.failed'
    | 'collection.pending'
    | 'collection.completed'
    | 'collection.failed'
    | 'withdrawal.created'
    | 'withdrawal.completed'
    | 'withdrawal.failed'
    | 'transaction.updated'
    | 'transfer.pending'
    | 'transfer.completed'
    | 'transfer.failed'
    | 'settlement.completed'
  >;

  /**
   * Whether the webhook is active
   */
  isActive?: boolean;

  /**
   * Webhook endpoint URL
   */
  url?: string;
}

export interface WebhookGetDeliveriesParams {
  /**
   * ISO 8601 end of createdAt range (inclusive)
   */
  endDate?: string;

  /**
   * Filter by event type
   */
  eventType?: string;

  /**
   * Page number
   */
  page?: number;

  /**
   * Items per page
   */
  perPage?: number;

  /**
   * ISO 8601 start of createdAt range (inclusive)
   */
  startDate?: string;

  /**
   * Filter by status (QUEUED, DELIVERED, FAILED, RETRYING)
   */
  status?: string;
}

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookGetDeliveriesResponse as WebhookGetDeliveriesResponse,
    type WebhookListEventsResponse as WebhookListEventsResponse,
    type WebhookRotateSecretResponse as WebhookRotateSecretResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookGetDeliveriesParams as WebhookGetDeliveriesParams,
  };
}
