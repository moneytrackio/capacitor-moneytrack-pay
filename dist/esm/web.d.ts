import { WebPlugin } from '@capacitor/core';
import type { WebviewPluginPlugin } from './definitions';
export declare class WebviewPluginWeb extends WebPlugin implements WebviewPluginPlugin {
    setEnvironment(options: {
        environment: 'production' | 'staging';
    }): Promise<void>;
    openAddCard(): Promise<void>;
    openPay(): Promise<void>;
    openMap(): Promise<void>;
    openOnboarding(options: {
        payload: string;
    }): Promise<void>;
    private openWebView;
}
