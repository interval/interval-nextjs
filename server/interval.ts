import Interval, { io } from "@interval/sdk";
import { randomNumber } from "server/utils";

const interval = new Interval({
  // get your API key from https://interval.com/dashboard/develop/keys
  apiKey: "dan_dev_NydFzK4dBMzIrlfcnBPqVhoOMKuNMcPqoj4OS5rAsRc4x4mJ",
  actions: {
    hello_world: {
      name: "Hello world",
      handler: async () => {
        // Demonstrates using logic shared with the primary Next.js app.
        console.log("Random number", randomNumber(0, 100));

        const name = await io.input.text("Enter your name");
        return `Hello, ${name}!`;
      },
    },
  },
});

interval.listen();
