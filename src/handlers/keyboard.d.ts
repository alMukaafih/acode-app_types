declare namespace Acode {
  interface Keyboard {
    /**
     * Handles keyboard events
     */
    (e: KeyboardEvent): void;
    /**
     * Add an event listener for keyboard events.
     * @param eventName Name of the event to listen for.
     * @param callback Function to execute when the event occurs.
     */
    on(eventName: "key", callback: (ev: KeyboardEvent) => void): void;
    on(eventName: KeyboardEventName, callback: () => void): void;

    /**
     * Remove an event listener.
     * @param eventName Name of the event to remove listener from.
     * @param callback The callback function to remove.
     */
    off(eventName: "key", callback: (ev: KeyboardEvent) => void): void;
    off(eventName: KeyboardEventName, callback: () => void): void;
  }

  type KeyboardEventName =
    | "key"
    | "keyboardShow"
    | "keyboardHide"
    | "keyboardShowStart"
    | "keyboardHideStart";
}
