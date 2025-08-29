declare namespace Acode {
  interface Terminal {
    /**
     * Create a new terminal session
     * @param options Terminal options
     */
    create(options: TerminalOptions): Promise<TerminalInstance>;

    /**
     * Create a local terminal (no server connection)
     * @param options Terminal options
     */
    createLocal(options: TerminalOptions): Promise<TerminalInstance>;

    /**
     * Create a server terminal (with backend connection)
     * @param options Terminal options
     */
    createServer(options: TerminalOptions): Promise<TerminalInstance>;

    /**
     * Get terminal by ID
     * @param id Terminal ID
     * @returns Terminal instance
     */
    get(id: string): TerminalInstance;

    /**
     * Get all active terminals
     * @returns All terminals
     */
    getAll(): Map<string, TerminalInstance>;

    /**
     * Write to a specific terminal
     * @param id Terminal ID
     * @param data Data to write
     */
    write(id: string, data: string): void;

    /**
     * Clear a specific terminal
     * @param id Terminal ID
     */
    clear(id: string): void;

    /**
     * Close a terminal session
     * @param id Terminal ID
     */
    close(id: string): void;

    themes: {
      /**
       * Register a plugin theme
       * @param name Theme name
       * @param theme Theme object
       * @param pluginId Plugin ID for cleanup
       * @returns success
       */
      register(name: string, theme: Xterm.ITheme, pluginId: string): boolean;

      /**
       * Unregister a plugin theme
       * @param name Theme name
       * @param pluginId Plugin ID for verification
       */
      unregister(name: string, pluginId: string): boolean;

      /**
       * Get a theme by name
       * @param themeName Theme name
       * @returns Theme object
       */
      get(name: string): Xterm.ITheme;

      /**
       * Get all available themes
       * @returns All themes
       */
      getAll(): Record<string, Xterm.ITheme>;

      /**
       * Get all theme names
       * @returns Array of theme names
       */
      getNames(): string[];

      /**
       * Create a theme variant based on existing theme
       * @param baseName Base theme name
       * @param overrides Color overrides
       * @returns New theme object
       */
      createVariant(baseName: string, overrides: Xterm.ITheme): Xterm.ITheme;
    };
  }

  interface TerminalOptions
    extends Xterm.ITerminalOptions,
      Xterm.ITerminalInitOnlyOptions {
    name?: string;
    serverMode?: boolean;
    port?: number;
  }

  interface TerminalInstance {
    id: string;
    name: string;
    file: EditorFile;
    container: HTMLDivElement;
  }
}
