export interface Query {
    [key: string]: string;
}

export interface RequestOptions {
    uri: string;
    query: Query;
}
