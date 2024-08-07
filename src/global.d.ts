interface iWorkEntry {
    year: number | string,
    tags: string[],
    url: string,
    type: string,
    role: string,
    paragraphs: string[],
    poster?: {type: string, url: string },
    gallery?: string[];
}

interface iWorkDB {
    [key:string]: iWorkEntry
}