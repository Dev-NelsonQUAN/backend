const os = require("os");
const fs = require("fs");

const storeinFs = (message) => {
  const result = fs.readFile("consoleMsgs.txt", (err) => {
    if (!err) {
      fs.appendFile("consoleMsgs.txt", message, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Check your error file");
        }
      });
    } else {
        fs.writeFile("consoleMsgs.txt", message, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Check your error file");
          }
          // return writeFs;
        });
      // }
    }
  });
};

const checkCompatability = (sizeInGB) => {
  const calcSizeInByte = sizeInGB * 1024 * 1024 * 1024;
  const requiredSize = os.totalmem();
  if (calcSizeInByte < requiredSize) {
    storeinFs("\n System not compartible");
  } else {
    storeinFs("\n Your system is good to go");
  }
};

checkCompatability(4);

// function write() {
//   const writeFs = fs.writeFile("consoleMsg.txt", checkIt(), (err) => {
//     if (err) {
//       console.log("Device is not compartible");
//     } else {
//       console.log("Device is compartible");
//     }
//     return writeFs;
//   });
// }

// console.log(write())

// function checkIt() {
//   const osCheck = os.totalmem();
//   console.log(osCheck);
//   const multipliedReq = 2 * 1024 * 1024 * 1024;

//   if (osCheck >= multipliedReq) {

//     // console.log("Device is compartible");
//   } else {
//     console.log("Device is compartible");
//   }

//   return osCheck;
// }

// console.log(checkIt());

// console.log(os.machine())j
// console.log(os.hostname())
// console.log(os.userInfo())
// console.log(os.networkInterfaces())
// console.log(os.endianness())
// console.log(os.freemem())
// console.log(os.totalmem())
// console.log(os.cpus())
// console.log(os.homedir())
// console.log(os.uptime())
// console.log(os.version())
// console.log(os.userInfo())
// console.log(os.type())
// console.log(os.loadavg())
// console.log(os.constants)
// console.log(os.availableParallelism())
// console.log(os.getPriority())
