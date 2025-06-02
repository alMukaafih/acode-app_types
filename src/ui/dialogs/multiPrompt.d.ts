/**
 * The multiPrompt ui component in Acode is a dialog box for prompting users with multiple inputs at once.
 * Whether you need to collect various pieces of information or gather complex input data.
 */
export interface MultiPrompt {
  /**
   * @param message The title for the prompt modal.
   * @param inputs The inputs to prompt the user for. It can be a single input or an array of inputs. Each input is defined by an object with various properties such as id, type, placeholder, etc.
   * @param help The help icon at the top of the multiPrompt will be enabled with the specified help URL. It must be valid url.
   */
  (
    message: string,
    inputs: Array<Input | Array<Input>>,
    help: string,
  ): Promise<void>;
}

type Input = {
  [K in keyof HTMLInputElement]?: HTMLInputElement[K];
};
