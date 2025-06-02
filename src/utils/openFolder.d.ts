export interface OpenFolder {
  /**
   * @param path The path of the folder to be opened.
   */
  (path: string, options?: OpenFolderOptions): void;

  /**
   * Adds file or folder to the list if expanded.
   * @param url Url of file or folder to add
   * @param type is file or folder
   */
  add(url: string, type: "file" | "folder"): void;

  /** Renames an existing file or folder. */
  renameItem(oldFile: string, newFile: string, newFilename: string): void;

  /** Removes an existing file or folder. */
  removeItem(url: string): void;

  /** Removes multiple folders based on a URL pattern */
  removeFolders(url: string): void;

  /**
   * Find the folder that contains the url
   * @param {String} url
   * @returns {Folder}
   */
  find(url: string): void;
}

export type OpenFolderOptions = Partial<{
  /** A name to be assigned to the folder. If not provided, the folder's name from the file system will be used. */
  name: string;

  /** An ID to be assigned to the folder. If not provided, an ID will be automatically generated. */
  id: string;

  /**
   *  Indicates whether the state of the folder should be saved when the user closes it.
   * @default true
   */
  saveState: boolean;

  /** List all files recursively. */
  listFiles: boolean;

  /** State of the listed files. */
  listState: boolean;
}>;
