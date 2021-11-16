const sum = (...args) => {
  if (!args.length || args.length === 1) {
    throw new Error("You need to pass 2 numbers at least");
  }
  let sum = 0;
  args.forEach((num) => {
    sum += num;
  });
  return sum;
};

sum(1, 2, 3, 4);
// returns 10

// console.log(sum(1, 2, 3, 4));
//
module.exports = { sum };
