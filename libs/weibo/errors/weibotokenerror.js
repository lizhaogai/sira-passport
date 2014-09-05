/**
 * `WeiboTokenError` error.
 *
 * WeiboTokenError represents an error received from a Facebook's token
 * endpoint.  Note that these responses don't conform to the OAuth 2.0
 * specification.
 *
 * References:
 *   - http://open.weibo.com/
 *
 * @constructor
 * @param {String} [message]
 * @param {String} [type]
 * @param {Number} [code]
 * @param {Number} [subcode]
 * @api public
 */
function WeiboTokenError(message, type, code, subcode) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'WeiboTokenError';
  this.message = message;
  this.type = type;
  this.code = code;
  this.subcode = subcode;
  this.status = 500;
}

/**
 * Inherit from `Error`.
 */
WeiboTokenError.prototype.__proto__ = Error.prototype;


/**
 * Expose `WeiboTokenError`.
 */
module.exports = WeiboTokenError;
