import { cn } from "@/lib/utils";
import Link from "next/link";

interface LowerNavItem {
  label: string;
  href: string;
  active: boolean;
}
const LowerNavItem: React.FC<LowerNavItem> = ({ active, href, label }) => {
  return (
    <li className="text-red-500 hidden">
      <Link href={href} className="text-red-500 hidden">
        {label}
      </Link>
    </li>
  );
};

export default LowerNavItem;
