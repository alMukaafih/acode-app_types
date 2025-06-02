/** This ui component help in showing toast messages for given time interval. */
export interface Toast {
  /**
   * @param message The message to be displayed in the toast.
   * @param duration The duration in milliseconds for which the toast should be displayed.
   */
  (message: string, duration: number): void;
}

declare global {
  /** This ui component help in showing toast messages for given time interval. */
  const toast: Toast;

  interface Window {
    /** This ui component help in showing toast messages for given time interval. */
    toast: Toast;
  }
}
