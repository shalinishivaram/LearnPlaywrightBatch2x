// Cheat sheet of all JavaScript operator types
// Note: inside an object literal, keys use ":" (not "="). "=" is only for variable declarations.

const operators = {
  arithmetic: ["+", "-", "*", "/", "%", "**", "++", "--"],           // 2 + 3 = 5,  7 % 2 = 1,  2 ** 3 = 8
  comparison: ["==", "===", "!=", "!==", "<", ">", "<=", ">="],      // '5' == 5 -> true,  '5' === 5 -> false
  logical: ["&&", "||", "!", "??"],                                  // null ?? 'x' -> 'x',  0 || 'x' -> 'x'
  assignment: ["=", "+=", "-=", "*=", "/=", "%=", "**=", "&&=", "||=", "??="], // x += 2  is same as  x = x + 2
  bitwise: ["&", "|", "^", "~", "<<", ">>", ">>>"],                   // works on 32-bit signed integers
  unary: ["typeof", "void", "delete", "!"],                          // typeof null -> 'object' (famous JS bug)
  other: ["?:", "?.", "?.[]", "...", ",", "in", "instanceof"]        // ternary, optional chaining, spread/rest
};

console.log(JSON.stringify(operators, null, 2));

// How many operator types are there?
console.log("Total types:", Object.keys(operators).length);

// How many operators in total?
const total = Object.values(operators).reduce((sum, list) => sum + list.length, 0);
console.log("Total operators:", total);
