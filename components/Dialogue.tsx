import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface DialogueProps {
  children: ReactNode;
  title: string;
  open: boolean;
  onChange: () => void;
}

const Dialogue: React.FC<DialogueProps> = ({
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

export default Dialogue;
