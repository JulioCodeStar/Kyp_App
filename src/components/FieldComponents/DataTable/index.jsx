/* eslint-disable react/prop-types */
import { flexRender } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { DataTablePagination } from "./datatable-pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
} from "@radix-ui/react-icons";
import { MoreHorizontal } from "lucide-react";

export function DataTable({ table, children, titleSData }) {
  return (
    <Card>
      <CardContent>
        {children}
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="font-bold">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    <div className={cn("flex items-center space-x-2")}>
                      {header.column.columnDef.enableSorting ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-label={
                                header.column.getIsSorted() === "desc"
                                  ? "Sorted descending. Click to sort ascending."
                                  : header.column.getIsSorted() === "asc"
                                  ? "Sorted ascending. Click to sort descending."
                                  : "Not sorted. Click to sort ascending."
                              }
                              variant="ghost"
                              size="md"
                              className="-ml-3 p-1.5 h-8 data-[state=open]:bg-accent"
                            >
                              <span>{header.column.columnDef.header}</span>
                              {header.column.getCanSort() &&
                              header.column.getIsSorted() === "desc" ? (
                                <ArrowDownIcon
                                  className="ml-2 size-4"
                                  aria-hidden="true"
                                />
                              ) : header.column.getIsSorted() === "asc" ? (
                                <ArrowUpIcon
                                  className="ml-2 size-4"
                                  aria-hidden="true"
                                />
                              ) : (
                                <CaretSortIcon
                                  className="ml-2 size-4"
                                  aria-hidden="true"
                                />
                              )}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start">
                            {header.column.getCanSort() && (
                              <>
                                <DropdownMenuItem
                                  aria-label="Sort ascending"
                                  onClick={() =>
                                    header.column.toggleSorting(false)
                                  }
                                >
                                  <ArrowUpIcon
                                    className="mr-2 size-3.5 text-muted-foreground/70"
                                    aria-hidden="true"
                                  />
                                  Asc
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  aria-label="Sort descending"
                                  onClick={() =>
                                    header.column.toggleSorting(true)
                                  }
                                >
                                  <ArrowDownIcon
                                    className="mr-2 size-3.5 text-muted-foreground/70"
                                    aria-hidden="true"
                                  />
                                  Desc
                                </DropdownMenuItem>
                              </>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <span>{header.column.columnDef.header}</span>
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className={cn("font-medium")}>
            {table.getRowModel()?.rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} className={cn("h-[50px]")}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.column.id} >
                        <div>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>
                      </TableCell>
                    ))}
                    <TableCell className="sticky right-0 bg-background">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
            ): (
              <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    {titleSData}
                  </TableCell>
                </TableRow>
            )}
            
          </TableBody>
        </Table>
        <div className="flex flex-col gap-2.5 mt-4">
          <DataTablePagination table={table} />
        </div>
      </CardContent>
    </Card>
  );
}
