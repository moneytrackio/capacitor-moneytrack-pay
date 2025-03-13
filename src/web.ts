import { WebPlugin } from '@capacitor/core';

import type { WebviewPluginPlugin } from './definitions';

export class WebviewPluginWeb extends WebPlugin implements WebviewPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
