import { cn } from "@/lib/utils";

interface TxnDetailProps {
  label: string;
  value: string | number;
  grayBg?: boolean;
}
const TxnDetail = ({ label, value, grayBg }: TxnDetailProps) => {
  return (
    <div
      className={cn(
        `w-full flex items-center justify-between p-4`,
        grayBg && "bg-slate-200"
      )}
    >
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default TxnDetail;
