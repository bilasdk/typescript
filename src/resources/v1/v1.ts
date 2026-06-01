// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BilaAPI from './bila/bila';
import {
  Bila,
  BilaListBanksParams,
  BilaListBanksResponse,
  BilaResolveBankAccountParams,
  BilaResolveBankAccountResponse,
  BilaResolveMobileMoneyParams,
  BilaResolveMobileMoneyResponse,
  PaginationMeta,
  ResolvedAccount,
} from './bila/bila';

export class V1 extends APIResource {
  bila: BilaAPI.Bila = new BilaAPI.Bila(this._client);
}

V1.Bila = Bila;

export declare namespace V1 {
  export {
    Bila as Bila,
    type PaginationMeta as PaginationMeta,
    type ResolvedAccount as ResolvedAccount,
    type BilaListBanksResponse as BilaListBanksResponse,
    type BilaResolveBankAccountResponse as BilaResolveBankAccountResponse,
    type BilaResolveMobileMoneyResponse as BilaResolveMobileMoneyResponse,
    type BilaListBanksParams as BilaListBanksParams,
    type BilaResolveBankAccountParams as BilaResolveBankAccountParams,
    type BilaResolveMobileMoneyParams as BilaResolveMobileMoneyParams,
  };
}
