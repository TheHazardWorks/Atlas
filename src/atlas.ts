/**
MIT License

Copyright (c) 2019 YourNetworkNerd (https://twitter.com/YourNetworkNerd)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
import fileSys from 'fs';

interface Options {
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
    content: string;
    storage: AtlasItem[];
    debug: boolean;
    constructor(options?: Options) {
        this.map = new Map();
        this.filename = options.filename || 'storage';
        this.filepath = options.filepath || __dirname;
        this.debug = options.debug || false;
        try {
            this.content = fileSys.readFileSync(`${this.filepath}/${this.filename}.atlas`, {
                encoding: 'utf8'
            })
            this.storage = JSON.parse(this.content);
        } catch(e) {
            this.content = '';
            this.storage = new Array();
        }
    }
    /**
     * Save the Atlas to File
     */
    private __save() {
        this.storage = [];
        if(this.entries().length >= 1) {
            this.entries().forEach((item: AtlasItem) => {
                this.storage.push(item);
            })
        }
        try {
            let toSave: string = JSON.stringify(this.storage);
            if(toSave !== this.content) {
                fileSys.writeFileSync(`${this.filepath}/${this.filename}.atlas`, toSave);
            }
        } catch(e) {
            let message: string = (!e.message) ? e : e.message;
            throw new AtlasError(`Failed to save Atlas with error: "${message}"`);
        }
    }
    /**
     * Load saved Atlas into the current Atlas
     */
    initialize() {
        if(this.storage.length >= 1) {
            this.storage.forEach((item: AtlasItem) => {
                this.map.set(item.key, item.value);
            })
        }
    }
    /**
     * Set an Item to the Atlas
     * @param key <string> The key of the item.
     * @param value <any> The value of the key.
     */
    set(key: string, value: any) {
        this.map.set(key, value);
        this.__save();
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
        this.__save();
    }
}

export = Atlas;