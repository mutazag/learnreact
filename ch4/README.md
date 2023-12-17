# JSX files and compile to js 

JSX is not valid js files 

Bebel is a tool that can compile JSX files to js files

To install babel 

```bash
npm install --save-dev @babel/core @babel/cli 
```

Presets in bebel are a set of plugins, plugins are used to transform the code, presets are a set of plugins that are used to transform the code in a specific way.

for example, @babel/preset-env is a set of plugins that are used to transform the code to be compatible with the latest version of js.


@babel/preset-react is a set of plugins that are used to transform the code to be compatible with react.



To install babel presets 

```bash
npm install --save-dev @babel/preset-env @babel/preset-react
```

This will create a .babelrc file 

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

to install plugins 
    
```bash
npm install --save-dev @babel/plugin-proposal-class-properties
```

This will update the .babelrc file 

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

## simple example 

```js
const newArray = [1, 2, 3].map((item) => item * 2);
```

When running the npx babel compile command `npx babel test.js` the output will be 

```js
const newArray = [44, 55, 66].map(function (num) {
  return num * 2;
});
```


## JSX example 

the below simepl JSX example: 

```jsx
const element = <h1>Hello, world!</h1>;
```

When running the npx babel compile command `npx babel test.jsx` the output will be 
    
```js
const element = /*#__PURE__*/ React.createElement("h1", null, "Hello, world!");
```
## lets create a custom element in JSX

```jsx
const button = <MaterialButton color="red"
    onClick={() => console.log('clicked')}>
    Click me
</MaterialButton>
```

When running the npx babel compile command `npx babel test.jsx` the output will be 

```js
const button = /*#__PURE__*/ React.createElement(MaterialButton, {
  color: "red",
  onClick: () => console.log('clicked')
}, "Click me");
```

## lets create a custom element in JSX with children

```jsx
const button = <MaterialButton color="red"
    onClick={() => console.log('clicked')}>
    <span>Click me</span>
</MaterialButton>
```

When running the npx babel compile command `npx babel test.jsx --out-file test.js` the output will be 

```js
const button = /*#__PURE__*/ React.createElement(MaterialButton, {
  color: "red",
  onClick: () => console.log('clicked')
}, /*#__PURE__*/ React.createElement("span", null, "Click me"));
```
