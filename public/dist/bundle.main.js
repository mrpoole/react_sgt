!function(e){function t(t){for(var a,i,l=t[0],c=t[1],s=t[2],m=0,f=[];m<l.length;m++)i=l[m],r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([128,1]),n()}({125:function(e,t,n){var a=n(322);"string"==typeof a&&(a=[[e.i,a,""]]);n(87)(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},128:function(e,t,n){n(129),e.exports=n(323)},302:function(e,t,n){(e.exports=n(86)(!1)).push([e.i,"html,\nbody {\n  margin: 0 auto;\n  height: 100vh;\n  width: 100%;\n  max-width: 100vw;\n  overflow-x: hidden;\n  overflow: hidden;\n  font-family: 'Open Sans', sans-serif;\n  font-size: .9rem;\n  color: #333; }\n  html .rotate-prompt,\n  body .rotate-prompt {\n    display: none; }\n  html .rotate-text,\n  body .rotate-text {\n    display: none; }\n  html .rotate-image,\n  body .rotate-image {\n    display: none; }\n  @media screen and (max-width: 377px) {\n    html .rotate-prompt,\n    body .rotate-prompt {\n      position: absolute;\n      top: 0;\n      z-index: 1;\n      height: 100vh;\n      width: 100%;\n      background-color: white;\n      overflow: hidden;\n      display: inline-block; }\n    html .rotate-text,\n    body .rotate-text {\n      font-size: 1.3rem;\n      margin-top: 4rem;\n      padding: 0 4rem;\n      display: inline-block; }\n    html .rotate-image,\n    body .rotate-image {\n      margin-top: 2rem;\n      height: 20rem;\n      display: inline-block; } }\n  @media screen and (max-width: 1050px) {\n    html,\n    body {\n      overflow: auto; } }\n  html ::-webkit-scrollbar,\n  body ::-webkit-scrollbar {\n    width: 0px;\n    background: transparent; }\n  html h1,\n  html h2,\n  html h3,\n  html h4,\n  html h5,\n  body h1,\n  body h2,\n  body h3,\n  body h4,\n  body h5 {\n    font-family: 'Montserrat', sans-serif; }\n  html input,\n  html label,\n  html form,\n  html .input-field,\n  body input,\n  body label,\n  body form,\n  body .input-field {\n    font-family: 'Open Sans', sans-serif;\n    font-size: .4rem; }\n  html .error-text,\n  body .error-text {\n    font-weight: bold;\n    color: red; }\n  html .table-container,\n  body .table-container {\n    margin: 0 2%; }\n    @media screen and (max-width: 600px) {\n      html .table-container,\n      body .table-container {\n        overflow-x: hidden; } }\n  html .btn,\n  body .btn {\n    font-family: 'Montserrat', sans-serif;\n    margin: 0 5px; }\n  html .add-button,\n  body .add-button {\n    margin-bottom: 1rem; }\n  html .next-buttons,\n  body .next-buttons {\n    margin-top: 10px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center; }\n  @media screen and (max-width: 600px) {\n    html .employee-container,\n    body .employee-container {\n      font-size: .9rem; } }\n  @media screen and (max-width: 450px) {\n    html .employee-container,\n    body .employee-container {\n      font-size: .7rem; } }\n  html .header-title,\n  body .header-title {\n    font-size: 3.8rem;\n    font-weight: bold;\n    margin-bottom: 2rem; }\n    @media screen and (max-width: 600px) {\n      html .header-title,\n      body .header-title {\n        font-size: 2rem; } }\n  @media screen and (max-width: 993px) {\n    html .add-container,\n    body .add-container {\n      margin-top: 3rem; } }\n",""])},322:function(e,t,n){(e.exports=n(86)(!1)).push([e.i,".modal-container {\n  height: 100vh;\n  font-size: .8rem;\n  box-sizing: border-box; }\n  .modal-container .modal {\n    max-height: 100%;\n    overflow: visible; }\n  .modal-container .update-form {\n    position: relative;\n    font-size: .8rem; }\n    .modal-container .update-form .error {\n      color: red; }\n  .modal-container .button-container {\n    margin-bottom: 10px; }\n    .modal-container .button-container button {\n      margin: 0 10px; }\n  .modal-container .loading-icon {\n    display: none; }\n",""])},323:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(126),i=n.n(o),l=(n(119),n(301),n(59),function(e){return r.a.createElement("tr",{className:"employee-list-row"},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.position),r.a.createElement("td",null,e.office),r.a.createElement("td",null,e.extn),r.a.createElement("td",null,e.start),r.a.createElement("td",null,e.salary.toLocaleString("en-US",{style:"currency",currency:"USD"})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.delete(e.id)},className:"row-btn btn red darken-2"},r.a.createElement("i",{className:"material-icons"},"delete")),r.a.createElement("button",{onClick:function(){return e.get(e.id)},className:"row-btn light-green darken-1 btn modal-trigger","data-target":"modal"},r.a.createElement("i",{className:"material-icons"},"edit"))))}),c=n(18),s=n.n(c);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,p(t).apply(this,arguments))}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.Component),n=t,(o=[{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.next,o=t.previous,i=t.buttonState,c=t.nextButtonState,s=t.low,u=t.high,f=t.getAll,p=t.getLast,h=n.map(function(t){return r.a.createElement(l,m({key:t.id},t,{delete:e.props.delete,get:e.props.get}))});return r.a.createElement("div",{className:"col s14 m10 l9 offset-m1 employee-container"},r.a.createElement("div",{className:"employee-table-container"},r.a.createElement("table",{className:"highlight"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Position"),r.a.createElement("th",null,"Office"),r.a.createElement("th",null,"Extn."),r.a.createElement("th",null,"Start Date"),r.a.createElement("th",null,"Salary"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,h))),r.a.createElement("div",{className:"next-buttons center"},r.a.createElement("button",{onClick:f,className:"btn grey"},r.a.createElement("i",{className:"material-icons center"},"fast_rewind")),r.a.createElement("button",{onClick:o,className:"btn grey darken-2 ".concat(i)},r.a.createElement("i",{className:"material-icons center"},"navigate_before")),r.a.createElement("div",{className:"range"},s," - ",u),r.a.createElement("button",{onClick:a,className:"btn grey darken-2 ".concat(c)},r.a.createElement("i",{className:"material-icons center"},"navigate_next")),r.a.createElement("button",{onClick:p,className:"btn grey"},r.a.createElement("i",{className:"material-icons center"},"fast_forward"))))}}])&&f(n.prototype,o),t}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=function(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=v(t)).call.apply(e,[this].concat(r)))).state={name:"",position:"",office:"",extn:"",start:"",salary:""},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(b({},a,r))},n.handleSubmitBtn=function(e){e.preventDefault(),n.props.add(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){b(e,t,n[t])})}return e}({},n.state)),n.setState({name:"",position:"",office:"",extn:"",start:"",salary:""})},n.handleCancel=function(){n.setState({name:"",position:"",office:"",extn:"",start:"",salary:""})},n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,a.Component),n=t,(o=[{key:"render",value:function(){var e=this.state,t=e.name,n=e.position,a=e.office,o=e.extn,i=e.start,l=e.salary;return this.props.error,r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s12 m12 l3 add-container"},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"name",autoComplete:"off",id:"name",type:"text",value:t,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"name"},r.a.createElement("i",{className:"material-icons left"},"person"),"Employee Name")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"position",autoComplete:"off",id:"position",type:"text",value:n,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"position"},r.a.createElement("i",{className:"material-icons left"},"assignment"),"Position")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"office",autoComplete:"off",id:"office",type:"text",value:a,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"office"},r.a.createElement("i",{className:"material-icons left"},"business"),"Office")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"extn",autoComplete:"off",id:"extn",type:"text",value:o,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"extn"},r.a.createElement("i",{className:"material-icons left"},"call"),"Extn")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"start",autoComplete:"off",id:"start",type:"text",value:i,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"start"},r.a.createElement("i",{className:"material-icons left"},"date_range"),"Start Date")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"salary",autoComplete:"off",id:"salary",type:"text",value:l,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"salary"},r.a.createElement("i",{className:"material-icons left"},"attach_money"),"Salary")),r.a.createElement("button",{onClick:this.handleSubmitBtn,className:"btn light-blue darken-3 col s5 offset-s1 add-button"},"Add",r.a.createElement("i",{className:"material-icons right"},"send")),r.a.createElement("button",{onClick:this.handleCancel,className:"btn red darken-2 col s5 add-button"},"Cancel",r.a.createElement("i",{className:"material-icons right"},"cancel"))))}}])&&g(n.prototype,o),t}(),w=n(127),O=n.n(w);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(125);var j=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,C(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(k({},a,r))},n.handleSubmit=function(e){e.preventDefault(),n.props.edit(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){k(e,t,n[t])})}return e}({},n.state)),n.setState({id:n.state.id,name:"",position:"",office:"",extn:"",start:"",salary:""})},n.state={name:"",position:"",office:"",extn:"",start:"",salary:""},n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,a.Component),n=t,(o=[{key:"checkIfEmployeeExists",value:function(e){return!!e}},{key:"render",value:function(){var e=this.props.employee.employee;if(this.checkIfEmployeeExists(e)){var t=this.state,n=t.name,a=t.position,o=t.office,i=t.extn,l=t.start,c=t.salary;return this.state.id=e.id,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s12 update-form"},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"name",autoComplete:"off",id:"name",type:"text",placeholder:e.name,value:n||"",onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"name",className:"active"},"Employee Name")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"position",autoComplete:"off",id:"position",type:"text",placeholder:e.position,value:a||"",onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"position",className:"active"},"Position")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"office",autoComplete:"off",id:"office",type:"text",placeholder:e.office,value:o,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"office",className:"active"},"Office")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"extn",autoComplete:"off",id:"extn",type:"text",placeholder:e.extn,value:i,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"extn",className:"active"},"Extn")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"start",autoComplete:"off",id:"start",type:"text",placeholder:e.start_date,value:l,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"start",className:"active"},"Start Date")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{name:"salary",autoComplete:"off",id:"salary",type:"text",placeholder:e.salary,value:c,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"salary",className:"active"},"Salary")),r.a.createElement("div",{className:"right button-container"},r.a.createElement("button",{className:"btn green darken-1 modal-close"},"Update Employee",r.a.createElement("i",{className:"material-icons right"},"send")),r.a.createElement("a",{className:"btn red darken-2 modal-close"},"Cancel",r.a.createElement("i",{className:"material-icons right"},"cancel"))))}return r.a.createElement("h1",{className:"center loading-icon"},"LOADING")}}])&&N(n.prototype,o),t}();function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(e){var n;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,T(t).call(this,e))).state={employee:n.props.employee},n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,a.Component),n=t,(o=[{key:"componentDidMount",value:function(){O.a.Modal.init(this.Modal)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{ref:function(t){e.Modal=t},id:"modal",className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h6",{className:"right"},"Please enter the new details for this employee"),r.a.createElement(j,{employee:this.props,edit:this.props.edit}))))}}])&&I(n.prototype,o),t}();function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t,n,a,r,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(a,r)}function M(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){F(o,a,r,i,l,"next",e)}function l(e){F(o,a,r,i,l,"throw",e)}i(void 0)})}}function z(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=function(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=A(t)).call.apply(e,[this].concat(r)))).state={employees:[],error:"",employeeToEdit:null,offset:5,nextClicked:!1,backButton:"disabled",nextButton:"enabled",low:1,high:null,errorText:!1},n.getTotalNumberOfEmployees=M(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/get-employee-total.php").then(function(e){n.setState({high:e.data["COUNT(*)"]})});case 2:case"end":return e.stop()}},e,this)})),n.listNextTen=M(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/list-next-ten.php",{params:{offset:"".concat(n.state.offset)}}).then(function(e){n.setState({backButton:"enabled",nextClicked:!0,employees:e.data.employee_list,offset:n.state.offset+=5,low:n.state.low+=5}),n.checkIfButtonEnabled()});case 2:case"end":return e.stop()}},e,this)})),n.listPreviousTen=M(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.offset-10,e.next=3,s.a.get("/api/list-next-ten.php",{params:{offset:"".concat(t)}}).then(function(e){n.checkIfButtonEnabled(),n.setState({nextClicked:!0,employees:e.data.employee_list,offset:n.state.offset-=5,low:n.state.low-=5,nextButton:"enabled"}),n.checkIfButtonEnabled()});case 3:case"end":return e.stop()}},e,this)})),n.editEmployee=function(){var e=M(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/edit-employee.php",{params:{id:"".concat(t.id),name:"".concat(t.name),position:"".concat(t.position),office:"".concat(t.office),extn:"".concat(t.extn),start:"".concat(t.start),salary:"".concat(t.salary)}}).then(function(e){console.log(e)});case 2:n.getEmployeeData();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.getEmployee=function(){var e=M(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/get-employee.php",{params:{id:"".concat(t)}}).then(function(e){n.setState({employeeToEdit:e.data})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.addEmployee=function(){var e=M(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/add-employee-to-db.php",{params:{name:"".concat(t.name),position:"".concat(t.position),office:"".concat(t.office),extn:"".concat(t.extn),start:"".concat(t.start),salary:"".concat(t.salary)}}).then(function(e){console.log(e),e.data.error&&n.setState({errorText:!0})});case 2:n.getEmployeeData();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.deleteEmployee=function(){var e=M(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/delete-employee.php",{params:{id:"".concat(t)}}).then(function(e){console.log(e)});case 2:n.getEmployeeData();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.getEmployeeData=M(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/api/list-employees-from-db.php");case 3:t=e.sent,n.getTotalNumberOfEmployees(),n.setState({employees:t.data.employee_list,offset:5,nextClicked:!1,backButton:"disabled",nextButton:"enabled",low:1,high:null}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n.setState({error:"Error retrieving data"});case 11:case"end":return e.stop()}},e,this,[[0,8]])})),n.getLast=M(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.state.high%5==0)return t=n.state.high,e.next=4,s.a.get("/api/list-next-ten.php",{params:{offset:t-5}}).then(function(e){n.setState({employees:e.data.employee_list,offset:t,low:parseInt(n.state.high)-4,backButton:"enabled",nextButton:"disabled"})});e.next=6;break;case 4:e.next=9;break;case 6:return a=parseInt(n.state.high)-n.state.high%5,e.next=9,s.a.get("/api/list-next-ten.php",{params:{offset:a}}).then(function(e){n.setState({employees:e.data.employee_list,offset:parseInt(n.state.high)-n.state.high%5+5,low:parseInt(n.state.high)+1-4,backButton:"enabled",nextButton:"disabled"})});case 9:case"end":return e.stop()}},e,this)})),n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,a.Component),n=t,(o=[{key:"checkIfButtonEnabled",value:function(){5<=this.state.offset&&!1===this.state.nextClicked&&this.setState({backButton:"enabled"}),this.state.offset<=5&&!0===this.state.nextClicked&&this.setState({offset:5,backButton:"disabled"}),this.state.low+5>=this.state.high&&this.setState({nextButton:"disabled",low:parseInt(this.state.high)+1-this.state.high%5}),this.state.low+4>=this.state.high&&this.state.high%5==0&&this.setState({low:this.state.low-=5,pffset:this.state.offset})}},{key:"componentDidMount",value:function(){this.getEmployeeData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"rotate-prompt center"},r.a.createElement("div",null,r.a.createElement("div",{className:"rotate-text"},"This application works best in landscape! Thank you for rotating your phone"),r.a.createElement("p",null),r.a.createElement("img",{src:"/rotate.png",className:"rotate-image"}))),r.a.createElement("h1",{className:"center header-title"},"Employee Manager"),r.a.createElement("h5",{className:"red-text text-darken-2"},this.state.error),r.a.createElement("div",{className:"row table-container"},r.a.createElement(d,(e={getLast:this.getLast,getAll:this.getEmployeeData,low:this.state.low,high:this.state.high,buttonState:this.state.backButton,nextButtonState:this.state.nextButton,list:this.state.employees,delete:this.deleteEmployee,get:this.getEmployee,next:this.listNextTen,previous:this.listPreviousTen},t="getAll",n=this.getEmployeeData,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)),r.a.createElement(x,{col:"s12 m3",add:this.addEmployee,error:this.state.errorText}),r.a.createElement(R,{employee:this.state.employeeToEdit,edit:this.editEmployee})));var e,t,n}}])&&z(n.prototype,o),t}();i.a.render(r.a.createElement(U,null),document.getElementById("root"))},59:function(e,t,n){var a=n(302);"string"==typeof a&&(a=[[e.i,a,""]]);n(87)(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)}});