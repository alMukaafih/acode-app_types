/**
 * A straightforward API for managing fonts in your Acode project.
 */
export interface Fonts {
  /**
   * Adds a new font to your project.
   * @param name Unique identifier for the font
   * @param css CSS @font-face declaration
   */
  add(name: string, css: string): void;

  /** Retrieves a specific font's details. */
  get(name: string): { name: string; css: string } | undefined;

  /** Lists all available font names. */
  getNames(): string[];
}
