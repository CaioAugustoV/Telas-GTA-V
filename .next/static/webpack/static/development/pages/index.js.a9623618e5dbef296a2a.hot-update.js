webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-progress */ "./node_modules/rc-progress/es/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "testeTest", function () {
      _this.setState({
        teste: _this.state.teste + 10
      });

      console.log(_this.state.teste);
    });

    _this.state = {
      teste: 10
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "App"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "main-profile"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "main-profile-position"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "profile"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "profile-name"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1105711457" + " " + "p-padrao brazucas"
      }, "BRAZUCAS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "name"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1105711457" + " " + "p-padrao player-name"
      }, "CAIO AUGUSTO "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1105711457"
      }, "|"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1105711457" + " " + "p-padrao prof"
      }, " BANDIDO"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "profile-dados"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "profile-bar"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "bar-one"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "bar-top"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "life"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "bar"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        percent: this.state.teste,
        strokeWidth: "8",
        trailWidth: "8",
        strokeLinecap: "butt",
        strokeColor: "#9af5d2",
        trailColor: "#09eb95"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "icon-life"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "TESTE"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "colete"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "bar"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        percent: this.state.teste,
        strokeWidth: "8",
        trailWidth: "8",
        strokeLinecap: "butt",
        strokeColor: "#8eeffb",
        trailColor: "#0ad4ec"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "icon-colete"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "TESTE"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "bar-botton"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "carteira"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "bank"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "money"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "bar-two"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "level"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "bar-fine-position"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "icon-fome"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "TESTE"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "nSei"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        percent: this.state.teste,
        strokeWidth: "18",
        trailWidth: "18",
        strokeLinecap: "butt",
        strokeColor: "#ffbd69",
        trailColor: "#ec890a"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "bar-fine-position"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "icon-sede"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "TESTE"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1105711457" + " " + "gas"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        percent: this.state.teste,
        strokeWidth: "18",
        trailWidth: "18",
        strokeLinecap: "butt",
        strokeColor: "#78f1ff",
        trailColor: "#0ad4ec"
      }))))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: this.testeTest,
        className: "jsx-1105711457"
      }, "FDTAFYDFAYT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1105711457",
        css: ".body.jsx-1105711457{margin:0;padding:0;font-family:'BigN' !important;background-image:url('https://nerdstore.vteximg.com.br/arquivos/gtav-1.jpg');background-size:100vw;background:blue;}.TESTE.jsx-1105711457{background-image:url(https://image.flaticon.com/icons/png/512/1246/1246321.png);width:15px;height:15px;background-size:15px;}.icon-fome.jsx-1105711457{height:1.3vw;width:1.3vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.icon-sede.jsx-1105711457{height:1.3vw;width:1.3vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.bar-fine-position.jsx-1105711457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.main-profile.jsx-1105711457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.main-profile-position.jsx-1105711457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:100vh;}.profile.jsx-1105711457{width:30vw;height:auto;padding:2vh 2vw 2vh 2vw;}.profile.jsx-1105711457 p.jsx-1105711457{margin:0;}.profile-bar.jsx-1105711457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.profile-name.jsx-1105711457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.p-padrao.jsx-1105711457{font-size:1.2rem;font-weight:400;}.brazucas.jsx-1105711457{color:white;}.player-name.jsx-1105711457{color:white;padding:0px 5px;}.prof.jsx-1105711457{color:#09eb95;padding:0px 0px 0px 5px;}.name.jsx-1105711457 span.jsx-1105711457{font-size:1.2rem;font-weight:400;color:white;}.name.jsx-1105711457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.bar-one.jsx-1105711457{width:22vw;}.life.jsx-1105711457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px 0px;}.colete.jsx-1105711457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.bar.jsx-1105711457{height:2vw;width:19vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;padding:0px 3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.icon-life.jsx-1105711457{height:2vw;width:2vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.icon-colete.jsx-1105711457{height:2vw;width:2vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.bar-botton.jsx-1105711457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px 0px;}.carteira.jsx-1105711457{height:2vw;width:7vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;}.bank.jsx-1105711457{height:2vw;width:7vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;}.money.jsx-1105711457{height:2vw;width:7vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;}.bar-two.jsx-1105711457{padding:10px 0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.level.jsx-1105711457{width:7vw;height:4vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;}.nSei.jsx-1105711457{background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;width:4.5vw;height:1.3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0px 3px;}.gas.jsx-1105711457{background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;width:4.5vw;height:1.3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0px 3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdmlkYS9Eb2N1bWVudHMvR2l0aHViL3VzaW5nLWluZmVybm8tYXBwL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThHb0IsQUFHc0IsQUFRdUUsQUFNbkUsQUFVQSxBQVVBLEFBS0EsQUFLQSxBQU1GLEFBS0YsQUFHSSxBQUtBLEFBS0ksQUFJTCxBQUdBLEFBSUUsQUFJRyxBQUtKLEFBSUYsQUFHRSxBQU1BLEFBS0YsQUFXQSxBQVVBLEFBVUUsQUFNRixBQU1BLEFBTUEsQUFNTSxBQU1QLEFBTXVCLEFBVUEsU0F0THZCLEFBdURaLENBZ0hhLENBckhDLEFBMENkLEFBY2EsQUFXRCxBQVVBLEFBZ0JBLEFBTUEsQUFNQSxDQW5GWixBQUdrQixDQTdESixBQVVBLENBdURZLEdBWFIsQUFlQSxBQThFSCxFQWhLaUIsRUFxSEcsQUFVQSxBQWdCQSxBQU1BLEFBTUEsQUFZQSxDQTdEQSxDQXhEVCxFQXBDUyxBQVVBLEdBbURuQyxFQWlHMkIsQUFVQSxHQWxIM0IsQUFlYyxLQUpkLE9BS0EsRUFqQ0EsRUFsRCtFLEVBcUhwRCxBQVVBLEFBZ0JBLEFBTUEsQUFNQSxBQVlBLENBN0RBLEdBNUZBLEFBVUEsQUFvSmIsQUFVQSxZQVRDLEFBVUEsT0F2Sk0sQUFLQSxBQUtHLEFBY0gsQUFLQSxBQXlCQSxBQU9BLEFBTUEsQUFvQ0EsRUFqQk4sQUFVQSxBQWdCZixBQU1BLEFBTUEsQUFZQSxDQTdEa0IsR0FyR0wsQUFTRSxBQVVBLEFBcUpBLEFBVUEsV0FqTEQsQUF5SlUsRUFwRFQsVUFwR1EscUJBQ3ZCLEVBUndCLGlCQWdDUSxBQUtMLEFBbUJLLEFBS0EsQUF5QmhDLEFBT2dDLEFBTUEsQUFvQ0EsS0F0SWQsRUFxSEcsQUFVQSxFQXRGTSxFQTNCTixBQVVBLEFBcUpHLEFBVUEsVUF0THhCLEdBMEd3QixFQW9EUSxrREF6Q1gsQUFVQSxJQWpIQSxBQVVBLFNBcUpJLEFBVUEsUUFuSnpCLEtBdUVxQixJQWxFTixTQVZmLEFBd0JBLEFBS0EsQUFnQ21CLEFBTW5CLEFBb0NtQixJQTVGbkIsYUFtREEsQUEwQ0EsU0F3QkEsNEJBekN5QixBQVVBLElBakhBLEFBVUEsZUFxSlAsQUFVQSxPQTVFTyxTQW1FekIsQUFVQSxnRUFsRUEsQUFVQSxJQWpIQSxBQVVBLHNCQW1GQSIsImZpbGUiOiIvVXNlcnMvZHZpZGEvRG9jdW1lbnRzL0dpdGh1Yi91c2luZy1pbmZlcm5vLWFwcC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmMtcHJvZ3Jlc3MnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXN0ZTogMTBcbiAgICB9XG4gIH1cbiAgdGVzdGVUZXN0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVzdGU6IHRoaXMuc3RhdGUudGVzdGUgKyAxMCxcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGVzdGUpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcHJvZmlsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wcm9maWxlLXBvc2l0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLW5hbWVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLXBhZHJhbyBicmF6dWNhc1wiPkJSQVpVQ0FTPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC1wYWRyYW8gcGxheWVyLW5hbWVcIj5DQUlPIEFVR1VTVE8gPC9wPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+fDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtcGFkcmFvIHByb2ZcIj4gQkFORElETzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1kYWRvc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1iYXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLW9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpZmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9e3RoaXMuc3RhdGUudGVzdGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWxXaWR0aD1cIjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJidXR0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj1cIiM5YWY1ZDJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFpbENvbG9yPVwiIzA5ZWI5NVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tbGlmZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRFU1RFXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9e3RoaXMuc3RhdGUudGVzdGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWxXaWR0aD1cIjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJidXR0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj1cIiM4ZWVmZmJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFpbENvbG9yPVwiIzBhZDRlY1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb2xldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJURVNURVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItYm90dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0ZWlyYVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFua1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9uZXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLXR3b1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWZpbmUtcG9zaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tZm9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJURVNURVwiLz4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuU2VpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9e3RoaXMuc3RhdGUudGVzdGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsV2lkdGg9XCIxOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cImJ1dHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPVwiI2ZmYmQ2OVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsQ29sb3I9XCIjZWM4OTBhXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci1maW5lLXBvc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXNlZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVEVTVEVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50PXt0aGlzLnN0YXRlLnRlc3RlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsV2lkdGg9XCIxOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJidXR0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I9XCIjNzhmMWZmXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsQ29sb3I9XCIjMGFkNGVjXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgb25DbGljaz17dGhpcy50ZXN0ZVRlc3R9PkZEVEFGWURGQVlUPC9hPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJvZHl7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCaWdOJyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL25lcmRzdG9yZS52dGV4aW1nLmNvbS5ici9hcnF1aXZvcy9ndGF2LTEuanBnJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLlRFU1RFe1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3BuZy81MTIvMTI0Ni8xMjQ2MzIxLnBuZyk7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmljb24tZm9tZXtcbiAgICAgICAgICAgIGhlaWdodDogMS4zdnc7XG4gICAgICAgICAgICB3aWR0aDogMS4zdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2OSwgNjQsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNWQ2ZDYzO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pY29uLXNlZGV7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuM3Z3O1xuICAgICAgICAgICAgd2lkdGg6IDEuM3Z3O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2MCwgNjksIDY0LCAwLjgpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzVkNmQ2MztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFyLWZpbmUtcG9zaXRpb257XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4tcHJvZmlsZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4tcHJvZmlsZS1wb3NpdGlvbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9maWxle1xuICAgICAgICAgICAgd2lkdGg6IDMwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAydmggMnZ3IDJ2aCAydnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9maWxlIHB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9maWxlLWJhcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZmlsZS1uYW1le1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wLXBhZHJhb3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJyYXp1Y2Fze1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGxheWVyLW5hbWV7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZntcbiAgICAgICAgICAgIGNvbG9yOiAjMDllYjk1O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZSBzcGFue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFyLW9uZXtcbiAgICAgICAgICAgIHdpZHRoOiAyMnZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlmZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2xldGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhcntcbiAgICAgICAgICAgIGhlaWdodDogMnZ3O1xuICAgICAgICAgICAgd2lkdGg6IDE5dnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2OSwgNjQsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNWQ2ZDYzO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDNweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaWNvbi1saWZle1xuICAgICAgICAgICAgaGVpZ2h0OiAydnc7XG4gICAgICAgICAgICB3aWR0aDogMnZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2MCwgNjksIDY0LCAwLjgpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzVkNmQ2MztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaWNvbi1jb2xldGV7XG4gICAgICAgICAgICBoZWlnaHQ6IDJ2dztcbiAgICAgICAgICAgIHdpZHRoOiAydnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2OSwgNjQsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNWQ2ZDYzO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYXItYm90dG9ue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcnRlaXJhe1xuICAgICAgICAgICAgaGVpZ2h0OiAydnc7XG4gICAgICAgICAgICB3aWR0aDogN3Z3O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2MCwgNjksIDY0LCAwLjgpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzVkNmQ2MztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbmt7XG4gICAgICAgICAgICBoZWlnaHQ6IDJ2dztcbiAgICAgICAgICAgIHdpZHRoOiA3dnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2OSwgNjQsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNWQ2ZDYzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9uZXl7XG4gICAgICAgICAgICBoZWlnaHQ6IDJ2dztcbiAgICAgICAgICAgIHdpZHRoOiA3dnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2OSwgNjQsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNWQ2ZDYzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFyLXR3b3tcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZXZlbHtcbiAgICAgICAgICAgIHdpZHRoOiA3dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDR2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjAsIDY5LCA2NCwgMC44KTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM1ZDZkNjM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uU2Vpe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2MCwgNjksIDY0LCAwLjgpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzVkNmQ2MztcbiAgICAgICAgICAgIHdpZHRoOiA0LjV2dztcbiAgICAgICAgICAgIGhlaWdodDogMS4zdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdhc3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjAsIDY5LCA2NCwgMC44KTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM1ZDZkNjM7XG4gICAgICAgICAgICB3aWR0aDogNC41dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuM3Z3O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzcHg7XG4gICAgICAgICAgfSAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=/Users/dvida/Documents/Github/using-inferno-app/pages/index.js */"
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.a9623618e5dbef296a2a.hot-update.js.map