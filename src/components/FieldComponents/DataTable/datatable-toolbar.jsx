/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMemo } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { IconCalendarMonth, IconDownload } from "@tabler/icons-react";
import { DatatableFilter } from "./datatable-filter";
import { Label } from "@/components/ui/label";

export function DataTableToolbar({ table, filterFields = [] }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const { searchableColumns, filterableColumns } = useMemo(() => {
    return {
      searchableColumns: filterFields.filter((field) => !field.options),
      filterableColumns: filterFields.filter((field) => field.options),
    };
  }, [filterFields]);

  return (
    <div
      className={cn(
        "flex w-full items-center justify-between space-x-2 overflow-auto ps-2 py-5"
      )}
    >
      <div className="flex flex-1 items-center space-x-2">
        {searchableColumns.length > 0 &&
          searchableColumns.map(
            (column) =>
              table.getColumn(column.value ? column.value : "") && (
                <Input
                  key={column.value}
                  placeholder={column.placeholder}
                  value={table.getColumn(column.value)?.getFilterValue() ?? ""}
                  onChange={(event) =>
                    table
                      .getColumn(column.value)
                      ?.setFilterValue(event.target.value)
                  }
                  className="h-9 w-40 lg:w-64"
                />
              )
          )}
        {filterableColumns.length > 0 &&
          filterableColumns.map(
            (column) =>
              table.getColumn(column.value ? String(column.value) : "") && (
                <DatatableFilter
                  key={String(column.value)}
                  column={table.getColumn(
                    column.value ? String(column.value) : ""
                  )}
                  title={column.label}
                  options={column.options ?? []}
                />
              )
          )}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              size="sm"
              className={cn(
                "justify-start text-left font-normal h-8 border-dashed"
              )}
            >
              <IconCalendarMonth className="mr-2 h-4 w-4" />
              Filtrar por Fecha
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              // selected={dateFilter}
              // onSelect={setDateFilter}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
        {isFiltered && (
          <Button
            aria-label="Reset filters"
            variant="ghost"
            className="h-8 px-2 lg:px-3 hover:bg-red-100"
            onClick={() => table.resetColumnFilters()}
          >
            Reset
            <Cross2Icon className="ml-2 size-4" aria-hidden="true" />
          </Button>
        )}
      </div>

      {/* Exportar Datos */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn("h-8 border-dashed")}
          >
            <IconDownload className="mr-2 size-4" />
            Exportar
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="end">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
