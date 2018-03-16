import {simulateKeys, timeout} from './helpers';

const START_PRE_FORMAT = `// Lenient makes writing JavaScript effortless

list = [1 2 3 4 5]

// Hit Ctrl+P to format the left pane using Prettier
`;

const START_AFTER_FORMAT = `// Lenient makes writing JavaScript effortless

list = [1, 2, 3, 4, 5]

// Hit Ctrl+P to format the left pane using Prettier
`;

const MIDDLE = `
// Lenient goes beyond inferring syntax from whitespace

for x of list
  alert(x)

// Now let's change the vanilla JS on the right`;

const IN_JS_1 = `// Lenient makes writing JavaScript effortless

const list = [1, 2, 3, 4, 5];

// Hit Ctrl+P to format the left pane using Prettier

// Lenient goes beyond inferring syntax from whitespace

for (const y of list) {
  alert(x);
}
`;

const IN_JS_2_BEFORE = `// Lenient makes writing JavaScript effortless

const list = [1, 2, 3, 4, 5];

// Hit Ctrl+P to format the left pane using Prettier

// Lenient goes beyond inferring syntax from whitespace

for (const y of list) {
`;

const IN_JS_2 = `  console.log(y); // The transformation works both ways!`;

const IN_JS_2_AFTER = `
}
`;

export const initialDemo = ({setLenient, setJS, formatLenient}) => {
  return simulateKeys(START_PRE_FORMAT, setLenient)
    .then(() => timeout(500))
    .then(() => formatLenient())
    .then(() => timeout(1000))
    .then(() => simulateKeys(MIDDLE, setLenient, {before: START_AFTER_FORMAT}))
    .then(() => timeout(1000))
    .then(() => setJS(IN_JS_1))
    .then(() => timeout(200))
    .then(() =>
      simulateKeys(IN_JS_2, setJS, {
        before: IN_JS_2_BEFORE,
        after: IN_JS_2_AFTER,
      }),
    )
    .then(() => timeout(2000));
};
