const os = require("os");
const fs = require("fs");

const storeFs = (message) => {
  const result = fs.readFileSync("logMessages.txt");

  if (result) {
    fs.appendFile("logMessages.txt", message, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Check youer error file");
      }
    });
    // console.log('No Error')
  } else {
    fs.writeFile("logMessages.txt", message, (err) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log("Succcessully");
      }
      // console.log('Error')
    });
  }
};

const checkCompatibility = (sizeGB) => {
  const checkInByte = sizeGB * 1024 * 1024 * 1024;
  const requiredSize = os.totalmem();

  if (checkInByte < requiredSize) {
    storeFs("Not Compartible");
  } else {
    storeFs("Compartible");
  }
};

checkCompatibility(8);
