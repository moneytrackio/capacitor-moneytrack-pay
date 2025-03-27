export interface WebviewPluginPlugin {
    setEnvironment(options: {
        environment: 'production' | 'staging';
    }): Promise<void>;
    openAddCard(): Promise<void>;
    openPay(): Promise<void>;
    openMap(): Promise<void>;
    openOnboarding(options: {
        payload: string;
    }): Promise<void>;
}
