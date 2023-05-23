import express from "express";

import { mallRouter  } from "./mall/infrastructure/MallRouter";

const app = express();

app.use("/malls", mallRouter);

app.listen(3000, () => {
  console.log(`[Application] Server online in port 3000`);
});
