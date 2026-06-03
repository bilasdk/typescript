// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Account resolution/verification endpoints
 */
export class Resolve extends APIResource {
  /**
   * Verify and retrieve bank account holder details
   *
   * @example
   * ```ts
   * const response = await client.resolve.bankAccount({
   *   accountNumber: '1234567890',
   *   bankId: 'bank-001',
   * });
   * ```
   */
  bankAccount(
    body: ResolveBankAccountParams,
    options?: RequestOptions,
  ): APIPromise<ResolveBankAccountResponse> {
    return this._client.post('/api/v1/bila/resolve/bank-account', { body, ...options });
  }

  /**
   * Verify and retrieve mobile money account holder details
   *
   * @example
   * ```ts
   * const response = await client.resolve.mobileMoney({
   *   country: 'zm',
   *   operator: 'airtel',
   *   phone: '0977433571',
   * });
   * ```
   */
  mobileMoney(
    body: ResolveMobileMoneyParams,
    options?: RequestOptions,
  ): APIPromise<ResolveMobileMoneyResponse> {
    return this._client.post('/api/v1/bila/resolve/mobile-money', { body, ...options });
  }
}

export interface ResolveBankAccountResponse extends AccountsAPI.BilaResponse {
  data?: ResolveBankAccountResponse.Data;
}

export namespace ResolveBankAccountResponse {
  export interface Data {
    /**
     * Account holder name
     */
    accountName: string;

    /**
     * Country code
     */
    country: string;

    /**
     * Bank account number
     */
    accountNumber?: string;

    /**
     * Bank ID
     */
    bankId?: string;

    /**
     * Bank name
     */
    bankName?: string;

    /**
     * Mobile money operator
     */
    operator?: string;

    /**
     * Phone number
     */
    phone?: string;
  }
}

export interface ResolveMobileMoneyResponse extends AccountsAPI.BilaResponse {
  data?: ResolveMobileMoneyResponse.Data;
}

export namespace ResolveMobileMoneyResponse {
  export interface Data {
    /**
     * Account holder name
     */
    accountName: string;

    /**
     * Country code
     */
    country: string;

    /**
     * Bank account number
     */
    accountNumber?: string;

    /**
     * Bank ID
     */
    bankId?: string;

    /**
     * Bank name
     */
    bankName?: string;

    /**
     * Mobile money operator
     */
    operator?: string;

    /**
     * Phone number
     */
    phone?: string;
  }
}

export interface ResolveBankAccountParams {
  /**
   * Bank account number
   */
  accountNumber: string;

  /**
   * Bank ID
   */
  bankId: string;

  /**
   * Country code
   */
  country?: 'zm' | 'ng';
}

export interface ResolveMobileMoneyParams {
  /**
   * Country code
   */
  country: 'zm' | 'ng';

  /**
   * Mobile money operator
   */
  operator: 'airtel' | 'mtn' | 'zamtel' | 'vodacom';

  /**
   * Mobile phone number
   */
  phone: string;
}

export declare namespace Resolve {
  export {
    type ResolveBankAccountResponse as ResolveBankAccountResponse,
    type ResolveMobileMoneyResponse as ResolveMobileMoneyResponse,
    type ResolveBankAccountParams as ResolveBankAccountParams,
    type ResolveMobileMoneyParams as ResolveMobileMoneyParams,
  };
}
