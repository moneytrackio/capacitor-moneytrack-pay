import { registerPlugin } from '@capacitor/core';

import type { WebviewPluginPlugin } from './definitions';

const MoneytrackSDK = registerPlugin<WebviewPluginPlugin>('WebviewPlugin', {
  web: () => import('./web').then((m) => new m.WebviewPluginWeb()),
});

export * from './definitions';
export { MoneytrackSDK };
