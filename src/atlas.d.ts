declare class Atlas {
    constructor(options?: {filename?: string, filepath?: string, debug?: boolean });
    initialize();
    set(key: string, value: any);
    get(key: string): any;
    remove(key: string);
    contains(key: string) : boolean;
    keys() : string[];
    entries() : {key: string, value: any}[];
    size() : number;
    empty();
}