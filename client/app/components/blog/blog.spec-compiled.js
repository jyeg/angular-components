'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _blog = require('./blog');

var _blogDirective = require('./blog.directive');

var _blogHtml = require('./blog.html');

var _blogHtml2 = _interopRequireDefault(_blogHtml);

var _blogController = require('./blog.controller');

describe('Blog', function () {
  var $rootScope = undefined;
  var makeController = undefined;

  beforeEach(window.module(_blog.blog.name));
  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_;
    makeController = function (injectables) {
      return new _blogController.BlogController(injectables);
    };
  }));

  describe('module', function () {
    it('should have an appropriate name', function () {
      expect(_blog.blog.name).to.equal('blog');
    });
  });

  describe('directive', function () {
    var ddo = undefined;
    beforeEach(function () {
      ddo = (0, _blogDirective.blogDirective)();
    });

    it('should have the right template', function () {
      expect(ddo.template).to.equal(_blogHtml2['default']);
    });

    it('should have the right controller', function () {
      expect(ddo.controller).to.equal(_blogController.BlogController);
    });

    it('should have an isolate scope', function () {
      expect(ddo.scope).to.be.an('object');
    });

    it('should use controllerAs', function () {
      expect(ddo.controllerAs).to.be.a('string');
    });
  });

  describe('controller', function () {
    it('should have blog posts', function () {
      var controller = makeController();
      expect(controller.posts).to.be.an('array');
      expect(controller.posts[0]).to.have.property('author');
      expect(controller.posts[0]).to.have.property('title');
    });
  });

  describe('template', function () {
    it('should have vm', function () {
      expect(_blogHtml2['default']).to.match(/{{\s?vm\.message\s?}}/g);
    });
  });
});

//# sourceMappingURL=blog.spec-compiled.js.map