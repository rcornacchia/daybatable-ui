import devConfig from './config.dev';
import prodConfig from './config.prod';

let config;
(process.env.NODE_ENV === 'DEV') ? config = devConfig
                                 : config = prodConfig;

export default config;