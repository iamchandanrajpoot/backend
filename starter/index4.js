// async await

async function xyz() {
  console.log("a");
  console.log("b");
  let c = await new Promise((resolve, reject) => {
    setTimeout(() => resolve("c"), 3000);
  });
  console.log(c);
  let d = await new Promise((resolve, reject) => {
    setTimeout(() => resolve("d"), 0);
  });
  console.log(d);

  console.log("e");
}

xyz();

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');
