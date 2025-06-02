import type { EditSession } from "ace";
import type { Fold } from "ace/edit_session/fold";

/**
 * The Editor File API provides functionality to create, manage, interact with files/tabs in the Acode editor.
 * It handles file operations, state management, editor session control, custom editor tab, etc.
 */
export declare class EditorFile {
  /**
   * Creates a new EditorFile.
   * @param name Name of the file
   * @param options File creation options
   */
  constructor(name: string, options: FileOptions);

  /** Unique file ID */
  id: string;

  /** File name */
  filename: string;

  /** File location on the device */
  uri: string;

  /** Directory path of the file */
  location: string;

  /** End of line character */
  eol: "windows" | "unix";

  /** Is editedable? */
  editable: boolean;

  /** Is readonly? */
  readOnly: boolean;

  /** Has unsaved changes? */
  isUnsaved: boolean;

  /** EditSession of the file */
  readonly session: EditSession;

  /** File name (for plugin compatibility) */
  readonly name: string;

  /** Cache file URL */
  readonly cacheFile: string;

  /** File icon class */
  readonly icon: string;

  /** File tab element */
  readonly tab: HTMLElement;

  /** Storage access framework mode */
  readonly SAFMode: "single" | "tree" | undefined;

  /** Has completed loading text? */
  readonly loaded: boolean;

  /** Is still loading text? */
  readonly loading: boolean;

  /** Should mark changes when session text changes? */
  readonly markChanged: boolean;

  /** Adds event listener. */
  on(event: FileEventType, callback: (event: FileEvent) => void): void;

  /** Removes event listener. */
  off(event: FileEventType, callback: (event: FileEvent) => void): void;

  /** Makes this file the active file in the editor. */
  makeActive(): void;

  /** Removes active state from the file. */
  removeActive(): void;

  /** Saves the file to its current location. */
  save(): Promise<boolean>;

  /** Saves the file to a new location. */
  saveAs(): Promise<boolean>;

  /** Writes file content to cache. */
  writeToCache(): Promise<void>;

  /** Checks if file has unsaved changes. */
  isChanged(): Promise<boolean>;

  /** Checks if file can be run. */
  canRun(): Promise<boolean>;

  readCanRun(): Promise<boolean>;

  /** Sets whether to show run button. */
  writeCanRun(cb: () => boolean | Promise<boolean>): Promise<boolean>;

  /**
   * Remove and closes the file.
   * @param force if true, will prompt to save the file
   * @default false
   */
  remove(force: boolean): Promise<void>;

  /** Sets syntax highlighting mode for the file. */
  setMode(mode: string): void;

  /** Opens file with system app. */
  openWith(): void;

  /** Opens file for editing with system app. */
  editWith(): void;

  /** Shares the file. */
  share(): void;

  /** Runs the file. */
  run(): void;

  /** Runs the file in app. */
  runFile(): void;

  /**
   * Add stylesheet to tab's shadow DOM
   * @param  style URL or CSS string
   */
  addStyle(style: string): void;
}

type FileOptions = Partial<{
  /** Whether file needs to be saved
   * @default false
   */
  isUnsaved: boolean;

  /** Make file active
   * @default true
   */
  render: boolean;

  /** ID for the file */
  id: string;

  /** URI of the file */
  uri: string;

  /** Session text */
  text: string;

  /** Enable file editing
   * @default true
   */
  editable: boolean;

  /** File does not exist at source
   * @default false
   */
  deletedFile: boolean;

  /** Storage access framework mode */
  SAFMode: "single" | "tree";

  /** Text encoding */
  encoding: string;

  /** Cursor position */
  cursorPos: object;

  /** Scroll left position */
  scrollLeft: number;

  /** Scroll top position */
  scrollTop: number;

  /** Code folds */
  folds: Fold[];

  /** Type of content (e.g., 'editor')
   * @default "editor"
   */
  type: string;

  /** Icon class for the file tab
   * @default "file file_type_default"
   */
  tabIcon: string;

  /** Custom content element or HTML string. Strings are sanitized using DOMPurify */
  content: string | HTMLElement;

  /** Custom stylesheets for tab. Can be URL, or CSS string */
  stylesheets: string | string[];

  /** Whether to hide quicktools for this tab
   * @default false
   */
  hideQuickTools: boolean;
}>;

export declare class FileEvent {
  target: EditorFile;
  stopPropagation(): void;
  preventDefault(): void;
  get BUBBLING_PHASE(): boolean;
  get defaultPrevented(): boolean;
}

export type FileEventType =
  | "save"
  | "change"
  | "focus"
  | "blur"
  | "close"
  | "rename"
  | "load"
  | "loadError"
  | "loadStart"
  | "loadEnd"
  | "changeMode"
  | "run"
  | "canRun";
