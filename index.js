const express = require("express");
const server = require("./data/cars/api/server");
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
