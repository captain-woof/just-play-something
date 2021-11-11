export type QueryFeatured = 0 | 1 | boolean

export type QueryLimit = number

export type QueryOffset = number

export type QueryFormat = "json"

export type QueryOrder = "relevance" | "downloads_week" | "listens_week" | "popularity_week"

export type QueryType = "single+albumtrack" | "single" | "albumtrack"

export type QueryImagesize = 25 | 35 | 50 | 55 | 60 | 65 | 70 | 75 | 85 | 100 | 130 | 150 | 200 | 300 | 400 | 500 | 600

export type QueryAudioFormat = 'mp31' | 'mp32' | "ogg" | "flac"

export type QueryBoost = "popularity_week" | "listens_week" | "downloads_week"

export type QueryInclude = "licenses"

export type QueryTag = null | 'lounge' | 'classical' | 'electronic' | 'jazz' | 'pop' | 'hiphop' | 'relaxation' | 'rock' | 'songwriter' | 'world' | 'metal' | null

export type Query = {
    client_id: string
    featured: QueryFeatured
    limit: QueryLimit
    offset: QueryOffset
    format: QueryFormat
    order: QueryOrder
    type: QueryType
    imagesize: QueryImagesize
    audioformat: QueryAudioFormat
    boost: QueryBoost
    include: QueryInclude
    tags: QueryTag
} 
