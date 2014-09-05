/**
 * `WeiboAuthorizationError` error.
 *
 * WeiboAuthorizationError represents an error in response to an
 * authorization request on Weio.  Note that these responses don't conform
 * to the OAuth 2.0 specification.
 *
 * References:
 *   - http://open.weibo.com/
 *
 * @constructor
 * @param {String} [message]
 * @param {Number} [code]
 * @api public
 */
function WeiboAuthorizationError(message, code) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'WeiboAuthorizationError';
  this.message = message;
  this.code = code;
  this.status = 500;
}

/**
 * Inherit from `Error`.
 */
WeiboAuthorizationError.prototype.__proto__ = Error.prototype;


/**
 * Expose `WeiboAuthorizationError`.
 */
module.exports = WeiboAuthorizationError;
