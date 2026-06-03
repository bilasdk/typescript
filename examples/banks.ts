/**
 * Banks examples
 *
 * To demonstrate how to list supported banks
 * and financial institutions.
 */

import Bila from '@usebila/sdk';

const client = new Bila({
  apiKey: process.env['BILA_API_KEY'] ?? 'sk_test_your_api_key_here',
  environment: 'sandbox',
});

async function main() {
  const listParams: Bila.BankListParams = {
    country: 'zm',
  };

  const banks: Bila.BankListResponse = await client.banks.list(listParams);
  console.log('list:', banks);
}

main().catch(console.error);
