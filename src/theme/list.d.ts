declare namespace Acode {
  /**
   * Acode provides a flexible and intuitive module for managing themes, enabling developers to seamlessly add,
   * retrieve, update, and list themes within their project.
   */
  interface Themes {
    /**
     * Adds a new theme to the theme collection.
     * @param theme An instance of ThemeBuilder defining the theme's properties.
     */
    add(theme: ThemeBuilder): void;

    /**
     * Retrieves a specific theme by its name.
     */
    get(name: string): ThemeBuilder | undefined;

    /**
     * Updates an existing theme in the theme collection.
     */
    update(theme: ThemeBuilder): void;

    /**
     * List all the themes in the theme list.
     * @returns The names of all the themes in the theme list.
     */
    list(): string[];
  }
}
