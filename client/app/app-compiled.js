// we don't need to use a variable
// or the from keyword when importing a css/styl file
// thanks the the styles loader it gets added as a
// <style> tag in the head by default but can be changed
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('normalize.css');

var _appDirective = require('./app.directive');

// the angular libs are just common js
// and therefore we can assume they were
// exported using the default keyword in ES2015
// so we can import each module
// with any name we see fit.
// Note that the actual value are just strings except angular itself
// because that's how angular decided to export
// their auxillary modules

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = require('angular-ui-router');

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _angularAnimate = require('angular-animate');

var _angularAnimate2 = _interopRequireDefault(_angularAnimate);

// because we exported a named variable
// without using default keyword
// we must import it with the brackets

var _componentsHomeHome = require('./components/home/home');

var _componentsBlogBlog = require('./components/blog/blog');

_angular2['default'].module('app', [_angularUiRouter2['default'], _angularAnimate2['default'],
// home is the module, the angular module
// because that's what we exported in home.js
// all angular modules have a name
// property who's value is the name you set the
// module to be
_componentsHomeHome.home.name, _componentsBlogBlog.blog.name]).directive('app', _appDirective.appDirective);

//# sourceMappingURL=app-compiled.js.map