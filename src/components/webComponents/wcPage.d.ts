declare namespace Acode {
  interface WCPage extends HTMLElement {
    handler: PageHandler;

    onhide?: (this: WCPage) => void;
    onconnect?: (this: WCPage) => void;
    ondisconnect?: (this: WCPage) => void;
    onwillconnect?: (this: WCPage) => void;
    onwilldisconnect?: (this: WCPage) => void;

    /** Adds elements to the main page content area */
    appendBody(...elements: HTMLElement[]): void;

    /** Adds elements outside the main content area */
    appendOuter(...elements: HTMLElement[]): void;

    connectedCallback(): void;

    disconnectedCallback(): void;

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

    /**
     * The main content container
     */
    body: HTMLElement;

    /**
     * The page's inner HTML content
     */
    innerHTML: string;

    /**
     * The page's text content
     */
    textContent: string;

    /** The lead element if defined */
    lead: HTMLElement;

    /**
     * The header container element
     */
    header: HTMLElement;

    initializeIfNotAlreadyInitialized(): void;
  }

  interface PageHandler {
    $el: HTMLElement;

    $replacement: HTMLElement;

    onRestore?: () => void;
    onReplace?: () => void;

    /**
     * Replace current element with a replacement element
     */
    replaceEl(): void;

    /**
     * Restore current element from a replacement element
     */
    restoreEl(): void;

    onhide(): void;
    onshow(): void;

    remove(): void;
  }
}
