const fs = require('fs');
const path = require('path');
const sass = require('node-sass');

const dir = path.resolve(__dirname, './src/sass/');

console.info('Rendering CSS files for defaults');

console.log(dir);
fs.readdir(dir, (err, result) => {
    if (err) {
        console.error(err);
    }
    else {
        const output = result && result.filter(
            (fileName) => !fileName.startsWith('_') && /\.scss$/.test(fileName)
        );
        
        console.log(`${output.length} found`);
        
        output.forEach(
            (fileName, i) => {
                console.log(`${dir}/${fileName}`);
                console.log(path.resolve(__dirname, './styles/'));

                const outFile = path.resolve(__dirname, './styles/') + '/' + fileName.replace(/\.scss$/, '.css');

                sass.render(
                    {
                        file: `${dir}/${fileName}`,
                        outFile,
                        outputStyle: 'compressed'
                    }
                , (err, result) => {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        console.log('writing files', outFile, i);
                        fs.writeFile(outFile, result.css, (err) => {
                            console.log(err ? 'errored' : 'no errors...');
                            if (!err) {

                            }
                            else {
                                console.error(err);
                            }
                        });
                    }
                })
            }
        )
    }
});