/** The addedFolder object is the global object which returns an Array of object.
 * This object provides essential properties and methods to interact with the currently
 * opened folders in the sidenav of Acode app.
 * Use these properties and methods to manipulate folder states, reload contents,
 * and manage folder visibility effectively.
 */
export type AddedFolder = {
  /** The URL of the folder. */
  url: string;

  /** Removes the folder from the sidenav. */
  remove: () => void;

  /** The HTML element of the folder. */
  $node: HTMLElement;

  /**  Reloads the folder. */
  reload: () => void;

  /**  The state of the folders in the folder. K -> dir, V -> open */
  listState: Map<string, boolean>;

  /**  Whether to reload the folder when the app resumes */
  reloadOnResume: boolean;

  /**  Whether to save the state of the folder when the app is closed. */
  saveState: boolean;

  /**  The title of the folder. */
  title: string;

  /**  The ID of the folder. */
  id: string;
}[];

declare global {
  /** The addedFolder object is the global object which returns an Array of object.
   * This object provides essential properties and methods to interact with the currently
   * opened folders in the sidenav of Acode app.
   * Use these properties and methods to manipulate folder states, reload contents,
   * and manage folder visibility effectively.
   */
  const addedFolder: AddedFolder;

  interface Window {
    /** The addedFolder object is the global object which returns an Array of object.
     * This object provides essential properties and methods to interact with the currently
     * opened folders in the sidenav of Acode app.
     * Use these properties and methods to manipulate folder states, reload contents,
     * and manage folder visibility effectively.
     */
    addedFolder: AddedFolder;
  }
}
