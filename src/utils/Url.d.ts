declare namespace Acode {
  /** The Url module provides various utility functions for working with URLs.
   * This module is essential for parsing, manipulating, and formatting URLs within plugins.
   */
  interface Url {
    /**
     * Returns the basename of the last segment of the URL path, or null if the input is invalid.
     */
    basename(url: string): string | null;

    /**
     * Compares multiple URL strings and returns true if they are all the same, false otherwise.
     */
    areSame(...urls: string[]): boolean;

    /** Returns the file extension of the last segment of the URL path, or null if the input is invalid. */
    extname(url: string): string | null;

    /** Joins multiple path strings into a single URL string. */
    join(...pathnames: string[]): string;

    /** Returns a URL-safe string by encoding each component of the URL. */
    safe(url: string): string;

    /** Returns the path of the URL, or null if the input is invalid. */
    pathname(url: string): string;

    /** Returns the directory name from the URL, or null if the input is invalid. */
    dirname(url: string): string;

    /** Parses the given URL and returns an object containing the URL and query string. */
    parse(url: string): { url: string; query: string };

    /** Formats a URL object into a string. */
    formate(urlObj: {
      protocol: "ftp:" | "sftp:" | "http:" | "https:";
      hostname: string | number;
      path: string;
      username?: string;
      password?: string;
      port?: string | number;
      query?: object;
    }): string;

    /** Returns the protocol of a URL. */
    getProtocol(url: string): "ftp:" | "sftp:" | "http:" | "https:";

    /** Returns a URL string with the password (if present) replaced with asterisks. */
    hidePassword(url: string): string;

    /** Decodes the URL and returns an object containing username, password, hostname, pathname, port, and query. */
    decodeUrl(url: string): {
      protocol: "ftp:" | "sftp:" | "http:" | "https:";
      hostname: string | number;
      path: string;
      username: string;
      password: string;
      port: string | number;
      query: object;
    };

    /** Removes the trailing slash from a URL. */
    trimSlash(url: string): string;
  }
}
