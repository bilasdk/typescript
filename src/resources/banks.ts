// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Bank reference data endpoints
 */
export class Banks extends APIResource {
  /**
   * Retrieve a list of all supported banks and financial institutions
   */
  list(
    query: BankListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BankListResponse> {
    return this._client.get('/api/v1/bila/banks', { query, ...options });
  }
}

export interface BankListResponse extends AccountsAPI.BilaResponse {
  data?: Array<BankListResponse.Data>;
}

export namespace BankListResponse {
  export interface Data {
    /**
     * Bank ID
     */
    id: string;

    /**
     * Bank code
     */
    code: string;

    /**
     * Country code
     */
    country: string;

    /**
     * Bank name
     */
    name: string;

    /**
     * Bank type
     */
    type?: string;
  }
}

export interface BankListParams {
  /**
   * Filter banks by country code
   */
  country?: string;
}

export declare namespace Banks {
  export { type BankListResponse as BankListResponse, type BankListParams as BankListParams };
}
