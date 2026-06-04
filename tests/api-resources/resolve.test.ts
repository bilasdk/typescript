// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bila from '@usebila/sdk';

const client = new Bila({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resolve', () => {
  // Mock server tests are disabled
  test.skip('bankAccount: only required params', async () => {
    const responsePromise = client.resolve.bankAccount({ accountNumber: '1234567890', bankId: 'bank-001' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('bankAccount: required and optional params', async () => {
    const response = await client.resolve.bankAccount({
      accountNumber: '1234567890',
      bankId: 'bank-001',
      country: 'zm',
    });
  });

  // Mock server tests are disabled
  test.skip('mobileMoney: only required params', async () => {
    const responsePromise = client.resolve.mobileMoney({
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
  test.skip('mobileMoney: required and optional params', async () => {
    const response = await client.resolve.mobileMoney({
      country: 'zm',
      operator: 'airtel',
      phone: '0977433571',
    });
  });
});
