/**
 * The createKeyboardEvent API allows you to programmatically create and dispatch keyboard events in Acode.
 * This is useful for simulating keyboard interactions and testing keyboard-driven features.
 */
export interface CreateKeyboardEvent {
  /**
   * Creates a new keyboard event with the specified type and options.
   * @param type The type of keyboard event to create.
   * @param options Configuration options for the keyboard event.
   */
  (
    type: "keydown" | "keyup",
    options: {
      [K in keyof KeyboardEvent]?: KeyboardEvent[K];
    },
  ): void;
}
