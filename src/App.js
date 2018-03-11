import React from 'react';
import EditorPanes from './EditorPanes';

const App = () => (
  <div>
    <div className="titleHeaderWrap">
      <div className="titleHeader">
        <div className="title">LenientJS</div>
        <div className="titleLinks">
          <a
            className="titleLink"
            href="https://github.com/xixixao/lenientjs"
            target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
    <div className="editorWrap">
      <div className="editor">
        <EditorPanes />
      </div>
    </div>
    <div className="contentWrap">
      <div className="content">
        <h1 className="subTitle">A better syntax for JavaScript</h1>
        <p className="subTitle">
          Read and write code using LenientJS syntax, save and load standard
          JavaScript.
        </p>
        <div className="columns">
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
        </div>
        <h3>Improvements over ES6</h3>
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
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
          amet diam ultrices, tincidunt justo et, condimentum lorem. Nullam diam
          neque, lobortis a justo in, lacinia ornare diam. Maecenas nec
          imperdiet eros. Duis nec pretium mauris. Suspendisse ac porta ligula.
          Aliquam vel interdum ante. Aliquam sit amet metus non purus facilisis
          posuere.
        </p>
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
    </div>
  </div>
);

export default App;
