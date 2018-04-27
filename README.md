# LenientJS

A better syntax for JavaScript. https://xixixao.github.io/lenientjs/

# Development

## Setup

This will take a few minutes (clones both Babel and Prettier):

```sh
git clone https://github.com/xixixao/lenientjs.git
cd lenientjs
yarn
yarn setup
```

If you want to submit a PR, add your own forks of Prettier and Babel as separate remotes.

## Modify Prettier

No building required, you can run tests straight off of source.

## Modify Babylon

```sh
cd babel
make watch
```

## Bump Prettier/Babylon

Take changes from original Prettier/Babel and rebase Lenient on top

```sh
yarn bump
```

When either fails, `cd` into respective directory, run `git status`, merge
the conflicts and run `git rebase --continue`.

## Run tests

```sh
yarn test
```

or during development use watch mode:

```sh
yarn test --watchAll
```

### Atom Package

```bash
yarn build:atom
cd atom-lenientjs
apm publish minor
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
