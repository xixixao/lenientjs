# lenientjs
Proposal for new syntactical layer on top of JS.

## Motivation

Checkout https://xixixao.github.io/dilemma/ for my opinion of what an "ideal" JS-targeting language would look like. Given those constraints, I think there are two possible ways to get such a language.

1. Add Flow and Prettier support to CoffeeScript. In reality, I would also want to fix some big problems with CoffeeScript, namely its scoping rules and bring it closer to ES6, so that transitioning between the two is easier.
2. Add better, indentation-based syntax on top of ES6.

In either case it would be nice to have a better collections library.

Of these two, option 1) is more feasible. The CoffeeScript community would appreciate Flow and Prettier support. Flow support is a matter of wrestling with the parser implementation, but I think it's feasible. Prettier already has support for other languages besides JS. Making breaking changes in CoffeeScript, like fixing its scoping rules and aligning it with ES6, would mean a new fork of the language. That would likely lead to little community support, but it would still be technically easily achievable. I could also drop these requirements, sticking with CoffeeScript 2.0. This is the easy path.

You might be asking yourself, how is option 2 any different from creating another CoffeeScript version. The main difference, the reason why it is much less feasible, but could offer a much bigger gain is that I would aim to perform the transformation only at edit time, and for its implementation I would use modified versions of Babel's parser (Babylon) and Prettier.

Here's the basic idea: When you open a standard, Prettier-formatted ES6 file, the code will be parsed with standard Babylon, and run through modified Prettier, with `lenient` option set to `true`. This is what the result could look like:

```es6
let number = 42
opposite = true

if opposite
  number := -42

square = x => x * x

math = {
  root: Math.sqrt
  square: square
  cube: x => x * square(x)
}

race = (winner, ...runners) =>
  print(winner, runners)

[
  "Very very very very long string"
  "so that we need to wrap"
  "this list of strings"
]

while x
  a()

for let i = 0; i < cubes.length; i++
  alert(i, cubes[i])

switch x
  case "a": a()

someComponent = (props: {
  some: number
  id: string
}) =>
  <div>
    Hello <span>World!</span>
  </div>
```

Given that `do switch` is correctly implemented in ES6, this would satisfy my constraint of the language being an expression-based language. It would have worse performance than CoffeeScript for loop comprehensions, as I would be forced to use methods instead of built-in loops, but that's something I'm willing to forgo.

When saving the file, I would parse it with modified Babylon and format it with standard Prettier, resulting in exactly the same JavaScript source code.

```
modified Prettier ---> Editor Buffer with LenientJS ---> save ---> modified Babylon
               ↑                                                    |
             JS AST                                               JS AST  
               |                                                    ↓
              Babylon <--- load <--- Saved File with ES6 <--- Prettier
```

The reason this option is so much more appealing is that it would work anywhere. I could be using LenientJS at work, while everyone else working on the same codebase would be using standard ES6, as long as the files are formatted with Prettier.

Of course, having the editor infrastructure in place, this would allow people to use any syntax they would prefer – the obvious candidate coming to mind is simply Prettier-formatted JS with different settings than your colleagues use – they wouldn't know. Another one would be an s-expression based syntax, which is fairly easy to both produce and parse.

## Implementation

The project has two main challenges, one technical and one social.

1. Modify Atom (my editor of choice) to support mapping between display and saved buffer
2. Push changes to Babylon upstream, and convince the team to support them going forward

While 1) will require a lot of effort on my part, 2) seems also insurmountably difficult. Without 2), the maintanance of the project becomes a nightmare, yet the chances of convincing Babylon to support this use case are slim. Suggestions are [welcome](https://github.com/xixixao/lenientjs/issues).

Full list of requirements:

- [ ] Modify Prettier to print LenientJS *(prototype ready)*
- [ ] Modify Babylon to parse LenientJS
- [ ] Hook into Atom's TextBuffer to run transformation on save/load
- [ ] Add modified syntax highlighting for the syntax
- [ ] Wire through all Lint/Flow/JS Imports warnings/suggestions
  - [ ] Implement source maps in Prettier

## Syntax

The goal is really to fix the most egregious syntactical problems of JS, not to depart too widely away from it, like CoffeeScript did.

1. `const x = y;` compiles to `x = y` - `const` is great, it provides clarity when reading code, but it is needlessly verbose
    1. To support this, `let x = y; x = z;` compiles to `let x = y; x := z`
2. Blocks use indentation
3. Unnecessary parentheses around if/for/switch/while statement "test" arguments are removed
4. New lines serve instead of commas in multiline object/array literals
5. ASI protection is not required, as new lines imply leading semi colon
6. No parens around JSX and `return` statement expressions
7. Switch expression
   1. `break` is implicit, while fallthrough compiles to `continue`
   2. TODO: multiple fallthrough cases compile to `case a, b:`
   3. TODO: switch as only child of `do` compiles to bare `switch`
   4. TODO: `switch false` compiles to `switch`
   5. TODO: remove JSX-style conditionals, in favor of `switch`, compile all conditionals to standard indented mode
   
`switch` is the biggest "customization" of the syntax, but given its ubiquity and how bad its default syntax is, improving it should be worth it. It could be replaced by https://github.com/tc39/proposal-pattern-matching in the future.



