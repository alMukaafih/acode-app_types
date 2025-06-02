type WindowResizeEvent = "resize" | "resizeStart";

export interface WindowResize {
  /** Adds event listener */
  on(event: WindowResizeEvent, listener: () => void): void;

  /** Removes event listener */
  off(event: WindowResizeEvent, listener: () => void): void;
}
