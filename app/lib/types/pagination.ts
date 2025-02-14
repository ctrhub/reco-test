export type PaginationQueryParams = {
	page: number,
	perPage?: number,
};

export type PaginationResponse<T> = {
	page: number,
	perPage: number,
	data: T[],
}
