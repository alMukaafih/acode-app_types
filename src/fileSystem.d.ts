declare namespace Acode {
  /**
   * The fs module provides a simplified API for interacting with the file system in Acode, primarily for basic file and directory operations.
   *  This does not support symbolic links (symlink), due to limitation of the Android platform.
   * To perform file operations, you first need to create a file system object by providing a URL (path) to the file or directory.
   */
  interface FS {
    /**
     * Create a file system object from a URL
     * @param url URL of the file or directory
     * @returns File system object
     */
    (url0: `http:${string}` | `https:${string}`, ...url: string[]): FileUrl;
    (...url: string[]): FileSystem;

    extend(
      test: (url: string) => boolean,
      fs: (url: string) => FileSystem,
    ): void;

    remove(test: (url: string) => boolean): void;
  }

  interface FileUrl {
    /**
     * Reads the contents of a file. Optionally accepts an encoding parameter (encoding) for text files.
     */
    readFile(): Promise<ArrayBuffer>;
    readFile(encoding: "utf-8"): Promise<string>;
    readFile(encoding: "json"): Promise<unknown>;

    /**
     * Writes data to a file.
     */
    writeFile(content: string | ArrayBuffer): Promise<void>;
  }

  interface FileSystem {
    /**
     * Returns a list of entries (files and directories) within the specified directory.
     */
    lsDir(): Promise<File[]>;

    /**
     * Reads the contents of a file. Optionally accepts an encoding parameter (encoding) for text files.
     */
    readFile(): Promise<ArrayBuffer>;
    readFile(encoding: "utf-8"): Promise<string>;
    readFile(encoding: "json"): Promise<unknown>;

    /**
     * Writes data to a file.
     */
    writeFile(content: string | ArrayBuffer): Promise<void>;

    /**
     * Creates a new file with the specified name and content.
     * If a file with the same name exists, it will be overwritten.
     */
    createFile(name: string, content?: string): Promise<string>;

    /**
     * Creates a new directory with the specified name.
     * @param name
     * @returns
     */
    createDirectory(name: string): Promise<string>;

    /**
     * Deletes the file or directory specified by the URL.
     * @returns
     */
    delete(): Promise<void>;

    /**
     * Copies the file or directory to the specified destination./
     */
    copyTo(destination: string): Promise<string>;

    /**
     * It allows you to move a file or directory from its current location to a new destination.
     */
    moveTo(destination: string): Promise<string>;

    /**
     * It allows for the renaming of a file or directory.
     */
    renameTo(newName: string): Promise<string>;

    /**
     * Checks if the specified file or directory exists.
     */
    exists(): Promise<boolean>;

    /** Retrieves information about the file or directory. */
    stat(): Promise<Stat>;
  }

  interface File {
    name: string;
    url: string;
    isFile: boolean;
    isDirectory: boolean;
    isLink: boolean;
  }

  interface Stat extends File {
    size: number;
    modifiedDate: number;
    canRead: boolean;
    canWrite: boolean;
  }
}
