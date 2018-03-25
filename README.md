# LenientJS

A better syntax for JavaScript. https://xixixao.github.io/lenientjs/

# Development

## Setup

```sh
git clone https://github.com/xixixao/lenientjs.git
cd lenientjs
yarn install
yarn setup
```

## Modify Prettier

No building required, you can run tests straight off of source.

## Modify Babylon

```sh
cd babel
make watch
```

## Run tests

```sh
cd prettier
yarn test:lenient
```

or during development use watch mode:

```sh
yarn test:lenient --watchAll
```

### Website

Watch changes and serve locally:

```sh
cd website
yarn start
```

Update compiled prettier and babel:

```sh
yarn build:js
```

Deploy to Github:

```sh
yarn deploy
```
