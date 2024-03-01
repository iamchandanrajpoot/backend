const arr1 = ["apple", "oranges", " ", "mango", " ", "lemon"];

const arr2 = arr1.map((word) => {
  if (word === " ") {
    return "empty string";
  } else {
    return word;
  }
});

console.log(arr2);
console.log(arr1);

// ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon]
