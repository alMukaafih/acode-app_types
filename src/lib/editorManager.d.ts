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
     * This is an instance of the Ace
     */
    editor: Editor;

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
    getEditorHeight(editor: EditorView): number;

    /**
     * Gets the height of the editor
     */
    getEditorWidth(editor: EditorView): number;

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

    readonly openFileList: Collapsible;

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

  type EditorView = import("@codemirror/view").EditorView;

  interface Editor extends EditorView {
    /**
     * Insert text at the current selection/cursor in the editor
     * @returns success
     */
    insert(text: string): boolean;

    setTheme(id: string): boolean;

    /**
     * Go to a specific line and column in the editor (CodeMirror implementation)
     * Supports multiple input formats:
     * - Simple line number: gotoLine(16) or gotoLine(16, 5)
     * - Relative offsets: gotoLine("+5") or gotoLine("-3")
     * - Percentages: gotoLine("50%") or gotoLine("25%")
     * - Line:column format: gotoLine("16:5")
     * - Mixed formats: gotoLine("+5:10") or gotoLine("50%:5")
     *
     * @param line - Line number (1-based), or string with special formats
     * @param column - Column number (0-based) - only used with numeric line parameter
     * @param animate - Whether to animate (not used in CodeMirror, for compatibility)
     * @returns success
     */
    gotoLine(
      line: number | string,
      column?: number,
      animate?: boolean,
    ): boolean;

    /**
     * Get current cursor position)
     * @returns Cursor position
     */
    getCursorPosition(): { row: number; column: number };

    /**
     * Compatibility object for session-related methods
     */
    session: {
      /**
       * Get scroll top position
       * @returns Scroll top value
       */
      getScrollTop(): number;

      /**
       * Get scroll left position
       * @returns Scroll left value
       */
      getScrollLeft(): number;

      /**
       * Get all folds
       * @returns Empty array for now
       */
      getAllFolds(): [];

      /**
       * Get line content by row number
       * @param row - Row number (1-based to match getCursorPosition)
       * @returns Line content
       */
      getLine(row: number): string;

      /**
       * Set value of the editor
       * @param text - Text to set
       */
      setValue(text: string): void;

      getValue(): string;

      readonly doc: EditorState["doc"];
    };

    /**
     * Move cursor to specific position
     * @param {} pos - Position to move to
     */
    moveCursorToPosition(pos: { row: number; column: number }): void;

    /**
     * Get the entire document value
     * @returns {string} Document content
     */
    getValue(): string;

    /**
     * Compatibility object for selection-related methods
     */
    selection: {
      /**
       * Get current selection anchor
       * @returns Anchor position
       */
      readonly anchor: number;

      /**
       * Get current selection range
       * @returns Selection range
       */
      getRange(): {
        start: { row: number; column: number };
        end: { row: number; column: number };
      };

      /**
       * Get cursor position
       * @returns Cursor position
       */
      getCursor(): { row: number; column: number };
    };

    /**
     * Get selected text or text under cursor (CodeMirror implementation)
     * @returns Selected text
     */
    getCopyText(): string;
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
