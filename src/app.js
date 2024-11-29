//write your code here
let pronoun = ["the", "your", "our", "their"];
let adj = [
  "great",
  "big",
  "crazy",
  "dangerous",
  "gorgeous",
  "diabolical",
  "monstruous",
  "drunk",
  "savage"
];
let noun = [
  "cat",
  "dog",
  "hyena",
  "wolf",
  "zombie",
  "priest",
  "bird",
  "rat",
  "demon",
  "monster",
  "monk"
];
let ext = [".es", ".com", ".io", ".net"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
      }
    }
  }
}
