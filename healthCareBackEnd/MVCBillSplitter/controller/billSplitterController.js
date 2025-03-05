const billSplitterModel = require("../model/billSplitterModel");

//Handle Error
const handleError = async (res, err) => {
  return res
    .status(500)
    .json({ message: "An error occurred", error: err || err.message });
};

//Assign bills Ammount by number of participants
const assignAmountsToParticipants = (totalAmount, participants) => {
  const amountPerParticipant = totalAmount / participants.length;

  return participants.map((participant) => ({
    ...participant,
    amountOwed: amountPerParticipant,
    amountPaid: 0,
  }));
};

// ️Create a Bill – Make a new bill with a name, total amount, and a list of people sharing it
const createABill = async (req, res) => {
  try {
    const { billName, totalAmount, participants } = req.body;

    if (!billName && !totalAmount) {
      return res
        .status(409)
        .json({ message: "Bill Name and Total Amount is required" });
    }

    //Calculate and assign amounts to participants
    const updatedParticipants = assignAmountsToParticipants(totalAmount, participants)

    const createBills = await billSplitterModel.create({
      billName,
      totalAmount,
      participants: updatedParticipants,
    });

    return res.status(200).json({
      message: "Bills created succesfully",
      createBills,
    });
  } catch (err) {
    handleError(res, err.message);
  }
};

// Add participants
const addParticipants = async (req, res) => {
  try {
    const { billId } = req.params;

    const { name, amountOwed, amountPaid } = req.body;
    const findByIdToAddParticipants = await billSplitter(billId);

    if (!findByIdToAddParticipants) {
      return res.status("No bills to add parrticpants");
    }

    if (!name && !amountOwed && !amountPaid) {
      return res.status(409).json({ message: "All fiels are needed" });
    }

    const findBill = await billSplitterModel.participants.push({
      name,
      amountOwed,
      amountPaid,
    });

    // await fin
  } catch (err) {
    handleError(res, err.message);
  }
};

//️Get All Bills – Show all bills in the system.
const getAllBills = async (req, res) => {
  try {
    const findAllBills = await billSplitterModel.find();
    return res
      .status(200)
      .json({ message: "All bills gotten", data: findAllBills });
  } catch (err) {
    handleError(res, err.message);
  }
};

// Get One Bill – Find and show the details of one bill by its ID.
const getASpecificBill = async (req, res) => {
  try {
    const { billId } = req.params;
    const getById = await billSplitterModel.findById(billId);

    if (!getById) {
      return res.status(404).json({ message: "Bill not found" });
    }

    return res
      .status(200)
      .json({ message: "Bill gotten successfully", getById });
  } catch (err) {
    handleError(res, err.message);
  }
};

// ️Update a Bill – Change the name, amount, or people in a bill.
const updateABillPat = async (req, res) => {
  try {
    const { billId } = req.params;
    const { billName, totalAmount, participants } = req.body;
    const findBillForUpdate = await billSplitterModel.findByIdAndUpdate(
      billId,
      {
        billName,
        totalAmount,
        participants,
      },
      {
        new: true,
      }
    );
  

    if (!findBillForUpdate) {
      return res.status(404).json({ message: "Bill not found for update" });
    }

    return res
      .status(200)
      .json({ message: "Bills updated succesfully", findBillForUpdate });
  } catch (err) {
    handleError(res, err.message);
  }
};

// Update Participants
const updateAParticipantDetails = async (req, res) => {
  try {
    const { billId, patId } = req.params;
    const { name, amountPaid, amountOwed } = req.body;

    const getUserPatUpdate = await billSplitterModel.findById(billId);

    if (!getUserPatUpdate) {
      return res.status(404).json({ message: "Bill not found" });
    }

    const updateBillParticipant = await getUserPatUpdate.participants.id(patId);

    if (!updateBillParticipant) {
      return res
        .status(404)
        .json({ message: "No particpants found to update" });
    }

    if (name) updateBillParticipant.name = name;
    if (amountPaid) updateBillParticipant.amountPaid = amountPaid;
    if (amountOwed) updateBillParticipant.amountOwed = amountOwed;

    await getUserPatUpdate.save();

    return res
      .status(200)
      .json({ message: "Bill updated successully", getUserPatUpdate });
  } catch (err) {
    handleError(res, err.message);
  }
};

// Delete a Bill – Remove a bill from the system
const deleteABill = async (req, res) => {
  try {
    const findAUser = await billSplitterModel.findByIdAndDelete(req.params.id);

    if (!findAUser) {
      return res.status(404).json({ message: "Bill not found" });
    }

    return res.status(200).json({ message: "Bill successfully deleted" });
  } catch (err) {
    handleError(res, err.message);
  }
};

//6️⃣Split a Bill Equally – If no one sets how much they owe, divide the total amount equally for everyone.
const splitBillsForEveryone = async (req, res) => {
  try {
    // const {patId} = req.params
    const bill = await billSplitterModel.findById(req.params.id);

    if (!bill) {
      return res.status(404).json({ mesage: "No bills found for update" });
    }

    const splitBillAmount = bill.totalAmount / bill.participants.length;

    bill.participants.forEach((participant) => {
      participant.amountOwed = splitBillAmount;
    });

    await bill.save();
  } catch (err) {
    handleError(res, err.message);
  }
};

