declare namespace Acode {
  /**
   * The SideBar Apps API allows you to add mini app to the sidebar of the Acode editor.
   * This provides a way to extend the editor's functionality with
   * custom UI components that are easily accessible from the sidebar.
   */
  interface SidebarApps {
    /**
     * Adds a new app to the sidebar.
     * @param icon Icon class name to display for the app
     * @param id  Unique identifier for the app
     * @param title Display title of the app
     * @param initFunction Called when app is first initialized, receives container element
     * @param prepend  Whether to add app at start (true) or end (false) of sidebar
     * @param onSelected Called whenever app tab is selected, receives container element
     */
    add(
      icon: string,
      id: string,
      title: string,
      initFunction: (container: HTMLElement) => void,
      prepend?: boolean,
      onSelected?: (container: HTMLElement) => void,
    ): void;

    /**
     * Gets the container element for the app with the given ID.
     * @param id ID of the app to get
     */
    get(id: string): HTMLElement | undefined;

    /**
     * Removes the app with the given ID from the sidebar.
     * @param id ID of the app to remove
     * @returns
     */
    remove(id: string): void;
  }
}
