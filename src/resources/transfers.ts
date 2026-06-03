// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Payout/transfer operation endpoints
 */
export class Transfers extends APIResource {
  /**
   * Retrieve a single transfer by its UUID
   *
   * @example
   * ```ts
   * const transfer = await client.transfers.retrieve(
   *   '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TransferRetrieveResponse> {
    return this._client.get(path`/api/v1/bila/transfers/${id}`, options);
  }

  /**
   * Retrieve a paginated list of transfers/payouts for the authenticated merchant
   *
   * @example
   * ```ts
   * const transfers = await client.transfers.list();
   * ```
   */
  list(
    query: TransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransferListResponse> {
    return this._client.get('/api/v1/bila/transfers', { query, ...options });
  }

  /**
   * Retrieve transfer status by client reference
   *
   * @example
   * ```ts
   * const response =
   *   await client.transfers.getStatusByReference(
   *     'transfer-001',
   *   );
   * ```
   */
  getStatusByReference(
    reference: string,
    options?: RequestOptions,
  ): APIPromise<TransferGetStatusByReferenceResponse> {
    return this._client.get(path`/api/v1/bila/transfers/status/${reference}`, options);
  }

  /**
   * Initiate a transfer to a bank account. Creates a transaction record in your
   * dashboard.
   *
   * @example
   * ```ts
   * const response =
   *   await client.transfers.initiateBankTransfer({
   *     accountId: '68f11209-451f-4a15-bfcd-d916eb8b09f4',
   *     amount: 1000,
   *     reference: 'transfer-001',
   *   });
   * ```
   */
  initiateBankTransfer(
    body: TransferInitiateBankTransferParams,
    options?: RequestOptions,
  ): APIPromise<TransferInitiateBankTransferResponse> {
    return this._client.post('/api/v1/bila/transfers/bank-account', { body, ...options });
  }

  /**
   * Initiate a transfer to a mobile money account. Creates a transaction record in
   * your dashboard.
   *
   * @example
   * ```ts
   * const response =
   *   await client.transfers.initiateMobileMoneyTransfer({
   *     amount: 250,
   *     country: 'zm',
   *     operator: 'airtel',
   *     phone: '0977433571',
   *     reference: 'mobile-transfer-001',
   *   });
   * ```
   */
  initiateMobileMoneyTransfer(
    body: TransferInitiateMobileMoneyTransferParams,
    options?: RequestOptions,
  ): APIPromise<TransferInitiateMobileMoneyTransferResponse> {
    return this._client.post('/api/v1/bila/transfers/mobile-money', { body, ...options });
  }
}

export interface TransferRetrieveResponse extends AccountsAPI.BilaResponse {
  data?: TransferRetrieveResponse.Data;
}

export namespace TransferRetrieveResponse {
  export interface Data {
    /**
     * Transfer ID
     */
    id: string;

    /**
     * Transfer amount
     */
    amount: number;

    /**
     * Creation timestamp (from Payment)
     */
    createdAt: string;

    /**
     * Currency code
     */
    currency: string;

    /**
     * Recipient details
     */
    recipient: Data.Recipient;

    /**
     * Client reference
     */
    reference: string;

    /**
     * Transfer status
     */
    status: 'pending' | 'successful' | 'failed';

    /**
     * Transfer type
     */
    type: 'bank-account' | 'mobile-money';

    /**
     * Completion timestamp (from Payment.processedAt)
     */
    completedAt?: string;

    /**
     * Transfer narration
     */
    narration?: string;
  }

  export namespace Data {
    /**
     * Recipient details
     */
    export interface Recipient {
      /**
       * Account holder / recipient name
       */
      accountName: string;

      /**
       * Bank account number (bank-account only)
       */
      accountNumber?: string;

      /**
       * Bank name (bank-account only)
       */
      bankName?: string;

      /**
       * Mobile money operator (mobile-money only)
       */
      operator?: string;

