/**
 * Collections examples
 *
 * To demonstrate how to make collects
 * via mobile money.
 */

import Bila from 'bila';

const client = new Bila({
  apiKey: process.env['BILA_API_KEY'] ?? 'sk_test_your_api_key_here',
  environment: 'sandbox',
});

const COLLECTION_ID = '68f11209-451f-4a15-bfcd-d916eb8b09f4';
const WALLET_ID = '68f11209-451f-4a15-bfcd-d916eb8b09f4';
const REFERENCE = 'collection-001';

async function main() {
  /********************************************
   * Retrieve collection
   *********************************************/
  const collection: Bila.CollectionRetrieveResponse =
    await client.collections.retrieve(COLLECTION_ID);
  console.log('retrieve:', collection);

  /********************************************
   * List collections
   *********************************************/
  const listParams: Bila.CollectionListParams = {
    accountId: WALLET_ID,
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2024-12-31T23:59:59Z',
    page: 1,
    perPage: 50,
    status: 'pending',
  };

  const collections: Bila.CollectionListResponse = await client.collections.list(listParams);
  console.log('list:', collections);

  /********************************************
   * Get collection status by reference
   *********************************************/
  const status: Bila.CollectionGetStatusByReferenceResponse =
    await client.collections.getStatusByReference(REFERENCE);
  console.log('getStatusByReference:', status);

  /********************************************
   * Initiate mobile money collection
   *********************************************/
  const initiateParams: Bila.CollectionInitiateMobileMoneyCollectionParams = {
    amount: 100.5,
    country: 'zm',
    operator: 'airtel',
    phone: '0977433571',
    reference: REFERENCE,
    walletId: WALLET_ID,
    bearer: 'customer',
    customerName: 'John Doe',
    narration: 'Payment for subscription',
  };

  const initiated: Bila.CollectionInitiateMobileMoneyCollectionResponse =
    await client.collections.initiateMobileMoneyCollection(initiateParams);
  console.log('initiateMobileMoneyCollection:', initiated);
}

main().catch(console.error);
