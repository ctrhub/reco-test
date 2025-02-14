import { InventoryItem } from '@/lib/types/app-inventory';
import { PaginationQueryParams, PaginationResponse } from '../types/pagination';

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

const tempStore = {
  page: 1
}

export const inventoryApi = {
  async getInventoryList(queryParams?: PaginationQueryParams): Promise<PaginationResponse<InventoryItem>> {
    console.log('getInventoryList');
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // const response = await fetch('https://dummyjson.com/users/4');

    // if (response.status !== 200) {
    //   throw Error('Failed to fetch user');
    // }

    // return await response.json();

    const response = {
      page: 1,
      perPage: 2,
      data: data
    }

    ++tempStore.page

    return response;
  },

  async getInventoryItem(appId: InventoryItem['id']): Promise<InventoryItem> {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const item = data.find((item) => item.id === appId);

    // const response = await fetch('https://dummyjson.com/users/4');

    // if (response.status !== 200) {
    //   throw Error('Failed to fetch user');
    // }

    if (!item) {
      throw Error('Inventory item not found!');
    }

    return item;
  },
};
