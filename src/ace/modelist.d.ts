declare namespace Acode {
  /**
   * The Ace Modes is a utility method in Acode allows you to manage the language modes supported by the Ace editor.
   * This includes adding new modes, removing existing ones, and configuring how the editor handles different file types.
   */
  interface AceModes {
    /**
     * Adds a new mode to the Ace editor. This is useful when you want to support a custom language or file type.
     * @param name The name of the mode.

    * @param extensions The file extensions associated with this mode. This can be a string or an array of strings.
    * @param caption The display name of the mode.
    */
    addMode(name: string, extensions: string | string[], caption: string): void;

    /**
     * Removes a mode from the Ace editor. This is useful if you need to clean up or no longer need support for a particular mode.
     * @param name The name of the mode to be removed.
     */
    removeMode(name: string): void;
  }
}
