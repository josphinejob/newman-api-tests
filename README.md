# newman-nodejs
Run Postman tests with Newman and Node.js

* Reporter : newman-reporter-htmlextra


To run all collections from the collections directory:
* Run command "npm test"

To run single collection from the collections directory:
1. Add the collection path in test-single-collection.js
2. Run command "node test-single-collection.js"

** Reports are generated under reports directory and can be opened in a browser.

To remove all generated reports
* Run "npm run clean"
