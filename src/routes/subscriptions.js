const express = require("express");
const router = express.Router();
const subsSchema = require("../models/subscribers");




router.get("/", (req, res) => {
  res.send("Suscriptores");
});

// create subscriber
router.post("/subscribe", (req, res) => {
  console.log(req.body);
  const subscriber = subsSchema(req.body);
  subscriber
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all subscribers
router.get("/subscribe", (req, res) => {
  subsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.status(404).json({ message: error }));
});

module.exports = router;
