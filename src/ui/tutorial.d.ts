/** The tutorial module provides functionality to display one-time tutorial messages to users. */
export interface Tutorial {
  /**
   * @param id  Unique identifier for the tutorial message.
   * @param message The content to display, can be: - string: Plain text message - HTMLElement: Custom HTML content - Function: A function that returns HTMLElement and receives hide callback;
   */
  (
    id: string,
    message: string | HTMLElement | ((hide: () => void) => void),
  ): void;
}
