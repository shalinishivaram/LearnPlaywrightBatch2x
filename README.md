# LearnPlaywrightBatch2x

Learning repository for Playwright with foundational JavaScript exercises.

## Repository Structure

```
chapter_01_Basics/
├── 01_Basics.js           # Introduction to running JavaScript
├── 02_JS_Verify_setup.js  # Verify Node.js environment setup
└── 03_Hotcode.js          # Hot code and function call performance

chapter_02__Javascript_Concepts/
├── 04.Identifier_rules.js       # JavaScript identifier naming rules
├── 05.Keywords.js               # Overview of reserved JavaScript keywords
├── 06.Var_let_cont.js           # Placeholder for var/let continuation
├── 07.functions.js              # Function declaration and invocation
├── 08.var_explained.js          # var: function scoped, redeclarable, reassignable
├── 09.Let_explained.js          # let: block scoped, reassignable, not redeclarable
├── 10.const_explained.js        # const: block scoped, never reassignable
├── 11. var_functionscope_explain.js  # var scope inside a function vs global
├── 12.let_functionscope_explain.js  # let scope inside a function vs global
├── 13.Hoisting.js               # Hoisting of var declarations
├── 14. Hoisting_with_function.js    # Hoisting of var inside a function
├── 15.Hoisting_from_let.js      # let hoisting and the Temporal Dead Zone (TDZ)
├── 16. Const_Hoisting.js        # const hoisting and the Temporal Dead Zone (TDZ)
├── 17. Literals.js               # String, number, boolean, array, object, null, undefined and template literals
└── 18. Operators.js              # Cheat sheet of all operator types grouped in an object
```

## Prerequisites

- [Node.js](https://nodejs.org/) installed

## How to Run

Run any exercise with Node.js:

```bash
node chapter_01_Basics/01_Basics.js
```

## Chapters

### Chapter 01 – Basics
- Running simple JavaScript with `console.log`
- Checking the environment (`process.platform`, `process.arch`, `process.version`)
- Understanding hot code paths (repeated function calls in a loop)

### Chapter 02 – JavaScript Concepts
- Identifier rules (allowed characters, case sensitivity, reserved keywords)
- Reserved keywords in JavaScript
- Function declarations and calling them
- `var` vs `let` vs `const` — scope, redeclaration and reassignment
- Function scoped (`var`) vs block scoped (`let`/`const`) behaviour
- Hoisting of `var` declarations, including inside functions
- Temporal Dead Zone (TDZ) for `let` and `const` — accessing them before declaration throws a `ReferenceError`
- Literals in JavaScript — string, number, boolean, array, object, `null`, `undefined` and template literals
- `undefined` vs `null` — meaning, `typeof` behaviour, and why `===` is preferred
- Operators cheat sheet — arithmetic, comparison, logical, assignment, bitwise, unary and misc operators
