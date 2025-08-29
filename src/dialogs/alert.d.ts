declare namespace Acode {
  /**
   * The alert component in Acode is a dialog box for displaying messages,
   * warnings, or errors to users within a modal window.
   * Similar to the traditional JavaScript alert().
   */
  interface Alert {
    /**
     * @param titleText The text to display in the title of the alert modal.
     * @param message The message to display in the body of the alert modal.
     * @param onhide An optional function to call when the alert modal is closed.
     */
    (titleText: string, message: string, onhide?: () => void): void;
  }
}