      /**
       * Phone number (mobile-money only)
       */
      phone?: string;
    }
  }
}

export interface TransferListResponse extends AccountsAPI.BilaResponse {
  data?: TransferListResponse.Data;
}

export namespace TransferListResponse {
  export interface Data {
    /**
     * List of transfers
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
       * Transfer ID
       */
      id: string;

      /**
       * Transfer amount
       */
      amount: number;

      /**
       * Creation timestamp (from Payment)
       */
      createdAt: string;

      /**
       * Currency code
       */
      currency: string;

      /**
       * Recipient details
       */
      recipient: Data.Recipient;

      /**
       * Client reference
       */
      reference: string;

      /**
       * Transfer status
       */
      status: 'pending' | 'successful' | 'failed';

      /**
       * Transfer type
       */
      type: 'bank-account' | 'mobile-money';

      /**
       * Completion timestamp (from Payment.processedAt)
       */
      completedAt?: string;

      /**
       * Transfer narration
       */
      narration?: string;
    }

    export namespace Data {
      /**
       * Recipient details
       */
      export interface Recipient {
        /**
         * Account holder / recipient name
         */
        accountName: string;

        /**
         * Bank account number (bank-account only)
         */
        accountNumber?: string;

        /**
         * Bank name (bank-account only)
         */
        bankName?: string;

        /**
         * Mobile money operator (mobile-money only)
         */
        operator?: string;

        /**
         * Phone number (mobile-money only)
         */
        phone?: string;
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

export interface TransferGetStatusByReferenceResponse extends AccountsAPI.BilaResponse {
  data?: TransferGetStatusByReferenceResponse.Data;
}

export namespace TransferGetStatusByReferenceResponse {
  export interface Data {
    /**
     * Transfer ID
     */
    id: string;

    /**
     * Transfer amount
     */
    amount: number;

    /**
     * Creation timestamp (from Payment)
     */
    createdAt: string;

    /**
     * Currency code
     */
    currency: string;

    /**
     * Recipient details
     */
    recipient: Data.Recipient;

    /**
     * Client reference
     */
    reference: string;

    /**
     * Transfer status
     */
    status: 'pending' | 'successful' | 'failed';

    /**
     * Transfer type
     */
    type: 'bank-account' | 'mobile-money';

    /**
     * Completion timestamp (from Payment.processedAt)
     */
    completedAt?: string;

    /**
     * Transfer narration
     */
    narration?: string;
  }

  export namespace Data {
    /**
     * Recipient details
     */
    export interface Recipient {
      /**
       * Account holder / recipient name
       */
      accountName: string;

      /**
       * Bank account number (bank-account only)
       */
      accountNumber?: string;

      /**
       * Bank name (bank-account only)
       */
      bankName?: string;

      /**
       * Mobile money operator (mobile-money only)
       */
      operator?: string;

      /**
       * Phone number (mobile-money only)
       */
      phone?: string;
    }
  }
}

export interface TransferInitiateBankTransferResponse extends AccountsAPI.BilaResponse {
  data?: TransferInitiateBankTransferResponse.Data;
}

export namespace TransferInitiateBankTransferResponse {
  export interface Data {
    /**
     * Transfer ID
     */
    id: string;

    /**
     * Transfer amount
     */
    amount: number;

    /**
     * Creation timestamp (from Payment)
     */
    createdAt: string;

    /**
     * Currency code
     */
    currency: string;

    /**
     * Recipient details
     */
    recipient: Data.Recipient;

    /**
     * Client reference
     */
    reference: string;

    /**
     * Transfer status
     */
    status: 'pending' | 'successful' | 'failed';

    /**
     * Transfer type
     */
    type: 'bank-account' | 'mobile-money';

    /**
     * Completion timestamp (from Payment.processedAt)
     */
    completedAt?: string;

    /**
     * Transfer narration
     */
    narration?: string;
  }

  export namespace Data {
    /**
     * Recipient details
     */
    export interface Recipient {
      /**
       * Account holder / recipient name
       */
      accountName: string;

      /**
       * Bank account number (bank-account only)
       */
      accountNumber?: string;

