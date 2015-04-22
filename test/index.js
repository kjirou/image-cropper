var assert = require('assert');
var async = require('async');
var fs = require('fs');
var mkdirp = require('mkdirp');
var pathModule = require('path');
var rewire = require('rewire');
var rimraf = require('rimraf');

var imageDivider = require('../index');
var crop = imageDivider.crop;
var divide = imageDivider.divide;


var SAMPLE_IMAGE_PATH = pathModule.join(__dirname, '/support/denzi/Denzi140330-12.png');
var SIGNBOARD_IMAGE_DATA = fs.readFileSync(pathModule.join(__dirname, '/support/denzi/signboard.png')).toString('base64');
console.log(fs.readFileSync(pathModule.join(__dirname, '/support/denzi/signboard.png')).length);
console.log(fs.readFileSync(pathModule.join(__dirname, '/support/denzi/signboard.png')).length);
console.log(fs.readFileSync(pathModule.join(__dirname, '/support/denzi/signboard.png')).length);

var TMP_ROOT = pathModule.join(__dirname, '/tmp');
function resetTmpDir(callback) {
  async.series([
    function(next) {
      rimraf(TMP_ROOT, next);
    },
    function(next) {
      mkdirp(TMP_ROOT, { mode: 0777 }, next);
    }
  ], callback);
}


describe('image-divider', function(){

  var rewiredModule = rewire('../index.js');
  var _generateConversionArea = rewiredModule.__get__('_generateConversionArea');

  it('should be defined', function(){
    assert.strictEqual(typeof imageDivider, 'object');
  });

  it('_generateConversionArea', function(){
    assert.strictEqual(_generateConversionArea([1, 2], [3, 4]), '3x4+2+1');
  });


  context('crop', function(){

    beforeEach(function(done) {
      resetTmpDir(done);
    });

    it('should be', function(done){
      async.series([
        function(next) {
          crop(SAMPLE_IMAGE_PATH, [15 * 16, 16], [16, 16], pathModule.join(TMP_ROOT, 'signboard.png'), next);
        },
        function(next) {
          var createdImageData = fs.readFileSync(pathModule.join(TMP_ROOT, 'signboard.png')).toString('base64');
          console.log(fs.readFileSync(pathModule.join(TMP_ROOT, 'signboard.png')).length);
          console.log(fs.readFileSync(pathModule.join(TMP_ROOT, 'signboard.png')).length);
          console.log(fs.readFileSync(pathModule.join(TMP_ROOT, 'signboard.png')).length);
          assert.strictEqual(createdImageData, SIGNBOARD_IMAGE_DATA);
          next()
        }
      ], done);
    });
  });
});
