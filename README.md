# LenientJS

A better syntax for JavaScript. https://xixixao.github.io/lenientjs/

# WARNING

If you're reading this, you found this repo too early. May I ask you to a) not share it widely (twitter, HN), b) be very careful if you try to use the APM package, as it WILL lose your work in edge cases I haven't run into/fixed yet.

# Known Issues

Lenient's pretty form:

1.  ~~P: catch prints parens~~
2.  ~~B: arrow functions don't have lenient commas~~

From Babylon's test suite, in order of first failing tests:

> ! is severe, r is recent, P is bug in Prettier, B is bug in Babylon
> !! is syntax collision

1.  ~~!P: Bare blocks don't print braces (in switch, module, for)~~
2.  ~~!B: Class without name doesn't parse~~
3.  ~~!B: Switch cases parse into blocks~~
4.  ~~!P: Switch case blocks are not preserved~~
5.  P: File with semicolon prints empty
6.  ~~rP: `if (morning) (function(){})` doesn't print on one line~~
7.  ~~!P: do while has space before while~~
8.  ~~P: bare for loop prints without parens around `;;`~~
9.  ~~!B: `:=` is ignored in for loop variable~~
10. P,B: multiple labels are broken
11. ~~r!P: Single line objects with methods dont print on one line~~
12. ~~!P: bare return followed by something needs a semicolon~~
13. ~~P: case needs `:` if next token is regex~~
14. ~~!P: defaults for arrow function params need to use `:=`~~
15. ~~!!P,B: `let x; for (x of y) f(x);` doesn't have a form, use `for (set x of y)`~~
16. B: `'use strict'` inside function is broken
17. ~~P,B: for loop bare initializer with default doesn't work~~
18. ~~B: Function block is swallowing enclosing interpolation brace~~
19. ~~!B: Implicit const doesn't work in export~~
20. P: Trailing comment after declaration is pushed after semi, print semi
21. P: bare do block must keep wrapping parens - bug in Prettier
22. B: private fields don't work - bug in Prettier
23. ~~!B: `:=` should not be required for static~~
24. ~~!B: JSX inside if block doesn't work~~
25. B: bare comment in empty class body doesn't work
26. ~~!B: implicit blocks don't work for Flow modules~~
27. ~~!B: Flow function declaration missing lenient comma, also object types~~
28. ~~!B: Switch parens trip up on initial paren~~
29. ~~B: method following trailing case clause fails~~
30. ~~B: Leading generic type needs ASI protection~~
31. ~~P: JSX inside comparison needs parens~~
32. P: Bare JSX tags need ASI protection
33. ~~!B: class swallows leading comment~~
34. ~~r!P: destructuring in catch clause needs to force parens~~
35. P: inline super class doesn't work #2282
36. ~~B: do blocks swallow JSX closing interpolation brace~~

Check them:

```sh
node scripts/test-on-original-fixtures.js babylon 0 yes
```

From Prettier's test suite, in order of first failing tests (ignoring ones tracked above already):

1.  !B: Trailing comma in last argument arrow function breaks
2.  !P: Don't print trailing comma in last argument arrow function
3.  !B: Arrow function with only comment doesnt parse
4.  !P: Missing new line between arguments which are block arrow functions
5.  !P: Expression arrow function turned to block
6.  P: Leading `-` needs ASI protection (semi)
7.  P: Require indent for leading bind operator for ASI protection
8.  B: Block comment after class name breaks
9.  B: Multiline implements don't work
10. B: Dangling classes in functions are pushed out
11. !B: Export object doesn't have lenient comma
12. B: Comments mess up indentation in else branches
13. !P: Call parens following a comment need indent
14. B: Try with only a comment doesn't parse
15. P: `const` with comment right after needs to be preserved
16. B: Trailining function inside function after 'use strict' is lost - maybe due to semi
17. !P: Do not special-inline functions which aren't trailing #225
18. !B: Commas after functions with dedent should parse #225
19. !B: Multiline generics arguments don't parse with lenient comma #250
20. !P: Expression statement is indented after `else` #346
21. B: Comment of if tests are printed in the wrong place
22. !P,B: Function inside prop has spurious new line and doesn't parse
23. r!B: labels are completely broken
24. !P: Indexes in method chaining need indent to parse correctly #506
25. !B: Prevent backtick string to attach to previous line without indent #528
26. P: Markdown interpolation messed up
27. B: Leading comment disables ASI protection for parens #554
28. !B: Require indent for leading negation in argument lists
29. !P: Consecutive commas in arrays have to be preserved
30. B: Function in the middle of interpolation still breaks it #634
31. B: Tagged template literal steals following comment

Check them:

```sh
node scripts/test-on-original-fixtures.js prettier 0 yes
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
