declare namespace Acode {
  interface EditorTheme {
    caption: string;
    isDark: boolean;
    getExtension: () => Extension;
  }

  interface EditorThemes {
    register(
      id: string,
      caption: string,
      isDark: boolean,
      getExtension: () => Extension,
    ): void;

    unregister(id: string): void;

    list(): EditorTheme[];

    /**
     * Set CodeMirror theme by id
     */
    apply(id: string): boolean | undefined;

    get(id: string): EditorTheme | undefined;
  }
}
