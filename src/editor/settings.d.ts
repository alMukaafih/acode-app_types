/**
 * The Settings module provides a way to interact with Acode's settings, allowing you to read, update and listen for changes to settings values.
 */
export interface Settings {
  uiSettings: any;
  /**
   * Gets the value of the setting.
   * @param setting Name of the setting to get.
   */
  get(setting: string): any;

  /**
   * Updates one or more settings.
   * @param settings Object containing settings to update.
   * @param showToast Whether to show a confirmation toast (default: true).
   */
  update(settings: Record<string, any>, showToast: boolean): Promise<void>;

  /**
   * Resets settings to default values.
   * @param setting The name of the setting to reset. If setting is not provided, all settings will be reset.
   */
  reset(setting?: string): Promise<void>;

  /**
   * Adds an event listener
   * @param event Event name in format 'update:setting' or 'reset'
   * @param callback Function to call when event occurs
   */
  on(event: string, callback: (value: any) => void): void;

  /**
   * Removes an event listener from the settings.
   * @param event  Event name in format 'update:setting' or 'reset'
   * @param callback Function to remove
   */
  off(event: string, callback: (value: any) => void): void;
}
