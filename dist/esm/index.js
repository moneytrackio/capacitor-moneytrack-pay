import { registerPlugin } from '@capacitor/core';
const MoneytrackSDK = registerPlugin('WebviewPlugin', {
    web: () => import('./web').then((m) => new m.WebviewPluginWeb()),
});
export * from './definitions';
export { MoneytrackSDK };
//# sourceMappingURL=index.js.map