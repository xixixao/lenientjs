# LenientJS

A better syntax for JavaScript. https://xixixao.github.io/lenientjs/

# WARNING

If you're reading this, you found this repo too early. May I ask you to a) not share it widely (twitter, HN), b) be very careful if you try to use the APM package, as it WILL lose your work in edge cases I haven't run into/fixed yet.

# Known Issues

Lenient's pretty form:

1.  catch prints parens

From Babylon's test suite, in order of first failing tests:

> ! is severe, r is recent, P is bug in Prettier, B is bug in Babylon
> !! is syntax collision

1.  !P: Bare blocks don't print braces (including in for, module)
2.  !B: Class without name doesn't parse
3.  !P: Switch cases printing collided with arrow function block logic, prints braces
4.  P: File with new line prints empty file
5.  rP: `if (morning) (function(){})` doesn't print on one line
6.  !P: do while has space before while
7.  P: bare for loop prints without parens around `;;`
8.  !B: `:=` is ignored in for loop variable
9.  P,B: multiple labels are broken
10. P: Empty switch body missing braces
11. r!P: Single line objects with methods dont print on one line
12. !P: bare return followed by something needs a semicolon
13. P: case needs `:` if next token is regex
14. !B: defaults for arrow function params are broken
15. !!P,B: `let x; for (x of y) f(x);` doesn't have a form, consider using `for (set x of y)` (could also use it in `for x;;b` form, or its alias `for x of y..z`)
16. B: `'use strict'` inside function is broken
17. P,B: for loop bare initializer with default doesn't work
18. B: Function block is swallowing enclosing interpolation brace
19. !B: Implicit const doesn't work in export
20. P: Trailing comment after declaration is pushed after semi
21. P: bare do block must keep wrapping parens
22. B: private fields don't work
23. !B: `:=` should not be required for static
24. !B: JSX inside if block doesn't work
25. B: bare comment in empty class body doesn't work
26. !B: implicit blocks don't work for Flow modules
27. !B: Flow function declaration missing lenient comma, also object types
28. !B: Switch parens trip up on initial paren
29. B: method following trailing case clause fails
30. P: Leading generic type needs ASI protection
31. P: JSX inside comparison needs parens
32. P: Bare JSX self-closing tags need ASI protection

Check them:

```sh
node scripts/test-on-babylon-fixtures.js 0 yes
```

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

Note: if you just built babylon you have to restart `watch`.

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
