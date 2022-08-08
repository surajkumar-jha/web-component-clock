const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
    const files = [
        './dist/web-component-clock/runtime.js',
        './dist/web-component-clock/polyfills.js',
        './dist/web-component-clock/main.js'
    ];

    await fs.ensureDir('widget');
    await concat(files, 'widget/widget.js');
}
build();