export interface WebviewPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
