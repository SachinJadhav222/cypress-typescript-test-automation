# Cypress UI & API Automation using Typescript

_Test Automation using cypress .This is demo test project using cypress and circle ci pipeline, github and other tools. for UI and API_

### Folder Structure

- [Project Root](./tree-md) : cypress-typescript-test-automation
  - [config](./cypress/config) - cypress configurations 
  - [cypress](./cypress)
    - [fixture](./cypress/fixtures) - Test fixtures and mock data
    - [pages](./cypress/pages) - Locators, webelements are stored per page as page object.
    - [plugin](./cypress/plugin) - plugins, injected before cypress test fires
    - [support](./cypress/support) -Steps,commands  and other supports
    - [test](./cypress/test) -All bdd feature file are here
      - [api](./cypress/test/api) -spec file for API
      - [ui](./cypress/test/ui) -spec file for UI
    - [utils](./cypress/utils) -Utility files 
  - [reports](./reports) : This report folder
  - [cypress.json](./cypress.json) : Cypress configuration
  - [README.md](./README.md)

##

**Initial Setup**

1. This is node base project , please install latest node on your system: https://nodejs.org/en/

**Set up instructions**

1. Clone the repo from https://github.com/SachinJadhav222/cypress-typescript-test-automation
2. run @ root folder

```shell script
   npm install
```

3. Once installation is succesfull then we can run the cypress

**Run cypress Test**

1. To run cypress cypress in dastboard :

```shell script
   npm test
```

2. To run cypress cypress without dash board :

```shell script
   npm start
```

3. Generate Allure Report - please check allure-report folder for index.html file

```shell script
   npm run report
```

This project has Cypress dashboard for cypress execution and monitoring and reporting

**Cypress Dashboard :**

**Circle CI pipeline :**
This project is configured with Circle CI for CICD pipeline
https://app.circleci.com/pipelines/github/SachinJadhav222/cypress-typescript-test-automation
