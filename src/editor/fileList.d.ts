/**
 * The File List API provides functionality to manage and interact with files and folders in the Acode workspace.
 * It returns a tree structure representing the file system hierarchy.
 */
export interface FileList {
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

export declare class Tree {
  /** Name of the file/folder */
  name: string;

  /** Absolute URL path */
  url: string;

  /** Relative path */
  path: string;

  /** Child files/folders (if directory) */
  children: Array<Tree>;

  /** Parent folder reference */
  parent: Tree;

  /** Whether root is in open folder list */
  isConnected: boolean;

  /** Root folder reference */
  root: Tree;

  /** Updates the file/folder URL and name */
  update(url: string, name?: string): void;

  /** Converts tree to JSON representation */
  toJSON(): any;

  /** Creates tree from JSON data */
  static fromJSON(json: any): Tree;

  /** Creates a new tree instance */
  static create(url: string, name?: string, isDirectory?: boolean): Tree;
}

export type FileListEvent =
  | "add-file"
  | "remove-file"
  | "add-folder"
  | "remove-folder"
  | "refresh";
