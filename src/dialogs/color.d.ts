declare namespace Acode {
  /**
   * The colorPicker dialog box in Acode offers a way for users to choose colors within your plugins.
   * This feature-rich color picker opens a dialog box showcasing a spectrum of color options, providing users with an intuitive and visually pleasing experience.
   */
  interface ColorPicker {
    /**
     * @param defaultColor The default color that the color picker will display initially.
     * It should be a string representing a color in hexadecimal format or rgba or hsl.
     * @param onhide The callback function to be called when the color picker dialog box is closed.
     * @returns The colorPicker component returns a promise that resolves to a string representing the selected color.
     */
    (defaultColor: string, onhide?: () => void): Promise<string>;
  }
}
