declare namespace Acode {
  /**
   * The loader ui component in Acode is utility that help you to display loading dialogs with customizable titles and messages.
   * These loading dialogs offer an informative and engaging experience for users while waiting for various processes to complete.
   * The component also provides options for setting timeouts and callback functions for handling loading process cancellations.
   */
  interface Loader {
    /** Shows the title loader.
     * @param immortal If true, the loader will not be removed automatically.
     */
    showTitleLoader(immortal?: boolean): void;

    /**
     * Hides the title loader.
     * @param immortal If not true, the loader will not remove when immortal was true when it was created.
     */
    removeTitleLoader(immortal?: boolean): void;

    /**  Creates a new loading dialog with the specified options.
     * @param titleText The title text to display on the loading dialog.
     * @param message The message to display on the loading dialog.
     */
    create(
      titleText: string,
      message: string,
      cancel: {
        /** The time (in milliseconds) after which the loading process will automatically be cancelled. */
        timeout: number;

        /** A function that will be called when the loading process is cancelled. */
        callback: () => void;
      },
    ): void;

    /** Removes the loading dialog from the DOM permanently. */
    destroy(): void;

    /** Hides the loading dialog temporarily. The dialog can be restored using the show() method. */
    hide(): void;

    /** Shows a previously hidden loading dialog. */
    show(): void;
  }
}
