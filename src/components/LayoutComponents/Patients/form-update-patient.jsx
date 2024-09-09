/* eslint-disable react/prop-types */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Controller } from "react-hook-form";

export function FormUpdatePatient({ form, onSubmit, className, children }) {

  const { 
    formState: { errors },
  } = form;

  const AlertLogin = (field) => {
    return (
      errors[field] && (
        <span className="font-semibold text-red-500 text-xs">
          {errors[field].message}
        </span>
      )
    );
  };

  return (
    <Tabs defaultValue="#1" className={cn("w-full", className)}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TabsList className="flex w-full items-center justify-around overflow-auto ps-2 space-x-2">
          <TabsTrigger value="#1" className="w-full">
            Datos Personales
          </TabsTrigger>
          <TabsTrigger value="#2" className="w-full">
            Datos Técnicos
          </TabsTrigger>
          <TabsTrigger value="#3" className="w-full">
            Datos Médicos
          </TabsTrigger>
          <TabsTrigger value="#4" className="w-full">
            Observaciones
          </TabsTrigger>
        </TabsList>
        <Separator className="my-4" />
        <TabsContent value="#1">
          <div className="grid w-full items-start gap-5 p-4 pt-2 sm:grid-cols-4">
            <div className="grid gap-3">
              <Label>
                Nombres <span className="text-red-600">(*)</span>
              </Label>
              <Input
                type="text"
                placeholder="Nombres"
                {...form.register("nombres")}
              />
              {AlertLogin("nombres")}
            </div>
            <div className="grid gap-3">
              <Label>
                Apellidos <span className="text-red-600">(*)</span>
              </Label>
              <Input
                type="text"
                placeholder="Apellidos"
                {...form.register("apellidos")}
              />
              {AlertLogin("apellidos")}
            </div>
            <div className="grid gap-3">
              <Label>
                DNI - C.E. <span className="text-red-600">(*)</span>
              </Label>
              <Input
                type="text"
                placeholder="DNI - C.E."
                {...form.register("dni")}
              />
              {AlertLogin("dni")}
            </div>
            <div className="grid gap-3">
              <Label>
                Seleccionar Genero <span className="text-red-600">(*)</span>
              </Label>
              <Controller
                name="genero"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccionar Genero" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Genero</SelectLabel>
                        <SelectItem value="Masculino">Masculino</SelectItem>
                        <SelectItem value="Femenino">Femenino</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {AlertLogin("genero")}
            </div>
            <div className="grid gap-3">
              <Label>
                Edad <span className="text-red-600">(*)</span>
              </Label>
              <Input type="number" placeholder="Edad" {...form.register("edad")} />
              {AlertLogin("edad")}
            </div>
            <div className="grid gap-3">
              <Label>
                Celular <span className="text-red-600">(*)</span>
              </Label>
              <Input
                type="number"
                placeholder="Celular"
                {...form.register("celular")}
              />
              {AlertLogin("celular")}
            </div>
            <div className="grid gap-3">
              <Label>
                Fecha de Nacimiento <span className="text-red-600">(*)</span>
              </Label>
              <Input
                type="date"
                placeholder="Fecha de Nacimiento"
                {...form.register("fecha_nac")}
              />
              {AlertLogin("fecha_nac")}
            </div>
            <div className="grid gap-3">
              <Label>
                Sede de Atención <span className="text-red-600">(*)</span>
              </Label>
              <Controller
                name="sede"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sede de Atención" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Sede de Atención</SelectLabel>
                        <SelectItem value="Lima">Lima</SelectItem>
                        <SelectItem value="Arequipa">Arequipa</SelectItem>
                        <SelectItem value="Chiclayo">Chiclayo</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {AlertLogin("sede")}
            </div>
            <div className="grid gap-3 sm:col-span-2">
              <Label>
                Dirección <span className="text-red-600">(*)</span>
              </Label>
              <Input
                type="text"
                placeholder="Dirección"
                {...form.register("direccion")}
              />
              {AlertLogin("direccion")}
            </div>

            <div className="grid gap-3">
              <Label>
                Locación <span className="text-red-600">(*)</span>
              </Label>
              <Input
                type="text"
                placeholder="Locación"
                {...form.register("locacion")}
              />
              {AlertLogin("locacion")}
            </div>
            <div className="grid gap-3">
              <Label>Correo de Atención</Label>
              <Input
                type="email"
                placeholder="Correo Electrónico"
                {...form.register("email_pat")}
              />
              {AlertLogin("email_pat")}
            </div>
            <div className="grid gap-3">
              <Label>
                Seleccione Vendedor(a) <span className="text-red-600">(*)</span>
              </Label>
              <Controller
                name="vendedor"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccione Vendedor(a)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Seleccione Vendedor(a)</SelectLabel>
                        <SelectItem value="Yessenia Anaí Cuya Sarango">
                          Yessenia Anaí Cuya Sarango
                        </SelectItem>
                        <SelectItem value="Zuleik Robles Ortiz">
                          Zuleik Robles Ortiz
                        </SelectItem>
                        <SelectItem value="No Habido">No Habido</SelectItem>
                        <SelectItem value="Otros">Otros</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {AlertLogin("vendedor")}
            </div>
            <div className="grid gap-3">
              <Label>Otro Contacto</Label>
              <Input
                type="number"
                placeholder="Otro Contacto"
                {...form.register("otro_contact")}
              />
              {AlertLogin("otro_contact")}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="#2">
          <div className="grid w-full items-start gap-5 p-4 pt-2 sm:grid-cols-2">
            <div className="grid gap-3">
              <Label>
                Seleccionar Estado del Paciente{" "}
                <span className="text-red-600">(*)</span>
              </Label>
              <Controller
                name="estado"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccione Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Seleccione Estado</SelectLabel>
                        <SelectItem value="Cotización">Cotización</SelectItem>
                        <SelectItem value="Contrato">Contrato</SelectItem>
                        <SelectItem value="Donación">Donación</SelectItem>
                        <SelectItem value="EsSalud">EsSalud</SelectItem>
                        <SelectItem value="Accesorios">Accesorios</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {AlertLogin("estado")}
            </div>
            <div className="grid gap-3">
              <Label>
                Seleccionar Canal <span className="text-red-600">(*)</span>
              </Label>
              <Controller
                name="canal"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccione Canal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Seleccione Canal</SelectLabel>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="Youtube">Youtube</SelectItem>
                        <SelectItem value="TikTok">TikTok</SelectItem>
                        <SelectItem value="Instagram">Instagram</SelectItem>
                        <SelectItem value="Recomendación">
                          Recomendación
                        </SelectItem>
                        <SelectItem value="Página Web">Página Web</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {AlertLogin("canal")}
            </div>
            <div className="grid gap-3">
              <Label>
                Tiempo de Amputación <span className="text-red-600">(*)</span>
              </Label>
              <Input
                type="text"
                placeholder="Tiempo de Amputación"
                {...form.register("time_ampu")}
              />
              {AlertLogin("time_ampu")}
            </div>
            <div className="grid gap-3">
              <Label>
                Motivo de Amputación <span className="text-red-600">(*)</span>
              </Label>
              <Input
                type="text"
                placeholder="Motivo de Amputación"
                {...form.register("motivo")}
              />
              {AlertLogin("motivo")}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="#3">
          <div className="grid w-full items-start gap-5 p-4 pt-2 sm:grid-cols-2">
            <div className="grid gap-3">
              <Label>Afecciones Médicas</Label>
              <Input
                type="text"
                placeholder="Afecciones Médicas"
                {...form.register("afecciones")}
              />
            </div>
            <div className="grid gap-3">
              <Label>Alergias</Label>
              <Input
                type="text"
                placeholder="Alergias"
                {...form.register("alergias")}
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="#4">
          <div className="grid w-full items-start gap-5 p-4 pt-2 sm:grid-cols-1">
            <div className="grid gap-3">
              <Label>Observaciones</Label>
              <Textarea
                placeholder="Observaciones"
                className="h-40"
                {...form.register("observacion")}
              />
            </div>
          </div>
        </TabsContent>
        {children}
      </form>
    </Tabs>
  );
}
