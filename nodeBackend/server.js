const fs = require("fs");

// fs.mkdir("The file", (err) => {
//     if (err) {
//         console.log("Error creating folder")
//     } else {
//         console.log("Folder has been created successfully")
//     }
// })

// fs.rmdir("The file", (err) => {
//     if (err) {
//         console.log("Error deleting folder")
//     } else {
//         console.log("Folder succesfully deleted")
//     }
// })

fs.writeFile("TheFile.txt", "Hello World", (err) => {
  if (err) {
    console.log("Error creating the file");
  } else {
    console.log("File created with content inside");
  }
});

fs.readFile("Thefile.txt", "utf8", (err, res) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(res);
  }
});

fs.appendFile("Thefile.txt", "\n This is Nelson", (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success");
  }
});
