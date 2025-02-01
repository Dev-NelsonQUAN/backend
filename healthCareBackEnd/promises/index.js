let myPromise = new Promise((success, reject) => {
  let worked = true;

  if (worked) {
    success("It worked");
  } else {
    reject("An error occurred");
  }
});

myPromise
  .then((res) => {
    console.log("first");
  })
  .catch((err) => [console.log("err")]);

//   try {
//     myPromise()
//   } catch (error) {
//     console.log(error);
    
//   }