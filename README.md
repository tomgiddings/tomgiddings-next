# NextJS App - tomgiddings.co.uk

![End-to-end tests](https://github.com/tomgiddings/tomgiddings-next/actions/workflows/testcafe.yml/badge.svg)

This application is built using [NextJS](https://nextjs.org/) and [Tailwind](https://tailwindui.com/).

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This app is designed to be deployed (and live) on [Cloudflare Pages](https://pages.cloudflare.com/) using [static export](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/).

## Tests

End to end testing is provided via [Testcafe](https://testcafe.io/) and Chrome. These are run using `npm run test`, and are also included as part of a GitHub Workflow.

## Prettier and eslint

- To run eslint: `npm run lint`.
- To run prettier: `npm run prettier`.
