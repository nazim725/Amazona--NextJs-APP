import nc from "next-connect";

import { onAuthError } from "../../../utils/error";
import Order from "../../../models/Order";
import { isAuth } from "../../../utils/auth";
import db from "../../../utils/db";
const handler = nc({ onAuthError });

handler.use(isAuth);

handler.get(async (req, res) => {
  await db.connect();
  const orders = await Order.find({ user: req.user._id });

  res.send(orders);
});

export default handler;
