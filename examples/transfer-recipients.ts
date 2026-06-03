/**
 * Transfer recipients examples
 *
 * To demonstrate how to manage payout recipients
 * for bank accounts and mobile money.
 */

import Bila from '@bila/sdk';

const client = new Bila({
  apiKey: process.env['BILA_API_KEY'] ?? 'sk_test_your_api_key_here',
  environment: 'sandbox',
});

const RECIPIENT_ID = '68f11209-451f-4a15-bfcd-d916eb8b09f4';

async function main() {
  /********************************************
   * Retrieve transfer recipient
   *********************************************/
  const recipient: Bila.TransferRecipientRetrieveResponse =
    await client.transferRecipients.retrieve(RECIPIENT_ID);
  console.log('retrieve:', recipient);

  /********************************************
   * List transfer recipients
   *********************************************/
  const listParams: Bila.TransferRecipientListParams = {
    page: 1,
    perPage: 50,
    type: 'bank-account',
  };

  const recipients: Bila.TransferRecipientListResponse = await client.transferRecipients.list(listParams);
  console.log('list:', recipients);

  /********************************************
   * Create bank account recipient
   *********************************************/
  const bankParams: Bila.TransferRecipientCreateBankAccountParams = {
    accountNumber: '1234567890',
    bankId: 'bank-001',
    accountName: 'John Doe',
    country: 'zm',
  };

  const bankRecipient: Bila.TransferRecipientCreateBankAccountResponse =
    await client.transferRecipients.createBankAccount(bankParams);
  console.log('createBankAccount:', bankRecipient);

  /********************************************
   * Create mobile money recipient
   *********************************************/
  const mobileParams: Bila.TransferRecipientCreateMobileMoneyParams = {
    country: 'zm',
    operator: 'airtel',
    phone: '0977433571',
    accountName: 'John Doe',
  };

  const mobileRecipient: Bila.TransferRecipientCreateMobileMoneyResponse =
    await client.transferRecipients.createMobileMoney(mobileParams);
  console.log('createMobileMoney:', mobileRecipient);
}

main().catch(console.error);
