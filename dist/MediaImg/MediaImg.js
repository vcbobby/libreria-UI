"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _templateObject,_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_taggedTemplateLiteral2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral")),_react=require("react"),_propTypes=_interopRequireDefault(require("prop-types")),_css=require("@emotion/css"),_jsxRuntime=require("react/jsx-runtime"),_excluded=["className","width","height","src","alt","borderRadius"];function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var MediaImgStyles=function(a,b,c){return(0,_css.css)(_templateObject||(_templateObject=(0,_taggedTemplateLiteral2["default"])(["\n    width: ",";\n    height: ",";\n    border-radius: ",";\n"])),a||"100px",b||"100px",c||"8px")},MediaImg=/*#__PURE__*/(0,_react.forwardRef)(function(a,b){var c=a.className,d=a.width,e=a.height,f=a.src,g=a.alt,h=a.borderRadius,i=(0,_objectWithoutProperties2["default"])(a,_excluded);return/*#__PURE__*/(0,_jsxRuntime.jsx)("img",_objectSpread(_objectSpread({ref:b,src:f,alt:g},i),{},{className:(0,_css.cx)(MediaImgStyles(d,e,h),c)}))});MediaImg.propTypes={className:_propTypes["default"].string,width:_propTypes["default"].string,height:_propTypes["default"].string,src:_propTypes["default"].string.isRequired,alt:_propTypes["default"].string.isRequired,borderRadius:_propTypes["default"].string};var _default=MediaImg;exports["default"]=_default;