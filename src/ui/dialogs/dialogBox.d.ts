/**
 * The dialogBox API in Acode provides a way to create custom dialog boxes within your plugins.
 * Basically it creates a dialog and gives you the freedom to display whatever you wish.
 */
export interface DialogBoxConstructor {
  /**
   * Dialog Box Instance
   * @param titleText Title text
   * @param html HTML string
   * @param hideButtonText Text for hide button
   * @param cancelButtonText Text for cancel button
   * @returns Dialog Box instance
   */
  (
    titleText: string,
    html: string,
    hideButtonText: string,
    cancelButtonText: string,
  ): DialogBox;
}

export interface DialogBox {
  /** The hide method is used to hide the dialog box. */
  hide(): void;

  /** The wait method disables the OK button for the specified time (in milliseconds). */
  wait(time: number): DialogBox;

  /** The onhide method sets a callback function to be called when the dialog box is hidden. */
  onhide(callback: () => void): DialogBox;

  /** The onclick method sets a callback function to be called when the content is clicked. */
  onclick(callback: (ev: MouseEvent) => void): DialogBox;

  /** The then method sets a callback function to be called when the OK button is clicked. */
  then(callback: () => void): DialogBox;

  /** The ok method sets a callback function to be called when the OK button is clicked. */
  ok(callback: () => void): DialogBox;

  /** The cancel method sets a callback function to be called when the Cancel button is clicked. */
  cancel(callback: () => void): DialogBox;
}
