export interface IApiResponse {
  success: boolean;
  total_pages: number;
  count: number;
  page: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
}
