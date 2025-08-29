declare namespace Acode {
  /**
   * The Intent API provides functionality to handle intents from other apps and implement custom URI scheme handling in Acode plugins.
   */
  interface Intent {
    /**
     *Adds an intent handler function that will be called when intents are received.
     */
    addHandler(handler: (event: IntentEvent) => void): void;

    /**
     * Removes a previously added intent handler.
     */
    removeHandler(handler: (event: IntentEvent) => void): void;
  }

  interface IntentEvent {
    /**
     * The module name from the URI.
     */
    module: string;

    /**
     * The action to perform.
     */
    action: string;

    /**
     * Additional data value.
     */
    value: string;

    /**
     *  Prevents default intent handling.
     */
    preventDefault: () => void;

    /**
     * Stops other handlers from executing.
     */
    stopPropagation: () => void;

    readonly defaultPrevented: boolean;

    readonly propagationStopped: boolean;
  }
}
