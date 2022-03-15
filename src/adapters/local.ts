import FileSystem from '../fileSystem';

export default class Local implements FileSystem {
  read(_path: string): Promise<Buffer> {
    throw new Error('Not implemented yet!');
  }

  write(_path: string, _data: Buffer): Promise<void> {
    throw new Error('Not implemented yet!');
  }

  delete(_path: string): Promise<void> {
    throw new Error('Not implemented yet!');
  }

  exists(_path: string): Promise<void> {
    throw new Error('Not implemented yet!');
  }

  move(_fromPath: string, _toPath: string): Promise<void> {
    throw new Error('Not implemented yet!');
  }

  copy(_fromPath: string, _toPath: string): Promise<void> {
    throw new Error('Not implemented yet!');
  }
}
