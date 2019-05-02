var router = require("express").Router();
var connection = require("../db/connection");

router.get("/api/notes", (req, res) => {
  connection.query("SELECT * FROM notes", (err, dbNotes) => {
    res.json(dbNotes);
  });
});

module.exports = router;