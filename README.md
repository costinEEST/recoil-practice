- The [boilerplate](https://github.com/jacques-blom/recoil-course)
- The [teacher](teacher.md)

- Changes:

  - upgraded the dependencies to their latest version
  - fixed the Typescript warnings
  - patched [`<DraggableCore> not mounted on DragStart`](https://github.com/react-grid-layout/react-draggable/pull/671/files) by replacing the lines bellow from `react-draggable/build/cjs/DraggableCore.js` file

  ```js
  var _this$props, _this$props2, _this$props2$nodeRef

  return (_this$props = this.props) !== null && _this$props !== void 0 && _this$props.nodeRef
    ? (_this$props2 = this.props) === null || _this$props2 === void 0
      ? void 0
      : (_this$props2$nodeRef = _this$props2.nodeRef) === null || _this$props2$nodeRef === void 0
      ? void 0
      : _this$props2$nodeRef.current
    : _reactDom.default.findDOMNode(this)
  ```

  with

  ```js
  var _this$props, _this$props$nodeRef, _this$props2, _this$props2$nodeRef

  return (_this$props = this.props) !== null &&
    _this$props !== void 0 &&
    (_this$props$nodeRef = _this$props.nodeRef) !== null &&
    _this$props$nodeRef !== void 0 &&
    _this$props$nodeRef.current
    ? (_this$props2 = this.props) === null || _this$props2 === void 0
      ? void 0
      : (_this$props2$nodeRef = _this$props2.nodeRef) === null || _this$props2$nodeRef === void 0
      ? void 0
      : _this$props2$nodeRef.current
    : _reactDom.default.findDOMNode(this)
  ```
