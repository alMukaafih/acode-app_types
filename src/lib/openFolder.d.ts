declare namespace Acode {
  interface OpenFolder {
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

  type OpenFolderOptions = {
    /** A name to be assigned to the folder. If not provided, the folder's name from the file system will be used. */
    name?: string;
  } & Partial<Pick<Folder, "id" | "saveState" | "listFiles" | "listState">>;

  /** The addedFolder object is the global object which returns an Array of object.
   * This object provides essential properties and methods to interact with the currently
   * opened folders in the sidenav of Acode app.
   * Use these properties and methods to manipulate folder states, reload contents,
   * and manage folder visibility effectively.
   */
  type AddedFolder = Folder[];

  interface Folder {
    /** An ID to be assigned to the folder. If not provided, an ID will be automatically generated. */
    id: string;

    /** The URL of the folder. */
    url: string;

    /**  The title of the folder. */
    title: string;

    /** List all files recursively. */
    listFiles: boolean;

    /**
     *  Indicates whether the state of the folder should be saved when the user closes it.
     * @default true
     */
    saveState: boolean;

    /** The HTML element of the folder. */
    $node: Collapsible;

    clipBoard: ClipBoard;

    /** Removes the folder from the sidenav. */
    remove: () => void;

    /**  Reloads the folder. */
    reload: () => void;

    /**  The state of the folders in the folder. K -> dir, V -> open */
    listState: Map<string, boolean>;
  }

  interface ClipBoard {
    url?: string;
    $el?: HTMLElement;
    action?: "cut" | "copy";
  }
}

/** The addedFolder object is the global object which returns an Array of object.
 * This object provides essential properties and methods to interact with the currently
 * opened folders in the sidenav of Acode app.
 * Use these properties and methods to manipulate folder states, reload contents,
 * and manage folder visibility effectively.
 */
declare const addedFolder: Acode.AddedFolder;

interface Window {
  /** The addedFolder object is the global object which returns an Array of object.
   * This object provides essential properties and methods to interact with the currently
   * opened folders in the sidenav of Acode app.
   * Use these properties and methods to manipulate folder states, reload contents,
   * and manage folder visibility effectively.
   */
  addedFolder: Acode.AddedFolder;
}
