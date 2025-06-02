import type { Editor } from "ace";
import type { Delta } from "ace/document";
import type { EditorFile, FileOptions } from "./editor/file";

/**
 * The editorManager allows to interact with the Editor Instance and listen to various events
 * of Acode app with the help of various methods and Properties.
 * Basically for interacting with the opened files and tabs.
 */
export interface EditorManager {
	/** This is an instance of the Ace editor. */
	editor: Editor;

	/** This function adds a new file to the workspace. */
	addNewFile(filename?: string, options?: FileOptions): void;

	/**
	 * This function gets files from the list of opened files.
	 * @param test the file id, uri, repo, or gist to find the file.
	 * @param type the type of test.
	 */
	getFile(
		test: string,
		type: "uri" | "id" | "name" | "git" | "gist",
	): EditorFile;

	/** This function switches the tab to the given file id. */
	switchFile(id: string): void;

	/** This property returns the current file. */
	activeFile: EditorFile;

	/** This function returns the number of unsaved files. */
	hasUnsavedFiles(): number;

	/** This property returns a list of all files. */
	files: EditorFile[];

	/** This function sets the sub text of the header, i.e. the location of the file. */
	setSubText(file: File): void;

	/** container: HTMLElement */
	container: HTMLElement;

	/** This function adds a listener for the specified event. */
	on(
		event:
			| "file-content-changed"
			| "file-loaded"
			| "remove-file"
			| "save-file"
			| "switch-file",
		listener: (file: EditorFile) => void,
	): void;
	on(
		event: "add-folder" | "remove-folder" | "update-folder",
		listener: (ev: { url: string; name: string }) => void,
	): void;
	on(event: EditorEvent, listener: (...args: any[]) => void): void;

	/** This function removes a listener for the specified event. */
	off(event: string, listener: (...args: any[]) => void): void;

	/** This function emits an event with the specified arguments. */
	emit(event: EditorEvent, ...args: any[]): void;

	/** Whether the editor is currently scrolling. */
	isScrolling: boolean;
}

/** Editor Event */
export type EditorEvent =
	| "add-folder"
	| "change"
	| "file-content-changed"
	| "file-loaded"
	| "init-open-file-list"
	| "new-file"
	| "remove-file"
	| "remove-folder"
	| "rename-file"
	| "save-file"
	| "switch-file"
	| "update-folder";

declare global {
	/**
	 * The editorManager allows to interact with the Editor Instance and listen to various events
	 * of Acode app with the help of various methods and Properties.
	 * Basically for interacting with the opened files and tabs.
	 */
	const editorManager: EditorManager;

	interface Window {
		/**
		 * The editorManager allows to interact with the Editor Instance and listen to various events
		 * of Acode app with the help of various methods and Properties.
		 * Basically for interacting with the opened files and tabs.
		 */
		editorManager: EditorManager;
	}
}
