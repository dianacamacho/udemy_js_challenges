/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
  constructor(name, year) {
    this.name = name;
    this.buildYear = year;
  }
}

class Park extends Element {
  constructor(name, year, trees, area) {
    super(name, year);
    this.trees = trees;
    this.area = area;
  }

  treeDensity() {
    let density = this.trees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees/sq ft.`);
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.buildYear;
  }

  info() {
    return `${this.name} was built in ${this.buildYear}, and is now ${this.age()} years old. It has ${this.trees} trees, spans ${this.area} sq ft for a tree density of ${this.treeDensity()} trees/sq ft.`
  }
}

class Street extends Element {
  constructor(name, year, length, size=3) {
    super(name, year);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');

    console.log(`${this.name} street, built in ${this.buildYear}, is classified as a ${classification.get(this.size)} street. It is ${this.length} miles long.`);
  }
}

function calculate(array) {
  // arr.reduce(callback, [initialValue])
  // reduce can take two args, a callback and an initial value. The callback can take 4 args, previous val (accumulator), current val, current index, array
  const sum = array.reduce((prev, curr, index) => 
     prev + curr, 0
  );

  // can be used for destructuring
  return [sum, sum / array.length];
}

function parkReport(parks) {
  console.log('----- PARKS REPORT -----');
  // Tree Density
  parks.forEach(el => el.treeDensity());

  // Average Park Age
  const ages = parks.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calculate(ages);
  console.log(`The ${parks.length} parks have an average age of ${avgAge}`);

  // 1000+ Trees
  const index = parks.map(el => el.trees).findIndex(el => el >= 1000)
  console.log(`${parks[index].name} has more than 1000 trees.`);
  console.log('-----------------------');
}

function streetReport(streets) {
  console.log('---- STREETS REPORT ----');
  // Total and average length of streets
  const lengths = streets.map(el => el.length);
  const [totalLength, avgLength] = calculate(lengths);
  console.log(`The streets run for a total of ${totalLength} miles. The average street length is ${avgLength} miles. `);
  // Classification
  streets.forEach(el => el.classifyStreet());
  console.log('------------------------');
}


let parks = [new Park('McKinley Park', 1990, 500, 800), new Park('Marquette Park', 1960, 600, 1200), new Park('Humboldt Park', 1970, 1020, 2000)];

let streets = [new Street('Honore', 1871, 60), new Street('Wolcott', 1800, 80), new Street('Grand', 1900, 140), new Street('Chicago', 1965, 100)];

parkReport(parks);
streetReport(streets);