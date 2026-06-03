// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bila from 'bila';

const client = new Bila({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transfers', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.transfers.retrieve('68f11209-451f-4a15-bfcd-d916eb8b09f4');
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
    const responsePromise = client.transfers.list();
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
      client.transfers.list(
        {
          accountId: '68f11209-451f-4a15-bfcd-d916eb8b09f4',
          endDate: '2024-12-31T23:59:59Z',
          page: 1,
          perPage: 50,
          startDate: '2024-01-01T00:00:00Z',
          status: 'pending',
          type: 'bank-account',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bila.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getStatusByReference', async () => {
    const responsePromise = client.transfers.getStatusByReference('transfer-001');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('initiateBankTransfer: only required params', async () => {
    const responsePromise = client.transfers.initiateBankTransfer({
      accountId: '68f11209-451f-4a15-bfcd-d916eb8b09f4',
      amount: 1000,
      reference: 'transfer-001',
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
  test.skip('initiateBankTransfer: required and optional params', async () => {
    const response = await client.transfers.initiateBankTransfer({
      accountId: '68f11209-451f-4a15-bfcd-d916eb8b09f4',
      amount: 1000,
      reference: 'transfer-001',
      accountNumber: '1234567890',
      bankId: 'bank-001',
      country: 'zm',
      narration: 'Payment for services',
      recipientName: 'Jane Doe',
      transferRecipientId: '68f11209-451f-4a15-bfcd-d916eb8b09f4',
      walletId: '68f11209-451f-4a15-bfcd-d916eb8b09f4',
    });
  });

  // Mock server tests are disabled
  test.skip('initiateMobileMoneyTransfer: only required params', async () => {
    const responsePromise = client.transfers.initiateMobileMoneyTransfer({
      amount: 250,
      country: 'zm',
      operator: 'airtel',
      phone: '0977433571',
      reference: 'mobile-transfer-001',
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
  test.skip('initiateMobileMoneyTransfer: required and optional params', async () => {
    const response = await client.transfers.initiateMobileMoneyTransfer({
      amount: 250,
      country: 'zm',
      operator: 'airtel',
      phone: '0977433571',
      reference: 'mobile-transfer-001',
      narration: 'Mobile money payout',
      recipientName: 'Jane Doe',
      walletId: '68f11209-451f-4a15-bfcd-d916eb8b09f4',
    });
  });
});
