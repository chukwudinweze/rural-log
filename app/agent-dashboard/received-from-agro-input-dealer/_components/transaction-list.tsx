import { products } from "@/components/productList/ProductLists";
import TransactionCard from "./transaction-card";

export const transactionList = [
  {
    id: 1,
    name: products[0].name,
    price: 2000,
    dateRequested: "11-11-2023",
    state: "Lagos",
    lGA: "Surulere",
    street: "No. 20 Jolayemi",
    customerName: "Femi",
    amount: 5,
  },
  {
    id: 2,
    name: products[1].name,
    price: 2000,
    dateRequested: "11-11-2023",
    state: "Lagos",
    lGA: "Surulere",
    street: "No. 20 Jolayemi",
    customerName: "Femi",
    amount: 10,
  },
  {
    id: 3,
    name: products[2].name,
    price: 2000,
    dateRequested: "11-11-2023",
    state: "Lagos",
    lGA: "Surulere",
    street: "No. 20 Jolayemi",
    customerName: "Femi",
    amount: 50,
  },
  {
    id: 4,
    name: products[3].name,
    price: 2000,
    dateRequested: "11-11-2023",
    state: "Lagos",
    lGA: "Surulere",
    street: "No. 20 Jolayemi",
    customerName: "Femi",
    amount: 67,
  },
  {
    id: 5,
    name: products[4].name,
    price: 2000,
    dateRequested: "11-11-2023",
    state: "Lagos",
    lGA: "Surulere",
    street: "No. 20 Jolayemi",
    customerName: "Femi",
    amount: 45,
  },
];

const TxnList = () => {
  return (
    <section className="">
      <ul className=" px-20 flex flex-col justify-center w-full">
        {transactionList.map((item) => (
          <TransactionCard
            key={item.id}
            id={item.id}
            customerName={item.customerName}
            title={item.name}
            dateRequested={item.dateRequested}
          />
        ))}
      </ul>
    </section>
  );
};

export default TxnList;
