const express = require("express");

module.exports = () => {
  const router = express.Router();
};
router.use(express.json());
router.set("port", process.env.PORT || 3333);
