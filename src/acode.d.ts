import "./addedFolder";
import "./editorManager";
import type { ActionStack } from "./advanced/actionStack";
import type { Intent } from "./advanced/intent";
import type { EditorFile, FileOptions } from "./editor/file";
import type { FileList } from "./editor/fileList";
import type { WCPage } from "./editor/page";
import type { Palette } from "./editor/palette";
import type { Settings } from "./editor/settings";
import type { Color } from "./helpers/color";
import type { Fonts } from "./helpers/fonts";
import type { InputHints } from "./helpers/inputHints";
import type { ThemeBuilder } from "./helpers/themeBuilder";
import type { Themes } from "./helpers/themes";
import type { ContextMenuConstructor } from "./interface/contextMenu";
import type { SidebarApps } from "./interface/sideBarApps";
import type { SideButtonConstructor } from "./interface/sideButton";
import type { Alert } from "./ui/dialogs/alert";
import type { ColorPicker } from "./ui/dialogs/colorPicker";
import type { Confirm } from "./ui/dialogs/confirm";
import type { DialogBoxConstructor } from "./ui/dialogs/dialogBox";
import type { Loader } from "./ui/dialogs/loader";
import type { MultiPrompt } from "./ui/dialogs/multiPrompt";
import type { Prompt } from "./ui/dialogs/prompt";
import type { Select } from "./ui/dialogs/select";
import type { SelectionMenu } from "./ui/selectionMenu";
import type { Toast } from "./ui/toast";
import type { Tutorial } from "./ui/tutorial";
import type { AceModes } from "./utils/aceModes";
import type { Encodings } from "./utils/encodings";
import type { FS } from "./utils/fileSystem";
import type { Helpers } from "./utils/helpers";
import type { Keyboard } from "./utils/keyboard";
import type { OpenFolder } from "./utils/openFolder";
import type { Projects } from "./utils/projects";
import type { Url } from "./utils/url";
import type { WindowResize } from "./utils/windowResize";

/** The acode object is the global object that provides access to the Acode API.
 * You can use this object to access the API methods. */
export interface Acode {
  /** This method is used to register the plugin.
   * @param pluginId` The ID of your plugin.
   * @param init The function that will be called when the plugin is loaded.
   * @param settings You can use this parameter to define the settings of the plugin.
   */
  setPluginInit(pluginId: string, init: Init, settings?: PluginSettings): void;

  /** This method is used to set the unmount function.
   * This function will be called when the plugin is unloaded.
   * You can use this function to clean up the plugin.
   */
  setPluginUnmount(id: string, unmount: () => void): void;

  /**
   * @param id plugin id
   * @param baseUrl local plugin url
   * @param $page
   */
  initPlugin(
    id: string,
    baseUrl: string,
    $page: WCPage,
    options?: any,
  ): Promise<void>;

  unmountPlugin(id: string): void;

  /** This method is used to define a module.
   * @param moduleName The name of the module.
   * @param module The module object. Module name is case insensitive.
   */
  define(moduleName: string, module: unknown): void;

  /** This method is used to require a module.
   * @param moduleName The name of the module. Module name is case insensitive.
   * # Example
   *  ```js
   * acode.require("say-hello").hello(); // Hello World!
   * ```
   */
  require: Require;

  /**
   * This method executes a command defined in file src/lib/commands.js.
   * @param command The name of the command. Command name is case insensitive.
   * @param value The value of the command.
   */
  exec(command: string, value?: unknown): boolean | undefined;

  /**
   * This method is used to register a formatter.
   * @param pluginId The ID of your plugin.
   * @param extensions An array of file extensions.
   * @param format The function that will be called when the file is formatted.
   */
  registerFormatter(
    pluginId: string,
    extensions: string[],
    format: () => Promise<void>,
  ): void;

  /**
   * This method is used to unregister a formatter.
   * @param pluginId The ID of your plugin.
   */
  unregisterFormatter(pluginId: string): void;

  format(selectIfNull?: boolean): Promise<void>;

