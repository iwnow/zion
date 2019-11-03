import zionCore = require('./core/src');

declare global {
    interface Window {
        zion: {
            core: typeof zionCore;
        }
    }
}
