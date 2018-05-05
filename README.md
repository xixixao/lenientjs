# LenientJS

A better syntax for JavaScript. https://xixixao.github.io/lenientjs/

# Development

## Initial Setup

This will take a few minutes (clones both Babel and Prettier):

```sh
git clone https://github.com/xixixao/lenientjs.git
cd lenientjs
yarn
yarn setup
```

If you want to submit a PR, add your own forks of Prettier and Babel as separate remotes.

## Making Changes and Testing

### Modify Prettier

No building required, you can run tests straight off of source.

### Modify Babylon

```sh
cd babel
make watch
```

### Bump Base Version of Prettier/Babylon

Take changes from original Prettier/Babel and rebase Lenient on top

```sh
yarn bump
```

When either fails, `cd` into respective directory, run `git status`, merge
the conflicts and run `git rebase --continue`.

Individually:

```sh
yarn bump:babylon
yarn bump:prettier
```

### Run tests

```sh
cd prettier
yarn test:lenient
```

or during development use watch mode:

```sh
yarn test:lenient --watchAll
```

## Upgrading Builds and Releasing

### Atom Package

```sh
yarn build:atom
cd atom-lenientjs
apm publish patch
```

To update any of the individual compiled dependencies, use one of these:

```sh
yarn build:atom:babylon
yarn build:atom:prettier
yarn build:atom:grammar
```

### Lenient JS Website

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

## Troubleshooting

Make sure you have installed the latest stable version of:

1.  Git
2.  Yarn
3.  Node.js
