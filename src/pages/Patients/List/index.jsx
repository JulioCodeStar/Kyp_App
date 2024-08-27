/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconCirclePlusFilled } from "@tabler/icons-react";
import { DataTablePatients } from "@/app/patients";
import { useState } from "react";
import { RegisterModalPatient } from "@/components/LayoutComponents/Patients/register-modal-patient";

export default function index() {

  const [ showRegisterPatient, setShowRegisterPatient ] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">Listado de Pacientes</h3>
          <p className="text-xs text-gray-500">
            Pacientes - Gestión de Pacientes
          </p>
        </div>
        <RegisterModalPatient open={showRegisterPatient} setOpen={setShowRegisterPatient} />
        <Button 
          className={cn("bg-blue-600 hover:bg-blue-500")} 
          onClick={() => setShowRegisterPatient(true)}
        >
          <IconCirclePlusFilled className="mr-2" />
          Agregar
        </Button>
      </div>
      <DataTablePatients />
    </>
  );
}
