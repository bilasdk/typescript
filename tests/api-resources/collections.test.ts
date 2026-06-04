// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bila from '@usebila/sdk';

const client = new Bila({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource collections', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.collections.retrieve('68f11209-451f-4a15-bfcd-d916eb8b09f4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.collections.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.collections.list(
        {
          accountId: '68f11209-451f-4a15-bfcd-d916eb8b09f4',
          endDate: '2024-12-31T23:59:59Z',
          page: 1,
          perPage: 50,
          startDate: '2024-01-01T00:00:00Z',
          status: 'pending',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bila.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getStatusByReference', async () => {
    const responsePromise = client.collections.getStatusByReference('collection-001');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('initiateMobileMoneyCollection: only required params', async () => {
    const responsePromise = client.collections.initiateMobileMoneyCollection({
      amount: 100.5,
      country: 'zm',
      operator: 'airtel',
      phone: '0977433571',
      reference: 'collection-001',
      walletId: '68f11209-451f-4a15-bfcd-d916eb8b09f4',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('initiateMobileMoneyCollection: required and optional params', async () => {
    const response = await client.collections.initiateMobileMoneyCollection({
      amount: 100.5,
      country: 'zm',
      operator: 'airtel',
      phone: '0977433571',
      reference: 'collection-001',
      walletId: '68f11209-451f-4a15-bfcd-d916eb8b09f4',
      bearer: 'customer',
      customerName: 'John Doe',
      narration: 'Payment for subscription',
    });
  });
});
