const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log("Its alive on http://localhost:${PORT})"));

