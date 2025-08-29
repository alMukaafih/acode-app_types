declare namespace Acode {
  type WindowResizeEventName = "resize" | "resizeStart";

  interface WindowResize {
    (): void;

    /** Adds event listener */
    on(event: WindowResizeEventName, listener: () => void): void;

    /** Removes event listener */
    off(event: WindowResizeEventName, listener: () => void): void;
  }
}
