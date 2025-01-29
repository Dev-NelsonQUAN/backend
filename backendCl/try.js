const { isUtf8 } = require("buffer");
const fs = require("fs");

// fs.mkdir("tryFile", (err) => {
//   if (err) {
//     console.log("Here's an error", err);
//   } else {
//     console.log("Created Successfully");
//   }
// });

// fs.mkdir("Another File", (err) => {
//   if (err) {
//     console.log("Error creating folder", err);
//   } else {
//     console.log("Folder created successfully");
//   }
// });

// fs.rmdir("tryFile", (err) => {
//   if (err) {
//     console.log("Error deleting folder", err);
//   } else {
//     console.log("Folder deleted successfully");
//   }
// });

// fs.rmdir("Another File", (err) => {
//   if (err) {
//     console.log("Error deleting");
//   } else {
//     console.log("Deleted successfully");
//   }
// });

// fs.writeFile("theFile.txt", "Hello World", (err) => {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log("Created Successully");
//   }
// });

// fs.readFile("theFile.txt", "utf8", (err, res) => {
//   if (err) {
//     console.log("Error reading file");
//   } else {
//     console.log(res);
//   }
// });

// fs.appendFile("theFile.txt", " Second Text", (err) => {
//   if (err) {
//     console.log("error Appending", err);
//   } else {
//     console.log("Success creating");
//   }
// });

fs.writeFile("ourFile.txt", "Hi people", (err) => {
    if(err) {
        console.log(err)
    }
})

fs.readFile("ourFile.txt", "utf8", (err, res) => {
    if(err) {
        console.log("err", err)
    } else {
        console.log(res)
    }
})

fs.appendFile("ourFile.txt", '\n Yo World' ,(err) => {
    if(err) {
        console.log("err", err)
    }
})