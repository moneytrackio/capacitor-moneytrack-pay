export interface WebviewPluginPlugin {  
  openAddCard(): Promise<void>;
  openPay(): Promise<void>;
  openMap(): Promise<void> ;
  openOnboarding(options: {payload: string}): Promise<void>;
}
