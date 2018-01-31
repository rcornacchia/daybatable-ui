import devConfig from './config.dev';
import prodConfig from './config.prod';

const config = (process.env.NODE_ENV === 'DEV')
  ? devConfig
  : prodConfig;

export default config;