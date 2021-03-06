This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and configured to run [Interval](https://interval.com) as a separate process, which is our recommended method for running Interval in a Next.js project. We also have an example of [running Interval within a custom server](https://github.com/interval/interval-nextjs-custom-server), if you prefer.

## Getting Started

To run the Next.js development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Interval

[Interval](https://interval.com) runs as a separate process from the Next.js development server. You can import code from your Next project and use [aliased imports](https://nextjs.org/docs/advanced-features/module-path-aliases) just as you would do with Next.js.

To start a development server that uses `nodemon` to reload as you save your changes:

```bash
npm run dev:interval
# or
yarn dev:interval
```

To compile the Interval TypeScript files into a production-ready bundle:

```bash
npm run build:interval && npm run start:interval
# or
yarn build:interval && yarn start:interval
```

For more information, visit the [Interval documentation](https://interval.com/docs).
