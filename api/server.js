const express = require("express");
const knex = require("knex");
const knexFile = require("../knexfile");

const db = knex(knexFile.development);
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  db("cars")
    .then((car) => {
      res.status(200).json({ data: car });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server error", err });
    });
});

server.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = server;
