declare namespace Acode {
  interface ActionStack {
    /**
     * Length of stack
     */
    readonly length: number;

    /**
     * Function to be called when app is closed
     */
    onCloseApp: () => void;

    /** Adds a new action to the stack. */
    push(action: Action): void;

    /**
     * Executes and removes the most recent action from the stack.
     * @param repeat Number of actions to pop and execute
     */
    pop(repeat?: number): void;

    /**
     * Retrieves an action from the stack by its ID.
     * @param id The action identifier
     */
    get(id: string): Action | undefined;

    /**
     * Removes an action from the stack without executing it.
     * @param id The action identifier
     */
    remove(id: string): void;

    /**
     * Checks if an action exists in the stack.
     * @param id The action identifier
     */
    has(id: string): boolean;

    /**
     * Sets a marker at the current stack position.
     */
    setMark(): void;

    /**
     * Removes all actions added after the last marker.
     */
    clearFromMark(): void;
    freeze(): void;
    unfreeze(): void;
  }

  interface Action {
    /** Unique identifier for the action */
    id: string;

    /** Callback function to execute when back is pressed */
    action: () => void;
  }
}
