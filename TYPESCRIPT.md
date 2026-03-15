# IPT TypeScript Style Guide

This style guide presents coding conventions for working with TypeScript to maintain code readability, consistency and collaboration. Code that follows industry standards and established guidelines is easier to understand, maintain and extend. These guidelines are a living document and as languages evolve we welcome discussion and updates to keep them in line with industry standards and established best practices.

This style guide applies to full stack development with TypeScript and React including front end and back end development.

## Guiding Principles

These principles have been chosen as guides to help in creating a consistent clean, easy to read and maintain, and more testable codebase.

- Code should avoid patterns known to cause problems or be unclear to users new to the languages.
- Code should be maintainable in the long run.
- Reviewers should be focused on improving the quality of code.
- Always use the simplest type construct to express your code.
- Prefer verbosity (or a little bit of repetition) over complex expressions.

### Single Responsibility Principle

Apply the single responsibility principle (SRP) to all classes, components, functions, modules, and services.

> An object should have only one reason to change, meaning that an object should have only one job or responsibility.

Define one object, such as a class, component, module or service, per file. One object per file makes it easier to read, maintain, avoid collisions and enhances the testability of the codebase.

### Don't Repeat Yourself

Apply the don't repeat yourself (DRY) principle to development by replacing code and logic repetition with an abstraction that is less likely to change. The DRY principle aims to avoid duplication to improve maintainability and readability.

## Source Files

Source files are encoded in UTF-8.

Source files consist of the following, in order:

1. JSDoc with `@fileoverview`, if present
2. Imports, if present
3. Implementation

Exactly one blank line separates each section.

### Whitespace

Indenting uses spaces only and the tab width is 4.

Place 1 space before the leading brace.

```typescript
// Bad
function foo(){
  ...
}

// Good
function foo() {
  ...
}
```

Place no space between the argument list and the function name in function calls and declarations.

```typescript
// Bad
function foo () {
  ...
}

// Good
function foo() {
  ...
}
```

Include a space between operators.

```typescript
// Bad
const x=y+5;

// Good
const x = y + 5;
```

Use indentation when making long method chains (more than 2 method chains). Use a leading dot, which emphasizes that the line is a method call, not a new statement.

```typescript
// Bad
$('#foo').find('.bar').find('.baz').update();

$('#foo').
  find('.bar').
  find('.baz').
    update();

// Good
$('#foo')
  .find('.bar')
  .find('.baz')
    .update();
```

Leave a blank line after blocks and before the next statement

```typescript
// Bad
if (foo) {
  return bar;
}
return baz;

// Good
if (foo) {
  return bar;
}

return baz;
```

Do not pad blocks with blank lines.

```typescript
// Bad
function bar() {

  console.log(foo);

};

// Good
function bar() {
  console.log(foo);
}
```

Do not add spaces inside parentheses.

```typescript
// Bad
function bar( foo ) {
  return foo;
}

// Good
function bar(foo) {
  return foo;
}
```

Do not add spaces inside brackets.

```typescript
// Bad
const foo = [ 1, 2, 3 ];

// Good
const foo = [1, 2, 3];
```

Add spaces inside curly braces.

```typescript
// Bad
const foo = {bar: 'baz'};

// Good
const foo = { bar: 'baz' };
```

Avoid having lines of code that are longer than 100 characters (including whitespace).

End files with a single newline character.

### Semicolons

Explicitly end all statements using a semicolon.

