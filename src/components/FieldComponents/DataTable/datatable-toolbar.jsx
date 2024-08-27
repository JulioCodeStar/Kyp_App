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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { IconFilterFilled } from "@tabler/icons-react";

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
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 border-dashed">
              <IconFilterFilled className="mr-2 size-4" />
              Filtrar por Sede
              {/* {statusFilter.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {statusFilter.length}
              </Badge>
            )} */}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[12.5rem] p-0" align="start">
            <Command>
              <CommandInput placeholder={"Sede"} />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  <div className="space-y-2">
                    {["Lima", "Arequipa", "Chiclayo"].map((status) => (
                      <CommandItem key={status} className="flex items-center">
                        <Checkbox
                          id={status}
                          // checked={statusFilter.includes(status)}
                          // onCheckedChange={(checked) => {
                          //   setStatusFilter(
                          //     checked
                          //       ? [...statusFilter, status]
                          //       : statusFilter.filter((s) => s !== status)
                          //   )
                          // }}
                        />
                        <span className="ml-2">{status}</span>
                      </CommandItem>
                    ))}
                  </div>
                  {/* {options.map((option) => {
                    const isSelected = selectedValues.has(option.value);

                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => {
                          if (isSelected) {
                            selectedValues.delete(option.value);
                          } else {
                            selectedValues.add(option.value);
                          }
                          const filterValues = Array.from(selectedValues);
                          column?.setFilterValue(
                            filterValues.length ? filterValues : undefined
                          );
                        }}
                      >
                        <div
                          className={cn(
                            "mr-2 flex size-4 items-center justify-center rounded-sm border border-primary",
                            isSelected
                              ? "bg-primary text-primary-foreground"
                              : "opacity-50 [&_svg]:invisible"
                          )}
                        >
                          <CheckIcon className="size-4" aria-hidden="true" />
                        </div>
                        {option.icon && (
                          <option.icon
                            className="mr-2 size-4 text-muted-foreground"
                            aria-hidden="true"
                          />
                        )}
                        <span>{option.label}</span>
                        {option.withCount &&
                          column
                            ?.getFacetedUniqueValues()
                            ?.get(option.value) && (
                            <span className="ml-auto flex size-4 items-center justify-center font-mono text-xs">
                              {column
                                ?.getFacetedUniqueValues()
                                .get(option.value)}
                            </span>
                          )}
                      </CommandItem>
                    );
                  })} */}
                </CommandGroup>
                {/* {selectedValues.size > 0 && (
                  <>
                    <CommandSeparator />
                    <CommandGroup>
                      <CommandItem
                        onSelect={() => column?.setFilterValue(undefined)}
                        className="justify-center text-center"
                      >
                        Clear filters
                      </CommandItem>
                    </CommandGroup>
                  </>
                )} */}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 border-dashed">
              <IconFilterFilled className="mr-2 size-4" />
              Filtrar por Estado
              {/* {priorityFilter.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {priorityFilter.length}
              </Badge>
            )} */}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[12.5rem] p-0" align="start">
            <Command>
              <CommandInput placeholder={"Estados"} />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  <div className="space-y-2">
                    {[
                      "Cotización",
                      "Contrato",
                      "Donación",
                      "EsSalud",
                      "Accesorios",
                    ].map((priority) => (
                      <CommandItem key={priority} className="flex items-center">
                        <Checkbox
                          id={priority}
                          // checked={priorityFilter.includes(priority)}
                          // onCheckedChange={(checked) => {
                          //   setPriorityFilter(
                          //     checked
                          //       ? [...priorityFilter, priority]
                          //       : priorityFilter.filter((p) => p !== priority)
                          //   )
                          // }}
                        />
                        <label htmlFor={priority} className="ml-2">
                          {priority}
                        </label>
                      </CommandItem>
                    ))}
                  </div>
                  {/* {options.map((option) => {
                    const isSelected = selectedValues.has(option.value);
                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => {
                          if (isSelected) {
                            selectedValues.delete(option.value);
                          } else {
                            selectedValues.add(option.value);
                          }
                          const filterValues = Array.from(selectedValues);
                          column?.setFilterValue(
                            filterValues.length ? filterValues : undefined
                          );
                        }}
                      >
                        <div
                          className={cn(
                            "mr-2 flex size-4 items-center justify-center rounded-sm border border-primary",
                            isSelected
                              ? "bg-primary text-primary-foreground"
                              : "opacity-50 [&_svg]:invisible"
                          )}
                        >
                          <CheckIcon className="size-4" aria-hidden="true" />
                        </div>
                        {option.icon && (
                          <option.icon
                            className="mr-2 size-4 text-muted-foreground"
                            aria-hidden="true"
                          />
                        )}
                        <span>{option.label}</span>
                        {option.withCount &&
                          column
                            ?.getFacetedUniqueValues()
                            ?.get(option.value) && (
                            <span className="ml-auto flex size-4 items-center justify-center font-mono text-xs">
                              {column
                                ?.getFacetedUniqueValues()
                                .get(option.value)}
                            </span>
                          )}
                      </CommandItem>
                    );
                  })} */}
                </CommandGroup>
                {/* {selectedValues.size > 0 && (
                  <>
                    <CommandSeparator />
                    <CommandGroup>
                      <CommandItem
                        onSelect={() => column?.setFilterValue(undefined)}
                        className="justify-center text-center"
                      >
                        Clear filters
                      </CommandItem>
                    </CommandGroup>
                  </>
                )} */}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              Filtrar por Fechas
              {/* {dateFilter.from && (
              <Badge variant="secondary" className="ml-2">
                {format(dateFilter.from, 'MMM d')}
                {dateFilter.to && ` - ${format(dateFilter.to, 'MMM d')}`}
              </Badge>
            )} */}
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
        {/* {filterableColumns.length > 0 &&
          filterableColumns.map(
            // (column) =>
            //   table.getColumn(column.value ? String(column.value) : "") && (
            //     <DataTableFacetedFilter
            //       key={String(column.value)}
            //       column={table.getColumn(
            //         column.value ? String(column.value) : ""
            //       )}
            //       title={column.label}
            //       options={column.options ?? []}
            //     />
            //   )
          )} */}
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
    </div>
  );
}
