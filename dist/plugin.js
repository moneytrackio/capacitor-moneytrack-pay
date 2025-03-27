var capacitorWebviewPlugin = (function (exports, core) {
    'use strict';

    const MoneytrackSDK = core.registerPlugin('WebviewPlugin', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.WebviewPluginWeb()),
    });

    class WebviewPluginWeb extends core.WebPlugin {
        async setEnvironment(options) {
            console.log(`Setting environment: ${options}`);
        }
        async openAddCard() {
            this.openWebView('http://localhost:8080/#/add-card');
        }
        async openPay() {
            this.openWebView('http://localhost:8080/#/pay');
        }
        async openMap() {
            this.openWebView('http://localhost:8080/#/map');
        }
        async openOnboarding(options) {
            this.openWebView(`http://localhost:8080/#/onboarding?payload=${encodeURIComponent(options.payload)}`);
        }
        async openWebView(url) {
            console.log(`Opening webview: ${url}`);
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        WebviewPluginWeb: WebviewPluginWeb
    });

    exports.MoneytrackSDK = MoneytrackSDK;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
