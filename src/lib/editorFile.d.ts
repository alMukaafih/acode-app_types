declare namespace Acode {

  /**
   * The Editor File API provides functionality to create, manage, interact with files/tabs in the Acode editor.
   * It handles file operations, state management, editor session control, custom editor tab, etc.
   */
  class EditorFile {
    /**
     * Whether to hide quicktools for this tab
     */
    hideQuickTools: boolean;

    /**
     * Custom stylesheets for tab
     */
    stylesheets: string | string[];

    /**
     * If editor was focused before resize
     */
    focusedBefore: boolean;

    /**
     * State of the editor for this file.
     */
    focused: boolean;

    /**
     * Has completed loading text?
     */
    loaded: boolean;

    /** Is still loading text? */
    loading: boolean;

    /**
     * Weather file is deleted from source.
     */
    deletedFile: boolean;

    /**
     * EditSession of the file
     */
    session: Ace.EditSession;

    /**
     * Encoding of the text e.g. 'gbk'
     */
    encoding: string;

    /**
     * Is file readonly?
     */
    readOnly: boolean;

    /**
     * Should mark changes when session text changes?
     */
    markChanged: boolean;

    onsave?: (event: FileEvent) => void;
    onchange?: (event: FileEvent) => void;
    onfocus?: (event: FileEvent) => void;
    onblur?: (event: FileEvent) => void;
    onclose?: (event: FileEvent) => void;
    onrename?: (event: FileEvent) => void;
    onload?: (event: FileEvent) => void;
    onloaderror?: (event: FileEvent) => void;
    onloadstart?: (event: FileEvent) => void;
    onloadend?: (event: FileEvent) => void;
    onchangemode?: (event: FileEvent) => void;
    onrun?: (event: FileEvent) => void;
    oncanrun?: (event: FileEvent) => void;

    /**
     * Creates a new EditorFile.
     * @param name Name of the file
     * @param options File creation options
     */
    constructor(name: string, options: FileOptions);

    readonly type: string;

    readonly tabIcon: string;

    readonly content: HTMLElement;

    /**
     * File unique id.
     */
    id: string;

    /**
     * File name
     */
    filename: string;

    /**
     * Location of the file i.e. dirname
     */
    location: string;

    /**
     * File location on the device
     */
    uri: string;

    /**
     * End of line character
     */
    eol: "windows" | "unix";

    /**
     * Is editable?
     */
    editable: boolean;

    /**
     * Has unsaved changes?
     */
    isUnsaved: boolean;

    /**
     * File name (for plugin compatibility)
     */
    readonly name: string;

    /**
     * Cache file URL
     */
    readonly cacheFile: string;

    /**
     * File icon class
     */
    readonly icon: string;

    /**
     * File tab element
     */
    readonly tab: string;

    /**
     * Storage access framework mode
     */
    readonly SAFMode: "single" | "tree" | undefined;

    /**
     * Writes file content to cache.
     */
    writeToCache(): Promise<void>;

    /**
     * Checks if file has unsaved changes.
     */
    isChanged(): Promise<boolean>;

    /**
     * Checks if file can be run.
     */
    canRun(): Promise<boolean>;

    readCanRun(): Promise<boolean>;

    /**
     * Sets whether to show run button.
     */
    writeCanRun(cb: () => boolean | Promise<boolean>): Promise<boolean>;

    /**
     * Remove and closes the file.
     * @param force if true, will prompt to save the file
     * @default false
     */
    remove(force: boolean): Promise<void>;

    /**
     * Saves the file to its current location.
     */
    save(): Promise<boolean>;

    /**
     * Saves the file to a new location.
     */
    saveAs(): Promise<boolean>;

    /**
     * Sets syntax highlighting mode for the file.
     */
    setMode(mode: string): void;

    /**
     * Makes this file the active file in the editor.
     */
    makeActive(): void;

    /**
     * Removes active state from the file.
     */
    removeActive(): void;

    /**
     * Opens file with system app.
     */
    openWith(): void;

    /**
     * Opens file for editing with system app.
     */
    editWith(): void;

    /**
     * Shares the file.
     */
    share(): void;

    runAction(): void;

    /** Runs the file. */
    run(): void;

    /**
     * Runs the file in app.
     */
    runFile(): void;

    render(): void;

    /**
     * Adds event listener.
     */
    on(event: FileEventType, callback: (event: FileEvent) => void): void;

    /**
     * Removes event listener.
     */
    off(event: FileEventType, callback: (event: FileEvent) => void): void;

    /**
     * Add stylesheet to tab's shadow DOM
     * @param  style URL or CSS string
     */
    addStyle(style: string): void;

    /**
     * Set custom title function for special tab types
     * @param titleFn Function that returns the title string
     */
    setCustomTitle(titleFn: () => void): void;
  }

  interface FileOptions {
    /** Whether file needs to be saved
     * @default false
     */
    isUnsaved?: boolean;

    /** Make file active
     * @default true
     */
    render?: boolean;

    /** ID for the file */
    id?: string;

    /** URI of the file */
    uri?: string;

    /** Session text */
    text?: string;

    /** Enable file editing
     * @default true
     */
    editable?: boolean;

    /** File does not exist at source
     * @default false
     */
    deletedFile?: boolean;

    /** Storage access framework mode */
    SAFMode?: "single" | "tree";

    /** Text encoding */
    encoding?: string;

    /** Cursor position */
    cursorPos?: object;

    /** Scroll left position */
    scrollLeft?: number;

    /** Scroll top position */
    scrollTop?: number;

    /** Code folds */
    folds?: Ace.Fold[];

    /** Type of content (e.g., 'editor')
     * @default "editor"
     */
    type?: string;

    /** Icon class for the file tab
     * @default "file file_type_default"
     */
    tabIcon?: string;

    /** Custom content element or HTML string. Strings are sanitized using DOMPurify */
    content?: string | HTMLElement;

    /** Custom stylesheets for tab. Can be URL, or CSS string */
    stylesheets?: string | string[];

    /** Whether to hide quicktools for this tab
     * @default false
     */
    hideQuickTools?: boolean;
  }

  interface FileEvent {
    target: EditorFile;
    stopPropagation(): void;
    preventDefault(): void;
    readonly BUBBLING_PHASE: boolean;
    readonly defaultPrevented: boolean;
  }

  type FileEventType =
    | "run"
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
    | "changeEncoding"
    | "changeReadOnly";
}
