// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bila from 'bila';

const client = new Bila({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bila', () => {
  // Mock server tests are disabled
  test.skip('listBanks', async () => {
    const responsePromise = client.v1.bila.listBanks();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listBanks: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.bila.listBanks({ country: 'zm' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Bila.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('resolveBankAccount: only required params', async () => {
    const responsePromise = client.v1.bila.resolveBankAccount({
      accountNumber: '1234567890',
      bankId: 'bank-001',
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
  test.skip('resolveBankAccount: required and optional params', async () => {
    const response = await client.v1.bila.resolveBankAccount({
      accountNumber: '1234567890',
      bankId: 'bank-001',
      country: 'zm',
    });
  });

  // Mock server tests are disabled
  test.skip('resolveMobileMoney: only required params', async () => {
    const responsePromise = client.v1.bila.resolveMobileMoney({
      country: 'zm',
      operator: 'airtel',
      phone: '0977433571',
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
  test.skip('resolveMobileMoney: required and optional params', async () => {
    const response = await client.v1.bila.resolveMobileMoney({
      country: 'zm',
      operator: 'airtel',
      phone: '0977433571',
    });
  });
});
