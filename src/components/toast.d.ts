declare namespace Acode {
  /**
   * This ui component help in showing toast messages for given time interval.
   */
  interface Toast {
    /**
     * @param message The message to be displayed in the toast.
     * @param duration The duration in milliseconds for which the toast should be displayed.
     */
    (message: string, duration: number): void;
  }
}

/** This ui component help in showing toast messages for given time interval. */
declare const toast: Acode.Toast;

interface Window {
  /** This ui component help in showing toast messages for given time interval. */
  toast: Acode.Toast;
}
