'use strict';

var should = require('chai').should();
var sexcore = require('../');

describe('#versionGuard', function() {
  it('global._sexcore should be defined', function() {
    should.equal(global._sexcore, sexcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      sexcore.versionGuard('version');
    }).should.throw('More than one instance of sexcore');
  });
});
