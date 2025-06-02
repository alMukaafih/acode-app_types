/**
 * Functionality:
 * - Generates a list of hints based on user input.
 * - Displays matching hints as the user types.
 * - Allows users to select a hint and populate the input field.
 */
export interface InputHints {
  /**
   *
   * @param $input The HTMLInputElement representing the input field.
   * @param hints An array of hint strings or a callback function that generates hints dynamically.
   * @param onSelect A callback function called when a user selects a hint.
   */
  (
    $input: HTMLInputElement,
    hints: (string | (() => string))[],
    onSelect?: (value: string) => void,
  ): {
    /** Returns the currently selected hint element  */
    getSelected(): HTMLLIElement | undefined;

    /** The hint list container */
    container: HTMLUListElement;
  };
}
