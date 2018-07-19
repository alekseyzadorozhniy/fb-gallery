export interface ResponseModel <T> {
    data: T;
}

export interface Pagination {
    cursors: Cursors;
    next?: string;
    previous?: string;
}

export interface Cursors {
    before: string;
    after: string;
}

export interface ListResponseModel <T> {
    data: T[];
    pagination: Pagination;
}
