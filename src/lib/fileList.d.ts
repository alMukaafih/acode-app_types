declare namespace Acode {
  /**
   * The File List API provides functionality to manage and interact with files and folders in the Acode workspace.
   * It returns a tree structure representing the file system hierarchy.
   */
  interface FileList {
    /**  Get all files in a folder */
    (dir: string | (() => object)): Tree[];

    /**
     * Adds event listener for file list
     * @param event - Event name
     * @param callback - Callback function
     */
    on(event: FileListEvent, callback: (tree: Tree) => void): void;

    /**
     * Removes event listener for file list
     * @param event - Event name
     * @param callback - Callback function
     */
    off(event: FileListEvent, callback: (tree: Tree) => void): void;
  }

  interface Tree {
    /** Name of the file/folder */
    name: string;

    /** Absolute URL path */
    url: string;

    /** Relative path */
    path: string;

    /** Child files/folders (if directory) */
    children: Tree[];

    /** Parent folder reference */
    parent: Tree;

    /** Whether root is in open folder list */
    readonly isConnected: boolean;

    /** Root folder reference */
    readonly root: Tree;

    /**
     * Updates the file/folder URL and name
     */
    update(url: string, name?: string): void;

    /** Converts tree to JSON representation */
    toJSON(): TreeJson;
  }

  interface TreeJson {
    name: string;
    url: string;
    path: string;
    parent: string;
    isDirectory: boolean;
  }

  type FileListEvent =
    | "add-file"
    | "remove-file"
    | "add-folder"
    | "remove-folder"
    | "refresh";
}