  get formatters(): { id: string; name: string; exts: string[] };

  getFormatterFor(extensions: string[]): [id: string, name: string][];

  /**
   * This method is used to add an icon.
   * @param iconName The name of the icon.
   * @param iconSrc The URL of the icon.
   */
  addIcon(iconName: string, iconSrc: string): void;

  /** When making Ajax or fetch requests, you need to convert file:// URLs to internal URLs. This method will do it for you. */
  toInternalUrl(url: string): Promise<string>;

  /**
   * Displays a notification in Acode with a title, message and optional configuration.
   *  @since v1.10.6, versionCode: 954
   */
  pushNotification(
    title: string,
    message: string,
    options?: {
      /** Icon for the notification. Can be a URL, base64 encoded image, icon class or SVG string */
      icon?: string;

      /** Whether notification should auto close. Defaults to true */
      autoClose?: boolean;

      /** Callback function when notification is clicked */
      action?: () => void;

      /** Type of notification - can be 'info', 'warning', 'error' or 'success'. Defaults to 'info' */
      type?: string;
    },
  ): void;

  /** Installs an Acode plugin from registry with its id by the consent of user.
   * # Example
   *
   * ```js
   * acode.addIcon("my-icon", "https://example.com/icon.png");
   * ```
   * @since v1.10.6, versionCode: 954
   */
  installPlugin(pluginId: string, installerPluginName: string): Promise<void>;

  /**
   * Creates a new EditorFile instance. This is an alternative to using the EditorFile constructor directly.
   * @param filename  Name of the file
   * @param options File creation options
   * @returns A new EditorFile instance
   * @since v1.11.2, versionCode: 958
   */
  newEditorFile(filename: string, options?: FileOptions): EditorFile;

  joinUrl: Url["join"];
  alert: Alert;
  confirm: Confirm;
  select: Select;
  multiPrompt: MultiPrompt;
  loader: Loader;
  prompt: Prompt;
  fsOperation: FS;

  get exitAppMessage(): string | undefined;

  setLoadingMessage(message: string): void;
}

interface Init {
  /**
   * When the init function is called, it will receive 3 parameters:
   * @param baseUrl The base URL of the plugin. You can use this URL to access the files in the plugin directory.
   * @param $page This page object can be used to show content.
   * @param options This object can be used to access the cached files.
   */
  (baseUrl: string, $page: WCPage, options: Options): void;
}

interface Options {
  /** Url of the cached file. */
  cacheFileUrl: string;

  /** File object of the cached file. Using this object, you can write/read the file. */
  cacheFile: FileSystem;

  /** If this is the first time the plugin is loaded, this value will be true. Otherwise, it will be false. */
  firstInit: boolean;
}

interface PluginSettings {
  /** An array of settings. */
  list: {
    /** The key of the setting. This key will be used to access the value of the setting. */
    key: string;

    /** The text of the setting. This text will be displayed in the settings page. */
    text: string;

    /** The icon of the setting. This icon will be displayed in the settings page. */
    icon?: string;

    /** The icon color of the setting. This icon color will be displayed in the settings page. */
    iconColor?: string;

    /** The info of the setting. This info will be displayed in the settings page. */
    info?: string;

    /** The value of the setting. This value will be displayed in the settings page. */
    value?: unknown;

    /** The value text of the setting. This value text will be displayed in the settings page. */
    valueText?: (value: unknown) => string;

    /** If this property is set to true, the setting will be displayed as a checkbox. */
    checkbox?: boolean;

    /** If this property is set to an array, the setting will be displayed as a select.
     * The array should contain the options of the select. Each option can be a string or an array of two strings.
     * If the option is a string, the value and the text of the option will be the same.
     * If the option is an array of two strings, the first string will be the value of
     * the option and the second string will be the text of the option. */
    select?: Array<Array<string> | string>;

    /**
     * If this property is set to true, the setting will be displayed as a prompt.
     */
    prompt?: string;

    /**
     * The type of the prompt. This property is only used when the prompt property is set to true. The default value is text.
     */
    promptType?: string;

    /**
     * The options of the prompt. This property is only used when the prompt property is set to true and the promptType property is set to select.
     */
    promptOptions?: {
      /**
       * The regular expression to match the value.
       */
      match: RegExp;

      /**
       * If this property is set to true, the value is required.
       */
      required: boolean;

      /**
       * The placeholder of the prompt.
       */
      placeholder: string;

      /**
       * The test function to test the value.
       * @param value
       * @returns
       */
      test: (value: unknown) => boolean;
    }[];
  }[];

