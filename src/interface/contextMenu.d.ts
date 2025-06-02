/**
 * The Context Menu API allows you to create and manage custom context menus in your plugin.
 * This API provides an easy way to add menus and other contextual interfaces.
 */
export interface ContextMenuConstructor {
  /**
   * @param content The HTML content to show in the menu
   * @param options
   */
  (content: string, options?: ContextMenuOptions): ContextMenu;
  /**
   * @param options Configuration options
   */
  (options: ContextMenuOptions): ContextMenu;
}

export interface ContextMenu {
  /** Display the menu. */
  show(): void;

  /** Hide the menu. */
  hide(): void;

  /** Remove the menu completely. */
  destroy(): void;
}

export interface ContextMenuOptions {
  /** Left position in pixels. */
  left?: number;

  /** Top position in pixels. */
  top?: number;

  /** Bottom position in pixels. */
  bottom?: number;

  /** Right position in pixels. */
  right?: number;

  /** CSS transform-origin property. */
  transformOrigin?: string;

  /** Element that toggles the menu. */
  toggler?: HTMLElement;

  /** Called when menu is shown. */
  onshow?: () => void;

  /** Called when menu is hidden. */
  onhide?: () => void;

  /** Menu items as [text, action] pairs */
  items: [text: string, action: string][];

  /** Called when an item is clicked. */
  onclick?: (ev: MouseEvent) => void;

  /** Called when an item is selected. */
  onselect?: (ev: Event) => void;

  /** Returns HTML string for menu content. */
  innerHTML?: () => string;
}
