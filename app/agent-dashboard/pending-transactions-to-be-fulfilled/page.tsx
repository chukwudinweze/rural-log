import TxnList from "../_components/transaction-list";

const UnfufilledTxn = () => {
  return (
    <div className="w-[100%] border ">
      <h3 className="text-center font-bold text-xl mt-5">
        Pending Transactions To be Fulfilled
      </h3>
      <TxnList />
    </div>
  );
};

export default UnfufilledTxn;