      /**
       * Bank name (bank-account only)
       */
      bankName?: string;

      /**
       * Mobile money operator (mobile-money only)
       */
      operator?: string;

      /**
       * Phone number (mobile-money only)
       */
      phone?: string;
    }
  }
}

export interface TransferInitiateMobileMoneyTransferResponse extends AccountsAPI.BilaResponse {
  data?: TransferInitiateMobileMoneyTransferResponse.Data;
}

export namespace TransferInitiateMobileMoneyTransferResponse {
  export interface Data {
    /**
     * Transfer ID
     */
    id: string;

    /**
     * Transfer amount
     */
    amount: number;

    /**
     * Creation timestamp (from Payment)
     */
    createdAt: string;

    /**
     * Currency code
     */
    currency: string;

    /**
     * Recipient details
     */
    recipient: Data.Recipient;

    /**
     * Client reference
     */
    reference: string;

    /**
     * Transfer status
     */
    status: 'pending' | 'successful' | 'failed';

    /**
     * Transfer type
     */
    type: 'bank-account' | 'mobile-money';

    /**
     * Completion timestamp (from Payment.processedAt)
     */
    completedAt?: string;

    /**
     * Transfer narration
     */
    narration?: string;
  }

  export namespace Data {
    /**
     * Recipient details
     */
    export interface Recipient {
      /**
       * Account holder / recipient name
       */
      accountName: string;

      /**
       * Bank account number (bank-account only)
       */
      accountNumber?: string;

      /**
       * Bank name (bank-account only)
       */
      bankName?: string;

      /**
       * Mobile money operator (mobile-money only)
       */
      operator?: string;

      /**
       * Phone number (mobile-money only)
       */
      phone?: string;
    }
  }
}

export interface TransferListParams {
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
   * Filter by transfer status
   */
  status?: 'pending' | 'successful' | 'failed';

  /**
   * Filter by transfer type
   */
  type?: 'bank-account' | 'mobile-money';
}

export interface TransferInitiateBankTransferParams {
  /**
   * Source account UUID
   */
  accountId: string;

  /**
   * Transfer amount
   */
  amount: number;

  /**
   * Unique client reference (alphanumeric, dots, underscores, hyphens)
   */
  reference: string;

  /**
   * Bank account number (required if no transferRecipientId)
   */
  accountNumber?: string;

  /**
   * Bank ID (required if no transferRecipientId)
   */
  bankId?: string;

  /**
   * Country code
   */
  country?: 'zm' | 'ng';

  /**
   * Transfer narration
   */
  narration?: string;

  /**
   * Recipient name for the transaction record
   */
  recipientName?: string;

  /**
   * Transfer recipient UUID (use this OR accountNumber+bankId)
   */
  transferRecipientId?: string;

  /**
   * Source wallet ID to debit (optional, uses main wallet if not specified)
   */
  walletId?: string;
}

export interface TransferInitiateMobileMoneyTransferParams {
  /**
   * Transfer amount
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
   * Recipient phone number
   */
  phone: string;

  /**
   * Unique client reference
   */
  reference: string;

  /**
   * Transfer narration
   */
  narration?: string;

  /**
   * Recipient name for the transaction record
   */
  recipientName?: string;

  /**
   * Source wallet ID to debit (defaults to main wallet if omitted)
   */
  walletId?: string;
}

export declare namespace Transfers {
  export {
    type TransferRetrieveResponse as TransferRetrieveResponse,
    type TransferListResponse as TransferListResponse,
    type TransferGetStatusByReferenceResponse as TransferGetStatusByReferenceResponse,
    type TransferInitiateBankTransferResponse as TransferInitiateBankTransferResponse,
    type TransferInitiateMobileMoneyTransferResponse as TransferInitiateMobileMoneyTransferResponse,
    type TransferListParams as TransferListParams,
    type TransferInitiateBankTransferParams as TransferInitiateBankTransferParams,
    type TransferInitiateMobileMoneyTransferParams as TransferInitiateMobileMoneyTransferParams,
  };
}
