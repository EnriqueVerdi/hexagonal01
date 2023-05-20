import express from "express";
require ("dotenv").config();

import { userRouter } from "./user/infrastructure/routes/UserRouter";

const app = express();

app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`[Application] Server online in port 3000`);
});
