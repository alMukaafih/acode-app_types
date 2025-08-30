declare namespace Acode {
  interface EditorLanguages {
    register: AddMode;
    unregister: RemoveMode;
  }

  interface AddMode {
    /**
     * Add language mode to CodeMirror editor
     * @param name name of the mode
     * @param extensions extensions of the mode
     * @param caption display name of the mode
     * @param language CodeMirror language provider function.
     *   This function may return an Extension synchronously or a Promise resolving
     *   to an Extension.
     */
    (
      name: string,
      extensions: string | string[],
      caption: string,
      language?: () => Extension | Promise<Extension>,
    ): void;
  }

  interface RemoveMode {
    /**
     * Remove language mode from CodeMirror editor
     */
    (name: string): void;
  }

  type Extension = { extension: Extension } | readonly Extension[];
}
