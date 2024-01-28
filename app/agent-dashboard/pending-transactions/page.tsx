import React from "react";
import TxnCard from "./_component/txn-card";
import DashboardHeading from "../_components/dashboard-heading";

const PendingTxn = () => {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <DashboardHeading title="Pending Transactions" />
      <div>
        <TxnCard
          title="Pending transaction to be received from the Agro-input"
          amount={1500}
          path="/agent-dashboard/transaction-to-be-received-from-input-dealer"
        />
        <TxnCard
          title="Received from the Agro-input dealer for fulfilment"
          amount={1500}
          path="/agent-dashboard/received-from-agro-input-dealer"
        />
        <TxnCard
          title="Pending transactions to be fulfilled"
          amount={1500}
          path="/agent-dashboard/pending-transactions-to-be-fulfilled"
        />
      </div>
    </div>
  );
};

export default PendingTxn;
