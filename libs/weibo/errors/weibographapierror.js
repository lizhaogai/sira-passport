/**
 * `WeiboGraphAPIError` error.
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
function WeiboGraphAPIError(message, type, code, subcode) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'WeiboGraphAPIError';
  this.message = message;
  this.type = type;
  this.code = code;
  this.subcode = subcode;
  this.status = 500;
}

/**
 * Inherit from `Error`.
 */
WeiboGraphAPIError.prototype.__proto__ = Error.prototype;


/**
 * Expose `WeiboGraphAPIError`.
 */
module.exports = WeiboGraphAPIError;
