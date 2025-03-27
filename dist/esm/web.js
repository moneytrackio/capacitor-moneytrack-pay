import { WebPlugin } from '@capacitor/core';
export class WebviewPluginWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map