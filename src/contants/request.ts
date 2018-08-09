export interface Query {
    [key: string]: string | number;
}

export interface RequestOptions {
    uri: string;
    query: Query;
}
