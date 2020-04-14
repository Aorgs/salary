const {
    override,
    fixBabelImports,
} = require('customize-cra');

module.exports = override(
     ('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    })
);
