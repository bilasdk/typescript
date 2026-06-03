// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Bila } from '../client';

export abstract class APIResource {
  protected _client: Bila;

  constructor(client: Bila) {
    this._client = client;
  }
}
