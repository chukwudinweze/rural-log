"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import React from "react";
import LowerNavItem from "./lowerNavItem";
import SocialMedia from "./socialMedia";

const LowerNav = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        href: "/",
        active: pathname === "/",
        flex: "flex-1",
      },
      {
        label: "Products",
        href: "/products",
        active: pathname === "/products",
      },
      {
        label: "About",
        href: "/about",
        active: pathname === "/about",
      },

      {
        label: "Contact us",
        href: "/contact-us",
        active: pathname === "/contact-us",
      },

      {
        label: "Become our Agent",
        href: "#",
        active: false,
        triggerDialog: true,
      },
    ],
    [pathname]
  );
  return (
    <div className="flex justify-center items-center w-full md:px-20 md:gap-60 bg-green-700 ">
      <ul className="flex items-center justify-between md:gap-8 pb-1">
        {routes.map((route) => (
          <LowerNavItem
            key={route.label}
            label={route.label}
            href={route.href}
            active={route.active}
            flex={route.flex}
            triggerDialog={route.triggerDialog}
          />
        ))}
      </ul>
      <SocialMedia />
    </div>
  );
};

export default LowerNav;
