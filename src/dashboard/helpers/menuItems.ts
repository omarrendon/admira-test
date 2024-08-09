export interface ItemProp {
  name: string;
  id: number;
  path: string;
}

export const menuItems: ItemProp[] = [
  {
    name: "Meta",
    path: "/meta",
    id: 1,
  },
  {
    name: "Google Adds",
    path: "/google-adds",
    id: 2,
  },
  {
    name: "Googgle Analytics",
    path: "/google-analytics",
    id: 3,
  },
  {
    name: "CRM",
    path: "/crm",
    id: 4,
  },
];
