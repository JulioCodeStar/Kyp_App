/* eslint-disable react-hooks/exhaustive-deps */
import { DataTable } from '@/components/FieldComponents/DataTable';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import useGetAllPatients from "@/hooks/patients";
import { useState, useEffect } from 'react';
import { DataTableToolbar } from '@/components/FieldComponents/DataTable/datatable-toolbar';
import dayjs from 'dayjs';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import 'dayjs/locale/es';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
dayjs.locale('es');

const columns = [
  {
    accessorKey: "id_paciente",
    header: "# Código",
    cell: ({ row }) => (
      <div className='flex items-center w-10 '>
        {row.getValue('id_paciente')}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorFn: (row) => `${row.nombres} ${row.apellidos}`,
    accessorKey: 'nombres',
    header: "Nombres y Apellidos",
    cell: ({ row }) => (
      <div className='w-[130px]'>
        {row.getValue('nombres')}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "celular",
    header: "Contacto",
    cell: ({ row }) => (
      <div className="flex">
        <Link target='_blank' to={`https://wa.me/+51${row.getValue('celular')}`}>
          <Button variant="link">
            <IconBrandWhatsapp className='mr-2 h-4 w-4 text-[#1A8151]' />
            {row.getValue('celular')}
          </Button>
        </Link>
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "sede",
    header: "Sede",
    cell: ({ row }) => (
      <div className="flex items-center">
        {row.getValue('sede') === 'Lima' && <Badge variant={"outline"} className={cn("bg-blue-600 text-white")}>{row.getValue('sede')}</Badge>}
        {row.getValue('sede') === 'Arequipa' && <Badge variant={"outline"} className={cn("bg-gray-600 text-white")}>{row.getValue('sede')}</Badge>}
        {row.getValue('sede') === 'Chiclayo' && <Badge variant={"outline"} className={cn("bg-red-600 text-white")}>{row.getValue('sede')}</Badge>}
      </div>
    ),
    filterFn: (row, id, filterValues) => {
      if (!filterValues.length) return true
      return filterValues.includes(row.getValue(id))
    },
    enableSorting: false,
  },
  {
    accessorKey: "created_at",
    header: "Fecha de Registro",
    cell: ( info ) => (
      <div className='w-[150px]'>
        {dayjs(info.getValue()).format('DD [de] MMMM [del] YYYY')}
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => (
      <div className='flex items-center'>
        {row.getValue('estado') === 'Cotización' && <Badge variant={"outline"} className={cn("bg-green-500 text-white")}>{row.getValue('estado')}</Badge>}
        {row.getValue('estado') === 'Contrato' && <Badge variant={"outline"} className={cn("bg-indigo-500 text-white")}>{row.getValue('estado')}</Badge>}
        {row.getValue('estado') === 'Donación' && <Badge variant={"outline"} className={cn("bg-gray-400 text-white")}>{row.getValue('estado')}</Badge>}
        {row.getValue('estado') === 'Accesorios' && <Badge variant={"outline"} className={cn("bg-amber-500 text-white")}>{row.getValue('estado')}</Badge>}
        {row.getValue('estado') === 'EsSalud' && <Badge variant={"outline"} className={cn("bg-red-500 text-white")}>{row.getValue('estado')}</Badge>}
      </div>
    ),
    filterFn: (row, id, filterValues) => {
      if (!filterValues.length) return true
      return filterValues.includes(row.getValue(id))
    },
    enableSorting: false,
  },
];

export default function DataTablePatients() {

  const [ data, setData ] = useState([]);
  const { dataPatients } = useGetAllPatients();

  const [ sorting, setSorting ] = useState([]);
  const [ filtering, setFiltering ] = useState('');

  const filterFields = [
    {
      label: "Nombres",
      value: "nombres",
      placeholder: "Filtrar por nombres y apellidos...",
    },
    {
      label: "Sede",
      value: "sede",
      options: [
        {
          label: "Lima",
          value: "Lima",
          withCount: true,
        },
        {
          label: "Arequipa",
          value: "Arequipa",
          withCount: true,
        },
        {
          label: "Chiclayo",
          value: "Chiclayo",
          withCount: true,
        }
      ]
    },
    {
      label: "Estado",
      value: "estado",
      options: [
        {
          label: "Cotización",
          value: "Cotización",
          withCount: true,
        },
        {
          label: "Contrato",
          value: "Contrato",
          withCount: true,
        },
        {
          label: "Donación",
          value: "Donación",
          withCount: true,
        },
        {
          label: "EsSalud",
          value: "EsSalud",
          withCount: true,
        },
        {
          label: "Accesorios",
          value: "Accesorios",
          withCount: true,
        }
      ]
    }
  ]

  useEffect(() => {
    const AllgetData = async () => {
      const result = await dataPatients();
      setData(result.data);
    };

    AllgetData();
  }, []);

  const table = useReactTable({
    data,
    columns,
    filterFields,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <DataTable table={table} titleSData={"No hay Pacientes Registrados"} >
      <DataTableToolbar table={table} filterFields={filterFields} />
    </DataTable> 
  )
}
