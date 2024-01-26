import bodyParser from "body-parser";
import express from "express";
const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
