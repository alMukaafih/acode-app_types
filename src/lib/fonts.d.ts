declare namespace Acode {
  /**
   * A straightforward API for managing fonts in your Acode project.
   */
  interface Fonts {
    /**
     * Adds a new font to your project.
     * @param name Unique identifier for the font
     * @param css CSS @font-face declaration
     */
    add(name: string, css: string): void;

    addCustom: (name: string, css: string) => void;

    /** Retrieves a specific font's details. */
    get(name: string): { name: string; css: string } | undefined;

    /** Lists all available font names. */
    getNames(): string[];

    remove: (name: string) => boolean;

    has: (name: string) => boolean;

    setFont: (name: string) => Promise<void>;

    loadFont: (name: string) => Promise<string>;
  }
}