// 7️⃣Check How Much Everyone Owes – Show how much each person still needs to pay.
const checkHowMuchOwed = async (req, res) => {
  try {
    const { billId } = req.params;

    const findBill = await billSplitterModel.findById(billId);

    if (!findBill) {
      return res.status(404).json({ message: "Bill not found" });
    }

    const checkOwning = await findBill.participants.map(
      (participant) => participant.totalAmount - participant.amountPaid
    );

    // await findBill.save();

    return res
      .status(200)
      .json({ message: "Gotten everyone's amouunt ", data: checkOwning });
  } catch (err) {
    handleError(res, err.message);
  }
};

// ⿨ Find People Who Have Paid in Full
const findWhoPaidInFull = async (req, res) => {
  try {
    const findBill = await billSplitterModel.findById(req.params.id);

    if (!findBill) {
      return res.status(404).json({ message: "Bill not found" });
    }

    const paidInFull = await findBill.participants.filter(
      (participant) => participant.amountPaid <= participant.amountOwed
    );

    return res.status(200).json({ status: true, data: paidInFull });
  } catch (err) {
    handleError(res, err.message);
  }
};

// ⿩ Track Overpayments
const getOverPaidPat = async (req, res) => {
  try {
    const getBill = await billSplitterModel.findById(req.params.id);

    if (!getBill) {
      return res.status(404).json({ message: "Bill not found" });
    }

    const findOverPaid = await getBill.participants.filter(
      (participant) => participant.amountPaid > participant.amountOwed
    );

    return res.status(200).json({ status: true, data: findOverPaid });
  } catch (err) {
    handleError(res, err.message);
  }
};

// 1️⃣1️⃣Find Total Money Paid – Show how much money has been paid in total for a bill.
const findTotalMoneyPaid = async (req, res) => {
  try {
    const findBill = await billSplitterModel.findById(req.params.id);
    if (!findBill) {
      return res.status(404).json({ status: false, message: "Bill not found" });
    }

    const calculateTotalMoney = await findBill.participants.reduce(
      (total, participant) => {
        return total + participant.amountPaid;
      },
      0
    );

    return res.status(200).json({ status: true, data: calculateTotalMoney });
  } catch (err) {
    handleError(res, err.message);
  }
};

// ✅ Prevent Overpayment Mistakes
const preventOverPayment = async (req, res) => {
  try {
    const getBill = await billSplitterModel.findById(req.params.id);

    if (!getBill) {
      return res.status(404).json({ message: "Bill not found" });
    }

    const { participantName, amount } = req.body;

    const participant = getBill.participants.find(
      (p) => p.name === participantName
    );

    if (!participant) {
      return res.status(404).json({ message: "Partipant not found" });
    }

    const totalOwed = participant.amountOwed - participant.amountPaid;

    if (totalOwed > amount) {
      return res.status(400).json({ message: "payment exceeds amount owed" });
    }

    participant.amountPaid += amount;

    await getBill.save();

    return res.status(200).json({ status: true, data: participant });
  } catch (err) {
    handleError(res, err.message);
  }
};

// ✅ Sort Who Owes the Most
const sortWhoOwesTheMost = async (req, res) => {
  try {
    const billId = req.params.id;
    const getBill = await billSplitterModel.findById(billId);

    if (!getBill) {
      return res.status(404).json({ message: "Bill not found" });
    }

    const sortParticipants = await getBill.participants.sort((a, b) => {
      return b.amountOwed / a.amountOwed;
    });

    return res.status(200).json({
      message: "Gotten sorted owed participant",
      data: sortParticipants,
    });
  } catch (err) {
    handleError(res, err.message);
  }
};

// ✅ Add a "Transfer Overpayment" Feature
const transferOverpaymentFeature = async (req, res) => {
  try {
    const getBill = await billSplitterModel.findById(req.params.id);

    if (!getBill) {
      return res.status(400).json({ message: "No bill found" });
    }

    const { fromName, toName, amount } = req.body;

    const fromParticipant = getBill.participants.find(
      (p) => p.name === fromName
    );
    const toParticipant = getBill.participants.find((p) => p.name === toName);

    if (!fromParticipant || !toParticipant) {
      return res
        .status(400)
        .json({ message: "One or both participants not found" });
    }

    const overPaidAmount = (fromParticipant.amountPaid -=
      fromParticipant.amountOwed);

    if (overPaidAmount <= 0 || amount > overPaidAmount) {
      return res
        .status(400)
        .json({ message: "Insufficient overpayment amount to transfer" });
    }

    fromParticipant.amountPaid -= amount;
    toParticipant.amountPaid += amount;

    await getBill.save();

    return res
      .status(200)
      .json({
        message: "Successful overpayment transfer",
        from: fromParticipant,
        to: toParticipant,
      });
  } catch (err) {
    handleError(res, err.message);
  }
};

module.exports = {
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
  transferOverpaymentFeature
};
