const Bill = require("../model/bill");

// Create Bill
exports.createBill = async (req, res) => {
  let { billName, totalAmount, participants } = req.body;

  if (participants.every((e) => !e.amountOwed)) {
    const splitBills = totalAmount / participants.length;
    participants = participants.map((e) => ({
      ...e,
      amountOwed: Math.round(splitBills),
    }));
  }

  const bills = new Bill({ billName, totalAmount, participants });
  await bills.save();

  res.status(201).json({ message: "Bills created successfully", data: bills });

  // exports.createBill = async (req, res) => {
  //   let { billName, totalAmount, participants } = req.body;

  //   if (participants.every((e) => !e.amountPaid)) {
  //     const splitCash = totalAmount / participants.length;
  //     participants = participants.map((e) => ({
  //       ...e,
  //       // amountOwed: splitCash.toFixed(),
  //       amountOwed: Math.round(splitCash),
  //     }));
  //   }

  // const bills = new Bill({ billName, totalAmount, participants });
  // await bills.save();

  // res.status(201).json({ message: "Bill created successfully", data: bills });
};

// Get All Bills
exports.getAllBills = async (req, res) => {
  const bills = await Bill.find();

  res.status(200).json({ message: "Bills gotten successfully", data: bills });
};

// Get A Bill
exports.getBillById = async (req, res) => {
  const bill = await Bill.findById(req.params.id);

  if (!bill) {
    return res.status(404).json({ message: "Bill not found" });
  }

  res.status(200).json({ message: "Bill gotten", ddata: bill });
};

// Update A Bill
exports.updateBill = async (req, res) => {
  const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!bill) {
    return res.status(404).json({ message: "Bill not found" });
  }

  res.status(200).json({ message: "Bill updated successfully", data: bill });
};

// Delete A Bill
exports.deleteBill = async (req, res) => {
  const bill = await Bill.findByIdAndDelete(req.params.id);

  if (!bill) {
    return res.status(404).json({ message: "Bill not found" });
  }

  res.status(200).json({ message: "Bill deleted Successfully" });
};

//Get balances
exports.getBalances = async (req, res) => {
  const bill = await Bill.findById(req.params.id);

  if (!bill) {
    return res.status(404).json({ message: "Bill not found" });
  }

  const getBalances = new bill.participants.map((e) => ({
    name: e.name,
    amountPaid: e.amountPaid,
    amountOwed: e.amountOwed,
    balance: e.amountOwed - e.amountPaid,
  }));

  res
    .status(200)
    .json({ message: "Balances successfully gotten", data: getBalances });
};

// Get paid users
exports.getPaidUsers = async (req, res) => {
  const bill = await Bill.findById(req.params.id);

  if (!bill) {
    return res.status(404).json({ message: "Bill not found" });
  }

  const paid = bill.partricipants
    .filter((e) => e.amountPaid >= e.amountOwed)
    .map((e) => ({
      name: e.name,
      amountOwed: e.amountOwed,
      status: e.amountPaid > e.amounOwed ? "Overpayed" : "Paid In Full"
    }));

    
};

// exports.getPaidUsers = async (req, res) => {
//   const bill = await Bill.findById(req.params.id);

//   if (!bill) {
//     return res.status(404).json({ message: "Bill not found" });
//   }

//   const balances = bill.participants
//     .filter((e) => e.amountPaid >= e.amountOwed)
//     .map((e) => ({
//       name: e.name,
//       amountOwed: e.amountOwed,
//       status: e.amountPaid > amountOwed ? "Overpaid" : "Paid In full",
//     }));

//   res.status(200).json({ message: "Paid participants gotten", data: balances });
// };

// Get total Paid
exports.getTotalPaid = async (req, res) => {
  const bill = await Bill.findById(req.params.id);

  if (!bill) {
    return res.status(404).json({ message: "" });
  }

  const getAll = bill.participants.reduce((total, sum) => {
    return total + sum.amountPaid;
  }, 0);

  res.status(200).json({ message: "All paid amounts gotten", data: getAll });
};

