// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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

export interface ResolvedAccountResponseDto {
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

export interface ResolveBankAccountResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: ResolvedAccountResponseDto;
}

export interface ResolveMobileMoneyResponse {
  /**
   * Response message
   */
  message: string;

  /**
   * Request success status
   */
  status: boolean;

  data?: ResolvedAccountResponseDto;
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
  country?: 'zm';
}

export interface ResolveMobileMoneyParams {
  /**
   * Country code
   */
  country: 'zm';

  /**
   * Mobile money operator
   */
  operator: 'airtel' | 'mtn' | 'zamtel';

  /**
   * Mobile phone number
   */
  phone: string;
}

export declare namespace Resolve {
  export {
    type ResolvedAccountResponseDto as ResolvedAccountResponseDto,
    type ResolveBankAccountResponse as ResolveBankAccountResponse,
    type ResolveMobileMoneyResponse as ResolveMobileMoneyResponse,
    type ResolveBankAccountParams as ResolveBankAccountParams,
    type ResolveMobileMoneyParams as ResolveMobileMoneyParams,
  };
}
