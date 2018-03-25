export default isMobile => [
  `${
    isMobile
      ? `// Go ahead, edit code\n// in either pane`
      : `// Go ahead, edit code in either pane`
  }

let number = 42;

const opposite = true;

if (opposite) {
  number = -42;
}

const square = x => x * x;

const list = [1, 2, 3, 4, 5];

const math = {
  root: Math.sqrt,
  square: square,
  cube: x => {
    return x * square(x);
  }
};

const race = (winner, ...runners) => {
  print(winner, runners);
};

if (elvis ?? false) {
  alert("I knew it!");
}

for (const num of list) {
  print(math.cube(num));
}

class B extends A {
  getExample() {
    return 'Hello world!';
  }

  setState = x => {
    this.state = x;
  };
}`,
  `// http://paperjs.org/examples/chain/

// The amount of points in the path:
const points = 25;

// The distance between the points:
const length = 35;

const path = new Path({
  strokeColor: '#E4141B',
  strokeWidth: 20,
  strokeCap: 'round',
});

const start = view.center / [10, 1];
for (const i of range(0, points)) {
  path.add(start + new Point(i * length, 0));
}

function onMouseMove(event) {
  path.firstSegment.point = event.point;
  for (const i of range(0, points - 1)) {
    const segment = path.segments[i];
    const nextSegment = segment.next;
    const vector = segment.point - nextSegment.point;
    vector.length = length;
    nextSegment.point = segment.point - vector;
  }

  path.smooth({type: 'continuous'});
}

function onMouseDown(event) {
  path.fullySelected = true;
  path.strokeColor = '#e08285';
}

function onMouseUp(event) {
  path.fullySelected = false;
  path.strokeColor = '#e4141b';
}`,
  `// https://reactjs.org/docs/components-and-props.html

const formatDate = date => date.toLocaleDateString();

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

const Avatar = props => (
  <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
);

const UserInfo = props => (
  <div className="UserInfo">
    <Avatar user={props.user} />
    <div className="UserInfo-name">{props.user.name}</div>
  </div>
);

const Comment = props => (
  <div className="Comment">
    <UserInfo user={props.author} />
    <div className="Comment-text">{props.text}</div>
    <div className="Comment-date">{formatDate(props.date)}</div>
  </div>
);

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById('root'),
);
`,
  `// http://learn.jquery.com/ajax/jquery-ajax-methods/

// Using the core $.ajax() method
$.ajax({
  // The URL for the request
  url: 'post.php',

  // The data to send (will be converted to a query string)
  data: {id: 123},

  // Whether this is a POST or GET request
  type: 'GET',

  // The type of data we expect back
  dataType: 'json',
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(json => {
    $('<h1>')
      .text(json.title)
      .appendTo('body');
    $('<div class="content">')
      .html(json.html)
      .appendTo('body');
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail((xhr, status, errorThrown) => {
    alert('Sorry, there was a problem!');
    console.log('Error: ' + errorThrown);
    console.log('Status: ' + status);
    console.dir(xhr);
  })
  // Code to run regardless of success or failure;
  .always((xhr, status) => {
    alert('The request is complete!');
  });
`,
  `// http://learnyouahaskell.com/recursion#maximum-awesome
const naiveQuicksort = list =>
  empty(list)
    ? []
    : do {
        const [x, ...xs] = list;
        const smallerSorted = xs.filter(a => a <= x);
        const biggerSorted = xs.filter(a => a > x);
        [...smallerSorted, x, ...biggerSorted];
      };

// http://khan4019.github.io
//   /front-end-Interview-Questions/sort.html#quicksort
const quickSort = (arr, left, right) => {
  if (left < right) {
    const pivot = right;
    const partitionIndex = partition(
      arr,
      pivot,
      left,
      right,
    );

    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
};

const partition = (arr, pivot, left, right) => {
  const pivotValue = arr[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, right, partitionIndex);
  return partitionIndex;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
`,
];
