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
        className: "jsx-3099733026" + " " + "App"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "main-profile"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "main-profile-position"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "profile"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "profile-name"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3099733026" + " " + "p-padrao brazucas"
      }, "BRAZUCAS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "name"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3099733026" + " " + "p-padrao player-name"
      }, "CAIO AUGUSTO "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3099733026"
      }, "|"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3099733026" + " " + "p-padrao prof"
      }, " BANDIDO"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "profile-dados"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "profile-bar"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "bar-one"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "bar-top"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "life"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "bar"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        percent: this.state.teste,
        strokeWidth: "8",
        trailWidth: "8",
        strokeLinecap: "butt",
        strokeColor: "#9af5d2",
        trailColor: "#09eb95"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "icon-life"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "TESTE"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "colete"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "bar"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        percent: this.state.teste,
        strokeWidth: "8",
        trailWidth: "8",
        strokeLinecap: "butt",
        strokeColor: "#8eeffb",
        trailColor: "#0ad4ec"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "icon-colete"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "TESTE"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "bar-botton"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "carteira"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "bank"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "money"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "bar-two"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "level"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "bar-fine-position"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "icon-fome"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "TESTE"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "nSei"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        percent: this.state.teste,
        strokeWidth: "18",
        trailWidth: "18",
        strokeLinecap: "butt",
        strokeColor: "#ffbd69",
        trailColor: "#ec890a"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "bar-fine-position"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "icon-sede"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "TESTE"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3099733026" + " " + "gas"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        percent: this.state.teste,
        strokeWidth: "18",
        trailWidth: "18",
        strokeLinecap: "butt",
        strokeColor: "#78f1ff",
        trailColor: "#0ad4ec"
      }))))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: this.testeTest,
        className: "jsx-3099733026"
      }, "FDTAFYDFAYT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3099733026",
        css: "#next.jsx-3099733026{margin:0;padding:0;font-family:'BigN' !important;background:blue;}.TESTE.jsx-3099733026{background-image:url(https://image.flaticon.com/icons/png/512/1246/1246321.png);width:15px;height:15px;background-size:15px;}.icon-fome.jsx-3099733026{height:1.3vw;width:1.3vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.icon-sede.jsx-3099733026{height:1.3vw;width:1.3vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.bar-fine-position.jsx-3099733026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.main-profile.jsx-3099733026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.main-profile-position.jsx-3099733026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:100vh;}.profile.jsx-3099733026{width:30vw;height:auto;padding:2vh 2vw 2vh 2vw;}.profile.jsx-3099733026 p.jsx-3099733026{margin:0;}.profile-bar.jsx-3099733026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.profile-name.jsx-3099733026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.p-padrao.jsx-3099733026{font-size:1.2rem;font-weight:400;}.brazucas.jsx-3099733026{color:white;}.player-name.jsx-3099733026{color:white;padding:0px 5px;}.prof.jsx-3099733026{color:#09eb95;padding:0px 0px 0px 5px;}.name.jsx-3099733026 span.jsx-3099733026{font-size:1.2rem;font-weight:400;color:white;}.name.jsx-3099733026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.bar-one.jsx-3099733026{width:22vw;}.life.jsx-3099733026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px 0px;}.colete.jsx-3099733026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.bar.jsx-3099733026{height:2vw;width:19vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;padding:0px 3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.icon-life.jsx-3099733026{height:2vw;width:2vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.icon-colete.jsx-3099733026{height:2vw;width:2vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.bar-botton.jsx-3099733026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px 0px;}.carteira.jsx-3099733026{height:2vw;width:7vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;}.bank.jsx-3099733026{height:2vw;width:7vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;}.money.jsx-3099733026{height:2vw;width:7vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;}.bar-two.jsx-3099733026{padding:10px 0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.level.jsx-3099733026{width:7vw;height:4vw;background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;}.nSei.jsx-3099733026{background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;width:4.5vw;height:1.3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0px 3px;}.gas.jsx-3099733026{background:rgba(60,69,64,0.8);border:solid 1px #5d6d63;width:4.5vw;height:1.3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0px 3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdmlkYS9Eb2N1bWVudHMvR2l0aHViL3VzaW5nLWluZmVybm8tYXBwL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThHb0IsQUFHc0IsQUFNdUUsQUFNbkUsQUFVQSxBQVVBLEFBS0EsQUFLQSxBQU1GLEFBS0YsQUFHSSxBQUtBLEFBS0ksQUFJTCxBQUdBLEFBSUUsQUFJRyxBQUtKLEFBSUYsQUFHRSxBQU1BLEFBS0YsQUFXQSxBQVVBLEFBVUUsQUFNRixBQU1BLEFBTUEsQUFNTSxBQU1QLEFBTXVCLEFBVUEsU0FwTHZCLEFBcURaLENBZ0hhLENBckhDLEFBMENkLEFBY2EsQUFXRCxBQVVBLEFBZ0JBLEFBTUEsQUFNQSxDQW5GWixBQUdrQixDQTdESixBQVVBLENBdURZLEdBWFIsQUFlQSxBQThFSCxFQTlKaUIsRUFtSEcsQUFVQSxBQWdCQSxBQU1BLEFBTUEsQUFZQSxDQTdEQSxDQXhEVCxFQXBDUyxBQVVBLEdBbURuQyxFQWlHMkIsQUFVQSxHQWxIM0IsQUFlYyxLQUpkLE9BS0EsRUFqQ0EsRUFoRGtCLEVBbUhTLEFBVUEsQUFnQkEsQUFNQSxBQU1BLEFBWUEsQ0E3REEsR0E1RkEsQUFVQSxBQW9KYixBQVVBLFVBbkxkLEVBMEtlLEFBVUEsT0F2Sk0sQUFLQSxBQUtHLEFBY0gsQUFLQSxBQXlCQSxBQU9BLEFBTUEsQUFvQ0EsRUFqQk4sQUFVQSxBQWdCZixBQU1BLEFBTUEsQUFZQSxDQTdEa0IsR0FyR0wsQUFTRSxBQVVBLEFBcUpBLEFBVUEsV0FqTEQsQUF5SlUsRUFwRFQsVUFwR1EscUJBQ3ZCLG1CQXdCZ0MsQUFLTCxBQW1CSyxBQUtBLEFBeUJoQyxBQU9nQyxBQU1BLEFBb0NBLE9BakJYLEFBVUEsRUF0Rk0sRUEzQk4sQUFVQSxBQXFKRyxBQVVBLGFBNUVBLEVBb0RRLGtEQXpDWCxBQVVBLElBakhBLEFBVUEsU0FxSkksQUFVQSxRQW5KekIsS0F1RXFCLElBbEVOLFNBVmYsQUF3QkEsQUFLQSxBQWdDbUIsQUFNbkIsQUFvQ21CLElBNUZuQixhQW1EQSxBQTBDQSxTQXdCQSw0QkF6Q3lCLEFBVUEsSUFqSEEsQUFVQSxlQXFKUCxBQVVBLE9BNUVPLFNBbUV6QixBQVVBLGdFQWxFQSxBQVVBLElBakhBLEFBVUEsc0JBbUZBIiwiZmlsZSI6Ii9Vc2Vycy9kdmlkYS9Eb2N1bWVudHMvR2l0aHViL3VzaW5nLWluZmVybm8tYXBwL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyYy1wcm9ncmVzcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRlc3RlOiAxMFxuICAgIH1cbiAgfVxuICB0ZXN0ZVRlc3QgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0ZXN0ZTogdGhpcy5zdGF0ZS50ZXN0ZSArIDEwLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50ZXN0ZSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wcm9maWxlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXByb2ZpbGUtcG9zaXRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtcGFkcmFvIGJyYXp1Y2FzXCI+QlJBWlVDQVM8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLXBhZHJhbyBwbGF5ZXItbmFtZVwiPkNBSU8gQVVHVVNUTyA8L3A+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj58PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC1wYWRyYW8gcHJvZlwiPiBCQU5ESURPPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWRhZG9zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJhclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItb25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlmZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudD17dGhpcy5zdGF0ZS50ZXN0ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFpbFdpZHRoPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cImJ1dHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPVwiIzlhZjVkMlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsQ29sb3I9XCIjMDllYjk1XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1saWZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVEVTVEVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudD17dGhpcy5zdGF0ZS50ZXN0ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFpbFdpZHRoPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cImJ1dHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPVwiIzhlZWZmYlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsQ29sb3I9XCIjMGFkNGVjXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRFU1RFXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci1ib3R0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRlaXJhXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb25leVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItdHdvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItZmluZS1wb3NpdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1mb21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRFU1RFXCIvPiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5TZWlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudD17dGhpcy5zdGF0ZS50ZXN0ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWxXaWR0aD1cIjE4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwiYnV0dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I9XCIjZmZiZDY5XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWxDb2xvcj1cIiNlYzg5MGFcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWZpbmUtcG9zaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tc2VkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJURVNURVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9e3RoaXMuc3RhdGUudGVzdGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjE4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWxXaWR0aD1cIjE4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cImJ1dHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj1cIiM3OGYxZmZcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWxDb2xvcj1cIiMwYWQ0ZWNcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnRlc3RlVGVzdH0+RkRUQUZZREZBWVQ8L2E+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjbmV4dHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0JpZ04nICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuVEVTVEV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvcG5nLzUxMi8xMjQ2LzEyNDYzMjEucG5nKTtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaWNvbi1mb21le1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjN2dztcbiAgICAgICAgICAgIHdpZHRoOiAxLjN2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjAsIDY5LCA2NCwgMC44KTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM1ZDZkNjM7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmljb24tc2VkZXtcbiAgICAgICAgICAgIGhlaWdodDogMS4zdnc7XG4gICAgICAgICAgICB3aWR0aDogMS4zdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2OSwgNjQsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNWQ2ZDYzO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYXItZmluZS1wb3NpdGlvbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbi1wcm9maWxle1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbi1wcm9maWxlLXBvc2l0aW9ue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2ZpbGV7XG4gICAgICAgICAgICB3aWR0aDogMzB2dztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDJ2aCAydncgMnZoIDJ2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2ZpbGUgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2ZpbGUtYmFye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9maWxlLW5hbWV7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnAtcGFkcmFve1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnJhenVjYXN7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wbGF5ZXItbmFtZXtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9me1xuICAgICAgICAgICAgY29sb3I6ICMwOWViOTU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lIHNwYW57XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYXItb25le1xuICAgICAgICAgICAgd2lkdGg6IDIydnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saWZle1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbGV0ZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFye1xuICAgICAgICAgICAgaGVpZ2h0OiAydnc7XG4gICAgICAgICAgICB3aWR0aDogMTl2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjAsIDY5LCA2NCwgMC44KTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM1ZDZkNjM7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggM3B4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pY29uLWxpZmV7XG4gICAgICAgICAgICBoZWlnaHQ6IDJ2dztcbiAgICAgICAgICAgIHdpZHRoOiAydnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2OSwgNjQsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNWQ2ZDYzO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pY29uLWNvbGV0ZXtcbiAgICAgICAgICAgIGhlaWdodDogMnZ3O1xuICAgICAgICAgICAgd2lkdGg6IDJ2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjAsIDY5LCA2NCwgMC44KTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM1ZDZkNjM7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhci1ib3R0b257XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FydGVpcmF7XG4gICAgICAgICAgICBoZWlnaHQ6IDJ2dztcbiAgICAgICAgICAgIHdpZHRoOiA3dnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2OSwgNjQsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNWQ2ZDYzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFua3tcbiAgICAgICAgICAgIGhlaWdodDogMnZ3O1xuICAgICAgICAgICAgd2lkdGg6IDd2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjAsIDY5LCA2NCwgMC44KTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM1ZDZkNjM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb25leXtcbiAgICAgICAgICAgIGhlaWdodDogMnZ3O1xuICAgICAgICAgICAgd2lkdGg6IDd2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjAsIDY5LCA2NCwgMC44KTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM1ZDZkNjM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYXItdHdve1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxldmVse1xuICAgICAgICAgICAgd2lkdGg6IDd2dztcbiAgICAgICAgICAgIGhlaWdodDogNHZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2MCwgNjksIDY0LCAwLjgpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzVkNmQ2MztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5TZWl7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2OSwgNjQsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNWQ2ZDYzO1xuICAgICAgICAgICAgd2lkdGg6IDQuNXZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjN2dztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZ2Fze1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2MCwgNjksIDY0LCAwLjgpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzVkNmQ2MztcbiAgICAgICAgICAgIHdpZHRoOiA0LjV2dztcbiAgICAgICAgICAgIGhlaWdodDogMS4zdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDNweDtcbiAgICAgICAgICB9ICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=/Users/dvida/Documents/Github/using-inferno-app/pages/index.js */"
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
//# sourceMappingURL=index.js.ffccd19d1efe1ecbdf18.hot-update.js.map