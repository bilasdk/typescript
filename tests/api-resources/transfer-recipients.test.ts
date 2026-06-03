// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bila from 'bila';

const client = new Bila({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transferRecipients', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.transferRecipients.retrieve('68f11209-451f-4a15-bfcd-d916eb8b09f4');
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
    const responsePromise = client.transferRecipients.list();
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
      client.transferRecipients.list(
        {
          page: 1,
          perPage: 50,
          type: 'bank-account',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bila.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('createBankAccount: only required params', async () => {
    const responsePromise = client.transferRecipients.createBankAccount({
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
  test.skip('createBankAccount: required and optional params', async () => {
    const response = await client.transferRecipients.createBankAccount({
      accountNumber: '1234567890',
      bankId: 'bank-001',
      accountName: 'John Doe',
      country: 'zm',
    });
  });

  // Mock server tests are disabled
  test.skip('createMobileMoney: only required params', async () => {
    const responsePromise = client.transferRecipients.createMobileMoney({
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
  test.skip('createMobileMoney: required and optional params', async () => {
    const response = await client.transferRecipients.createMobileMoney({
      country: 'zm',
      operator: 'airtel',
      phone: '0977433571',
      accountName: 'John Doe',
    });
  });
});
