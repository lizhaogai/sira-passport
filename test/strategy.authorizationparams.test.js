/* global describe, it, expect, before */
/* jshint expr: true */

var chai = require('chai')
    , WeiboStrategy = require('../').weibo;


describe('Strategy', function () {

    var strategy = new WeiboStrategy({
            clientID: 'ABC123',
            clientSecret: 'secret'
        },
        function () {
        });

    describe('handling a request to be redirected with display param', function () {
        var url;

        before(function (done) {
            chai.passport.use(strategy)
                .redirect(function (u) {
                    url = u;
                    done();
                })
                .req(function (req) {
                })
                .authenticate({ display: 'mobile' });
        });

        it('should be redirected', function () {
            expect(url).to.equal('https://api.weibo.com/oauth2/authorize?display=mobile&response_type=code&redirect_uri=&client_id=ABC123');
        });
    });

    describe('handling a request to be redirected with reauthorization params', function () {
        var url;

        before(function (done) {
            chai.passport.use(strategy)
                .redirect(function (u) {
                    url = u;
                    done();
                })
                .req(function (req) {
                })
                .authenticate({ authType: 'reauthenticate', authNonce: 'foo123' });
        });

        it('should be redirected', function () {
            expect(url).to.equal('https://api.weibo.com/oauth2/authorize?auth_type=reauthenticate&auth_nonce=foo123&response_type=code&redirect_uri=&client_id=ABC123');
        });
    });

});
