# React Style Guide

This style guide presents coding conventions for working with React to maintain code readability, consistency and collaboration. Code that follows industry standards and established guidelines is easier to understand, maintain and extend. These guidelines are a living document and as languages and frameworks evolve we welcome discussion and updates to keep them in line with industry standards and established best practices.

This style guide applies to frontend development with React.

## Guiding Principles

These principles have been chosen as guides to help in creating a consistent clean, easy to read and maintain, and more testable codebase.

- Only include one React component per file.
- Always use JSX syntax.
- Do not use `React.createElement`.

## Naming

- Use the `.tsx` (or `.jsx`) extension for React components.
- Use `PascalCase` for filenames, e.g. `TotalCard.tsx`.
- Use the filename as the component name.
- Use `PascalCase` for React components and `camelCase` for instances.

```typescript
// Bad
import totalCard from './TotalCard';

const TotalItem = <TotalCard />;

// Good
import TotalCard from './TotalCard';

const totalItem = <TotalCard />;
```

- Do not use DOM component names for props.

```typescript
// Bad
<MyComponent style="fancy" />
<MyComponent className="fancy" />

// Good
<MyComponent variant="fancy" />
```

- Use `camelCase` for prop names.

```typescript
// Bad
<Foo
  UserName="Bloggs"
  phone_number={123456789}
/>

// Good
<Foo
  userName="Bloggs"
  phoneNumber={123456789}
/>
```

Use the `Props` suffix when naming `type`/`interface` for a component.

```typescript
import { FC } from 'react';

interface MyComponentProps {
  label: string;
  value: number;
}

const MyComponent: FC<MyComponentProps> = ({ label, value }) => (
  ...
);
```

## Framework Features and Style

### Declaration

Name components by reference. Do not use `displayName`.

```typescript
// Bad
export default React.createClass({
  displayName: 'TotalCard',
  ...
});

// Good

function TotalCard({ ... }) {
  ...
}

export default TotalCard;
```

If props fit on one line keep them on the same line. If not, indent them on the following line from the declaration.

```typescript
// Bad
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// Good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

<Foo bar="baz" />
```

If props are indented, indent children normally.

```typescript
// Good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Bam />
</Foo>
```

If a prop is explicitly `true` omit the value.

```typescript
// Bad
<Foo
  hidden={true}
/>

// Good
<Foo
  hidden
/>
<Foo hidden />
```

Include a single space in self-closing tag.

```typescript
// Bad
<Foo/>
<Foo   />
<Foo
  />

// Good
<Foo />
```

Do not pad JSX curly braces with spaces.

```typescript
// Bad
<Foo bar={ baz } />

// Good
<Foo bar={baz} />
```

Wrap JSX tags in parentheses when they span more than one line.

```typescript
// Bad
render() {
  return <MyComponent variant="fancy">
           <MyChild />
         </MyComponent>;
}

// Good
render() {
  return (
    <MyComponent variant="fancy">
      <MyChild />
    </MyComponent>
  );
}

render() {
  const body = <h1>Hello World</h1>;
  return <MyComponent>{body}</MyComponent>;
}
```

Always self-close tags that have no children.

```typescript
// Bad
<MyComponent variant="fancy"></MyComponent>

// Good
<MyComponent variant="fancy" />
```

If a component has multi-line properties, close its tag on a new line.

```typescript
// Bad
<Foo
  bar="bar"
  baz="baz" />

// Good
<Foo
  bar="bar"
  baz="baz"
/>
```

### Attributes

Use double quotes for JSX attributes, but single quotes for all other JS/TS. This mirrors regular HTML.

```typescript
// Bad
<Foo bar='baz' />

// Good
<Foo bar="baz" />
```

### Props

Use a unique ID as a `key` prop. Do not use an array index.

```typescript
// Bad
{users.map((user, index) =>
  <User
    {...user}
    key={index}
  />
)}

// Good
{users.map(user => (
  <User
    {...user}
    key={user.id}
  />
)}
```

### Methods

Use arrow functions to capture and retain the values of local variables.

```typescript
// Bad
function ItemList(props) {
  function handleClick(itemName, index) {
    doSomethingWith(itemName, index);
  }

  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={item.key}
          onClick={handleClick.bind(null, item.name, index)}
        />
      ))}
    </ul>
  );
}

// Good
function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={item.key}
          onClick={() => doSomethingWith(item.name, index)}
        />
      ))}
    </ul>
  );
}
```

Return a value in `render` methods.

```typescript
// Bad
render() {
  (<div />);
}

// Good
render() {
  return (<div />);
}
```

### Accessibility

