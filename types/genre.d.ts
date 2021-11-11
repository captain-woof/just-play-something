import { QueryTag } from "./query";

export type Genre = {
    name: QueryTag
    displayName: string
}

export interface Genres extends Array<Genre> {}