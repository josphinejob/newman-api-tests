const newman = require('newman');

const collectionName = 'formula_one_collection.json'
const timestamp = new Date().toLocaleTimeString();
const currentDate = new Date().toLocaleDateString().replace(/\//g,'-');

// run the collection with newman
newman.run({
    collection: 'collections/' + collectionName,
    reporters: ['cli', 'htmlextra'],
    reporter: {
        htmlextra: {
          export: `./reports/${collectionName}_${currentDate}_${timestamp}.html`
        }}
    }, (err) => {
    if (err) {
        console.log(err)
        throw err
    }
    console.log('All tests in ' + collectionName + " are passed")
});
