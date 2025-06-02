export interface Helpers {
  checkAPIStatus(): Promise<boolean>;

  /**
   * Creates a debounced function that delays invoking the input function until after 'wait' milliseconds have elapsed
   * since the last time the debounced function was invoked. Useful for implementing behavior that should only happen
   * after the input is complete.
   *
   * @param func The function to debounce.
   * @param wait The number of milliseconds to delay.
   * @returns The new debounced function.
   * @example
   * window.addEventListener('resize', debounce(myFunction, 200));
   */

  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  debounce(func: Function, wait: number): Function;

  error(err: Error, ...args: string[]): Promise<void>;
  errorMessage(err: Error, ...args: string[]): Promise<string>;

  fixFilename(name: string): string;

  formatDownloadCount(downloads: any): unknown;

  /**
   * This helper method takes in a single parameter, a string named "filename", and returns a string representing an icon class for the file specified by the filename.
   * The icon class returned corresponds to the file type, which is determined by the file extension of the provided filename.
   * In simple, It will return icon according to filename.
   * @param filename The name of the file for which the icon class is to be returned.
   * @returns A string representing an icon class for the file specified by the filename. The icon class returned corresponds to the file type, which is determined by the file extension of the provided filename.
   */
  getIconForFile(filename: string): string;

  /**
   * Replace matching part of url to alias name by which storage is added.
   */
  getVirtualPath(url: string): string;

  /**
   * Checks whether given type is file or not
   * @returns
   */
  isFile(type: "file" | "link"): boolean;

  /**
   * Checks whether given type is directory or not
   * @returns
   */
  isDir(type: "dir" | "directory" | "folder"): boolean;

  /**
   * Parses JSON string, if fails returns null
   */
  parseJSON(string: string): any;

  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  promisify(func: Function, ...args: any[]): Promise<any>;

  toInternalUri(uri: string): Promise<string>;

  /**
   * Returns unique ID
   */
  uuid(): string;
}
