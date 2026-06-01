// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BilaAPI from './bila';
import { APIPromise } from '../../../core/api-promise';
import { BilaPage, type BilaPageParams, PagePromise } from '../../../core/pagination';
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
   * const response = await client.v1.bila.webhooks.deactivate(
   *   '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   * );
   * ```
   */
  deactivate(id: string, options?: RequestOptions): APIPromise<WebhookDeactivateResponse> {
    return this._client.delete(path`/api/v1/bila/webhooks/${id}`, options);
  }

  /**
   * Get delivery history
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const webhookDelivery of client.v1.bila.webhooks.listDeliveries(
   *   '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   * )) {
   *   // ...
   * }
   * ```
   */
  listDeliveries(
    id: string,
    query: WebhookListDeliveriesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhookDeliveriesBilaPage, WebhookDelivery> {
    return this._client.getAPIList(path`/api/v1/bila/webhooks/${id}/deliveries`, BilaPage<WebhookDelivery>, {
      query,
      ...options,
    });
  }

  /**
   * List webhook event types
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.bila.webhooks.listEventTypes();
   * ```
   */
  listEventTypes(options?: RequestOptions): APIPromise<WebhookListEventTypesResponse> {
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

export type WebhookDeliveriesBilaPage = BilaPage<WebhookDelivery>;

export interface CreateWebhookConfig {
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

export interface PaginatedDeliveries {
  /**
   * List of webhook deliveries
   */
  data: Array<WebhookDelivery>;

  /**
   * Pagination metadata
   */
  meta: BilaAPI.PaginationMeta;
}

export interface RotateSecretResult {
  /**
   * New signing secret (64-character hex, shown once)
   */
  secret: string;
}

export interface UpdateWebhookConfig {
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

export interface WebhookConfig {
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

export interface WebhookDelivery {
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

export interface WebhookCreateResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: WebhookConfig;
}

export interface WebhookUpdateResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: WebhookConfig;
}

export interface WebhookListResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: Array<WebhookConfig>;
}

export interface WebhookDeactivateResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;
}

export interface WebhookListEventTypesResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: Array<string>;
}

export interface WebhookRotateSecretResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: RotateSecretResult;
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

export interface WebhookListDeliveriesParams extends BilaPageParams {
  /**
   * ISO 8601 end of createdAt range (inclusive)
   */
  endDate?: string;

  /**
   * Filter by event type
   */
  eventType?: string;

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
    type CreateWebhookConfig as CreateWebhookConfig,
    type PaginatedDeliveries as PaginatedDeliveries,
    type RotateSecretResult as RotateSecretResult,
    type UpdateWebhookConfig as UpdateWebhookConfig,
    type WebhookConfig as WebhookConfig,
    type WebhookDelivery as WebhookDelivery,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeactivateResponse as WebhookDeactivateResponse,
    type WebhookListEventTypesResponse as WebhookListEventTypesResponse,
    type WebhookRotateSecretResponse as WebhookRotateSecretResponse,
    type WebhookDeliveriesBilaPage as WebhookDeliveriesBilaPage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListDeliveriesParams as WebhookListDeliveriesParams,
  };
}
