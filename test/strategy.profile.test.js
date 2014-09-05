/* global describe, it, expect, before */
/* jshint expr: true */

var FacebookStrategy = require('../').weibo;


describe('Strategy#userProfile', function() {
    
  var strategy = new FacebookStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    },
    function() {});
  
  // mock
  strategy._oauth2.get = function(url, accessToken, callback) {
    if (url != 'https://api.weibo.com/2/users/show.json') { return callback(new Error('incorrect url argument')); }
    if (accessToken != 'token') { return callback(new Error('incorrect token argument')); }
    
    var body = '{"id":"500308595","screen_name":"jaredhanson","name":"Jared Hanson","link":"http:\\/\\/www.facebook.com\\/jaredhanson","username":"jaredhanson","gender":"male","email":"jaredhanson\\u0040example.com"}';
    callback(null, body, undefined);
  };
    
  describe('loading profile', function() {
    var profile;
    
    before(function(done) {
      strategy.userProfile('token', function(err, p) {
        if (err) { return done(err); }
        profile = p;
        done();
      });
    });
    
    it('should parse profile', function() {
      expect(profile.provider).to.equal('weibo');
      
      expect(profile.id).to.equal('500308595');
      expect(profile.username).to.equal('Jared Hanson');
      expect(profile.fullname).to.equal('jaredhanson');
      expect(profile.gender).to.equal('male');
      expect(profile.photos).to.be.undefined;
    });
    
    it('should set raw property', function() {
      expect(profile._raw).to.be.a('string');
    });
    
    it('should set json property', function() {
      expect(profile._json).to.be.an('object');
    });
  });
  
  describe('encountering an error', function() {
    var err, profile;
    
    before(function(done) {
      strategy.userProfile('wrong-token', function(e, p) {
        err = e;
        profile = p;
        done();
      });
    });
    
    it('should error', function() {
      expect(err).to.be.an.instanceOf(Error);
      expect(err.constructor.name).to.equal('InternalOAuthError');
      expect(err.message).to.equal('Failed to fetch user profile');
    });
    
    it('should not load profile', function() {
      expect(profile).to.be.undefined;
    });
  });
  
});
