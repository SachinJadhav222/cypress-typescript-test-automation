const fs = require("fs");
//require("dotenv").config();

const executerMetaData = {};
executerMetaData['name']="SACHIN JADHAV";
executerMetaData['buildName']="Cypress Typescript Test Automation Project";

const json = JSON.stringify([executerMetaData]);
fs.writeFileSync("allure-report/widgets/executors.json", json);
