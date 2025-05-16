# HomeVision House Listing WebApp

This project is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Deployed Version

You can see a working version by going to ____

## Running Locally

First, install the project's dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run a Production Like Version

You need to build the project locally:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Then, you have to start the server with:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Project Description

This is an infinite scrolling list of houses. I'm using `@tanstack/react-query` to get the infinite list by using the `useInfiniteQuery` hook.

You can read everything about decision making and project details in ["Decision Record"](https://www.notion.so/HomeVision-Challenge-Decision-Record-1eeb4d60432b80fea0d8f043a14b96f4?pvs=4) document.

### Available Features

**Infinite Scrolling**\
Once you go into the home page, you can scroll down the list and you'll notice that the data fetching happens when you are in the middle of the list. This ensures that the experience is not affected due to loading times.

There are a few cases where we could get loading times (like slow connectivity), and in those cases a loading spinner will show.

**Cache & Scroll Position**\
After scrolling for a while, you'll notice that if you refresh the page you won't loose the data and it will also keep the scrolling position.

To accomplish this we are using `localStorage` to persist the data (we could improve it by using and IndexDB but for now this is good enough).