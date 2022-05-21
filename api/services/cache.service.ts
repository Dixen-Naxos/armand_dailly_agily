import NodeCache from 'node-cache';
type Key = string | number;

export class CacheService {
    private cache: NodeCache;
    private static instance?: CacheService;

    private constructor(ttlSeconds: number) {
        this.cache = new NodeCache({stdTTL: ttlSeconds, checkperiod: ttlSeconds * 0.2, useClones: false});
    }

    public static getInstance(): CacheService {
        if (!CacheService.instance) {
            CacheService.instance = new CacheService(60)
        }
        return CacheService.instance
    }

    public get<T>(key: Key): T | undefined {
        return this.cache.get<T>(key);
    }

    public set<T>(key: Key, value: T): void {
        this.cache.set(key, value)
    }
}