import { registerPlugin } from '@capacitor/core';

import type { WebviewPluginPlugin } from './definitions';

const WebviewPlugin = registerPlugin<WebviewPluginPlugin>('WebviewPlugin', {
  web: () => import('./web').then((m) => new m.WebviewPluginWeb()),
});

export * from './definitions';
export { WebviewPlugin };