When JavaScript encounters a line break without a semicolon, it uses a set of rules called Automatic Semicolon Insertion to determine whether or not it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. [1](https://airbnb.io/javascript/#semicolons)

### Commas

Do not use leading commas.

```typescript
// Bad
const foo = [
    bar
  , baz
  , bam
];

// Good
const foo = [
  bar,
  baz,
  bam,
];
```

Do use an additional trailing comma.

```typescript
// Bad
const foo = [
  bar,
  baz
];

// Good
const foo = [
  bar,
  baz,
];
```

### Imports

| Import type | Example                        | Use for                                         |
| ----------- | ------------------------------ | ----------------------------------------------- |
| module      | import foo from '...';         | TypeScript imports                              |
| named       | import {SomeThing} from '...'; | TypeScript imports                              |
| default     | import SomeThing from '...';   | Only for other external code that requires them |

Do not use wildcard imports.

```typescript
// Bad
import * as ng from '@angular/core';
```

```typescript
// Good
import ng from '@angular/core';

// Best
import {Foo} from './foo';

// Only when needed: default imports.
import Button from 'Button';
```

Paths must be used to import TypeScript code. Paths may be relative, i.e. starting with `.` or `..`, or rooted to the base directory, e.g. `root/path/to/file`.

Relative imports (`./foo`) must be used when referring to file within the same folder.

The number of parent steps should be limited to 2, i.e. `../../foo`.

Ony import from a path in one place.

```typescript
// Bad
import foo from 'foo';
// … some other imports … //
import { named1, named2 } from 'foo';

// Good
import foo, { named1, named2 } from 'foo';

// Best
import foo, {
  named1,
  named2
} from 'foo';
```

### Exports

Prefer default exports for modules with a single primary export. Use named exports for modules that intentionally expose multiple exports.

```typescript
export default function foo() {
  // ...
}
```

Do not export directly from an import.

```typescript
// Bad
// filename es6.js
export { es6 as default } from './foo';

// Good
// filename es6.js
import { es6 } from './foo';
export default es6;
```

Do not export mutable bindings.

```typescript
// Bad
let foo = 3;
export { foo };

// Good
const foo = 3;
export { foo };
```

_Exception:_ In SDL files, prefer named exports over default exports.

```typescript
// Bad
const schema = gql`
    type User {
        id: Int!
        email: String!
    }
`;

export default schema;

// Good
export const schema = gql`
    type User {
        id: Int!
        email: String!
    }
`;
```

Do not use Webpack loader syntax in module imports.

### Modules and Namespaces

Use modules over namespaces. Do not use `namespace Foo { ... }` and `import x = require('...');`.

## Naming

Identifiers must use only ASCII letters, digits, underscores.

### General Guidelines

- Use `camelCase` for variables, functions, and instance methods.
- Use `PascalCase` for classes, interfaces, types, and enums.
- Use `UPPER_CASE` for constants and enum values.
- Do not use `_` as a prefix or suffix.

Avoid single-letter names. Be descriptive.

Names should capture what the code **does** and not how it is used.

Use `is` and `has` prefixes for boolean properties.

```typescript
// Bad
let enabled: boolean;
let visible: boolean;

// Good
let isEnabled: boolean;
let isVisible: boolean;
```

### Variables

Use descriptive names and `camelCase` for variables.

```typescript
// Bad
let a = 5;
const b = 'hello';

// Good
let count = 5;
const greeting = 'hello';
```

### Functions

Use verbs to indicate actions in function names. Function names should be descriptive and use `camelCase`. The name should capture what the method **does** and not when it will be called.

```typescript
// Bad
function d() {}
function handleClick() {}

// Good
function fetchData() {}
function displayModal() {}
```

### Classes, Interfaces and Types

Use `PascalCase` for class, interface and type names.

Do not decorate names with information included in the type:

- Do not use trailing or leading underscores for private properties or methods.
- Do not use the opt_ prefix for optional parameters.
- Do not use the I prefix or Interface suffix for interfaces

```typescript
// Bad
class user {}

interface data {}

interface IData {}

type user = {
  name: string;
  age: number;
};

// Good
class User {}

interface Data {}

type User = {
  name: string;
  age: number;
};
```

### Enums

Use PascalCase for enum names and UPPER_CASE for enum values.

```typescript
// Bad
enum color {
  red,
  green,
  blue
}

// Good
enum Color {
  RED,
  GREEN,
  BLUE
}
```

### Type Parameters

Use a single upper case character, starting with `T` and progressing to `U`, `V`.

```typescript
Array<T>
```

### Filenames

Filenames should match the name of the default export. Use `kebab-case` for file-names.

- **Exception**: React component files should use `PascalCase`

```typescript
// Bad
myComponent.ts

// Good
my-component.ts
```

### Naming Style

Treat abbreviations like words and `camelCase`. Do not use abbreviations or ambiguous phrases specific to the project.

- **Exception**: Abbreviations of 3 characters or less can be uppercased

```typescript
// Bad
const HTTPRequests = [
  // ...
];

// Good
const httpRequests = [
  // ...
];

// Best
const requests = [
  // ...
];
```

Prefer not using acronyms and initialisms.

```typescript
// Good
import SmsContainer from './containers/SmsContainer';

// Best
import TextMessageContainer from './containers/TextMessageContainer';
```

### Test Names

Use descriptive names. Test names should read as a sentence of the form "it should ...".

## Language Features and Style

### Variable Declarations

Use `const` for variables that don't change and `let` for variables that will change.
Never use `var`. `const` and `let` are block scoped, `var` is not.

Variables must not be used before their declaration.

Declare one variable per declaration.

```typescript
// Bad
let a = 1, b = 2;

// Good
let a = 1;
let b = 2;
```

Use one const or let declaration per variable.

Always group all `const`s and `let`s.

Do not chain variable assignments. It creates implicit global variables.

```typescript
// Bad
let a = b = 2;

// Good
let a = 1;
let b = 2;
```

### Arrays

Do not use the `Array()` constructor. Always use bracket notation to initialise arrays.

```typescript
// Bad
const a = new Array(2); // [undefined, undefined]
const b = new Array(2, 3); // [2, 3];

// Good
const a = [2];
const b = [2, 3];

Array.from<number>({length: 5}).fill(0); // [0, 0, 0, 0, 0]
```

Use return statements in array method callbacks.

#### `Array<T>`

Use the simple form `T[]` or `readonly T[]`, rather than the long form `Array<T>` or `ReadonlyArray<T>` for simple types.

For multi-dimensional non-`readonly` arrays of simple types use the simple form (`T[][]`, `T[][][]`, etc.).

```typescript
// Bad
let a: Array<string>;
let b: ReadonlyArray<string>;
let c: Array<string[]>;

let d: {n: number, s: string}[];
let e: Array<string|number>;

// Good
let a: string[];
let b: readonly string[];
let c: string[][];

let d: Array<{n: number, s: string}>;
let e: (string|number)[];
```

#### Spreading

Use spreading (`...`) to copy arrays. When spreading only use iterables.

```typescript
// Good
const itemsCopy = [...items];
```

```typescript
// Bad
const foo = [7];
const bar = [5, ...(shouldUseFoo && foo)]; // might be undefined

// Good
const foo = shouldUseFoo ? [7] : [];
const bar = [5, ...foo];
```

Use spreading to convert an array like object to an array.

```typescript
const foo = document.querySelectorAll('.foo');

// Good
const nodes = Array.from(foo);

// Best
const nodes = [...foo];
```

Use `Array.from` instead of spreading for mapping over iterables because it avoids creating an intermediate array.

```typescript
// Bad
const baz = [...foo].map(bar);

// Good
const baz = Array.from(foo, bar);
```

#### Destructuring

Use array literals when destructuring multiple values and a final "rest" element is necessary. Unused elements should be omitted.

```typescript
const [a, b, c, ...rest] = generateResults();
let [, b,, d] = someArray;
```

Prefer object destructuring so new properties can be added without affecting calls.

### Objects

Use an object literal `{}` over the `Object` constructor.

Use object method shorthand.

```typescript
// Bad
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// Good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```

Use property value shorthand.

```typescript
const foo = 'Foo';

// Bad
const obj = {
  foo: foo,
};

// Good
const obj = {
  foo,
};
```

Group shorthand properties at the beginning of object declaration.

Only quote properties that are invalid identifiers.

Do not call `Object.prototype` methods directly, such as `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`. They may be shadowed by properties on the object, e.g. `{ hasOwnProperty: false }`.

#### Properties

Use dot notation when accessing properties.

```typescript
const foo = {
  bar: true,
  baz: 10,
};

// Bad
const isBar = foo['bar'];

// Good
const isBar = foo.bar;
```

Use bracket notation [] when accessing properties with a variable.

```typescript
const foo = {
  bar: true,
  baz: 10,
};

function getProp(prop) {
  return foo[prop];
}

const isBar = getProp('bar');
```

#### Iterating Objects

Do not use unfiltered `for (... in ...)` because it is error prone and will include enumerable properties from the prototype chain. Filter values explicity with `if` or use `for (... of Object.keys(...))`.

```typescript
for (const x in someObj) {
  if (!someObj.hasOwnProperty(x)) continue;
  // x is definitely defined on someObj
}
for (const x of Object.keys(someObj)) {
  // x is definitely defined on someObj
}
for (const [key, value] of Object.entries(someObj)) {
  // key is definitely defined on someObj
}
```

#### Copying Objects

Use spread syntax `{...foo}` for copying objects.

```typescript
const foo = {
  num: 1,
};

const foo2 = {
  ...foo,
  num: 5,
};
```

#### Destructuring

Use object destructuring to unpack multiple values from a single object.

```typescript
// Bad
const firstName = user.firstName;
const lastName = user.lastName;

// Good
const { firstName, lastName } = user;
```

Prefer object destructuring for multiple return values.

### Classes

Always use `class` and `extends`. Never manipulate `prototype` directly.

Custom `toString()` methods should always return successfully.

Class declarations and method declarations must not be terminated with semicolons.

```typescript
class Foo {
  doSomething() {
    ...
  }

  doSomethingElse() {
    ...
  }
}
```

Statements containing class declarations must be terminated with a semicolon because they are not declarations.

```typescript
export const Bar = class extends Foo {
  ...
};
```

#### Constructors

Classes have default constructors, an empty constructor must not be declared.

Constructor calls must use parentheses.

```typescript
class Foo {
  constructor() {
    ...
  }
}

const f = new Foo();
```

Prefer shorthand initialisation for properties.

```typescript
// Bad
class Foo {
  private id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

// Good
class Foo {
  constructor(private id: number, public name: string) {}
}
```

#### Members

Do not include duplicate class members

```typescript
// Bad
class Foo {
  bar() { return 1; }
  bar() { return 2; }
}

// Good
class Foo {
  bar() { return 1; }
}
```

Use `readonly` for properties that never change outside of the constructor.

If a class member is not a constructor parameter initialise it where it's declared and remove the constructor.

```typescript
// Bad
class Foo {
  private readonly list: string[];

  constructor() {
    this.list = [];
  }
}

// Good
class Foo {
  private readonly list: string[] = [];
}
```

Use `public`, `protected` and `private` to control class members visibility. Do not use `obj['foo']` to bypass the visibility of a property.

### Functions

Prefer function declarations over arrow functions or function expressions for named functions.

```typescript
// Bad
const foo = () => 'bar';

// Good
function foo() {
  return 'bar';
}
```

Use arrow functions instead of function expressions.

```typescript
// Bad
bar(function() {...})

// Good
bar(() => { ... })
```

Use arrow functions with concise bodies for single statements, and block bodies for more complex declarations. Only use a concise body if the return value is actually used.

```typescript
// Bad
foo.then(b => console.log(b)); // Use a block body if the return value is not used

let f: () => void;
f = () => 1;

// Good
function foo() {
  const bar = (baz: number) => number * 2; // Nested arrow functions

  const baz = list.map(l => String(l)); // Concise body

  // Block body
  const fooBar = baz.map((b: string) => {
    const fooBaz = bar(b);
    baz(fooBaz);
    return fooBaz;
  });
}
```

Prefer passing arrow functions as callbacks.

Wrap immediately invoked function expressions in parentheses.

```typescript
(function() {
  ...
}());
```

Never declare a function in a non-function block (`if`, `while`, etc.).

Never name a parameter `arguments` or use `arguments`, use rest syntax `...` instead.

```typescript
// Bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// Good
function concatenateAll(...args) {
  return args.join('');
}
```

Don't mutate function arguments.

Use default parameters where necessary and don't apply side effects. Always put default parameters last.

```typescript
// Bad
function foo(bar) {
  bar = bar || {};

  ...
}

let b = 1;
function baz(a = b++) {
  ...
}

// Good
function foo(bar = {}) {
  ...
}

let b = 1;
function baz(a = b) {
  ...
}
b++;
```

Never use `Function` to create a new function.

```typescript
// Bad
var foo = new Function('a', 'b', 'return a + b');
```

### `this`

Only use `this` in classes, constructors and methods, or arrow functions defined where `this` may be used.

### Strings

Use single quotes '' for strings.

Do not break long strings over multiple lines, it makes searching more difficult.

Use template literals instead of concatenation.

```typescript
// Good
function foo(name) {
  return `Hello ${name}`;
}
```

Never use eval() on a string.

Do not unnecessarily escape characters in strings.

### Control Flow Statements

Control flow statements (`if`, `else`, `for`, `do`, `while`, etc.) always use braces for the containing code even if the body contains only a single statement.

```typescript
// Good
for (let i = 0; 1 < x; i++) {
  doSomething(i);
}

if (x) {
  doSomethingElse();
}
```

Do not assign variables inside of control statements.

```typescript
// Bad
if (x = foo()) {
  ...
}

// Good
x = foo();
if (x) {
  ...
}
```

Don't use selection operators in place of control statements.

```typescript
// Bad
!isFoo() && bar();

// Good
if (!isFoo()) {
  bar();
}
```

Prefer JavaScript's higher-order functions (`map()`, `every()`, `filter()`, `find()`, `findIndex()`, `reduce()`, `some()`, etc.) instead of loops (`for (... in ...)`) to iterate over arrays.

Use `Object.keys()`, `Object.values()`, `Object.entries()` to produce arrays.

If an `if` blocks always executes a `return` statement, the subsequent `else` block should be omitted.

```typescript
// Bad
function foo() {
  if (x) {
    return x;
  } else {
    return y;
  }
}

// Good
function foo() {
  if (x) {
    return x;
  }

  return y;
}
```

#### `switch` Statements

All `switch` statements must contain a `default` group, even if it is empty.

```typescript
switch (x) {
  case Y:
    foo();
    break;
  case Z:
    bar();
    break;
  default:
    // do nothing
}
```

### Exceptions

Always use `new Error()` when throwing an exception.

```typescript
// Bad
throw Error('Something went wrong.');

// Good
throw new Error('Something went wrong.');
```

When catching and throwing errors the original error should be rethrown so as not to lose the stack trace or helpful debugging information.

```typescript
// Bad
try {
  doSomething();
}
catch (e: unknown) {
  ...
  throw new Error('Something went wrong.');
}

// Good
try {
  doSomething();
}
catch (e: unknown) {
  ...
  throw e;
}
```

Do not use empty catch blocks. If there is an exception a comment should be used clearly explaining why.

### Comparison and Equality

Always use `===` and `!==` over `==` and `!=`. The only exception is comparisons to `null` which may use `==` and `!=` to cover `null` and `undefined`.

Use shortcuts for booleans but explicit comparisons for strings and numbers in conditional statements.

```typescript
// Bad
if (isValid === true) {
  ...
}

if (name) {
  ...
}

if (collection.length) {
  ...
}

// Good
if (isValid) {
  ...
}

if (name !== '') {
  ...
}

if (collection.length > 0) {
  ...
}
```

Ternary statements must not be nested and should generally be single line expressions.

When mixing operators enclose them in parentheses to improve readability.

```typescript
// Bad
const foo = a && b < 0 || c > 0 || d + 1 === 0;

// Good
const foo = (a && b < 0) || c > 0 || (d + 1 === 0);
```

### Type and Non-Nullability Assertions

Do not use type and non-nullability assertions. They are unsafe. Use a runtime check instead.

```typescript
// Bad
(x as Foo).bar(); // type assertion

y!.baz(); // non-nullability assertion

// Good
if (x instanceof Foo) {
  x.bar();
}

if (y != null) {
  y.baz();
}
```

Use type annotations (`: Foo`) instead of type assertions (`as Foo`) to specify the type of an object literal.

```typescript
// Bad
interface Foo {
  bar: number;
  baz?: string;
}

const foo = {
  bar: 123,
  bam: 'abc', // no error, even though interface doesn't
} as Foo;

// Good
interface Foo {
  bar: number;
  baz?: string;
}

const foo: Foo = {
  bar: 123,
  bam: 'abc',  // complains about "bam" not being defined on Foo.
};
```

### Decorators

Do not create new decorators. Only use decorators provided by frameworks, e.g. Angular (`@Component`, etc.).

### Type Casting

Do not use wrapper classes for primitive types. Always use a radix when parsing strings with `parseInt`.

```typescript
// Bad
const s = new String('Hello world');
const b = new Boolean(false); // evaluates to true!
const n = new Number(1);

// Good
const number = 0;

const b = Boolean(number);
const n = Number('4');

// Best
const number = 0;

const b = !!number;
const n = parseInt('4', 10)
```

### Do Not Use

Do not use

- `any`, Its use undermines the value of TypeScript.
- global `isNaN` or `isFinite`, use `Number.isNaN` and `Number.isFinite` instead.
- `const enum`, use `enum` instead. TypeScript enums cannot be mutated.
- `with`. It is banned in strict mode since ES5. [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with)
- `eval` or `Function(...string)` constructor. These do not work in environments with strict Content Security Policies.
- the `{}` type. Prefer a more descriptive type.
- Non standard features.

## Types

Primitives (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`) are pass by value.

Complex (`object`, `array`, `function`) are pass by reference.

Use type inference when the inferred type is obvious (variables or parameters initialized to a `string`, `number`, `boolean`, `RegExp` literal or `new` expression).

```typescript
// Bad
const x: boolean = true;

// Good
const x = 15;
```

Explicitly specify types for generic type parameters.

```typescript
// Good
const x = new Set<string>();
```

Prefer `interface`s over `type` aliases for object literals.

Prefer `Map` and `Set` types over indexable objects.

```typescript
// Bad
const users: {[username: string]: number} = ...;

// Good
const users: Map<string, number> = new Map();
```

Use `unknown` over `any`. It allows any value to be assigned but prevents dereferencing arbitrary properties off it.

### Wrapper Types

Never use `String`, `Boolean`, `Number` or `Object`. Always use the lowercase version (`string`, `boolean`, `number`, `object`).

### Template Literal Types

Use template literal types to narrow the applicable values for template literal strings.

```typescript
// Bad
const userEndpoint = '/api/usrs'; // typo in 'usrs', should be 'users'

// Good
type ApiRoute = 'users' | 'posts' | 'comments';
type ApiEndpoint = `/api/${apiRoute}`;
const userEndpoint: ApiEndpoint = '/api/users';
```

## Performance Optimisation Considerations

Some of these are covered earlier in the guide but summarised here due to their performance benefits.

- Do not use `var`. Use `const` or `let`. Variables declared with `var` are slower to access from memory than local scope variables.
- Prefer `const` over `let` for variables that do not change. `const` enables memory optimisations in the JavaScript engine.
- Use memory efficient data structures. `Set` when unique values are required and `Map` for key-value pairs.
- Use type inference instead of explicitly typing everything. This simplifies code and improves readability.
- Do not use type assertions (`as Foo`). They bypass TypeScript's type checking and can lead to runtime errors.
- Do not use `any`. Prefer `unknown` instead because it requires runtime type checks.
- Do not use `eval` or the `Function` constructor. They can introduce security risks.
- In `for` loops, consider caching the loop length to avoid recomputations.

```typescript
// Bad
for (let i = 0; i < array.length; i++) {
  ...
}

// Good
const len = array.length;
for (let i = 0; i < len; i++) {
  ...
}
```

## Comments

- Use `/** JSDoc */` comments for documentation.
- Use `// line comments` for implementation comments.

Multi-line comments must be indented at the same level as surrounding code and use `//`, not block comment style (`/* */`).

Use markdown formatting for JSDoc comments.

Start all comments with a space to make it easier to read.

Comments should be used to describe why a decision was taken, not what the code does. If the code is unclear or too complex it should be rewritten to be more verbose and clearer to the reader.
