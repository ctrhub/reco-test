import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { inventoryApi } from '../api/inventory.api';
import { PaginationQueryParams, PaginationResponse } from '../types/pagination';
import { InventoryItem } from '../types/app-inventory';

const STATE_KEYS = {
  INVENTORY_LIST: 'inventory_list',
  INVENTORY_ITEM: 'inventory_item',
};

export const useInventoryList = (queryParams?: PaginationQueryParams) => {

  const getAll = ({ pageParam }: Record<string, any>) => {
    return inventoryApi.getInventoryList({
      ...queryParams,
      ...(pageParam && { nextPage: pageParam }),
    });
  };

  const { data, isLoading } = useInfiniteQuery<PaginationResponse<InventoryItem>>({
    queryKey: [STATE_KEYS.INVENTORY_LIST, queryParams],
    queryFn: getAll,
    // placeholderData: [],
    initialPageParam: queryParams?.page,
    getNextPageParam: (lastPage, pages) => undefined,
    getPreviousPageParam: (lastPage, pages) => undefined,
  });

  const flatData = data?.pages?.flatMap((page) => page?.data || []) || [];

  return {
    inventoryList: flatData,
    isLoadingInventory: isLoading
  };
};

export const useInventoryItem = (itemId: InventoryItem['id']) => {
  const { data, isLoading } = useQuery<InventoryItem>({
    queryKey: [STATE_KEYS.INVENTORY_ITEM, itemId],
    queryFn: () => inventoryApi.getInventoryItem(itemId),
  });

  return {
    inventoryItem: data,
    isLoadingInventoryItem: isLoading
  };
};
