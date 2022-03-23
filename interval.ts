import Interval from "@interval/sdk";
import { randomNumber } from "server/utils";

const interval = new Interval({
  // get your API key from https://intervalkit.com/dashboard/develop/keys
  apiKey: "YOUR_API_KEY",
  actions: {
    enter_a_number: async (io) => {
      const min = randomNumber(1, 10);

      const num = await io.input.number(`Enter a number greater than ${min}`, {
        min,
      });

      return { num };
    },
  },
});

interval.listen();
