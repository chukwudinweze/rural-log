import Link from "next/link";

interface LinkItemProps {
  icon: any;
  href: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ icon: Icon, href }) => {
  return (
    <li className="p-1 rounded-md hover:bg-redBrand">
      <Link href={href} className="text-white">
        <Icon size={18} />
      </Link>
    </li>
  );
};

export default LinkItem;
