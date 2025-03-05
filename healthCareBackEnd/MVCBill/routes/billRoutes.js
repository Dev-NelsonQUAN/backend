const express = require("express");
const billController = require("../controller/billController");
const router = express.Router();

router.post("/create", billController.createBill);
router.get("/get", billController.getAllBills);
router.get("/:id", billController.getBillById);
router.patch("/:id", billController.updateBill);
router.delete("/:id", billController.deleteBill);
router.get("/:id/balances", billController.getBalances);
router.get("/:id/paid", billController.getPaidUsers);
router.get("/:id/total", billController.getTotalPaid)
router.get("/:id/top-payer", billController.getTopPayer)

module.exports = router;

// const router = re

// const express = require("express");
// const router = express.Router();
// const billController = require("../controller/billController");

// router.post("/", billController.createBill);
// router.get("/", billController.getBills);
// router.get("/:id", billController.getBillById);
// router.patch("/:id", billController.updateBill);
// router.delete("/:id", billController.deleteBill);
// router.get("/:id/balances", billController.getBalances);
// router.get("/:id/paid", billController.getPaidUsers);
// router.get("/:id/total-paid", billController.getTotalPaid);
// router.get("/:id/top-payer", billController.getTopPayer);

// module.exports = router;