Use only valid, non-abstract ARIA roles.

Do not use accessKey on elements.

Always include an alt prop on `<img>` tags. If the image is presentational, alt can be an empty string or the `<img>` must have role="presentation".

Do not use words like "image", "photo", or "picture" in `<img>` alt props.

## State Management and Hooks

Effective state management and the use of hooks are fundamental to modern React development. This section provides guidelines on when to use specific hooks (useState, useReducer), best practices for custom hooks, and strategies for handling side effects using useEffect.

### Calling Hooks

Do not call Hooks (functions whose names start with `use`) inside loops, conditional blocks, nested functions or `try`/`catch` blocks. Call them at the top level in a function or custom Hook.

```typescript
// Bad
function foo({ cond }) {
  if (cond) {
    const theme = useContext(ThemeContext);
    ...
  }
  ...
}

function foo() {
  for (let i = 0; i < 10; i++) {
    const theme = useContext(ThemeContext);
    ...
  }
  ...
}

function foo() {
  function handleClick() {
    const theme = useContext(ThemeContext);
    ...
  }
  ...
}

class Bar extends React.Component {
  render() {
    useEffect(() => {})
    ...
  }
}

// Good
function Counter() {
  const [count, setCount] = useState(0);
  ...
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  ...
}
```

### Choosing Between useState and useReducer

#### `useState`

- Use `useState` for managing simple state that does not require complex logic or multiple state values.
- Ideal for scenarios where state updates are straightforward and do not depend on previous state values.

```typescript
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return <button onClick={increment}>Count: {count}</button>;
};
```

#### `useReducer`

- Use `useReducer` for more complex state logic, particularly when state transitions depend on the previous state or when managing multiple related state values.
- Useful for scenarios where multiple state values are related or when state logic is complex and involves multiple actions.

```typescript
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unhandled action type');
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
};
```

### Best Practices for Custom Hooks

- **Naming Conventions**: Custom hooks should start with the word "use" (e.g., `useFetch`, `useToggle`) to indicate they follow the rules of hooks and to comply with the React Hooks API.
- **Single Responsibility**: Each custom hook should encapsulate a single piece of logic or behaviour. If a hook becomes too complex, consider splitting it into smaller, more focused hooks.
- **Clean-up**: Ensure custom hooks handle clean-up properly, especially when dealing with side effects such as subscriptions, timers, or manually managed DOM elements.

```typescript
import { useState } from 'react';

function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue((prevValue) => !prevValue);
    };

    return [value, toggle];
}
```

### Handling Side Effects with `useEffect`

- **Dependency Array**: Always specify dependencies in the `useEffect` dependency array to prevent unnecessary re-renders and avoid potential infinite loops.
- **Clean-up Function**: Include a clean-up function in `useEffect` to manage side effects properly. This is especially important for effects like subscriptions, timers, or manually managed DOM elements.

```typescript
import { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup function
  }, [count]);

  return <div>{count}</div>;
};
```

## Performance Optimisations

Optimising React applications for performance is crucial to providing a smooth user experience. Utilise memoisation techniques to minimise unnecessary renders and optimise component performance.

### `useMemo`

Use `useMemo` to optimise [expensive calculations](https://react.dev/reference/react/useMemo#how-to-tell-if-a-calculation-is-expensive) or when the returned value is used frequently in rendering.

It is a hook that memoises the result of a computation, recalculating it only when its dependencies change. It is useful for expensive calculations that should not be recalculated on every render.

```typescript
import { useMemo } from 'react';

const ExpensiveComponent = ({ input }) => {
  const computedValue = useMemo(() => {
    return expensiveComputation(input);
  }, [input]);

  return <div>{computedValue}</div>;
};
```

### `useCallback`

Use `useCallback` when passing functions to child components that rely on reference equality to avoid re-renders.

It is a hook that returns a memoized version of the callback function that only changes if one of its dependencies has changed. This helps to prevent unnecessary re-creations of functions, which can improve performance when passing callbacks to child components.

```typescript
import React, { useCallback } from 'react';

const ButtonComponent = ({ input, onButtonClick }) => {
  const handleClick = useCallback(() => {
    onButtonClick(input);
  }, [input, onButtonClick]);

  return <button onClick={handleClick}>Click Me</button>;
};
```

### Guiding Principles

- **Avoid Overuse**: While memoization and state management hooks are powerful, overusing them can add unnecessary complexity without significant performance gains. Use them judiciously where performance bottlenecks are identified.
- **Identify Hotspots**: Focus on optimising components that are known to be rendering frequently or that have a significant impact on the performance of buddy.
