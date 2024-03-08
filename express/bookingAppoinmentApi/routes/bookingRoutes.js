const router = require("express").Router();
const {
  getBookings,
  postBookings,
  updateBookings,
  deleteBookings,
  getBookingsById,
} = require("../controllers/bookingController");


router.get("/", getBookings);
router.get("/:bookingId", getBookingsById);
router.post("/", postBookings);
router.put("/:bookingId", updateBookings);
router.delete("/:bookingId", deleteBookings);


module.exports = router;