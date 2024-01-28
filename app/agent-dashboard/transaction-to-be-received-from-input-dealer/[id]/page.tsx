import { transactionList } from "../_components/transaction-list";
import TxnDetail from "./_componets/transaction-detail";

interface Iparams {
  id: string;
}

const TransactionId = ({ params }: { params: Iparams }) => {
  const transactionItem = transactionList.find(
    (transaction) => transaction.id.toLocaleString() === params.id
  );

  return (
    <div className="w-full flex justify-center items-center mt-10 text-center">
      <div className="rounded border w-[80%] py-3">
        <h2 className="font-bold text-xl">Transaction Details</h2>
        <div className="text-left flex flex-col justify-center items-center">
          <div className="w-full md:w-[80%]">
            <TxnDetail label="Transaction Id" value={transactionItem?.id!} />
            <TxnDetail label="Title" value={transactionItem?.name!} grayBg />
            <TxnDetail label="Amount" value={transactionItem?.amount!} />
            <TxnDetail
              label="Total Price"
              value={transactionItem?.price!}
              grayBg
            />
            <TxnDetail
              label="Date Created"
              value={transactionItem?.dateRequested!}
            />
            <TxnDetail
              label="Customer name"
              value={transactionItem?.customerName!}
              grayBg
            />
            {/* address */}
            <TxnDetail label="State" value={transactionItem?.state!} />
            <TxnDetail
              label="Local Govt"
              value={transactionItem?.lGA!}
              grayBg
            />
            <TxnDetail label="Street" value={transactionItem?.street!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionId;
