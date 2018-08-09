interface Query {
    [key: string]: string;
}

export const format = (query: Query): string => {
    let str: string = '';
    for (const [key, value] of Object.entries(query)) {
        str += `${key}=${value}`;
    }
    return str;
};

export default {
    format,
};
