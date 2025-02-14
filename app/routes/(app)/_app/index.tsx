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

import { Container } from '@/components/atoms/containter';
import { DefaultCatchBoundary } from '@/components/pages/default-catch-boundary';
import { DataTable } from '@/components/organisms/table/data-table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar';
import { useState } from 'react';
import { DataTablePagination } from '@/components/organisms/table/table-pagination';

export const Route = createFileRoute('/(app)/_app/')({
  errorComponent: (props) => {
    return <DefaultCatchBoundary {...props} />;
  },
  ssr: false,
  component: Home,
});

interface Connector {
  id: string;
  title: string;
  logoUrl: string;
}

// Types
type InventoryItem = {
  id: string;
  title: string;
  logoUrl: string;
  category: string;
  connector: Connector;
};

// Data
export const data: InventoryItem[] = [
  {
    id: '1',
    title: 'Zoom',
    logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Zoom-Logo.png',
    category: 'Video Conferencing And some more text here to truncate',
    connector: {
      id: '0',
      title: 'Zoom',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Zoom-Logo.png',
    },
  },
  {
    id: '2',
    title: 'Slack',
    logoUrl: 'http://',
    category: 'Communication',
    connector: {
      id: '1',
      title: 'Reco',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Zoom-Logo.png',
    },
  },
  {
    id: '3',
    title: 'Google Drive',
    logoUrl: 'http://',
    category: 'Storage',
    connector: {
      id: '2',
      title: 'Reco',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Zoom-Logo.png',
    },
  },
  {
    id: '4',
    title: 'Dropbox',
    logoUrl: 'http://',
    category: 'Storage',
    connector: {
      id: '3',
      title: 'Reco',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Zoom-Logo.png',
    },
  },
  {
    id: '5',
    title: 'Trello',
    logoUrl: 'http://',
    category: 'Project Management',
    connector: {
      id: '4',
      title: 'Reco',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Zoom-Logo.png',
    },
  },
];

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
  const [pagination, setPagination] = useState<PaginationState>({ pageSize: 2, pageIndex: 1 });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      pagination,
    },
    onPaginationChange: setPagination,
    // manualPagination: true,
  });

  // useEffect(() => {
  // table.setPagination((prevState) => ({ ...prevState, pageSize: 1 }))
  // table.setPageIndex(table.getPageCount() + 1)
  // }, [])

  // console.log('table.getPageCount()', table.getPageCount());

  return (
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
  );
}

function Home() {
  return (
    <Container className="py-4">
      <InvetoryTable />
    </Container>
  );
}
