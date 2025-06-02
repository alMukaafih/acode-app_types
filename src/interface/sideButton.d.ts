/** The side buttons are buttons that appear vertically along the right side of the editor screen.
 * @since versionCode: 316
 */
export interface SideButton {
  /** Shows the side button */
  show(): void;

  /** Hides the side button */
  hide(): void;
}

/** A function that creates and renders side button that is shown in right side of the editor in vertical direction.
 * Supported in version code >= 316
 * */
export type SideButtonConstructor = (options: SideButtonOptions) => SideButton;

/** The options of the side button */
export interface SideButtonOptions {
  /** The text label for the button */
  text: string;

  /** CSS class name for the button icon */
  icon?: string;

  /** Click handler function */
  onclick: (ev: MouseEvent) => void;

  /** Background color of the button */
  backgroundColor?: string;

  /** Text color of the button */
  textColor?: string;
}
