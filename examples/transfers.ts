/**
 * Transfers examples
 *
 * To demonstrate how to send payouts via
 * bank transfer and mobile money.
 */

import Bila from '@usebila/sdk';

const client = new Bila({
  apiKey: process.env['BILA_API_KEY'] ?? 'sk_test_your_api_key_here',
  environment: 'sandbox',
});

const TRANSFER_ID = '68f11209-451f-4a15-bfcd-d916eb8b09f4';
const ACCOUNT_ID = '68f11209-451f-4a15-bfcd-d916eb8b09f4';
const TRANSFER_RECIPIENT_ID = '68f11209-451f-4a15-bfcd-d916eb8b09f4';
const WALLET_ID = '68f11209-451f-4a15-bfcd-d916eb8b09f4';
const BANK_REFERENCE = 'transfer-001';
const MOBILE_REFERENCE = 'mobile-transfer-001';

async function main() {
  /********************************************
   * Retrieve transfer
   *********************************************/
  const transfer: Bila.TransferRetrieveResponse = await client.transfers.retrieve(TRANSFER_ID);
  console.log('retrieve:', transfer);

  /********************************************
   * List transfers
   *********************************************/
  const listParams: Bila.TransferListParams = {
    accountId: ACCOUNT_ID,
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2024-12-31T23:59:59Z',
    page: 1,
    perPage: 50,
    status: 'pending',
    type: 'bank-account',
  };

  const transfers: Bila.TransferListResponse = await client.transfers.list(listParams);
  console.log('list:', transfers);

  /********************************************
   * Get transfer status by reference
   *********************************************/
  const status: Bila.TransferGetStatusByReferenceResponse =
    await client.transfers.getStatusByReference(BANK_REFERENCE);
  console.log('getStatusByReference:', status);

  /********************************************
   * Initiate bank transfer
   *********************************************/
  const bankParams: Bila.TransferInitiateBankTransferParams = {
    accountId: ACCOUNT_ID,
    amount: 1000,
    reference: BANK_REFERENCE,
    accountNumber: '1234567890',
    bankId: 'bank-001',
    country: 'zm',
    narration: 'Payment for services',
    recipientName: 'Jane Doe',
    transferRecipientId: TRANSFER_RECIPIENT_ID,
    walletId: WALLET_ID,
  };

  const bankTransfer: Bila.TransferInitiateBankTransferResponse =
    await client.transfers.initiateBankTransfer(bankParams);
  console.log('initiateBankTransfer:', bankTransfer);

  /********************************************
   * Initiate mobile money transfer
   *********************************************/
  const mobileParams: Bila.TransferInitiateMobileMoneyTransferParams = {
    amount: 250,
    country: 'zm',
    operator: 'airtel',
    phone: '0977433571',
    reference: MOBILE_REFERENCE,
    narration: 'Mobile money payout',
    recipientName: 'Jane Doe',
    walletId: WALLET_ID,
  };

  const mobileTransfer: Bila.TransferInitiateMobileMoneyTransferResponse =
    await client.transfers.initiateMobileMoneyTransfer(mobileParams);
  console.log('initiateMobileMoneyTransfer:', mobileTransfer);
}

main().catch(console.error);
