declare namespace Acode {
  /**
   * Functionality:
   * - Generates a list of hints based on user input.
   * - Displays matching hints as the user types.
   * - Allows users to select a hint and populate the input field.
   */
  interface InputHints {
    /**
     *
     * @param $input The HTMLInputElement representing the input field.
     * @param hints An array of hint strings or a callback function that generates hints dynamically.
     * @param onSelect A callback function called when a user selects a hint.
     */
    (
      $input: HTMLInputElement,
      hints: Hint[] | HintCallback,
      onSelect?: (value: string) => void,
    ): {
      /** Returns the currently selected hint element  */
      getSelected(): HTMLLIElement | undefined;

      /** The hint list container */
      container: HTMLUListElement;
    };
  }

  interface HintObj {
    value: string;
    text: string;
  }

  type Hint = string | HintObj;

  interface HintModification {
    add(hint: Hint, index?: number): void;
    remove(hint: Hint): void;
    removeIndex(index: number): void;
  }

  type HintCallback = (
    setHints: (hints: Array<Hint>) => void,
    modification: HintModification,
  ) => void;
}
