// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bila from '@usebila/sdk';

const client = new Bila({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.webhooks.create({
      events: ['payment.completed', 'withdrawal.completed'],
      url: 'https://example.com/webhooks',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.webhooks.create({
      events: ['payment.completed', 'withdrawal.completed'],
      url: 'https://example.com/webhooks',
    });
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.webhooks.update('68f11209-451f-4a15-bfcd-d916eb8b09f4', {});
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
    const responsePromise = client.webhooks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deactivate', async () => {
    const responsePromise = client.webhooks.deactivate('68f11209-451f-4a15-bfcd-d916eb8b09f4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getDeliveries', async () => {
    const responsePromise = client.webhooks.getDeliveries('68f11209-451f-4a15-bfcd-d916eb8b09f4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getDeliveries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.getDeliveries(
        '68f11209-451f-4a15-bfcd-d916eb8b09f4',
        {
          endDate: '2026-04-30T23:59:59.999Z',
          eventType: 'payment.completed',
          page: 1,
          perPage: 20,
          startDate: '2026-04-01T00:00:00.000Z',
          status: 'DELIVERED',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bila.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listEvents', async () => {
    const responsePromise = client.webhooks.listEvents();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('rotateSecret', async () => {
    const responsePromise = client.webhooks.rotateSecret('68f11209-451f-4a15-bfcd-d916eb8b09f4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
