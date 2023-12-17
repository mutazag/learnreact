"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function start() {
  var Bookmark = /*#__PURE__*/function (_React$Component) {
    _inherits(Bookmark, _React$Component);
    var _super = _createSuper(Bookmark);
    function Bookmark(props) {
      var _this;
      _classCallCheck(this, Bookmark);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "title", _this.props.title);
      _defineProperty(_assertThisInitialized(_this), "titleStyle", {
        color: _this.props.color,
        visibility: _this.props.visibility
      });
      _defineProperty(_assertThisInitialized(_this), "originalColor", _this.props.color);
      _defineProperty(_assertThisInitialized(_this), "counter", _this.props.counter);
      console.log("bookmark constructor");
      console.log(props);
      return _this;
    }
    _createClass(Bookmark, [{
      key: "render",
      value: function render() {
        var _this2 = this;
        return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", {
          style: this.titleStyle
        }, " ", this.title || this.props.href, " (", this.counter, ")"), /*#__PURE__*/React.createElement("a", {
          href: this.props.href
        }, " ", this.props.description || this.title || "N/A"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            _this2.title = _this2.title + "!";
            _this2.counter++;
            console.log("button clicked: ".concat(_this2.title));
            console.log("counter: ".concat(_this2.counter));
            _this2.setState({});
          }
        }, "Click Me!"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            if (_this2.titleStyle.color == _this2.originalColor) {
              _this2.titleStyle.color = "blue";
            } else {
              _this2.titleStyle.color = _this2.originalColor;
            }
            console.log("color: ".concat(_this2.titleStyle.color));
            _this2.setState({});
          }
        }, "Color "), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            // set visbility of h2 to hidden
            if (_this2.titleStyle.visibility == "hidden") {
              _this2.titleStyle.visibility = "visible";
            } else {
              _this2.titleStyle.visibility = "hidden";
            }
            console.log("visibility: ".concat(_this2.titleStyle.visibility));
            _this2.setState({});
          }
        }, "Hide "));
      }
    }]);
    return Bookmark;
  }(React.Component);
  _defineProperty(Bookmark, "defaultProps", {
    counter: 1,
    description: 'unknown description',
    title: 'no title',
    color: 'red',
    visibility: 'visible'
  });
  _defineProperty(Bookmark, "propTypes", {
    counter: PropTypes.number,
    description: PropTypes.string,
    title: PropTypes.string
  });
  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Bookmarks"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Bookmark, {
    title: "Google",
    href: "http://google.com",
    description: "Search Engine"
  }), /*#__PURE__*/React.createElement(Bookmark, {
    title: "Facebook",
    href: "http://facebook.com",
    description: "Social Media"
  }), /*#__PURE__*/React.createElement(Bookmark, {
    color: "grey",
    href: "http://twitter.com",
    counter: 12313
  }), /*#__PURE__*/React.createElement(Bookmark, {
    title: "mutazag",
    href: "https://www.mutazag.com"
  }), /*#__PURE__*/React.createElement(Bookmark, {
    color: "green",
    href: "https://www.microsoft.com",
    counter: 3,
    visibility: "hidden"
  }))), document.getElementById("mainContainer"));
}
