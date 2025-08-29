declare namespace Acode {
  interface Page {
    /**
     * @param title The title text shown in the page header.
     * @param options  Optional configuration object.
     */
    (
      title: string,
      options: {
        /**
         * Element shown before the title (e.g. back button).
         */
        lead: HTMLElement;

        /**
         * Element shown after the title (e.g. menu icon).
         */
        tail: HTMLElement;
      },
    ): WCPage;
  }
}
