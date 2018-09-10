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

## 数据自顶向下流动

父组件或子组件都不能知道某个组件是有状态还是无状态，并且它们不应该关心某组件是被定义为一个函数还是一个类。组件之间是真正隔离的

# 事件处理

* React事件绑定属性的命名采用驼峰式写法，而不是小写。
* 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)。

```js
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

* 在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为。你必须明确的使用 preventDefault。

### 注：你必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。
* this.handleClick = this.handleClick.bind(this);//在构造函数中绑定
* onClick={(e) => this.handleClick(e)}；//在回调函数中使用箭头函数，会影响性能

## 向事件处理程序传递参数

以下两种方式都可以向事件处理程序传递参数：（事件对象 e 要排在所传递参数的后面）

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

## 条件渲染
* 元素变量并使用 if 语句
* 与运行算符 &&

因为在 JavaScript 中，true && expression 总是返回 expression，而 false && expression 总是返回 false。

* 三目运算符（condition ? true : false）

* 阻止组件渲染（让 render 方法返回 null 而不是它的渲染结果即可实现。）




