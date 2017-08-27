import devConfig from './config.dev';
import prodConfig from './config.prod';

let config;
(process.env.MODE === 'PROD') ? config = prodConfig
                              : config = devConfig;

export default devConfig;