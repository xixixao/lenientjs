import React from 'react';
import EditorPanes from './EditorPanes';
import ReadOnlyEditor from './ReadOnlyEditor';

const App = () => (
  <div>
    <div className="titleHeaderWrap">
      <div className="titleHeader">
        <div className="title">Lenient JS</div>
        <div className="titleLinks">
          <GitHubLink className="titleLink" />
        </div>
      </div>
    </div>
    <div className="editorWrap">
      <div className="editor">
        <EditorPanes />
      </div>
    </div>
    <div className="content">
      <h1 className="subTitle">A better syntax for JavaScript</h1>
      <p className="subTitle">
        Read and write code using LenientJS syntax, save and load standard
        JavaScript.
      </p>
      <div className="columns">
        <div className="column">
          <h2>End of annoying syntax errors</h2>
          <p>
            Use LenientJS and you'll never miss a comma again. Commas are
            optional and inferred almost everywhere - in objects and array
            literals, in function argument and parameter lists. You can even
            ommit them between multiple expressions on a single line, and have
            Prettier fill the commas in for you.
          </p>
        </div>
        <div className="column">
          <ReadOnlyEditor>
            {`object = {
  myFunctionA()
    ...
    return "sucess"

  myFunctionB()
    ...
    return "more sucess"
}`}
          </ReadOnlyEditor>
        </div>
      </div>
      <div className="columns c-r">
        <div className="column">
          <h2>Type less, reduce clutter</h2>
          <p>
            The most common variable declarator in JavaScript takes 6 characters
            to write. Lenient favors constants and separates the syntax for
            their declaration from mutating assignements.
          </p>
        </div>
        <div className="column">
          <ReadOnlyEditor>{`all = "is"
good = "when"
constants = ["are", "cheap"]

let mutation := null
mutation := "looks different"`}</ReadOnlyEditor>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h2>Forget semi-colons, safely</h2>
          <p>
            JavaScript is partially whitespace sensitive, with semi-colons being
            optional at the end of lines. Unfortunately it's interpration is
            suprising in some cases. Lenient fixes these cases, allowing you to
            forget about semi-colons as long your code is sensibly indented.
          </p>
        </div>
        <div className="column">
          <ReadOnlyEditor>{`firstResults = callMethod()
[1, 2].forEach(x =>
  transformedX = transform(x)
  adapter(base =>
    transformedBase = transform(base)
    return
      transformedX ?? transformedBase ?? firstResults
  )
)`}</ReadOnlyEditor>
        </div>
      </div>
      <div className="columns c-r">
        <div className="column">
          <h2>Simpler blocks and arrow functions</h2>
          <p>
            Blocks use indentation instead of braces. This applies to arrow
            function bodies as well. Lenient fixes two major annoyances with
            regards to arrow functions: it is easy to go between block and
            expression body arrow function, and object literals as results don't
            need to be wrapped in parentheses.
          </p>
        </div>
        <div className="column">
          <ReadOnlyEditor>{`f = (x) =>
  x * 2

g = (x) =>
  y = x * 2
  return y - 3

h = () => [a, b]

j = () => {a: 1, b: 2}`}</ReadOnlyEditor>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h2>Full language support</h2>
          <p>
            Lenient supports all JavaScript syntax which Babel supports,
            including Flow annotations and JSX.
          </p>
        </div>
        <div className="column">
          <ReadOnlyEditor>{`element: React.Element<any> =
  <>
    Fancy fragment JSX syntax
  </>`}</ReadOnlyEditor>
        </div>
      </div>
      {/* <div className="columns">
          <div className="column">
            <h2>“I don't like CoffeeScript, not this again!”</h2>
            <p>
              LenientJS is not a new language. It trully translates 1:1 to
              JavaScript. It's designed to make reading and writing code easier,
              but it doesn't introduce any new sematnics.
            </p>
          </div>
          <div className="column">
            <h2>“I love CoffeeScript, why should I use this?”</h2>
            <p>
              We do too! Unfortunately it's often impossible to adopt
              CoffeScript in existing large code bases. With LenientJS, your
              coworkers might never find out that you're not using vanilla
              JavaScript.
            </p>
          </div>
        </div> */}
      {/* <h3>Improvements over ES6</h3>
        <ul>
          <li>
            Going from arrow function with expression result to one with a block
            and return is easy
          </li>
          <li>Objects and arrays do not require commas between items</li>
          <li>
            Return statements do not need multi-line arguments wrapped in
            parentheses and hence there is no wrapping of JSX elements in
            needless parentheses
          </li>
          <li>
            Object literals do not need to be wrapped in parentheses when being
            returned from arrow functions
          </li>
          <li>
            Semi-colon insertion takes into account indenting, avoiding
            unintended separation between values and accessors
          </li>
        </ul>
        <h3>Improvements over CoffeeScript</h3>
        <ul>
          <li>
            Scope shadowing is allowed, no risk of accidentally overriding
            variables from parent scope
          </li>
          <li>Syntax is closer to ES6</li>
        </ul> */}
      <div className="centerColumn">
        <h2>How does it work?</h2>
        <p>There are three major parts that together make up Lenient:</p>
        <ol>
          <li>
            An option for Prettier which prints the Lenient syntax for
            JavaScript
          </li>
          <li>A plugin for Babel's Babylon which parses the Lenient syntax</li>
          <li>
            An Atom package which performs the transpilation on file load/save.
          </li>
        </ol>
        <p>
          To display all editor annotations correctly, Prettier also has to
          support source maps <strong>(not yet implemented)</strong>.
        </p>
      </div>
      <div className="centerColumn">
        <h2>Compat mode</h2>
        <p>
          If you're not ready to make the full jump to Lenient, there is a
          Compat mode. Compat mode is mostly backwards compatible with standard
          JavaScript. It differs from full Lenient in the following ways:
        </p>
        <ul>
          <li>
            Objects as return values of arrow functions have to be wrapped in
            parentheses. Braces can be used for denoting any block (in Lenient,
            arrow functions cannot use braces).
          </li>
          <li>
            There's no shortcut for declaring constants, `const` is used for
            both reading and writing.
          </li>
        </ul>
        <p>
          This means that most well-formatted JavaScript will transpile to the
          same code in Compat mode.
        </p>
      </div>
      {/* <div className="columns">
          <div className="column">
            <h2>“I don't like CoffeeScript, not this again!”</h2>
            <p>
              LenientJS is not a new language. It trully translates 1:1 to
              JavaScript. It's designed to make reading and writing code easier,
              but it doesn't introduce any new sematnics.
            </p>
          </div>
          <div className="column">
            <h2>“I love CoffeeScript, why should I use this?”</h2>
            <p>
              We do too! Unfortunately it's often impossible to adopt
              CoffeScript in existing large code bases. With LenientJS, your
              coworkers might never find out that you're not using vanilla
              JavaScript.
            </p>
          </div>
        </div> */}
    </div>
    <div className="footer">
      <GitHubLink />
    </div>
  </div>
);

const GitHubLink = ({className}) => (
  <a
    className={className}
    href="https://github.com/xixixao/lenientjs"
    target="_blank">
    GitHub
  </a>
);

export default App;
