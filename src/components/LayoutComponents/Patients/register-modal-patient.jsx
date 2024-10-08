/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
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
import { RegisterNewPatient } from "@/hooks/patients";
import { data } from "@/validations/patients/dataPatient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

export function RegisterModalPatient({ open, setOpen, onPatientRegistered }) {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(data),
  });

  function onSubmit(formData) {
    startTransition(async () => {
      try {
        const result = await RegisterNewPatient(formData);
        console.log(result.success);
        
        if (result.success) {
          form.reset();
          setOpen(false);
          toast.success(result.res);
          onPatientRegistered();
        } else {
          toast.error("Error al registrar el paciente");
        }
      } catch (error) {
        toast.error("Ocurrió un error inesperado");
      }
    });
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[1100px] sm:max-h-[95vh]">
          <DialogHeader>
            <DialogTitle>Nuevo Paciente</DialogTitle>
            <DialogDescription>
              Para Registrar a un paciente debes llenar los campos obligatorios
              (*).
            </DialogDescription>
          </DialogHeader>
          <FormRegisterPatient form={form} onSubmit={onSubmit}>
            <DialogFooter>
              <Button 
                disabled={isPending} 
                type="submit"
              >
                {isPending && (
                  <ReloadIcon
                    className="mr-2 size-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Guardar
              </Button>
            </DialogFooter>
          </FormRegisterPatient>
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
        <FormRegisterPatient form={form} onSubmit={onSubmit} className={"px-4 overflow-auto"}>
          <DrawerFooter className="pt-2 ">
            <Button type="submit">Guardar</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </FormRegisterPatient>
      </DrawerContent>
    </Drawer>
  );
}
