/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FormRegisterPatient } from "./form-register-patient";

export function RegisterModalPatient({ open, setOpen }) {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[1100px] sm:max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Nuevo Paciente</DialogTitle>
            <DialogDescription>
              Para Registrar a un paciente debes llenar los campos obligatorios (*).
            </DialogDescription>
          </DialogHeader>
          <FormRegisterPatient />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader className="text-left">
          <DrawerTitle>Nuevo Paciente</DrawerTitle>
          <DrawerDescription>
            Para Registrar a un paciente debes llenar los campos obligatorios.
          </DrawerDescription>
        </DrawerHeader>
        <FormRegisterPatient className={"px-4 overflow-auto"} />
        <DrawerFooter className="pt-2 ">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
