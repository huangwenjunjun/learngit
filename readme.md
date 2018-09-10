## 组件
React 组件使用一个名为 render() 的方法， 接收数据作为输入，输出页面中对应展示的内容。 

render一次，页面刷新一次

## 正确使用状态setState()
1 不要直接更新状态，应当使用 setState()；并且构造函数是唯一能够初始化 this.state 的地方；

2 状态更新可能是异步的

例如，此代码可能无法更新计数器：

```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

要修复它，请使用第二种形式的 setState() 来接受一个函数而不是一个对象。 该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props做为第二个参数：

```js
// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```

3 状态更新合并

当你调用 setState() 时，React 将你提供的对象合并到当前状态。
