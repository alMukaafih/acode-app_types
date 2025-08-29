declare namespace Acode {
  /**
   * The Settings module provides a way to interact with Acode's settings, allowing you to read, update and listen for changes to settings values.
   */
  interface Settings {
    readonly QUICKTOOLS_ROWS: number;
    readonly QUICKTOOLS_GROUP_CAPACITY: number;
    readonly QUICKTOOLS_GROUPS: number;
    readonly QUICKTOOLS_TRIGGER_MODE_TOUCH: string;
    readonly QUICKTOOLS_TRIGGER_MODE_CLICK: string;
    readonly OPEN_FILE_LIST_POS_HEADER: string;
    readonly OPEN_FILE_LIST_POS_SIDEBAR: string;
    readonly OPEN_FILE_LIST_POS_BOTTOM: string;
    readonly KEYBOARD_MODE_NO_SUGGESTIONS: string;
    readonly KEYBOARD_MODE_NO_SUGGESTIONS_AGGRESSIVE: string;
    readonly KEYBOARD_MODE_NORMAL: string;
    readonly CONSOLE_ERUDA: string;
    readonly CONSOLE_LEGACY: string;
    readonly PREVIEW_MODE_INAPP: string;
    readonly PREVIEW_MODE_BROWSER: string;

    uiSettings: any;

    value: ISettings;

    init(): Promise<void>;

    /**
     * Updates one or more settings.
     * @param settings Object containing settings to update.
     * @param showToast Whether to show a confirmation toast (default: true).
     * @param save Whether to save settings (default: true).
     */
    update(
      settings: Partial<ISettings>,
      showToast: boolean,
      save: boolean,
    ): Promise<void>;

    /**
     * Resets settings to default values.
     * @param setting The name of the setting to reset. If setting is not provided, all settings will be reset.
     */
    reset(setting?: string): Promise<void>;

    /**
     * Adds an event listener
     * @param event Event name in format 'update:setting' or 'reset'
     * @param callback Function to call when event occurs
     */
    on<K extends keyof ISettings>(
      event: `update:${K}`,
      callback: (value: ISettings[K]) => void,
    ): void;
    on(event: "reset", callback: (value: ISettings) => void): void;

    /**
     * Removes an event listener from the settings.
     * @param event  Event name in format 'update:setting' or 'reset'
     * @param callback Function to remove
     */
    off<K extends keyof ISettings>(
      event: `update:${K}`,
      callback: (value: ISettings[K]) => void,
    ): void;
    off(event: "reset", callback: (value: ISettings) => void): void;

    /**
     * Gets the value of the setting.
     * @param setting Name of the setting to get.
     */
    get<K extends keyof ISettings>(setting: K): ISettings[K];

    applyAnimationSetting(): Promise<void>;
    applyLangSetting(): Promise<void>;
  }

  interface ISettings {
    animation: string;
    appTheme: string;
    autosave: number;
    fileBrowser: {
      showHiddenFiles: boolean;
      sortByName: boolean;
    };
    formatter: Record<string, unknown>;
    maxFileSize: number;
    serverPort: number;
    previewPort: number;
    showConsoleToggler: boolean;
    previewMode: string;
    disableCache: boolean;
    useCurrentFileForPreview: boolean;
    host: string;
    search: {
      caseSensitive: boolean;
      regExp: boolean;
      wholeWord: boolean;
    };
    lang: string;
    fontSize: string;
    editorTheme: string;
    textWrap: boolean;
    softTab: boolean;
    tabSize: number;
    retryRemoteFsAfterFail: boolean;
    linenumbers: boolean;
    formatOnSave: boolean;
    fadeFoldWidgets: boolean;
    autoCorrect: boolean;
    openFileListPos: string;
    quickTools: number;
    quickToolsTriggerMode: string;
    editorFont: string;
    vibrateOnTap: boolean;
    fullscreen: boolean;
    floatingButton: boolean;
    liveAutoCompletion: boolean;
    showPrintMargin: boolean;
    printMargin: number;
    scrollbarSize: number;
    showSpaces: boolean;
    confirmOnExit: boolean;
    lineHeight: number;
    leftMargin: number;
    checkFiles: boolean;
    desktopMode: boolean;
    console: string;
    keyboardMode: string;
    rememberFiles: boolean;
    rememberFolders: boolean;
    diagonalScrolling: boolean;
    reverseScrolling: boolean;
    teardropTimeout: number;
    teardropSize: number;
    scrollSpeed: string;
    customTheme: Record<string, string>;
    relativeLineNumbers: boolean;
    elasticTabstops: boolean;
    rtlText: boolean;
    hardWrap: boolean;
    useTextareaForIME: boolean;
    touchMoveThreshold: number;
    quicktoolsItems: unknown[];
    excludeFolders: string[];
    defaultFileEncoding: string;
    inlineAutoCompletion: boolean;
    colorPreview: boolean;
    maxRetryCount: number;
    showRetryToast: boolean;
    showSideButtons: boolean;
    showAnnotations: boolean;
    pluginsDisabled: Record<string, boolean>;
  }
}
