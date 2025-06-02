/**
 * The Palette component provides an interactive search interface with dynamic suggestions for your Acode plugin.
 * It creates a searchable input field with a dropdown list of options that updates as the user types.
 * This is what used in command palettes, find files etc.
 */
export interface Palette {
  /**
   * @param getList  Function that returns an array of options or Promises resolving to options. Called whenever the search input changes.
   * @param onSelect Callback function executed when the user selects an option. Receives the selected option value.
   * @param placeholder Optional text to display in the input field when empty.
   * @param onRemove  Optional callback triggered when the palette is closed/removed.
   */
  (
    getList: () => Array<string | string[]>,
    onSelect: (value: string) => void,
    placeholder?: string,
    onRemove?: () => void,
  ): void;
}
