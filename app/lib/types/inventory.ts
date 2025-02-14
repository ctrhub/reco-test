interface Connector {
  id: string;
  title: string;
  logoUrl: string;
}

// Types
export type InventoryItem = {
  id: string;
  title: string;
  logoUrl: string;
  category: string;
  connector: Connector;
};
