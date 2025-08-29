declare namespace Acode {

  /**
   * The editorManager allows to interact with the Editor Instance and listen to various events
   * of Acode app with the help of various methods and Properties.
   * Basically for interacting with the opened files and tabs.
   */
  interface EditorManager {
    /** This property returns a list of all files. */
    files: EditorFile[];

    onupdate: () => void;
    /**
     * This property returns the current file.
     */
    activeFile: EditorFile;

    /**
     * Adds a file to the manager's file list and updates the UI.
     * @param file - The file to be added.
     */
    addFile(file: EditorFile): void;

    /**
     * This is an instance of the Ace editor.
     */
    editor: Ace.Editor;

    /**
     * This function gets files from the list of opened files.
     * @param test the file id, uri, repo, or gist to find the file.
     * @param type the type of test.
     */
    getFile(test: string, type: "uri" | "id" | "name"): EditorFile;

    /**
     * This function switches the tab to the given file id.
     */
    switchFile(id: string): void;

    /**
     * This function returns the number of unsaved files.
     */
    hasUnsavedFiles(): number;

    /**
     * Gets the height of the editor
     */
    getEditorHeight(editor: Ace.Editor): number;

    /**
     * Gets the height of the editor
     */
    getEditorWidth(editor: Ace.Editor): number;

    /**
     * container: HTMLElement
     */
    container: HTMLElement;

    /**
     * The header element
     */
    header: HTMLElement;

    /**
     * Whether the editor is currently scrolling.
     */
    readonly isScrolling: boolean;

    readonly TIMEOUT_VALUE: number;

    readonly openFileList: HTMLElement;

    /** This function adds a listener for the specified event. */
    on(
      event:
        | "file-content-changed"
        | "file-loaded"
        | "remove-file"
        | "save-file"
        | "switch-file",
      listener: (file: EditorFile) => void,
    ): void;
    on(
      event: "add-folder" | "remove-folder" | "update-folder",
      listener: (ev: { url: string; name: string }) => void,
    ): void;
    on(event: EditorEvent, listener: (...args: any[]) => void): void;

    /** This function removes a listener for the specified event. */
    off(event: string, listener: (...args: any[]) => void): void;

    /** This function emits an event with the specified arguments. */
    emit(event: EditorEvent, ...args: any[]): void;
  }

  /** Editor Event */
  type EditorEvent =
    | "add-folder"
    | "change"
    | "file-content-changed"
    | "file-loaded"
    | "init-open-file-list"
    | "new-file"
    | "remove-file"
    | "remove-folder"
    | "rename-file"
    | "save-file"
    | "switch-file"
    | "update-folder";
}

/**
 * The editorManager allows to interact with the Editor Instance and listen to various events
 * of Acode app with the help of various methods and Properties.
 * Basically for interacting with the opened files and tabs.
 */
declare const editorManager: Acode.EditorManager;

interface Window {
  /**
   * The editorManager allows to interact with the Editor Instance and listen to various events
   * of Acode app with the help of various methods and Properties.
   * Basically for interacting with the opened files and tabs.
   */
  editorManager: Acode.EditorManager;
}
