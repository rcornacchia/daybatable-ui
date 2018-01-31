import config from './config';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient(config.socket);
socket.on('post_created', () => console.log('post_created'));

export default socket;