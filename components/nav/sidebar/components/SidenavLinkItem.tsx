import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidenavLinkItemProps {
  label: string;
  category: string;
  active: boolean;
  icon: any;
}
const SidenavLinkItem: React.FC<SidenavLinkItemProps> = ({
  label,
  category,
  active,
  icon: Icon,
}) => {
  const router = useRouter();

  const handleCategoryNav = () => {
    router.push(`/categories/${category}`);
  };
  return (
    <li
      onClick={handleCategoryNav}
      className={cn(
        "group px-2 py-3 rounded-md hover:bg-redBrand cursor-pointer",
        active && "bg-redBrand"
      )}
    >
      <p
        className={cn(
          "flex items-center justify-start gap-3 font-bold text-gray-600 group-hover:text-white text-sm",
          active && "text-white"
        )}
      >
        <Icon />
        {label}
      </p>
    </li>
  );
};

export default SidenavLinkItem;
