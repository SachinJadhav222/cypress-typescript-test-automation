const fs = require("fs-extra");

if (fs.existsSync("reports")) {
  fs.emptyDirSync("reports");
}

console.log("Cleaned----->>");
