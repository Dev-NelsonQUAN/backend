const express = require("express");

const {
  createABill,
  getAllBills,
  getASpecificBill,
  updateABillPat,
  deleteABill,
  updateAParticipantDetails,
  splitBillsForEveryone,
  checkHowMuchOwed,
  findWhoPaidInFull,
  getOverPaidPat,
  findTotalMoneyPaid,
  preventOverPayment,
  sortWhoOwesTheMost,
  transferOverpaymentFeature,
} = require("../controller/billSplitterController");

const router = express.Router();

router.post("/create-bill", createABill);
router.get("/get-all-bills", getAllBills);
router.get("/get-one-bill/:billId", getASpecificBill);
router.patch("/update-bill/:billId", updateABillPat);
router.patch("/:billId/update-pat/:patId", updateAParticipantDetails);
router.delete("/delete-a-bill/:id", deleteABill);
router.post("/split-bill/:id", splitBillsForEveryone);
router.get("/owes/:id", checkHowMuchOwed);
router.get("/paid-full/:id", findWhoPaidInFull);
router.get("/:id/over-paid", getOverPaidPat);
router.get("/:id/find-total", findTotalMoneyPaid);
router.post("/:id/prevent-over", preventOverPayment);
router.get("/:billId/sort-pat", sortWhoOwesTheMost);
router.post("/:id/transfer-over", transferOverpaymentFeature);

module.exports = () => router;