  /**
   * The callback function that will be called when the settings are changed.
   * @param key
   * @param value
   * @returns
   */
  cb: (key: string, value: unknown) => void;
}

export type Require = <K extends string>(
  moduleName: K,
) => Modules[Lowercase<K> extends keyof Modules ? Lowercase<K> : any];

export interface Modules {
  acemodes: AceModes;
  actionstack: ActionStack;
  alert: Alert;
  color: Color;
  colorpicker: ColorPicker;
  confirm: Confirm;
  contextmenu: ContextMenuConstructor;
  dialogbox: DialogBoxConstructor;
  editorfile: EditorFile;
  encodings: Encodings;
  filelist: FileList;
  fonts: Fonts;
  fs: FS;
  fsoperation: FS;
  inputhints: InputHints;
  helpers: Helpers;
  intent: Intent;
  keyboard: Keyboard;
  loader: Loader;
  multiprompt: MultiPrompt;
  openfolder: OpenFolder;
  page: WCPage;
  palette: Palette;
  projects: Projects;
  prompt: Prompt;
  select: Select;
  selectionmenu: SelectionMenu;
  settings: Settings;
  sidebarapps: SidebarApps;
  sidebutton: SideButtonConstructor;
  themebuilder: typeof ThemeBuilder;
  themes: Themes;
  toast: Toast;
  tutorial: Tutorial;
  url: Url;
  windowresize: WindowResize;
}

declare global {
  /** The acode object is the global object that provides access to the Acode API.
   * You can use this object to access the API methods. */
  const acode: Acode;

  /** The directory where all the assets are stored. */
  const ASSETS_DIRECTORY: string;

  /**  The directory where all the cache files are stored. */
  const CACHE_STORAGE: string;

  /** The directory where all the data files are stored. */
  const DATA_STORAGE: string;

  /** The directory where all the plugins are stored. */
  const PLUGIN_DIR: string;

  /** Whether the app supports theme or not. */
  const DOES_SUPPORT_THEME: boolean;

  /** Whether the app is free version or not. */
  const IS_FREE_VERSION: boolean;

  /** The file where all the keybindings are stored. */
  const KEYBINDING_FILE: string;

  /** The Android SDK version. */
  const ANDROID_SDK_INT: number;

  /**
   * Logs a message with the specified log level.
   * @param level - The log level.
   * @param message - The message to be logged.
   */
  function log(level: "error" | "warn" | "info" | "debug", message: any): void;

  const ace: typeof import("ace");

  interface Window {
    /** The acode object is the global object that provides access to the Acode API.
     * You can use this object to access the API methods. */
    acode: Acode;

    /** The directory where all the assets are stored. */
    ASSETS_DIRECTORY: string;

    /**  The directory where all the cache files are stored. */
    CACHE_STORAGE: string;

    /** The directory where all the data files are stored. */
    DATA_STORAGE: string;

    /** The directory where all the plugins are stored. */
    PLUGIN_DIR: string;

    /** Whether the app supports theme or not. */
    DOES_SUPPORT_THEME: boolean;

    /** Whether the app is free version or not. */
    IS_FREE_VERSION: boolean;

    /** The file where all the keybindings are stored. */
    KEYBINDING_FILE: string;

    /** The Android SDK version. */
    ANDROID_SDK_INT: number;

    tag: typeof tag;

    /**
     * Logs a message with the specified log level.
     * @param level - The log level.
     * @param message - The message to be logged.
     */
    log: typeof log;

    ace: typeof import("ace");
  }
}
