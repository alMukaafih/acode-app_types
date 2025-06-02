export interface Encodings {
  /** An array of all the supported encodings.  */
  encodings: Array<{
    name: string;
    labels: string[];
    aliases: string[];
  }>;

  /**
   * Encodes a string with the specified character set.
   * @param text The text to encode.
   * @param charset The character set name (e.g., UTF-8, GBK).
   */
  encode(text: string, charset: string): Promise<ArrayBuffer>;

  /**
   *
   * @param buffer The ArrayBuffer to decode.
   * @param charset The character set name (e.g., UTF-8, GBK).
   */
  decode(buffer: ArrayBuffer, charset: string): Promise<string>;
}
