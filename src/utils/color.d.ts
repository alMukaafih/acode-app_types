declare namespace Acode {
  /**
   * The Color API provides functionality for color manipulation and conversion.
   * It allows you to create, modify, and analyze colors in different formats.
   */
  interface ColorConstructor {
    /**
     * Creates a new Color instance from a color string.
     * @param color A valid CSS color string (hex, rgb, hsl, color name etc.)
     */
    (color: string): Color;
  }

  /**
   * The Color API provides functionality for color manipulation and conversion.
   * It allows you to create, modify, and analyze colors in different formats.
   */
  interface Color {
    /** Returns true if the color is considered dark (luminance < 0.5). */
    isDark: boolean;

    /** Returns true if the color is considered light (luminance >= 0.5). */
    isLight: boolean;

    /** Returns the HSL lightness value of the color (between 0 and 1). */
    lightness: boolean;

    /** Returns the perceived brightness of the color (between 0 and 1). */
    luminance: boolean;

    /** Returns the hexadecimal representation of the color. */
    hex: string;

    /** Returns the HSL representation of the color. */
    hsl: { h: number; s: number; l: number };

    /**
     * Darkens the color by the specified ratio
     * @param ratio Number between 0 and 1 indicating how much to darken
     * @returns The modified Color instance
     */
    darken(ratio: number): Color;

    /**
     * Lightens the color by the specified ratio
     * @param ratio Number between 0 and 1 indicating how much to darken
     * @returns The modified Color instance
     */
    lighten(ratio: number): Color;
  }
}
