const express = require("express");
const app = express();
const port = 6790;

app.use(express.json());

const ecommerceUser = [];

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gotten all products users" });
});

app.post("/", (req, res) => {
  const { name, email, product, price } = req.body;
  const findIfEmailExists = ecommerceUser.findIndex((e) => e.email === email);

  if (findIfEmailExists === -1) {
    if (name && email && product && price) {
      ecommerceUser.push({
        id: ecommerceUser.length + 1,
        name,
        email,
        product,
        price,
      });
      res.status(200).json({ message: "Created an account" });
    } else {
      res.status(200).json({ message: "All fields required" });
    }
  } else {
    res.status(200).json({ message: "User with email already existed" });
  }
});

app.get("/:id", (req, res) => {
  const getOneUser = ecommerceUser.findIndex(
    (e) => e.id === parseInt(req.params.id)
  );

  if (getOneUser === -1) {
    res.status(200).json({ message: "No user here" });
  } else {
    res.status(200).json({
      message: "Gotten user successfully",
      data: ecommerceUser[get],
      data2: getOneUser,
    });
  }
});

app.delete("/:id", (req, res) => {
  const findAUser = ecommerceUser.find((e) => e.id === parseInt(req.params.id));

  if (findAUser) {
    const deleteAUser = ecommerceUser.filter(
      (e) => e.id !== parseInt(req.params.id)
    );
    ecommerceUser = deleteAUser;
    res.status(200).json({ message: "User Deleted Successfully" });
  }
});

app.patch("/:id", (req, res) => {
  const updateUserProfile = ecommerceUser.find(
    (e) => e.id === parseInt(req.params.id)
  );

  if (updateUserProfile) {
    const { name, email, product, price } = req.body;
    if (name) updateUserProfile.name = name;
    if (email) updateUserProfile.email === email;
    if (product) updateUserProfile.product === product;
    if (price) updateUserProfile.price === price;
    res.status(200).json({ message: "Updated succesfully" });
  } else {
    res.status(200).json({ message: "No profile to update" });
  }
});

app.get("/:price", (req, res) => {
  const getPrices = ecommerceUser.filter((e) => e.price === req.params.price);
  if (getPrices) {
    res.status(200).json({
      message: "Gotten all with these specific price",
      data: getPrices,
      data2: ecommerceUser[getPrices],
    });
  }
});

app.get("/:product", (req, res) => {
  const getProducts = ecommerceUser.filter(
    (e) => e.product === req.params.product
  );

  res.status(200).json({ message: "Gotten ", data: getProducts });
});

app.delete("/:price", (req, res) => {
  const deleteAPrice = ecommerceUser.filter(
    (e) => e.price !== req.params.price
  );
  ecommerceUser = deleteAPrice;
  res.status(200).json({ message: "Deleted All with this price" });
});

app.delete('/', (req, res) => {
    ecommerceUser = []
    res.status(200).json({message: 'User deleted succesully'})
})

app.all('*', (req, res) => {
    res.status(400).json({message: "Path does not exist"})
})

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
