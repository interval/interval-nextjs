// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { randomNumber } from "server/utils";

type Data = {
  randomNumber: number;
};

// Contrived example of using a shared function (randomNumber) across Next and Interval
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ randomNumber: randomNumber(0, 100) });
}
