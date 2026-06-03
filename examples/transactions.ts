/**
 * Transactions examples
 *
 * To demonstrate how to retrieve and list
 * transaction history.
 */

import Bila from 'bila';

const client = new Bila({
  apiKey: process.env['BILA_API_KEY'] ?? 'sk_test_your_api_key_here',
  environment: 'sandbox',
});

const TRANSACTION_ID = '68f11209-451f-4a15-bfcd-d916eb8b09f4';
const ACCOUNT_ID = '68f11209-451f-4a15-bfcd-d916eb8b09f4';

async function main() {
  /********************************************
   * Retrieve transaction
   *********************************************/
  const transaction: Bila.TransactionRetrieveResponse = await client.transactions.retrieve(TRANSACTION_ID);
  console.log('retrieve:', transaction);

  /********************************************
   * List transactions
   *********************************************/
  const listParams: Bila.TransactionListParams = {
    accountId: ACCOUNT_ID,
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2024-12-31T23:59:59Z',
    page: 1,
    perPage: 50,
    type: 'credit',
  };

  const transactions: Bila.TransactionListResponse = await client.transactions.list(listParams);
  console.log('list:', transactions);
}

main().catch(console.error);
