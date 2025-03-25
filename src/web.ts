import { WebPlugin } from '@capacitor/core';

import type { WebviewPluginPlugin } from './definitions';

export class WebviewPluginWeb extends WebPlugin implements WebviewPluginPlugin {
  async openAddCard(): Promise<void> {
    this.openWebView('http://localhost:8080/#/add-card');
  }

  async openPay(): Promise<void> {
    this.openWebView('http://localhost:8080/#/pay');
  }

  async openMap(): Promise<void> {
    this.openWebView('http://localhost:8080/#/map');
  }

  async openOnboarding(options: {payload: string}): Promise<void> {
    this.openWebView(`http://localhost:8080/#/onboarding?payload=${encodeURIComponent(options.payload)}`);
  }

  private async openWebView(url: string): Promise<void> {
    console.log(`Opening webview: ${url}`);
  }
}
