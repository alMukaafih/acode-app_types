declare namespace Acode {
  /**
   * This provide methods to manipulate project templates. This includes listing available projects, retrieving specific project details, and setting new project templates.
   * This is particularly useful for creating and managing templates for different types of projects(frameworks), such as HTML templates, react, etc.
   */
  interface Projects {
    /**
     * Returns an array of objects, each containing the name and icon of a project.
     */
    list(): { name: string; icon: string }[];

    /**
     * Takes a project name as an argument and returns an object containing the files and icon of that project.
     */
    get(
      name: string,
    ): { files: Record<string, string>; icon: string } | undefined;

    /**
     *  Adds a new project template. It takes the project name, a function that returns a map of files, and an icon source as arguments.
     */
    set(
      project: string,
      files: () => Promise<Record<string, string>>,
      iconSrc: string,
    ): void;
  }
}