// Get Top Payer
exports.getTopPayer = async (req, res) => {
  const bill = await Bill.findById(req.params.id);

  if (!bill) {
    return res.status(404).json({ message: "Bill not found" });
  }

  const topPayer = bill.participants.reduce((top, p) => {
    p.amountOwed > p.amountPaid ? p : top;
  });
  return res.status(200).json({ message: "Top Payer Gotten", data: topPayer });
};

// const Bill = require("../model/bill");

// // Create Bills
// exports.createBill = async (req, res) => {
//   let { billName, totalAmount, participants } = req.body;

//   if (participants.every((p) => !p.amountOwed)) {
//     const equalShare = totalAmount / participants.length;
//     participants = participants.map((p) => ({
//       ...p,
//       amountOwed: equalShare,
//     }));
//   }

//   const bills = new Bill({ billName, totalAmount, participants });
//   await bills.save();
//   res.status(201).json({ message: "Bill created successfully", data: bills });
// };

// //Get All Bills
// exports.getBills = async (req, res) => {
//   const bill = await Bill.find();

//   res
//     .status(200)
//     .json({ message: "All bills gotten successfully", data: bill });
// };

// //Get A Single Bill
// exports.getBillById = async (req, res) => {
//   const bill = await Bill.findById(req.params.id);

//   if (!bill) {
//     return res.status(404).json({ message: "Bill not found" });
//   }

//   res.status(200).json({ message: "Bill successfully gotten", data: bill });
// };

// // Update A Bill
// exports.updateBill = async (req, res) => {
//   const bill = await Bill.findByIdAndUpdate(req.prams.id, req.body, {
//     new: true,
//   });

//   if (!bill) {
//     return res.status(404).json({ message: "Bill not found" });
//   }

//   res.status(200).json({ message: "Bill updated successfully", data: bill });
// };

// //Delete A Bill
// exports.deleteBill = async (req, res) => {
//   const bill = await Bill.findByIdAndDelete(req.params.id);

//   if (!bill) {
//     return res.status(404).json({ message: "Bill not found" });
//   }

//   res.status(200).json({ message: "Bill successfully deleted" });
// };

// // Get Balances
// exports.getBalances = async (req, res) => {
//   const bill = await Bill.findById(req.params.id);

//   if (!bill) {
//     return res.status(404).json({ messasge: "Bill not found" });
//   }

//   const balances = bill.paticipants.map((p) => ({
//     name: p.name,
//     amountOwed: p.amountOwed,
//     amountOwed: p.amountPaid,
//     balance: p.amountOwed - p.amountPaid,
//   }));

//   res
//     .status(200)
//     .json({ message: "Balance successfully gotten", data: balances });
// };

// // Get People who paid in Full
// exports.getPaidUsers = async (req, res) => {
//   const bill = await Bill.findById(req.params.id);

//   if (!bill) return res.status(404).json({ message: "Bill not found" });

//   const paidParticipants = bill.participants
//     .filter((p) => p.amountPaid >= p.amountOwed)
//     .map((p) => ({
//       name: p.name,
//       status: p.amountPaid > p.amountOwed ? "Over Paid" : "Paid in full",
//     }));

//   res.status(200).json({
//     message: "Paid Participants gotten in full",
//     data: paidParticipants,
//   });
// };

// // Get Total Amount Paid
// exports.getTotalPaid = async (req, res) => {
//   const bill = await Bill.findById(req.params.id);

//   if (!bill) return res.status(404).json({ message: "Bill not found" });

//   const totalPaid = bill.participants.reduce((sum, p) => {
//     sum + p.amountPaid;
//   }, 0);
// };

// // Get top payer
// exports.getTopPayer = async (req, res) => {
//   const bill = await Bill.findById(req.params.id);

//   if (!bill) return res.status(404).json({ message: "Bill not found" });

//   const topPayer = bill.participants.reduce((top, p) =>
//     p.amountOwed > add.amountPaid ? p : top
//   );

//   res.status(200).json({ message: "Gotten total paid", data: topPayer });
// };
