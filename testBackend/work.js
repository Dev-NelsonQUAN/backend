const fs = require("fs");

// fs.mkdir("All File", (err) => {
//   if (err) {
//     console.log("Error creating folder");
//   } else {
//     console.log("Created succesffuly");
//   }
// });

// fs.rmdir("All File", (err) => {
//   if (err) {
//     console.log("Errr deleting folder");
//   } else {
//     console.log(" Folder deleted succesfully");
//   }
// });

fs.writeFile("theFile.txt", "Hello World", (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("File created with content in it");
  }
});

fs.readFile("theFile.txt", "utf8", (err, res) => {
  if (err) {
    console.log("Error");
  } else {
    console.log(res);
  }
});

fs.appendFile("theFile.txt", "\n This is Nelson", (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Data successfully appended");
  }
});


