export interface UnknownObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Picture {
  src: string;
  alt: string;
  date?: string;
  location?: string;
  name?: string;
}

export interface Item {
  id: string;
  description?: string;
  type: string;
  title: string;
  images?: number;
  date: string;
  external?: string;
}
export interface GridItem {
  item?: React.JSX.Element;
  key: string | number;
}
