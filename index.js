const express = require("express");

const app = express();

app.use(express.json());

app.use("/clan",require("./clan/controller"))

const port = 8000;

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
