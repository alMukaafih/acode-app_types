export interface Select {
  /**
   * @param title The header text shown at the top of the selection dialog.
   * @param items Options to display.
   * @param options Pass true to reject the promise on cancel instead of using an object.
   * @returns The value of the selected item as a string, or rejects if cancelled with `options`: true.
   */
  (
    title: string,
    items: SelectItems,
    options?: boolean | SelectOptions,
  ): Promise<string>;
}

export type SelectItems =
  | string[]
  | (string | boolean | null)[][]
  | SelectItem[];

export interface SelectItem {
  /** Unique identifier returned when selected */
  value: string;

  /** Display text shown to the user */
  text: string;

  /** CSS class for icon or 'letters' to use the letters parameter */
  icon?: string;

  /** Whether the option can be selected  */
  disabled?: boolean;

  /** Shows letter initials as an icon (when icon='letters') */
  letters?: string;

  /** Adds a checkbox to the option when set */
  checkbox?: boolean;
}

export type SelectOptions = Partial<{
  /** Close dialog after selection.
   * @default true
   */
  hideOnSelect: boolean;

  /** Apply text transformation to options.
   * @default true
   */
  textTransform: boolean;

  /** Pre-selected option value.
   * @default undefined
   */
  default: string;

  /**
   * Called when dialog is cancelled.
   * @default undefined
   */
  onCancel: () => void;

  /**
   * Called when dialog is hidden.
   * @default undefined
   */
  onHide: () => void;
}>;
