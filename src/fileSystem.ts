export default interface FileSystem {
    read: (path:string) => Promise<Buffer>;
    write: (path: string, data: Buffer) => Promise<void>;
    delete: (path: string) => Promise<void>;
    exists: (path: string) => Promise<void>;
    move: (fromPath: string, toPath: string) => Promise<void>;
    copy: (fromPath: string, toPath: string) => Promise<void>;
}
