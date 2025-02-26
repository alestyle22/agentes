// global.d.ts
declare global {
  interface Window {
    chatwootSDK: {
      run: (options: { websiteToken: string; baseUrl: string }) => void;
    };
    $chatwoot: {
      toggle: () => void;
    };
  }
}

export {};
