const Booking = require("../models/bookingModel");

const getBookings = (req, res) => {
  Booking.findAll()
    .then((bookings) => {
      res.json(bookings);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getBookingsById = (req, res) => {
//   const bId = req.params.bookingId;
  const bId = req.params.bookingId;

  Booking.findOne({ where: { id: bId } })
    .then((booking) => {
        console.log(booking)
      res.json(booking);
    })
    .catch((err) => {
      console.log(err);
    }); 
};
const postBookings = (req, res) => {
  Booking.create(req.body)
    .then((booking) => {
      res.json(booking);
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateBookings = (req, res) => {
  const bId = req.params.bookingId;
  Booking.update(req.body, { where: { id: bId } })
    .then(() => {
      res.json({ message: "updated booking" });
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteBookings = (req, res) => {
  const bId = req.params.bookingId;
  Booking.destroy({ where: { id: bId } })
    .then(() => {
      res.json({ message: "delete booking" });
    })
    .catch((err) => {
      console.log();
    });
};

module.exports = {
  getBookings,
  getBookingsById,
  postBookings,
  updateBookings,
  deleteBookings,
};
