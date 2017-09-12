import devConfig from './config.dev';
import prodConfig from './config.prod';

let config;
(process.env.MODE === 'DEV' || true) ? config = devConfig
                             : config = prodConfig;

export default config;