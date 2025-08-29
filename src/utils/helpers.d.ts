declare namespace Acode {
  interface Helpers {
    /**
     * This helper method takes in a single parameter, a string named "filename", and returns a string representing an icon class for the file specified by the filename.
     * The icon class returned corresponds to the file type, which is determined by the file extension of the provided filename.
     * In simple, It will return icon according to filename.
     * @param filename The name of the file for which the icon class is to be returned.
     * @returns A string representing an icon class for the file specified by the filename. The icon class returned corresponds to the file type, which is determined by the file extension of the provided filename.
     */
    getIconForFile(filename: string): string;

    sortDir(
      list: any[],
      fileBrowser: any,
      mode: "both" | "file" | "folder",
    ): any[];

    /**
     * Gets error message from error object
     */
    errorMessage(err: Error, ...args: string[]): Promise<string>;

    error(err: Error, ...args: string[]): Promise<void>;

    /**
     * Returns unique ID
     */
    uuid(): string;

    /**
     * Parses JSON string, if fails returns null
     */
    parseJSON(string: string): unknown;

    /**
     * Checks whether given type is directory or not
     */
    isDir(type: "dir" | "directory" | "folder"): boolean;

    /**
     * Checks whether given type is file or not
     */
    isFile(type: "file" | "link"): boolean;

    /**
     * Replace matching part of url to alias name by which storage is added.
     */
    getVirtualPath(url: string): string;

    /**
     * Updates uri of all active which matches the oldUrl as location
     * of the file
     */
    updateUriOfAllActiveFiles(oldUrl: string, newUrl: string): void;

    toInternalUri(uri: string): Promise<string>;

    // biome-ignore lint/complexity/noBannedTypes: <explanation>
    promisify(func: Function, ...args: unknown[]): Promise<unknown>;

    checkAPIStatus(): Promise<boolean>;

    fixFilename(name: string): string;

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

    defineDeprecatedProperty<T, V>(
      obj: T,
      name: PropertyKey,
      getter: () => V,
      setter: (value: V) => void,
    ): void;

    parseHTML(html: string): Element | Element[];

    createFileStructure(
      uri: string,
      pathString: string,
      isFile?: boolean,
    ): Promise<{
      uri: string;
      type: string;
    }>;

    formatDownloadCount(downloads: number): unknown;

    isBinary(file: string): boolean;
  }
}
