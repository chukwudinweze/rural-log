import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchInput from "./searchBar";
import { ReactElement, ReactNode } from "react";

interface SearchDialogueProps {
  children: ReactNode;
  title: string;
  open: boolean;
  onChange: () => void;
}

const SearchDialogue: React.FC<SearchDialogueProps> = ({
  children,
  title,
  onChange,
  open,
}) => {
  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialogue;
