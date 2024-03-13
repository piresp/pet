import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'test.pet.com',
  appName: 'iPet',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
