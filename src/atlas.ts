interface AtlasOptions {
    filepath?: string;
    filename?: string;
    debug?: boolean;
}

interface AtlasItem {
    [index: string]: any;
}

class AtlasError extends Error {
    constructor(message: string) {
        super(message);
        this.message = message;
        this.name = 'AtlasError';
    }
}

class Atlas {
    map: Map<string, any>;
    filepath: string;
    filename: string;
    canStore: boolean;
    debug: boolean;
    constructor(options?: AtlasOptions) {
        this.map = new Map();
        this.filename = options.filename || 'storage';
        this.filepath = options.filepath || __dirname;
        this.debug = options.debug || false;
        this.canStore = (typeof window !== undefined) ? false : true;
    }
    /**
     * Set an Item to the Atlas
     * @param key <string> The key of the item.
     * @param value <any> The value of the key.
     */
    set(key: string, value: any) {
        this.map.set(key, value);
    }
    /**
     * Get an item from the Atlas
     * @param key <string> The key of the item.
     * @returns {value} <any> The item that was stored or undefined.
     */
    get(key: string) : any {
        if(this.map.has(key)) {
            return this.map.get(key);
        } else {
            return undefined;
        }
    }
    /**
     * Remove an item from the Atlas
     * @param key <string> The key of the item.
     */
    remove(key: string) {
        if(this.map.has(key)) {
            this.map.delete(key);
        } 
    }
    /**
     * Check if item exists in the Atlas
     * @param key <string> The key of the item.
     */
    contains(key: string) : boolean {
        return this.map.has(key);
    }
    /**
     * Get an array of all the keys in the Atlas
     * @returns <Array<string>> An array of keys.
     */
    keys() : string[] {
        let keyList: string[] = new Array();
        for(let key of this.map.keys()) {
            keyList.push(key);
        }
        return keyList;
    }
    /**
     * Get an array of all items in the Atlas
     * @returns <Array<AtlasItem>> An array of all items.
     */
    entries() : AtlasItem[] {
        let items: AtlasItem[] = new Array();
        for(let [k, v] of this.map.entries()) {
            items.push({ key: k, value: v });
        }
        return items;
    }
    /**
     * The size of the Atlas
     * @returns <number> Size of the Atlas.
     */
    size() : number {
        return this.map.size;
    }
    /**
     * Empty the Atlas
     */
    empty() {
        this.map.clear();
    }
}

if(typeof window !== undefined) {
    window.Atlas = Atlas;
} else {
    module.exports = Atlas;
}