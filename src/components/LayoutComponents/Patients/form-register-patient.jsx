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

export function FormRegisterPatient({ className }) {
  return (
    <Tabs defaultValue="#1" className={cn("w-full", className)}>
      <form action="">
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
        <TabsContent value="#1" className="overflow-auto">
          <div className="grid w-full items-start gap-5 p-4 pt-2 sm:grid-cols-4">
            <div className="grid gap-3">
              <Label>Nombres</Label>
              <Input type="text" placeholder="Apellidos" />
            </div>
            <div className="grid gap-3">
              <Label>Apellidos</Label>
              <Input type="text" placeholder="Apellidos" />
            </div>
            <div className="grid gap-3">
              <Label>DNI - C.E.</Label>
              <Input type="text" placeholder="DNI - C.E." />
            </div>
            <div className="grid gap-3">
              <Label>Seleccionar Genero</Label>
              <Select>
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
            </div>
            <div className="grid gap-3">
              <Label>Edad</Label>
              <Input type="number" placeholder="Edad" />
            </div>
            <div className="grid gap-3">
              <Label>Celular</Label>
              <Input type="number" placeholder="Celular" />
            </div>
            <div className="grid gap-3">
              <Label>Fecha de Nacimiento</Label>
              <Input type="date" placeholder="Fecha de Nacimiento" />
            </div>
            <div className="grid gap-3">
              <Label>Sede de Atención</Label>
              <Select>
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
            </div>
            <div className="grid gap-3 sm:col-span-2">
              <Label>Dirección</Label>
              <Input type="text" placeholder="Dirección" />
            </div>
           
            <div className="grid gap-3">
              <Label>Locación</Label>
              <Input type="text" placeholder="Locación" />
            </div>
            <div className="grid gap-3">
              <Label>Correo de Atención</Label>
              <Input type="email" placeholder="Correo Electrónico" />
            </div>
            <div className="grid gap-3">
              <Label>Seleccione Vendedor(a)</Label>
              <Select>
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
            </div>
            <div className="grid gap-3">
              <Label>Otro Contacto</Label>
              <Input type="number" placeholder="Otro Contacto" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="#2"></TabsContent>
        <TabsContent value="#3"></TabsContent>
        <TabsContent value="#4"></TabsContent>
      </form>
    </Tabs>
  );
}
