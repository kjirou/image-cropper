var assert = require('assert');
var rewire = require('rewire');

var imageDivider = require('../index');
var crop = imageDivider.crop;
var divide = imageDivider.divide;


describe('image-divider', function(){
  var rewiredModule = rewire('../index.js');
  var _generateConversionArea = rewiredModule.__get__('_generateConversionArea');

  it('should be defined', function(){
    assert.strictEqual(typeof imageDivider, 'object');
  });

  it('_generateConversionArea', function(){
    assert.strictEqual(_generateConversionArea([1, 2], [3, 4]), '3x4+1+2');
  });
});
