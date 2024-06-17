import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBar from "../../sidebar/sidebar";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={25} className="md:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="grid gap-4 py-4">
          <div className="md:hidden grid grid-cols-4 items-center gap-4">
            <SideBar />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
