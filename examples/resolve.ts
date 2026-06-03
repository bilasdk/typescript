/**
 * Resolve examples
 *
 * To demonstrate how to verify bank account
 * and mobile money account details.
 */

import Bila from '@bila/sdk';

const client = new Bila({
  apiKey: process.env['BILA_API_KEY'] ?? 'sk_test_your_api_key_here',
  environment: 'sandbox',
});

async function main() {
  /********************************************
   * Resolve bank account
   *********************************************/
  const resolveBankParams: Bila.ResolveBankAccountParams = {
    accountNumber: '1234567890',
    bankId: 'bank-001',
    country: 'zm',
  };

  const bankAccount: Bila.ResolveBankAccountResponse = await client.resolve.bankAccount(resolveBankParams);
  console.log('bankAccount:', bankAccount);

  /********************************************
   * Resolve mobile money
   *********************************************/
  const resolveMobileParams: Bila.ResolveMobileMoneyParams = {
    country: 'zm',
    operator: 'airtel',
    phone: '0977433571',
  };

  const mobileMoney: Bila.ResolveMobileMoneyResponse = await client.resolve.mobileMoney(resolveMobileParams);
  console.log('mobileMoney:', mobileMoney);
}

main().catch(console.error);
