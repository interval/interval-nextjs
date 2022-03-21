import Interval from "@interval/sdk";
import { randomNumber } from "server/utils";

const interval = new Interval({
  apiKey: "dan_dev_NydFzK4dBMzIrlfcnBPqVhoOMKuNMcPqoj4OS5rAsRc4x4mJ",
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
