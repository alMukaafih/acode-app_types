declare namespace Acode {
  interface SelectionMenu {
    /**
     * The add method allows you to add new items to the selection menu.
     * @param onclick A function that gets executed when the menu item is clicked.
     * @param text The icon or text to display in the menu.
     * @param mode Specifies when this item should be shown in the selection menu. The possible values are:
     * 'selected': Show when some text is selected.
     * 'all': Show regardless of text selection.
     * @param readOnly A boolean value that determines whether the item should be shown in read-only mode.
     */
    add(
      onclick: (ev?: MouseEvent) => void,
      text: string,
      mode: "selected" | "all",
      readOnly?: boolean,
    ): void;
  }
}
