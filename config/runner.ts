//const cypress = require('cypress');

import cypress from 'cypress'

const cypressConfig = {
    video: false,
    browser: 'chrome',
    config: {
        integrationFolder: 'cypress/test'
    },
    env: {
        allure: true
    }
};

// const cypressCucumberConfig = {
//     ...cypressConfig,
//     ...{
//         config: {
//             integrationFolder: 'cypress/features',
//             ignoreTestFiles: '*.js',
//             testFiles: '**/*.{feature,features}'
//         }
//     }
// };

(async function () {
    //await cypress.run(cypressConfig);
    await cypress.open(cypressConfig);
   // await cypress.run(cypressCucumberConfig);
})();
