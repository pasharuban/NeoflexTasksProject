export type TableCardTypes = {
  createdAt: string;
  status: Record<string, string>;
  title: string;
  type: Record<string, string>;

  onClick?: () => void;
};
