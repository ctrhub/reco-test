import { createFileRoute } from '@tanstack/react-router';
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import { Container } from '@/components/atoms/containter';
import { DefaultCatchBoundary } from '@/components/pages/default-catch-boundary';
import { DataTable } from '@/components/organisms/table/data-table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar';
import { DataTablePagination } from '@/components/organisms/table/table-pagination';
import { InventoryItem } from '@/lib/types/app-inventory';
import { useInventoryList } from '@/lib/state/inventory.state';

export const Route = createFileRoute('/(app)/_app/')({
  errorComponent: (props) => {
    return <DefaultCatchBoundary {...props} />;
  },
  ssr: false,
  component: Home,
});

// Table cols
export const columns: ColumnDef<InventoryItem>[] = [
  {
    accessorKey: 'title',
    header: 'Name',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10 ring-1 ring-muted">
            <AvatarImage
              src={row.original.logoUrl}
              alt={row.original.title}
              className="object-cover"
            />
            <AvatarFallback className="text-sm">{row.original.title}</AvatarFallback>
          </Avatar>
          <span className="truncate">{row.original.title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => {
      return <span className="overflow-hidden truncate">{row.getValue('category')}</span>;
    },
  },
  {
    accessorKey: 'connector',
    header: 'Connector',
    cell: ({ row }) => {
      return (
        <Avatar className="w-10 h-10 ring-1 ring-muted">
          <AvatarImage
            src={row.original.connector.logoUrl}
            alt={row.original.connector.title}
            className="object-cover"
          />
          <AvatarFallback className="text-sm">{row.original.connector.title}</AvatarFallback>
        </Avatar>
      );
    },
  },
];

function InvetoryTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({ pageSize: 2, pageIndex: 0 });

  const { inventoryList, isLoadingInventory } = useInventoryList({ page: pagination.pageIndex });

  const table = useReactTable({
    data: inventoryList,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    rowCount: inventoryList.length,
    state: {
      sorting,
      pagination,
    },
    onPaginationChange: setPagination,
    manualPagination: true,
  });

  // useEffect(() => {
  // table.setPagination((prevState) => ({ ...prevState, pageSize: 1 }))
  // table.setPageIndex(table.getPageCount() + 1)
  // }, [])

  // console.log('table.getPageCount()', table.getPageCount());

  return (
    <>
      {isLoadingInventory ? (
        <div>
          Display loading shimmer...
        </div>
      ) : (
        <>
        <DataTable
            table={table}
            // columns={columns}
            // data={data}
          />
          <DataTablePagination
            table={table}
            pageSizeList={[2, 3]}
            className="mt-2 justify-center"
          />
          {/* <Button onClick={() => table.setPageIndex(table.getPageCount() + 1)}>next</Button> */}
        </>
      )}

    </>
  );
}

function Home() {
  return (
    <Container className="py-4">
      <InvetoryTable />
    </Container>
  );
}
