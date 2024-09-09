/* eslint-disable react/prop-types */
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
import { FormUpdatePatient } from "./form-update-patient";
import { UpdatedPatient } from "@/hooks/patients";
import { data } from "@/validations/patients/dataPatient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useTransition } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

export default function UpdateModalPatient({ open, setOpen, rowData, onPatientUpdated }) {

  const isDesktop = useMediaQuery("(min-width: 640px)");
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(data),
    defaultValues: {
      nombres: "",
      apellidos: "",
      dni: "",
      genero: "",
      edad: "",
      celular: "",
      fecha_nac: "",
      sede: "",
      direccion: "",
      locacion: "",
      email_pat: "",
      vendedor: "",
      otro_contact: "",
      estado: "",
      canal: "",
      time_ampu: "",
      motivo: "",
      afecciones: "",
      alergias: "",
      observacion: "",
    }
  });

  const { reset } = form;

  useEffect(() => {
    if (rowData) {
      reset({
        nombres: rowData.nombres,
        apellidos: rowData.apellidos,
        dni: rowData.dni,
        genero: rowData.genero,
        edad: rowData.edad,
        celular: rowData.celular,
        fecha_nac: rowData.fecha_nac,
        sede: rowData.sede,
        direccion: rowData.direccion,
        locacion: rowData.locacion,
        email_pat: rowData.email_pat,
        vendedor: rowData.vendedor,
        otro_contact: rowData.otro_contact,
        estado: rowData.estado,
        canal: rowData.canal,
        time_ampu: rowData.time_ampu,
        motivo: rowData.motivo,
        afecciones: rowData.afecciones,
        alergias: rowData.alergias,
        observacion: rowData.observacion,
      });
    }
  }, [rowData, reset]);

  function onSubmit(formData) {
    console.log(rowData.id);
    startTransition(async () => {
      try {
        const result = await UpdatedPatient(formData, rowData.id);
        console.log(result.success);
        
        if (result.success) {
          form.reset();
          setOpen(false);
          toast.success(result.res);
          onPatientUpdated();
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
            <DialogTitle>Actualizar datos del Paciente - <span className="uppercase">{rowData.nombres} {rowData.apellidos}</span></DialogTitle>
            <DialogDescription>
              Para actualizar datos a un paciente debes llenar los campos obligatorios
              (*).
            </DialogDescription>
          </DialogHeader>
          <FormUpdatePatient form={form} onSubmit={onSubmit}>
            <DialogFooter>
              <Button disabled={isPending} type="submit">
                {isPending && (
                  <ReloadIcon
                    className="mr-2 size-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Actualizar
              </Button>
            </DialogFooter>
          </FormUpdatePatient>
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
        <FormUpdatePatient
          form={form}
          onSubmit={onSubmit}
          className={"px-4 overflow-auto"}
        >
          <DrawerFooter className="pt-2 ">
            <Button type="submit">Guardar</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </FormUpdatePatient>
      </DrawerContent>
    </Drawer>
  );
}
