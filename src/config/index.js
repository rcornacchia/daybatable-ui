import devConfig from './config.dev';
import prodConfig from './config.prod';

let config;
(process.env.MODE === 'DEV') ? config = devConfig
                             : config = prodConfig;

export default devConfig;