/**
 * Webhooks examples
 *
 * To demonstrate how to configure webhooks
 * and manage delivery history.
 */

import Bila from '@bila/sdk';

const client = new Bila({
  apiKey: process.env['BILA_API_KEY'] ?? 'sk_test_your_api_key_here',
  environment: 'sandbox',
});

const WEBHOOK_ID = '68f11209-451f-4a15-bfcd-d916eb8b09f4';

async function main() {
  /********************************************
   * Create webhook
   *********************************************/
  const createParams: Bila.WebhookCreateParams = {
    events: ['payment.completed', 'withdrawal.completed', 'transfer.completed'],
    url: 'https://example.com/webhooks',
  };

  const created: Bila.WebhookCreateResponse = await client.webhooks.create(createParams);
  console.log('create:', created);

  /********************************************
   * Update webhook
   *********************************************/
  const updateParams: Bila.WebhookUpdateParams = {
    events: ['payment.completed', 'collection.completed', 'transfer.failed'],
    url: 'https://example.com/webhooks/v2',
    isActive: true,
  };

  const updated: Bila.WebhookUpdateResponse = await client.webhooks.update(WEBHOOK_ID, updateParams);
  console.log('update:', updated);

  /********************************************
   * List webhooks
   *********************************************/
  const webhooks: Bila.WebhookListResponse = await client.webhooks.list();
  console.log('list:', webhooks);

  /********************************************
   * Get webhook deliveries
   *********************************************/
  const deliveriesParams: Bila.WebhookGetDeliveriesParams = {
    startDate: '2026-04-01T00:00:00.000Z',
    endDate: '2026-04-30T23:59:59.999Z',
    eventType: 'payment.completed',
    page: 1,
    perPage: 20,
    status: 'DELIVERED',
  };

  const deliveries: Bila.WebhookGetDeliveriesResponse = await client.webhooks.getDeliveries(
    WEBHOOK_ID,
    deliveriesParams,
  );
  console.log('getDeliveries:', deliveries);

  /********************************************
   * List webhook events
   *********************************************/
  const events: Bila.WebhookListEventsResponse = await client.webhooks.listEvents();
  console.log('listEvents:', events);

  /********************************************
   * Rotate webhook secret
   *********************************************/
  const rotated: Bila.WebhookRotateSecretResponse = await client.webhooks.rotateSecret(WEBHOOK_ID);
  console.log('rotateSecret:', rotated);

  /********************************************
   * Deactivate webhook
   *********************************************/
  const deactivated: Bila.BilaResponse = await client.webhooks.deactivate(WEBHOOK_ID);
  console.log('deactivate:', deactivated);
}

main().catch(console.error);
