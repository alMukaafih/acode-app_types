declare namespace Acode {
  /**
   * The confirm ui component in Acode is a dialog box for displaying confirmation message modals to users.
   * Whether you're seeking user approval for a critical action or confirming a decision, this component is best suited for this process.
   */
  interface Confirm {
    /**
     * @param titleText A string representing the title of the confirmation message modal. This title will be displayed at the top of the message modal.
     * @param message A string representing the body of the confirmation message modal.
     * @returns The confirm component returns a promise that resolves to a boolean value.
     * The boolean value represents whether the user confirmed or denied the message.
     * A value of true represents confirmation, while false represents denial.
     */
    (titleText: string, message: string): Promise<boolean>;
  }
}
