export interface PageConstructor {
  /**
   * @param title The title text shown in the page header.
   * @param options  Optional configuration object.
   */
  (
    title: string,
    options: {
      /** Element shown before the title (e.g. back button). */
      lead: HTMLElement;

      /** Element shown after the title (e.g. menu icon). */
      tail: HTMLElement;
    },
  ): void;
}

export interface WCPage extends HTMLElement {
  /** The main content container */
  body: HTMLElement;

  /** The header container element */
  header: HTMLElement;

  /** The page's inner HTML content */
  innerHTML: string;

  /** The page's text content */
  textContent: string;

  /** The lead element if defined */
  lead: HTMLElement;

  /** Adds elements to the main page content area */
  appendBody(...elements: HTMLElement[]): void;

  /** Adds elements outside the main content area */
  appendOuter(...elements: HTMLElement[]): void;

  /** Adds event listener to the page */
  on(event: "hide" | "show", cb: (this: WCPage) => void): void;

  /** Removes an event listener from the page */
  off(event: "hide" | "show", cb: (this: WCPage) => void): void;

  /** Updates the page title */
  setTitle(title: string): void;

  /** Hides the page */
  hide(): string;

  /** Shows the page */
  show(): string;
}
