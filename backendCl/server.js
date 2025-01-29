//File System
const fs = require("fs");

// fs.mkdir("myFolder", (err) => {
//   if (err) {
//     console.log("Error creating Directory", err);
//   } else {
//     console.log("Directory has been created");
//   }
// });

// fs.rmdir("myFolder", (err) => {
//     if(err){
//         console.log("Error deleting directory", err)
//     } else {
//         console.log("Directory has been deleted")
//     }
// })

fs.writeFile("myFile.txt", "Hello World", (err) => {  //Creates a Text file.
  if (err) {
    console.log("An error occurred", err);
  } else {
    console.log("File has been created successfully with content inisde of it");
  }
});

fs.readFile("myFile.txt", "utf8",(err, res) => { // Read the text files in buffer and used utf8 to turn it to strings.
  if (err) {
    console.log("An error occurred", err);
  } else {
    console.log(res)
  }
});

fs.appendFile('myFile.txt', '\n Hi World', (err) => {
    if(err) {
        console.log("Error occurred", err)
    } else {
        console.log("File has been added successfully")
    }
})
