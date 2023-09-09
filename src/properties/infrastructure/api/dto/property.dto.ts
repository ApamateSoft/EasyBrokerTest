export interface PropertyDto {
  pagination: Pagination;
  content: Content[];
}

interface Pagination {
  limit: number;
  page: number;
  total: number;
}

interface Content {
  title: string;
}
