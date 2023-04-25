const express = require("express");
const {
  getNurseInfoController,
  updateProfileController,
  getNurseByIdController,
//   doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/nurseCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getNurseInfo", authMiddleware, getNurseInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getNurseById", authMiddleware, getNurseByIdController);

//GET Appointments
// router.get(
//   "/doctor-appointments",
//   authMiddleware,
//   doctorAppointmentsController
// );

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
