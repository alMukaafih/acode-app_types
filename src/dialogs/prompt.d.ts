declare namespace Acode {
  /**
   * The prompt ui component in Acode is a dialog box for displaying prompts to users,
   * allowing them to provide input in a convenient and straightforward manner.
   */
  interface Prompt {
    /**
     * @param message A string that represents the message to be displayed to the user.
     * @param defaultValue A string that represents the default value of the input.
     * @param type A string that represents the type of input.
     * @param options An object that contains additional options for the prompt.
     * @returns The prompt component returns a promise that resolves to a string, number, or null if the prompt is canceled.
     */
    (
      message: string,
      defaultValue: string,
      type: "number" | "tel", // TODO: verify
      options: PromptOptions<number>,
    ): Promise<number | null>;
    (
      message: string,
      defaultValue: string,
      type: PropmtType,
      options: PromptOptions<string>,
    ): Promise<string | null>;
  }

  type PropmtType =
    | "textarea"
    | "text"
    | "number"
    | "tel"
    | "search"
    | "email"
    | "url";

  type PromptOptions<T> = Partial<{
    /** A regular expression that the input must match. */
    match: RegExp;
    /** A boolean that indicates whether the input is required or not. */
    required: boolean;
    /** A string that represents the placeholder text of the input. */
    placeholder: string;
    /** A function that takes in a value and returns a boolean indicating whether the value is valid. */
    test: (value: T) => boolean;
  }>;
}
