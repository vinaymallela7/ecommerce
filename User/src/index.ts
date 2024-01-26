import bodyParser from "body-parser";
import express, { Request, Response } from "express";
const app = express();
const PORT: Number = 8000;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('User service is up...');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
