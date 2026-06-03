/**
 * Accounts examples
 *
 * To demonstrate how to retrieve accounts,
 * list accounts, and check balances.
 */

import Bila from '@usebila/sdk';

const client = new Bila({
  apiKey: process.env['BILA_API_KEY'] ?? 'sk_test_your_api_key_here',
  environment: 'sandbox',
});

const ACCOUNT_ID = '68f11209-451f-4a15-bfcd-d916eb8b09f4';

async function main() {
  /********************************************
   * Retrieve account
   *********************************************/
  const account: Bila.AccountRetrieveResponse = await client.accounts.retrieve(ACCOUNT_ID);
  console.log('retrieve:', account);

  /********************************************
   * List accounts
   *********************************************/
  const listParams: Bila.AccountListParams = {
    page: 1,
    perPage: 50,
  };

  const accounts: Bila.AccountListResponse = await client.accounts.list(listParams);
  console.log('list:', accounts);

  /********************************************
   * Get account balance
   *********************************************/
  const balance: Bila.AccountGetBalanceResponse = await client.accounts.getBalance(ACCOUNT_ID);
  console.log('getBalance:', balance);
}

main().catch(console.error);
