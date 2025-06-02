/**
 * This module is used to create a theme object that can be used as a theme for the Acode.
 */
export class ThemeBuilder {
  version: "free" | "paid";
  /**
   * The name of the theme.
   */
  name: string;

  /**
   * The type of the theme.
   */
  type: "dark" | "light";

  /**
   * Automatically darken the primary color.
   * @default true
   */
  autoDarkened: boolean;

  /**
   * The preferred editor theme.
   * @default undefined
   */
  preferredEditorTheme: string;

  /**
   * preferredFont string
   * @default undefined
   */
  preferredFont: string;

  /**
   * This module is used to create a theme object that can be used as a theme for the Acode.
   * @param name
   * @param type
   * @param version
   */
  constructor(name: string, type?: "dark" | "light", version?: "free" | "paid");

  readonly id: string;

  /**
   * The border radius of the popup.
   */
  popupBorderRadius: string;

  /**
   * The color of the active element.
   */
  activeColor: string;

  /**
   * The color of the icon of the active element.
   */
  activeIconColor: string;

  /**
   * The color of the border.
   */
  borderColor: string;

  /**
   * The color of the box shadow.
   */
  boxShadowColor: string;

  /**
   * The color of the active button.
   */
  buttonActiveColor: string;

  /**
   * The background color of the button.
   */
  buttonBackgroundColor: string;

  /**
   * The text color of the button.
   */
  buttonTextColor: string;

  /**
   * The text color of the error message.
   */
  errorTextColor: string;

  /**
   * The primary color of the application.
   */
  primaryColor: string;

  /**
   * The text color of the primary color.
   */
  primaryTextColor: string;

  /**
   * The secondary color of the application.
   */
  secondaryColor: string;

  /**
   * The text color of the secondary color.
   */
  secondaryTextColor: string;

  /**
   * The text color of the link.
   */
  linkTextColor: string;

  /**
   * The color of the scrollbar.
   */
  scrollbarColor: string;

  /**
   * The color of the popup border.
   */
  popupBorderColor: string;

  /**
   * The color of the popup icon.
   */
  popupIconColor: string;

  /**
   * The background color of the popup.
   */
  popupBackgroundColor: string;

  /**
   * The text color of the popup.
   */
  popupTextColor: string;

  /**
   * The color of the active popup element.
   */
  popupActiveColor: string;

  dangerColor: string;

  /**
   * The width of the file tab.
   * The color of the active popup element.
   */
  fileTabWidth: string;

  activeTextColor: string;

  /**
   * The CSS string of the theme.
   */
  readonly css: string;

  /**
   * Gets the theme as an object
   */
  toJSON(colorType: "rgba" | "hex" | "none"): Record<string, string>;

  toString(): string;

  /**
   * This method is used to set a darkened primary color.
   */
  darkenPrimaryColor(): void;

  /**
   * Creates a theme from a CSS string
   * @param css The CSS string.
   */
  static fromCSS(css: string): ThemeBuilder;

  /**
   * Creates a theme builder object from a JSON object.
   * @param json The JSON object.
   */
  static fromJSON(json: Record<string, string>): ThemeBuilder;
}
