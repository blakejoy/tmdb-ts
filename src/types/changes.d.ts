export interface Changes{
    results: Change[];
    page: number;
    total_pages: nubmer;
    total_results: number;
}

export interface Change {
    id: number;
    adult: boolean | undefined;
}
