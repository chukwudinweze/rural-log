"use client";

import SidenavLinkItem from "./components/SidenavLinkItem";
import useRoutes from "@/hooks/useRoutes";

const SideBar = () => {
  const routes = useRoutes();
  return (
    <aside className="h-full bg-white min-w-[240px] pl-1 pr-4 py-4 pb-6">
      <ul className="flex flex-col gap-4 h-full">
        {routes.map((route) => (
          <SidenavLinkItem
            key={route.category}
            label={route.label}
            active={route.active}
            category={route.category}
            icon={route.icon}
          />
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
