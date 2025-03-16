export interface IUrlDto {
    id: number;
    originalUrl: string;
    expiresAt: string;
    alias: string;
    shortUrl: string;
    createdAt: string; 
}

export interface IUrlStatisticsDto {
    id: number;
    urlId: number;
    ip: string;
    createdAt: string;
}