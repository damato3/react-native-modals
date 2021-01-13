Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/DialogTitle.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _Constants=require('../constants/Constants');var _type=require('../type');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({title:{padding:24,borderTopLeftRadius:8,borderTopRightRadius:8},titleBar:{padding:14,borderBottomWidth:0.5,backgroundColor:'#F9F9FB',borderColor:'#DAD9DC'},titleText:{color:'#7F7D89',fontSize:16}});function DialogTitle(_ref){var title=_ref.title,titleStyle=_ref.titleStyle,titleTextStyle=_ref.titleTextStyle,hasTitleBar=_ref.hasTitleBar,titleAlign=_ref.titleAlign;var titleBar=hasTitleBar?styles.titleBar:null;var titleItemsAlign={alignItems:_Constants.Positions[titleAlign]};return _react2.default.createElement(_reactNative.View,{style:[styles.title,titleItemsAlign,titleBar,titleStyle],__source:{fileName:_jsxFileName,lineNumber:38}},_react2.default.createElement(_reactNative.Text,{style:[styles.titleText,titleTextStyle],__source:{fileName:_jsxFileName,lineNumber:39}},title));}DialogTitle.propTypes=_type.bpfrpt_proptype_DialogTitleType===_propTypes2.default.any?{}:_type.bpfrpt_proptype_DialogTitleType;DialogTitle.defaultProps={titleAlign:'center',hasTitleBar:true};exports.default=DialogTitle;