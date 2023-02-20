const newman = require('newman');
const fs = require('fs')
const path = require('path')

const timestamp = new Date().toLocaleTimeString();
const currentDate = new Date().toLocaleDateString().replace(/\//g,'-');
var fullPath = path.join(__dirname, 'collections/')

// Read all filenames under the collection path
fs.readdir(fullPath, (error, files) => {
    if (error) console.log(error)

    // Run each collection file with newman
    files.forEach( file => newman.run({
        collection: fullPath + file,
        reporters: ['cli', 'htmlextra'],
        reporter: {
            htmlextra: {
              export: `./reports/${file}_${currentDate}_${timestamp}.html`
            }}
        }, (err) => {
            if (err) {
                console.log(err)
                throw err
            }
        console.log('All tests in ' + file + " are passed")
    }));

});

