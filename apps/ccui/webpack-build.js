const path = require('path');
const nrwlConfigFactory = require('@nrwl/react/plugins/babel');

module.exports = function(config) {
    const nrwlConfig = nrwlConfigFactory(config);
    const isDev = nrwlConfig.mode === 'development';
    nrwlConfig.externals = [
        ...(nrwlConfig.externals || []),
        {
            "react": "React",
            "react-dom": "ReactDOM",
            "react-router-dom": "ReactRouterDOM",
            "react-router": "ReactRouter"
        }
    ];
    if (isDev) {
        const additionalPath = [
            path.resolve(__dirname, '../../node_modules'),
            path.resolve(__dirname, '../../')
        ];
        nrwlConfig.devServer.contentBase = nrwlConfig.devServer.contentBase
            ? [...nrwlConfig.devServer.contentBase, ...additionalPath] 
            : [...additionalPath];
    }

    // console.dir(nrwlConfig);
    return nrwlConfig;
}

